import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "./AuthContext";

const LogOut = () => {
  const navigate = useNavigate();
  const { setLoggedInUser } = useContext(AuthContext);

  useEffect(() => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    setLoggedInUser(null);
    navigate("/login");
  });

  return <div>LogOut</div>;
};

export default LogOut;
