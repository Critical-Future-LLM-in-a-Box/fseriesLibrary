import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { axiosClient } from "@/lib/axios";
import { Item } from "@/store";

// API endpoints
export const API_ENDPOINTS = {
  media: "/api/media",
  parts: "/api/parts"
};

// Media fetch function
export const fetchMediaLibrary = async () => {
  const response = await axiosClient.get(`${API_ENDPOINTS.media}/get`);
  return response.data;
};

// Parts fetch function
export const fetchPartsLibrary = async () => {
  const response = await axiosClient.get(`${API_ENDPOINTS.parts}/get`);
  return response.data;
};

// Media add Mutation function
export const addMediaItem = async (item: Item) => {
  const response = await axiosClient.post(`${API_ENDPOINTS.media}/add`, item);
  return response.data;
};

// Parts add Mutation function
export const addPartsItem = async (item: Item) => {
  const response = await axiosClient.post(`${API_ENDPOINTS.parts}/add`, item);
  return response.data;
};

// Media update Mutation function
export const updateMediaItem = async ({
  id,
  data
}: {
  id: number;
  data: Partial<Item>;
}) => {
  const response = await axiosClient.put(
    `${API_ENDPOINTS.media}/update/${id}`,
    data
  );
  return response.data;
};

// Parts update Mutation function
export const updatePartsItem = async ({
  id,
  data
}: {
  id: number;
  data: Partial<Item>;
}) => {
  const response = await axiosClient.put(
    `${API_ENDPOINTS.parts}/update/${id}`,
    data
  );
  return response.data;
};

// Media delete Mutation function
export const deleteMediaItem = async (id: number) => {
  const response = await axiosClient.delete(
    `${API_ENDPOINTS.media}/delete/${id}`
  );
  return response.data;
};

// Parts delete Mutation function
export const deletePartsItem = async (id: number) => {
  const response = await axiosClient.delete(
    `${API_ENDPOINTS.parts}/delete/${id}`
  );
  return response.data;
};

// Custom hook to use library
export const useLibrary = () => {
  const queryClient = useQueryClient();

  return {
    getMediaLibrary: () =>
      useQuery({ queryKey: ["mediaLibrary"], queryFn: fetchMediaLibrary }),

    getPartsLibrary: () =>
      useQuery({ queryKey: ["partsLibrary"], queryFn: fetchPartsLibrary }),

    addMediaItem: () =>
      useMutation({
        mutationFn: addMediaItem,
        onSuccess: () =>
          queryClient.invalidateQueries({ queryKey: ["mediaLibrary"] })
      }),

    addPartsItem: () =>
      useMutation({
        mutationFn: addPartsItem,
        onSuccess: () =>
          queryClient.invalidateQueries({ queryKey: ["partsLibrary"] })
      }),

    updateMediaItem: () =>
      useMutation({
        mutationFn: updateMediaItem,
        onSuccess: () =>
          queryClient.invalidateQueries({ queryKey: ["mediaLibrary"] })
      }),

    updatePartsItem: () =>
      useMutation({
        mutationFn: updatePartsItem,
        onSuccess: () =>
          queryClient.invalidateQueries({ queryKey: ["partsLibrary"] })
      }),

    deleteMediaItem: () =>
      useMutation({
        mutationFn: deleteMediaItem,
        onSuccess: () =>
          queryClient.invalidateQueries({ queryKey: ["mediaLibrary"] })
      }),

    deletePartsItem: () =>
      useMutation({
        mutationFn: deletePartsItem,
        onSuccess: () =>
          queryClient.invalidateQueries({ queryKey: ["partsLibrary"] })
      })
  };
};
