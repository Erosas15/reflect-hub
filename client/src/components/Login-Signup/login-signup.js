import React, { useState } from "react";
import axios from "axios";
import "./login-signup.css";
import Footer from "../Footer/footer";

const LoginSignup = () => {
  const [action, setAction] = useState("Login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");

  const handleFormSwitch = () => {
    setAction((prevAction) => (prevAction === "Login" ? "Sign Up" : "Login"));
    setName("");
    setEmail("");
    setPassword("");
    setConfPassword("");
  };

  const handleFormSubmit = async () => {
    if (action === "Sign Up" && password !== confPassword) {
      alert("Passwords do not match");
      return; // Do not proceed with form submission
    }
    try {
      const config = {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      };

      if (action === "Login") {
        const response = await axios.post(
          "http://localhost:3001/auth/api/signin",
          { email, password },
          config
        );

        if (response.data.success) {
          const { userId } = response.data;

          // Save user.uid separately for future usage
          localStorage.setItem("userID", userId);
          window.location.href = "journal";
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
          const { userId } = response.data;

          // Save user ID separately for future usage
          localStorage.setItem("userID", userId);

          window.location.href = "/";
        } else {
          // Handle unsuccessful signup
          console.error(response.data.error);
        }
      }
    } catch (error) {
      console.error("error during submission", error.message);
    }
  };

  return (
    <div className="page">
      <div className="container">
        <div className="login_header">
          <div className="signin_text">{action}</div>
        </div>

        <div className="inputs_container">
          {action === "Sign Up" && (
            <div className="input_box">
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          )}

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

          {action === "Sign Up" && (
            <div className="input_box">
              <input
                type="password"
                placeholder="Confirm Password"
                value={confPassword}
                onChange={(e) => setConfPassword(e.target.value)}
              />
            </div>
          )}
        </div>

        <div className="formSwitch">
          {action === "Login" ? (
            <>
              Not signed up? <span onClick={handleFormSwitch}>Sign Up</span>
            </>
          ) : (
            <>
              Already a member? <span onClick={handleFormSwitch}>Login</span>
            </>
          )}
        </div>

        <div className="submitContainer">
          <div className="submit gray" onClick={handleFormSubmit}>
            {action === "Login" ? "Login" : "Sign Up"}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LoginSignup;
