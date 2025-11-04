import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3114/",
  withCredentials: true,
});
