import { signUpApi } from "../api/authApi";

export const handleSignUpSubmit = (form, setAuthToken) => async (e) => {
  e.preventDefault();
  try {
    const response = await signUpApi(form);
    const { token } = response;
    localStorage.setItem("token", token);
    setAuthToken(token);
    console.log("Sign-Up Successful:", response);
  } catch (error) {
    console.error("Sign-Up Error:", error);
  }
};
