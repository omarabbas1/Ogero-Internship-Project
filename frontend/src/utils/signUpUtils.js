import { signUp } from "../api/authApi";

export const handleSignUpChange = (setSignUpInfo) => (e) => {
  const { name, value } = e.target;
  setSignUpInfo((prevForm) => ({
    ...prevForm,
    [name]: value,
  }));
};

export const handleSignUpSubmit = (form, setAuthToken) => async (e) => {
  e.preventDefault();
  try {
    const response = await signUp(form);
    const { token } = response;
    localStorage.setItem("token", token);
    setAuthToken(token);
    console.log("Sign-Up Successful:", response);
  } catch (error) {
    console.error("Sign-Up Error:", error);
  }
};
