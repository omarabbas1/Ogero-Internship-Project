import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import UserProfile from "./pages/UserProfile";
import ChangePassword from "./pages/ChangePassword";

const AppRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/signup" element={<SignUp />}></Route>
      <Route exact path="/signin" element={<SignIn />}></Route>
      <Route exact path="/user/profile" element={<UserProfile />}></Route>
      <Route
        exact
        path="/user/profile/change-password"
        element={<ChangePassword />}
      ></Route>
    </Routes>
  );
};

export default AppRoutes;
