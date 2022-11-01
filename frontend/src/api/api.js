import axios from "axios";

const URL = "http://localhost:5000";

export const fetchHomeApi = () => axios.get(`${URL}`);
export const fetchBlogApi = () => axios.get(`${URL}/blog`);
export const fetchBestSaleApi = () => axios.get(`${URL}/bestSale/`);
export const fetchShopApi = () => axios.get(`${URL}/shop`);
