import axios from "axios";
import { useStore } from "@/store";

export const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL
});

axiosClient.interceptors.request.use((config) => {
  const user = useStore.getState().user;

  const token = user?.token;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});
