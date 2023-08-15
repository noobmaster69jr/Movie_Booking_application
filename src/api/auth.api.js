import axios from "axios";

const BASE_URL = process.env.REACT_APP_MBA_BACKEND_URL;

export const signIn = async (user) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/mba/api/v1/auth/signin`,
      user
    );

    const { name, email, userId, userTypes, accessToken, _id } =
      response.data;

    if (accessToken) {
      localStorage.setItem("name", name);
      localStorage.setItem("userId", userId);
      localStorage.setItem("email", email);
      localStorage.setItem("userTypes", userTypes);
      localStorage.setItem("token", accessToken);
      localStorage.setItem("id", _id);
    }

    return response.data;
  } catch (err) {
  
    return err;
  }
};



export const register = async (user) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/mba/api/v1/auth/signup`,
      user
    );

    return response;
  } catch (err) {
    
    return err;
  }
};