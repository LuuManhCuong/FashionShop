import axios from "axios";
import { userSlice } from "../redux/reducer/userSlice";

export const HOT_URL = "https://fashionshop.onrender.com";
// export const HOT_URL = "http://localhost:3000";

// login request
export const loginUser = async (user, dispatch, navigate) => {
  dispatch(userSlice.actions.loginStart());
  try {
    const res = await axios.post(`$HOT_URL}/login`, user, {
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
    await axios.post(`$HOT_URL}/register`, user, {
      withCredentials: true,
    });
    dispatch(userSlice.actions.registerSuccess());
    navigate(`/login`);
  } catch (error) {
    dispatch(userSlice.actions.registerFailed());
  }
};

export const fetchHomeApi = () => axios.get(`$HOT_URL}`);
export const fetchBlogApi = () => axios.get(`$HOT_URL}/blog`);
export const fetchBestSaleApi = () => axios.get(`$HOT_URL}/bestSale/`);
export const fetchShopApi = () => axios.get(`$HOT_URL}/shop`);
export const fetchAdminApi = () =>
  axios.get(`$HOT_URL}/admin`, {
    withCredentials: true,
  });
export const fetchSearchApi = (wordKey, size = "less") =>
  axios.get(`$HOT_URL}/search?name=${wordKey}&size=${size}`);
