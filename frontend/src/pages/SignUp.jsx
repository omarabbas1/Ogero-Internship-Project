import React, { useState, useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { handleSignUp } from "../utils/signUpUtils";
import { handleFormChange } from "../utils/formUtils";
import "../styles/SignUp.css";
import Button from "../components/Button";

const SignUp = ({ setAuthToken }) => {
  const { setUser } = useContext(UserContext);
  const [signUpInfo, setSignUpInfo] = useState({
    username: "",
    email: "",
    password: "",
  });

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form
        onSubmit={(e) => handleSignUp(signUpInfo, setAuthToken, setUser)}
        className="signup-form"
      >
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={signUpInfo.username}
            onChange={handleFormChange(setSignUpInfo)}
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
            onChange={handleFormChange(setSignUpInfo)}
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
            onChange={handleFormChange(setSignUpInfo)}
            required
          />
        </div>
        <Button text="Sign Up" className={"signup"} type="submit" />
      </form>
    </div>
  );
};

export default SignUp;
