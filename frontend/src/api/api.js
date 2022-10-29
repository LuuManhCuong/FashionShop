import axios from "axios";

const URL = "http://localhost:5000";

export const fetchHomeApi = () => axios.get(`${URL}`);
export const fetchBlogApi = () => axios.get(`${URL}/blog`);

