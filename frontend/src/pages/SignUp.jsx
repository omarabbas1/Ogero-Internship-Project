import React, { useState } from "react";
import { useUser } from "../contexts/UserContext";
import { handleSignUpSubmit } from "../utils/signUpUtils";
import { handleFormChange } from "../utils/formUtils";
import Button from "../components/Button";
import "../styles/SignUp.css";

const SignUp = () => {
  const { setUser } = useUser();
  const [signUpInfo, setSignUpInfo] = useState({
    username: "",
    email: "",
    password: "",
  });

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form
        onSubmit={(e) => handleSignUpSubmit(e, signUpInfo, setUser)}
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
        <Button text="Sign Up" className="signup" type="submit" />
      </form>
    </div>
  );
};

export default SignUp;
