import Navigation from "./navigation";
import { useUser } from "../contexts/UserContext";

const Logout = () => {
  const { setUser } = useUser();
  const { navigateToHome } = Navigation;

  const logout = () => {
    console.log("Logout initiated"); // Log initiation
    setUser(null);
    localStorage.removeItem("user");
    console.log("User state and localStorage cleared"); // Log clearing
    navigateToHome();
    console.log("Navigated to home"); // Log navigation
  };

  return logout;
};

export default Logout;
