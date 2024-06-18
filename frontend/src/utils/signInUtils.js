import { signInApi, getUsernameApi } from "../api/auth";

export const handleSignInSubmit = async (
  event,
  signInInfo,
  setUser,
  navigateToHome,
  setErrorMessage
) => {
  event.preventDefault();

  try {
    const response = await signInApi(signInInfo);
    const { email, token } = response.data;
    const usernameResponse = await getUsernameApi(email);
    const { username } = usernameResponse.data;
    setUser({ username, email, token });
    localStorage.setItem("user", JSON.stringify({ username, email, token }));
    navigateToHome();
  } catch (error) {
    console.error("Sign In Failed:", error);
    if (error.response && error.response.data && error.response.data.message) {
      setErrorMessage(error.response.data.message);
    } else {
      setErrorMessage("An unexpected error occurred. Please try again.");
    }
  }
};
