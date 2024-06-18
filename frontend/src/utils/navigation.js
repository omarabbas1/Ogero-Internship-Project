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

  return { navigateToSignIn, navigateToSignUp, navigateToHome };
};

export default Navigation;
