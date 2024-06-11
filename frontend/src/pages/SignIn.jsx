import React, { useState } from "react";
import { useUser } from "../contexts/UserContext";
import { handleSignInSubmit } from "../utils/signInUtils";
import { handleFormChange } from "../utils/formUtils";
import Button from "../components/Button";
import "../styles/SignIn.css";

const SignIn = () => {
  const { setUser } = useUser();
  const [signInInfo, setSignInInfo] = useState({
    email: "",
    password: "",
  });

  return (
    <div className="signin-wrapper">
      <div className="signin-container">
        <h2>Sign In</h2>
        <form
          onSubmit={(e) => handleSignInSubmit(e, signInInfo, setUser)}
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
          <Button text="Sign In" className="signin" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default SignIn;
