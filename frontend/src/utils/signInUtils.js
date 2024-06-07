import { signInApi } from "../api/authApi";

// Function to handle input changes
export const handleSignInChange = (setSignInInfo) => (e) => {
  const { name, value } = e.target;
  setSignInInfo((prevSignInInfo) => ({
    ...prevSignInInfo,
    [name]: value,
  }));
};

// Function to handle form submission
export const handleSignInSubmit = (e, signInInfo, setAuthToken) => {
  e.preventDefault();
  signInApi(signInInfo)
    .then((response) => {
      setAuthToken(response.data.token);
      // Optionally, navigate to the home page or another page
    })
    .catch((error) => {
      console.error("Sign In Error:", error);
      // Handle error (e.g., show an error message)
    });
};
