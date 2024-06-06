import { useNavigate } from "react-router-dom";

export const useNavigation = () => {
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
