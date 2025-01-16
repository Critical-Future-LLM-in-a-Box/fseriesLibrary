import { axiosClient } from "@/lib/axios";
import { useStore } from "@/store";

import { User } from "@/store";

export const useAuth = () => {
  const { setUser } = useStore();

  return {
    signup: async (data: Partial<User>) => {
      const response = await axiosClient

        .post("/api/auth/signup", data)

        .catch((error) => {
          const errorMessage = error.response?.data?.error?.message;

          throw new Error(errorMessage);
        });

      return response.data;
    },

    signin: async (data: Partial<User>) => {
      const response = await axiosClient

        .post("/api/auth/login", data)

        .catch((error) => {
          const errorMessage = error.response?.data?.error?.message;

          throw new Error(errorMessage);
        });

      const { accessToken, ...user } = response.data;

      setUser({ ...user, ...data, token: accessToken });

      return response.data;
    },

    logout: async () => {
      const response = await axiosClient

        .post("/api/auth/logout")

        .catch((error) => {
          const errorMessage = error.response?.data?.error?.message;

          throw new Error(errorMessage);
        });

      setUser();

      return response.data;
    }
  };
};
