import { signInApi } from "../api/userApi";

export const handleSignIn = async (signInInfo, setAuthToken, setUser) => {
  try {
    const response = await signInApi(signInInfo);
    const { token, user } = response.data;
    setAuthToken(token);
    setUser(user);
  } catch (error) {
    console.error("Sign-in failed:", error.message);
  }
};
