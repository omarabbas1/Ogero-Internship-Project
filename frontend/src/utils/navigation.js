import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate("/");
  };

  const navigateToSignIn = () => {
    navigate("/signin");
  };

  const navigateToSignUp = () => {
    navigate("/signup");
  };

  const navigateToUserProfile = () => {
    navigate("/user/profile");
  };

  return {
    navigateToSignIn,
    navigateToSignUp,
    navigateToHome,
    navigateToUserProfile,
  };
};

export default Navigation;
