import { signUpApi } from "../api/auth";

export const handleSignUpSubmit = async (event, signUpInfo, setUser) => {
  event.preventDefault();
  try {
    const response = await signUpApi(signUpInfo);
    const { username, email, token } = response.data;
    setUser({ username, email, token });
    localStorage.setItem("user", JSON.stringify({ username, email, token }));
  } catch (error) {
    console.error("Sign Up Failed:", error);
  }
};
