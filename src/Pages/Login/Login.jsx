import React, { useState, useContext } from "react";
import { axiosInstance } from "../../axios";
import { useNavigate } from "react-router-dom";
import { BiErrorCircle } from "react-icons/bi";
import AuthContext from "./AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const initialFormData = Object.freeze({
    contact_number: "",
    password: "",
  });
  const initialErrorData = Object.freeze({
    contact_number: null,
    first_name: null,
    last_name: null,
    password: null,
  });
  const [formData, updateFormData] = useState(initialFormData);
  const [errorData, setErrorData] = useState(initialErrorData);
  const { loggedInUser, setAccessToken } = useContext(AuthContext);

  const handleChange = (event) => {
    updateFormData({
      ...formData,
      [event.target.name]: event.target.value.trim(),
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axiosInstance
      .post(`token/`, {
        contact_number: formData.contact_number,
        password: formData.password,
      })
      .then((response) => {
        localStorage.setItem("access_token", response.data.access);
        localStorage.setItem("refresh_token", response.data.refresh);
        axiosInstance.defaults.headers["Authorization"] =
          "JWT " + localStorage.getItem("access_token");
        setAccessToken(response.data.access);
        navigate("/");
      })
      .catch((error) => {
        if (error.response) {
          setErrorData({ ...error.response.data });
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log("Error: ", error.message);
        }
      });
  };

  return (
    <>
      {loggedInUser ? (
        <>{navigate("/")}</>
      ) : (
        <>
          <div className="form-box">
            <div className="register">Sign In</div>
            <form>
              <div className="fields">
                <div>
                  <label>Contact Number</label>
                  <input
                    placeholder="Contact Number"
                    name="contact_number"
                    onChange={handleChange}
                  />
                  {errorData.contact_number ? (
                    <>
                      {errorData.contact_number.map((error, index) => {
                        return (
                          <span className="error" key={index}>
                            <BiErrorCircle /> {error}
                          </span>
                        );
                      })}
                    </>
                  ) : null}
                </div>
                <div>
                  <label>Password</label>
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    onChange={handleChange}
                  />
                  {errorData.password ? (
                    <>
                      {errorData.password.map((error, index) => {
                        return (
                          <span className="error" key={index}>
                            <BiErrorCircle /> {error}
                          </span>
                        );
                      })}
                    </>
                  ) : null}
                </div>
              </div>
              <button
                type="submit"
                className="submitBtn"
                onClick={handleSubmit}
              >
                Sign In
              </button>
            </form>
          </div>
        </>
      )}
    </>
  );
};

export default Login;
