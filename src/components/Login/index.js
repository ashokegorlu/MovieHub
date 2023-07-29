import React, { useState } from "react";
import "./index.css";

const Login = () => {
  const [loginData, setLoginData] = useState({ name: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedUserData = JSON.parse(localStorage.getItem("userData"));

    if (
      storedUserData &&
      loginData.name === storedUserData.name &&
      loginData.password === storedUserData.password
    ) {
      window.location.href = "/";
    } else {
      window.location.href = "/signup";
      alert("Invalid Credentials");
    }
  };

  return (
    <div className="main-container">
      <div className="login-container p-3">
        <h2 className="text-center">User Login</h2>
        <form onSubmit={handleSubmit} className="d-flex flex-column">
          <div className="form-group">
            <label htmlFor="loginName">Name:</label>
            <input
              type="text"
              id="loginName"
              name="name"
              value={loginData.name}
              onChange={handleChange}
              required
              className="form-control"
            />
          </div>
          <br />

          <div className="form-group">
            <label htmlFor="loginPassword">Password:</label>
            <input
              type="password"
              id="loginPassword"
              name="password"
              value={loginData.password}
              onChange={handleChange}
              required
              className="form-control"
            />
          </div>
          <br />

          <div className="text-center">
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
