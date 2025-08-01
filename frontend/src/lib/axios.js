import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "http://localhost:5001/api" : "/api", // for production
  //  baseURL:  "http://localhost:5001/api" , //for local 
  withCredentials: true,
});
