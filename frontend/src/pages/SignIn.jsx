import React, { useState } from "react";
import { handleSignInSubmit } from "../utils/signInUtils";
import { handleFormChange } from "../utils/formUtils";
import "../styles/SignIn.css";
import Button from "../components/Button";

const SignIn = ({ setAuthToken }) => {
  const [signInInfo, setSignInInfo] = useState({
    username: "",
    email: "",
    password: "",
  });

  return (
    <div className="signin-container">
      <h2>Sign In</h2>
      <form
        onSubmit={(e) => handleSignInSubmit(e, signInInfo, setAuthToken)}
        className="signin-form"
      >
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={signInInfo.email}
            onChange={handleFormChange(setSignInInfo)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={signInInfo.password}
            onChange={handleFormChange(setSignInInfo)}
            required
          />
        </div>
        <Button text="Sign In" className={"signin"} type="submit" />
      </form>
    </div>
  );
};

export default SignIn;
