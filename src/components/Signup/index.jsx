import React, { useState } from "react";
import "./index.css";

const Signup = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [profession, setProfession] = useState("developer");

  const formData = {
    name,
    password,
    email,
    profession,
    phone,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("userData", JSON.stringify(formData));
    window.location.href = "/login";
  };

  return (
    <div className="main-containerr p-3">
      <div className="registration-container p-3">
        <h2 className="registration">Registration</h2>
        <form onSubmit={handleSubmit} className="d-flex flex-column">
          <div className="form-group">
            <label className="label" htmlFor="name">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              className="form-control"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label className="label" htmlFor="password">
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email" className="label">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label className="label" htmlFor="phone">
              Phone number:
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="form-control"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label className="label" htmlFor="profession">
              Profession:
            </label>
            <select
              id="profession"
              name="profession"
              value={profession}
              className="form-control"
              onChange={(e) => setProfession(e.target.value)}
              required
            >
              <option value="developer">Developer</option>
              <option value="engineer">Engineer</option>
              <option value="teacher">Teacher</option>
              <option value="lawyer">Lawyer</option>
              <option value="artist">Artist</option>
              <option value="doctor">Docter</option>
            </select>
          </div>

          <div className="text-center">
            <button type="submit" className="btn btn-primary button">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
