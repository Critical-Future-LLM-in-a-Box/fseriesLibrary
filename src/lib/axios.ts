import axios from "axios";
import { useStore } from "@/store";

export const axiosClient = axios.create({
  // @ts-expect-error: VITE_API_URL is not recognized by TypeScript
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
