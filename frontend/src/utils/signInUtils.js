import { signInApi } from "../api/auth";

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
    const { id, email, username, token, displayName } = response.data;
    setUser({ id, username, email, token, displayName });
    localStorage.setItem(
      "user",
      JSON.stringify({ id, username, email, token, displayName })
    );
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
