import { signUpApi } from "../api/auth";

const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const isStrongPassword = (password) => {
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return passwordRegex.test(password);
};

export const handleSignUpSubmit = async (
  event,
  signUpInfo,
  setUser,
  navigateToHome,
  setErrorMessage
) => {
  event.preventDefault();

  const { email, password } = signUpInfo;

  if (!isValidEmail(email)) {
    console.error("Invalid email format.");
    setErrorMessage("Please enter a valid email address.");
    return;
  }

  if (!isStrongPassword(password)) {
    console.error("Password is not strong enough.");
    setErrorMessage(
      "Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, one number, and one special character."
    );
    return;
  }
  try {
    const response = await signUpApi(signUpInfo);
    const { id, username, email, token } = response.data;
    setUser({ id, username, email, token });
    localStorage.setItem(
      "user",
      JSON.stringify({ id, username, email, token })
    );
    navigateToHome();
  } catch (error) {
    console.error("Sign Up Failed:", error);
    if (error.response && error.response.data && error.response.data.message) {
      setErrorMessage(error.response.data.message);
    } else {
      setErrorMessage("An unexpected error occurred. Please try again.");
    }
  }
};
