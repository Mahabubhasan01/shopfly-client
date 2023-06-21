import React from "react";
import "./login.css";
const Login = () => {
  return (
    <div className="body">
      <div class="contact-wrapper">
        <header class="login-cta">
          <h2>Account Login</h2>
        </header>
        <form>
          <div class="form-row">
            <input type="text" required />
            <span>Username or Email</span>
          </div>
          <div class="form-row">
            <input type="password" required />
            <span>Password</span>
          </div>
          <div class="form-row"></div>
          <div class="form-row">
            <button type="submit">Login to your Account!</button>
          </div>
        </form>
        <div class="socials-wrapper">
          <header>
            <h2>Login with your Social Account</h2>{" "}
          </header>
          <ul>
            <li>
              <a href="#" class="facebook">
                <i class="fab fa-facebook-square"></i>
              </a>
            </li>
            <li>
              <a href="#" class="twitter">
                <i class="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#" class="twitch">
                <i class="fab fa-twitch"></i>
              </a>
            </li>
            <li>
              <a href="#" class="youtube">
                <i class="fab fa-youtube"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Login;
