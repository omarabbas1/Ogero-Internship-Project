import React, { createContext, useContext, useState } from "react";
import Navigation from "../utils/navigation";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const userData = localStorage.getItem("user");
    return userData ? JSON.parse(userData) : null;
  });

  const { navigateToHome } = Navigation();

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    navigateToHome();
  };

  const contextValue = { user, setUser, logout };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
