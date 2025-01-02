import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { persist } from "zustand/middleware";

export enum UserLibrary {
  mediaLibrary = "mediaLibrary",
  partsLibrary = "partsLibrary",
  mediaRecommendations = "mediaRecommendations",
  partsRecommendations = "partsRecommendations"
}

export type LibraryType = `${UserLibrary}`;

export interface Item {
  id: number;
  title: string;
  description: string;
  url: string;
  isSyncing?: boolean;
  isSyncError?: boolean;
}

export interface User {
  id: string;
  token: string;
  email: string;
  password?: string;
  username: string;
}

export interface Store {
  user: User | null;
  garageName: string | null;
  mediaLibrary: Item[] | null;
  partsLibrary: Item[] | null;
  mediaRecommendations: Item[] | null;
  partsRecommendations: Item[] | null;
}

export interface StoreActions {
  setUser: (user: User) => void;
  deleteUser: () => void;
  setGarageName: (name: string) => void;
  setMediaLibrary: (mediaLibrary: Item[]) => void;
  setPartsLibrary: (partsLibrary: Item[]) => void;
  setMediaRecommendations: (mediaRecommendations: Item[]) => void;
  setPartsRecommendations: (partsRecommendations: Item[]) => void;
  addMediaLibraryItem: (item: Item) => void;
  addPartsLibraryItem: (item: Item) => void;
  updateMediaLibraryItem: (id: number, item: Partial<Item>) => void;
  updatePartsLibraryItem: (id: number, item: Partial<Item>) => void;
  deleteMediaLibraryItem: (id: number) => void;
  deletePartsLibraryItem: (id: number) => void;
}

export type LibraryStore = Store & StoreActions;

export const initialState: Store = {
  user: null,
  garageName: null,
  mediaLibrary: null,
  partsLibrary: null,
  mediaRecommendations: null,
  partsRecommendations: null
};

export const createActions = (
  set: (fn: (state: LibraryStore) => void) => void
) => ({
  setUser: (user: User) => {
    set((state) => {
      state.user = { ...state.user, ...user };
    });
  },
  deleteUser: () => {
    set((state) => {
      state.user = null;
    });
  },
  setGarageName: (name: string) => {
    set((state) => {
      state.garageName = name;
    });
  },
  setMediaLibrary: (mediaLibrary: Item[]) => {
    set((state) => {
      state.mediaLibrary = mediaLibrary;
    });
  },
  setPartsLibrary: (partsLibrary: Item[]) => {
    set((state) => {
      state.partsLibrary = partsLibrary;
    });
  },
  setMediaRecommendations: (mediaRecommendations: Item[]) => {
    set((state) => {
      state.mediaRecommendations = mediaRecommendations;
    });
  },
  setPartsRecommendations: (partsRecommendations: Item[]) => {
    set((state) => {
      state.partsRecommendations = partsRecommendations;
    });
  },
  addMediaLibraryItem: (item: Item) => {
    set((state) => {
      state.mediaLibrary?.unshift(item);
    });
  },
  addPartsLibraryItem: (item: Item) => {
    set((state) => {
      state.partsLibrary?.unshift(item);
    });
  },
  updateMediaLibraryItem: (id: number, item: Partial<Item>) => {
    set((state) => {
      const existingItem = state.mediaLibrary?.find((item) => item.id === id);
      if (!existingItem) return;
      Object.assign(existingItem, item);
    });
  },
  updatePartsLibraryItem: (id: number, item: Partial<Item>) => {
    set((state) => {
      const existingItem = state.partsLibrary?.find((item) => item.id === id);
      if (!existingItem) return;
      Object.assign(existingItem, item);
    });
  },
  deleteMediaLibraryItem: (id: number) => {
    set((state) => {
      state.mediaLibrary =
        state.mediaLibrary?.filter((existingItem) => existingItem.id !== id) ||
        null;
    });
  },
  deletePartsLibraryItem: (id: number) => {
    set((state) => {
      state.partsLibrary =
        state.partsLibrary?.filter((existingItem) => existingItem.id !== id) ||
        null;
    });
  }
});

export const useStore = create<LibraryStore>()(
  persist(
    immer((set) => ({
      ...initialState,
      ...createActions(set)
    })),
    { name: "user-library" }
  )
);
