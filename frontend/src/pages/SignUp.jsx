import React, { useState } from "react";
import { handleSignUpChange, handleSignUpSubmit } from "../utils/signUpUtils";
import "../styles/SignUp.css";
import Button from "../components/Button";

const SignUp = ({ setAuthToken }) => {
  const [signUpInfo, setSignUpInfo] = useState({
    username: "",
    email: "",
    password: "",
  });

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form
        onSubmit={(e) => handleSignUpSubmit(e, signUpInfo, setAuthToken)}
        className="signup-form"
      >
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={signUpInfo.username}
            onChange={handleSignUpChange(setSignUpInfo)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={signUpInfo.email}
            onChange={handleSignUpChange(setSignUpInfo)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={signUpInfo.password}
            onChange={handleSignUpChange(setSignUpInfo)}
            required
          />
        </div>
        <Button text="Sign Up" className={"signup"} type="submit" />
      </form>
    </div>
  );
};

export default SignUp;
