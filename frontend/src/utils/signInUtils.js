import { signInApi, getUsernameApi } from "../api/auth";

export const handleSignInSubmit = async (event, signInInfo, setUser) => {
  event.preventDefault();
  try {
    const response = await signInApi(signInInfo);
    const { email, token } = response.data;
    const usernameResponse = await getUsernameApi(email); // Fetch the username using the email
    const { username } = usernameResponse.data;
    setUser({ username, email, token });
    localStorage.setItem("user", JSON.stringify({ username, email, token }));
  } catch (error) {
    console.error("Sign In Failed:", error);
  }
};
