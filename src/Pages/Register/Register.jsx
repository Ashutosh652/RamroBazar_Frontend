import React, { useState } from "react";
import { axiosInstance } from "../../axios";
import { useNavigate } from "react-router-dom";
import { BiErrorCircle } from "react-icons/bi";
import "./Register.css";

const Register = () => {
  const navigate = useNavigate();
  const initialFormData = Object.freeze({
    contact_number: "",
    first_name: "",
    last_name: "",
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

  const handleChange = (event) => {
    updateFormData({
      ...formData,
      //Trimming any whitespaces
      [event.target.name]: event.target.value.trim(),
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    axiosInstance
      .post(`user/register/`, {
        contact_number: formData.contact_number,
        first_name: formData.first_name,
        last_name: formData.last_name,
        password: formData.password,
      })
      .then((response) => {
        navigate("/login");
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
      <div className="form-box">
        <div className="register">Sign Up</div>
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
              <label>First Name</label>
              <input
                placeholder="First Name"
                name="first_name"
                onChange={handleChange}
              />
              {errorData.first_name ? (
                <>
                  {errorData.first_name.map((error, index) => {
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
              <label>Last Name</label>
              <input
                placeholder="Last Name"
                name="last_name"
                onChange={handleChange}
              />
              {errorData.last_name ? (
                <>
                  {errorData.last_name.map((error, index) => {
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
          <button type="submit" className="submitBtn" onClick={handleSubmit}>
            Sign Up
          </button>
        </form>
      </div>
    </>
  );
};

export default Register;
