import { signUpApi } from "../api/userApi";

export const handleSignUp = async (signUpInfo, setAuthToken, setUser) => {
  try {
    const response = await signUpApi(signUpInfo);
    const { token, user } = response.data;
    setAuthToken(token);
    setUser(user);
  } catch (error) {
    console.error("Sign-up failed:", error.message);
  }
};
