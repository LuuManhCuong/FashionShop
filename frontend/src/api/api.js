import axios from "axios";
import { userSlice } from "../redux/reducer/userSlice";

const URL = "http://localhost:5000";

// login request
export const loginUser = async (user, dispatch, navigate) => {
  dispatch(userSlice.actions.loginStart());
  try {
    const res = await axios.post(`${URL}/login`, user, {
      withCredentials: true,
    });
    dispatch(userSlice.actions.loginSuccess(res.data));
    navigate(`/`);
  } catch (error) {
    dispatch(userSlice.actions.loginFailed());
  }
};

// register request
export const registerRequest = async (user, dispatch, navigate) => {
  dispatch(userSlice.actions.registerStart());
  try {
    await axios.post(`${URL}/register`, user, {
      withCredentials: true,
    });
    dispatch(userSlice.actions.registerSuccess());
    navigate(`/login`);
  } catch (error) {
    dispatch(userSlice.actions.registerFailed());
  }
};

export const fetchHomeApi = () => axios.get(`${URL}`);
export const fetchBlogApi = () => axios.get(`${URL}/blog`);
export const fetchBestSaleApi = () => axios.get(`${URL}/bestSale/`);
export const fetchShopApi = () => axios.get(`${URL}/shop`);
export const fetchAdminApi = () =>
  axios.get(`${URL}/admin`, {
    withCredentials: true,
  });
export const fetchSearchApi = (wordKey, size = "less") =>
  axios.get(`${URL}/search?name=${wordKey}&size=${size}`);
