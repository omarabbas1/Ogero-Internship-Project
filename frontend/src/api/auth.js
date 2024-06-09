import axiosInstance from "./axiosInstance";

export const signInApi = (signInInfo) => {
  return axiosInstance.post("/signin", signInInfo);
};

export const signUpApi = (signUpInfo) => {
  return axiosInstance.post("/signup", signUpInfo);
};

export const getUsernameApi = (email) => {
  return axiosInstance.get(`/username?email=${email}`);
};
