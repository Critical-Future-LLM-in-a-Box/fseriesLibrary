import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { axiosClient } from "@/lib/axios";
import { Item, useStore } from "@/store";

// Fetch functions for media and parts libraries
export const fetchMediaLibrary = async () => {
  const response = await axiosClient.get("/api/media/get");
  return response.data;
};

export const fetchPartsLibrary = async () => {
  const response = await axiosClient.get("/api/parts/get");
  return response.data;
};

// Mutation functions for media and parts libraries
export const addMediaItem = async (item: Item) => {
  const response = await axiosClient.post("/api/media/add", item);
  return response.data;
};

export const addPartsItem = async (item: Item) => {
  const response = await axiosClient.post("/api/parts/add", item);
  return response.data;
};

export const updateMediaItem = async (item: Item) => {
  const response = await axiosClient.put(`/api/media/update/${item.id}`, item);
  return response.data;
};

export const updatePartsItem = async (item: Item) => {
  const response = await axiosClient.put(`/api/parts/update/${item.id}`, item);
  return response.data;
};

export const deleteMediaItem = async (id: number) => {
  const response = await axiosClient.delete(`/api/media/delete/${id}`);
  return response.data;
};

export const deletePartsItem = async (id: number) => {
  const response = await axiosClient.delete(`/api/parts/delete/${id}`);
  return response.data;
};

// Custom hook
export const useLibrary = () => {
  const store = useStore();
  const queryClient = useQueryClient();

  // Queries for media and parts libraries
  const mediaLibraryQuery = useQuery({
    queryKey: ["mediaLibrary"],
    queryFn: fetchMediaLibrary,
    initialData: store.mediaLibrary,
    staleTime: 0
  });

  const partsLibraryQuery = useQuery({
    queryKey: ["partsLibrary"],
    queryFn: fetchPartsLibrary,
    initialData: store.partsLibrary,
    staleTime: 0
  });

  // Mutations for media and parts libraries
  const addMediaItemMutation = useMutation({
    mutationFn: addMediaItem,
    onSuccess: (data) => {
      store.addMediaLibraryItem(data);
      queryClient.invalidateQueries({ queryKey: ["mediaLibrary"] });
    }
  });

  const addPartsItemMutation = useMutation({
    mutationFn: addPartsItem,
    onSuccess: (data) => {
      store.addPartsLibraryItem(data);
      queryClient.invalidateQueries({ queryKey: ["partsLibrary"] });
    }
  });

  const updateMediaItemMutation = useMutation({
    mutationFn: updateMediaItem,
    onSuccess: (data) => {
      store.updateMediaLibraryItem(data.id, data);
      queryClient.invalidateQueries({ queryKey: ["mediaLibrary"] });
    }
  });

  const updatePartsItemMutation = useMutation({
    mutationFn: updatePartsItem,
    onSuccess: (data) => {
      store.updatePartsLibraryItem(data.id, data);
      queryClient.invalidateQueries({ queryKey: ["partsLibrary"] });
    }
  });

  const deleteMediaItemMutation = useMutation({
    mutationFn: deleteMediaItem,
    onSuccess: (_, id) => {
      store.deleteMediaLibraryItem(id);
      queryClient.invalidateQueries({ queryKey: ["mediaLibrary"] });
    }
  });

  const deletePartsItemMutation = useMutation({
    mutationFn: deletePartsItem,
    onSuccess: (_, id) => {
      store.deletePartsLibraryItem(id);
      queryClient.invalidateQueries({ queryKey: ["partsLibrary"] });
    }
  });

  // Mutations for recommendations (client-side only)
  const addMediaRecommendationMutation = useMutation({
    mutationFn: (item: Item) => Promise.resolve(item),
    onSuccess: (data) => {
      store.addMediaRecommendation(data);
      queryClient.invalidateQueries({ queryKey: ["mediaRecommendations"] });
    }
  });

  const addPartsRecommendationMutation = useMutation({
    mutationFn: (item: Item) => Promise.resolve(item),
    onSuccess: (data) => {
      store.addPartsRecommendation(data);
      queryClient.invalidateQueries({ queryKey: ["partsRecommendations"] });
    }
  });

  const updateMediaRecommendationMutation = useMutation({
    mutationFn: (item: Item) => Promise.resolve(item),
    onSuccess: (data) => {
      store.updateMediaRecommendation(data.id, data);
      queryClient.invalidateQueries({ queryKey: ["mediaRecommendations"] });
    }
  });

  const updatePartsRecommendationMutation = useMutation({
    mutationFn: (item: Item) => Promise.resolve(item),
    onSuccess: (data) => {
      store.updatePartsRecommendation(data.id, data);
      queryClient.invalidateQueries({ queryKey: ["partsRecommendations"] });
    }
  });

  const deleteMediaRecommendationMutation = useMutation({
    mutationFn: (id: number) => Promise.resolve(id),
    onSuccess: (id) => {
      store.deleteMediaRecommendation(id);
      queryClient.invalidateQueries({ queryKey: ["mediaRecommendations"] });
    }
  });

  const deletePartsRecommendationMutation = useMutation({
    mutationFn: (id: number) => Promise.resolve(id),
    onSuccess: (id) => {
      store.deletePartsRecommendation(id);
      queryClient.invalidateQueries({ queryKey: ["partsRecommendations"] });
    }
  });

  // Return the necessary data and mutation functions
  return {
    mediaLibrary: mediaLibraryQuery.data,
    partsLibrary: partsLibraryQuery.data,
    mediaRecommendations: store.mediaRecommendations,
    partsRecommendations: store.partsRecommendations,

    addMediaItem: addMediaItemMutation.mutateAsync,
    addPartsItem: addPartsItemMutation.mutateAsync,
    addMediaRecommendation: addMediaRecommendationMutation.mutateAsync,
    addPartsRecommendation: addPartsRecommendationMutation.mutateAsync,

    updateMediaItem: updateMediaItemMutation.mutateAsync,
    updatePartsItem: updatePartsItemMutation.mutateAsync,
    updateMediaRecommendation: updateMediaRecommendationMutation.mutateAsync,
    updatePartsRecommendation: updatePartsRecommendationMutation.mutateAsync,

    deleteMediaItem: deleteMediaItemMutation.mutateAsync,
    deletePartsItem: deletePartsItemMutation.mutateAsync,
    deleteMediaRecommendation: deleteMediaRecommendationMutation.mutateAsync,
    deletePartsRecommendation: deletePartsRecommendationMutation.mutateAsync
  };
};
