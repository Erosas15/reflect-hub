import React, { useState } from "react";
import axios from "axios";
import "./login-signup.css";
import Footer from "../Footer/footer";

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");

  const handleFormSwitch = () => {
    setIsLogin(!isLogin);
    setEmail("");
    setPassword("");
    setName("");
    setConfPassword("");
  };

  const handleFormSubmit = async () => {
    try {
      if (!isLogin && password !== confPassword) {
        alert("Passwords do not match");
        return; // Do not proceed with form submission
      }
      const config = {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      };

      if (isLogin) {
        const response = await axios.post(
          "http://localhost:3001/auth/api/signin",
          { email, password },
          config
        );

        if (response.data.success) {
          const { userId } = response.data;

          setIsLogin(true);

          // Save user.uid separately for future usage
          localStorage.setItem("userID", userId);
          window.location.href = "/";
        } else {
          // Handle unsuccessful login
          console.error(response.data.error);
        }
      } else {
        const response = await axios.post(
          "http://localhost:3001/auth/api/signup",
          { name, email, password },
          config
        );

        if (response.data.success) {
          window.location.href = "/";
          alert(
            "Account Created Successfully!\n\nPlease sign in with your new credentials to access your account."
          );
        } else {
          // Handle unsuccessful signup
          console.error(response.data.error);
          alert("An error occurred during sign-up. Please try again.");
        }
      }
    } catch (error) {
      console.error("error during submission", error.message);
      
      if (error.response && error.response.data) {
        if (error.response.data.error === "Incorrect email or password") {
          alert("Incorrect email or password. Please try again.");
        } else if (error.response.data.error === "Not a valid email") {
          alert("Invalid email entered. Please try again.");
        } else if (error.response.data.error === "Too many sign-in attempts") {
          alert("You have entered incorrect credentials too many times. Please try again later.")
        }  else {
          alert("An error occurred during login. Please try again.");
        }
      } else {
        alert("An error occurred during login. Please try again.");
      }
    }
  };

  return (
    <div className="page">
      {isLogin ? (
        <div className="container">
          <div className="login_header">
            <div className="signin_text">Login</div>
          </div>

          <div className="inputs_container">
            <div className="input_box">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input_box">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="formSwitch">
            <>
              Not signed up? <span onClick={handleFormSwitch}>Sign Up</span>
            </>
          </div>

          <div className="submitContainer">
            <div className="submit gray" onClick={handleFormSubmit}>
              Login
            </div>
          </div>
        </div>
      ) : (
        <div className="container">
          <div className="signup_header">
            <div className="signup_text">Sign up</div>
          </div>

          <div className="inputs_container">
            <div className="input_box">
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="input_box">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input_box">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="input_box">
              <input
                type="password"
                placeholder="Confirm Password"
                value={confPassword}
                onChange={(e) => setConfPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="formSwitch">
            <>
              Already a member? <span onClick={handleFormSwitch}>Login</span>
            </>
          </div>

          <div className="submitContainer">
            <div className="submit gray" onClick={handleFormSubmit}>
              Sign Up
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default LoginSignup;
