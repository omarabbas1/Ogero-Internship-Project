import { useContext } from "react";
import { signUpUser, signInUser } from "../api/userApi";
import { UserContext } from "../contexts/UserContext";

export const useAuth = () => {
  const { setUser, updateUser } = useContext(UserContext);

  const signUp = async (userData) => {
    try {
      await signUpUser(userData);
      localStorage.setItem("email", userData.email);
      setUser(userData);
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };

  const signIn = async (userData) => {
    try {
      await signInUser(userData);
      localStorage.setItem("email", userData.email);
      updateUser(userData.email);
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  return { signUp, signIn };
};
