import axiosInstance from "./axiosInstance";

export const signInApi = (signInInfo) => {
  return axiosInstance.post("/auth/signin", signInInfo);
};

export const signUpApi = (signUpInfo) => {
  return axiosInstance.post("/auth/signup", signUpInfo);
};
