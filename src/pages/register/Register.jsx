import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./register.scss";

const Register = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
    name: "",
  });
  const [err, setErr] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8800/api/auth/register", inputs);
      // Display success message
      setSuccessMessage("Account created!");
      // Wait for 2 seconds and then navigate to the login page
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (err) {
      setErr(err.response.data);
    }
  };

  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>PakBaat</h1>
          <p>Your dreams, your life!</p>
          <span>Do you have an account?</span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
            <input
              type="text"
              placeholder="Username"
              name="username"
              onChange={handleChange}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Name"
              name="name"
              onChange={handleChange}
            />
            {err && <div>{err}</div>}
            {successMessage && <div>{successMessage}</div>}
            <button onClick={handleClick}>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
