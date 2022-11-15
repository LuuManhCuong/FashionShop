import axios from "axios";

const URL = "http://localhost:5000";

export const fetchHomeApi = () => axios.get(`${URL}`);
export const fetchBlogApi = () => axios.get(`${URL}/blog`);
export const fetchBestSaleApi = () => axios.get(`${URL}/bestSale/`);
export const fetchShopApi = () => axios.get(`${URL}/shop`);
export const fetchAdminApi = () => axios.get(`${URL}/admin`);

export const fetchBlogDetail = (id) => axios.get(`${URL}/blog/detail/${id}`);

export const fetchGetComment = (id) => axios.get(`${URL}/comment/${id}`);

export const fetchSearchApi = (wordKey, size = "less") =>
  axios.get(`${URL}/search?name=${wordKey}&size=${size}`);
