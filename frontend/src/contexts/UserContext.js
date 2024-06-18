import React, { createContext, useContext, useState } from "react";

// Create the context
const UserContext = createContext();

// Define the provider component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const userData = localStorage.getItem("user");
    return userData ? JSON.parse(userData) : null;
  });

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  // Create the context value
  const contextValue = { user, setUser, logout };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

// Define the custom hook for accessing the context
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
