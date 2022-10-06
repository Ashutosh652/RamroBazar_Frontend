import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Nav,
  NavLink,
  NavMenu,
  SearchBar,
  NavBtn,
  NavBtnLink,
} from "./NavBarElements";
import AuthContext from "../../Pages/Login/AuthContext";
import jwt_decode from "jwt-decode";
import { AiOutlineSearch } from "react-icons/ai";

const NavBar = () => {
  const [query, setQuery] = useState(null);
  const { loggedInUser, setLoggedInUser, accessToken } =
    useContext(AuthContext);
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/search/${query}`);
  };

  useEffect(() => {
    if (accessToken) {
      setLoggedInUser(jwt_decode(accessToken));
    } else {
      setLoggedInUser(null);
    }
  }, [accessToken, setLoggedInUser]);

  return (
    <>
      <Nav>
        <NavLink to="/">
          <h1>RamroBazar</h1>
        </NavLink>
        <div>
          <SearchBar
            placeholder="Search"
            type="text"
            onKeyUp={(event) => {
              if (event.key === "Enter") {
                handleSearch();
              }
            }}
            onChange={(event) => {
              setQuery(event.target.value);
            }}
          />
          <AiOutlineSearch style={{ color: "white" }} onClick={handleSearch} />
        </div>
        <NavMenu>
          <NavLink to="#">About</NavLink>
          <NavLink to="#">Services</NavLink>
          <NavLink to="#">Contact Us</NavLink>
          {loggedInUser ? (
            <NavLink
              to={`user/${loggedInUser.user_id}`}
              style={{ color: "#256ce1" }}
            >
              {loggedInUser.first_name}
            </NavLink>
          ) : (
            <NavLink to="/register">Sign Up</NavLink>
          )}
        </NavMenu>
        <NavBtn>
          {loggedInUser ? (
            <NavBtnLink to="/logout">Sign Out</NavBtnLink>
          ) : (
            <NavBtnLink to="/login">Sign In</NavBtnLink>
          )}
        </NavBtn>
      </Nav>
    </>
  );
};

export default NavBar;
