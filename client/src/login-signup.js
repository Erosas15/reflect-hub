import React, { useState } from "react";
import "./login-signup.css";

const LoginSignup = () => {
  const [action, setAction] = useState("Login");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleFormSwitch = () => {
    setAction((prevAction) => (prevAction === "Login" ? "Sign Up" : "Login"));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = async () => {
    // Placeholder for future Firebase integration
    if (action === "Login") {
      // Handle sign in logic
    } else if (action === "Signup") {
      try {
        // Extract values from formData
        const { name, email, password } = formData;

        const response = await fetch("http://localhost:8000/auth/api/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            password,
          }),
        });

        const result = await response.json();

        if (result.success) {
          // Signup successful, you can redirect or perform other actions
          console.log("Signup successful:", result.user);
        } else {
          // Signup failed, handle the error
          console.error("Signup failed:", result.error);
        }
      } catch (error) {
        // Handle network or other errors
        console.error("Error during signup:", error.message);
      }
    }
  };

  return (
    <div className="container">
      <div className="login_header">
        <div className="signin_text">{action}</div>
      </div>

      <div className="inputs_container">
        <div className="input_box">
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          ></input>
        </div>
        <div className="input_box">
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          ></input>
        </div>
        <div className="input_box">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          ></input>
        </div>
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
  );
};

export default LoginSignup;
