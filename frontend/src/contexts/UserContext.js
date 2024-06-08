import React, { createContext, useState, useEffect } from "react";
import { fetchUsername } from "../api/userApi";

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const updateUser = async (email) => {
    try {
      const username = await fetchUsername(email);
      setUser({ email, username });
    } catch (error) {
      console.error("Error fetching username:", error);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    const email = localStorage.getItem("email");
    if (token && email) {
      setUser({ email });
      updateUser(email);
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};
