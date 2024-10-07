import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer your_token_here",
  },
});

export default axiosInstance;
