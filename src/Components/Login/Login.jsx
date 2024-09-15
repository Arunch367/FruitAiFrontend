import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import lockIcon from "../../assets/lock.png";
import mail from "../../assets/mail.png";
import pass from "../../assets/Group 2.png";
import insta from "../../assets/Instagram 1.png";
import fb from "../../assets/Group.png";
import ln from "../../assets/Group (2).png";
import pt from "../../assets/Group (1).png";
import fingerPrint from "../../assets/Frame 450.png";

const Login = ({ setIsAuthenticated }) => {
  const [isLogin, setIsLogin] = useState(true); // Toggle between Login and Register
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const dummyUser = {
    email: "user@fruitai.com",
    password: "123456",
  };

  const navigate = useNavigate();

  // Utility function to set login data with expiration (30 days)
  const setLoginData = (userData) => {
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 30); // 30 days from now
    const loginData = {
      ...userData,
      expiration: expirationDate.getTime(),
    };
    localStorage.setItem("loginData", JSON.stringify(loginData));
  };

  // Utility function to check if the login data is still valid
  const checkLoginStatus = () => {
    const loginData = localStorage.getItem("loginData");
    if (loginData) {
      const parsedData = JSON.parse(loginData);
      if (new Date().getTime() < parsedData.expiration) {
        // Token is still valid
        setIsAuthenticated(true);
        navigate("/home");
      } else {
        // Token expired, clear login data
        localStorage.removeItem("loginData");
      }
    }
  };

  useEffect(() => {
    checkLoginStatus(); // Check if user is already logged in on page load
  }, []);

  const toggleForm = () => {
    setIsLogin(!isLogin); // Toggle between login and register
    setError(""); // Reset error message when toggling
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      // Handle Login
      if (email === dummyUser.email && password === dummyUser.password) {
        const userData = { email }; // Add more user data if necessary
        setLoginData(userData); // Store login data in localStorage
        setIsAuthenticated(true); // Set user as authenticated
        navigate("/home"); // Redirect to homepage on successful login
      } else {
        setError("Invalid email or password");
      }
    } else {
      // Handle Register
      if (name && email && password) {
        setError(""); // Clear error if all fields are filled
        alert("Registration successful!");
        setIsLogin(true); // Switch to login after successful registration
      } else {
        setError("Please fill out all fields");
      }
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>{isLogin ? "Login" : "Register"}</h2>
        <p>
          By {isLogin ? "signing in" : "registering"} you are agreeing to our{" "}
          <a href="/terms" className="span">
            Term and privacy policy
          </a>
        </p>

        <div className="tab-selector">
          <button
            type="button"
            className={isLogin ? "active-tab" : ""}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            type="button"
            className={!isLogin ? "active-tab" : ""}
            onClick={toggleForm}
          >
            Register
          </button>
        </div>

        {!isLogin && (
          <div className="input-field">
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
        )}

        <div className="input-field">
          <span className="left-abs">
            <img src={mail} alt="" />
          </span>
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="input-field">
          <span className="left-abs">
            <img src={lockIcon} alt="" />
          </span>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <span
            className="show-password"
            onClick={() => setShowPassword(!showPassword)}
            style={{ cursor: "pointer" }}
          >
            {!showPassword ? <img src={pass} /> : "🙈"}
          </span>
        </div>

        {isLogin && (
          <div className="options">
            <label>
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              Remember password
            </label>
            <a href="/forgot-password" className="forgot-password">
              Forgot password
            </a>
          </div>
        )}

        <button type="submit" className="auth-button">
          {isLogin ? "Login" : "Sign Up"}
        </button>

        {error && <p className="error-message">{error}</p>}

        <div className="social-login">
          <p>or connect with</p>
          <div className="social-icons">
            <a href="#">
              <img src={fb} alt="Facebook" />
            </a>
            <a href="#">
              <img src={insta} alt="Instagram" />
            </a>
            <a href="#">
              <img src={pt} alt="Pinterest" />
            </a>
            <a href="#">
              <img src={ln} alt="LinkedIn" />
            </a>
          </div>
        </div>

        <div className="fingerprint-login">
          <a href="#">
            <img src={fingerPrint} alt="Fingerprint" />
          </a>
        </div>
      </form>
    </div>
  );
};

export default Login;
