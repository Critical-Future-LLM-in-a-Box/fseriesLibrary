import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { persist } from "zustand/middleware";

export interface User {
  id: string;
  token: string;
  email: string;
  password?: string;
  username: string;
}

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
  image: string;
}

export interface Store {
  user: User | null;
  garageName: string;
  mediaLibrary: Item[];
  partsLibrary: Item[];
  mediaRecommendations: Item[];
  partsRecommendations: Item[];
}

export interface StoreActions {
  // User management
  setUser: (user?: User) => void;

  // Garage settings
  setGarageName: (name: string) => void;

  // Library setters
  setMediaLibrary: (mediaLibrary: Item[]) => void;
  setPartsLibrary: (partsLibrary: Item[]) => void;
  setMediaRecommendations: (mediaRecommendations: Item[]) => void;
  setPartsRecommendations: (partsRecommendations: Item[]) => void;

  // Add items
  addMediaLibraryItem: (item: Item) => void;
  addPartsLibraryItem: (item: Item) => void;
  addMediaRecommendation: (item: Item) => void;
  addPartsRecommendation: (item: Item) => void;

  // Update items
  updateMediaLibraryItem: (id: number, item: Partial<Item>) => void;
  updatePartsLibraryItem: (id: number, item: Partial<Item>) => void;
  updateMediaRecommendation: (id: number, item: Partial<Item>) => void;
  updatePartsRecommendation: (id: number, item: Partial<Item>) => void;

  // Delete items
  deleteMediaLibraryItem: (id: number) => void;
  deletePartsLibraryItem: (id: number) => void;
  deleteMediaRecommendation: (id: number) => void;
  deletePartsRecommendation: (id: number) => void;
}

export type LibraryStore = Store & StoreActions;

export const initialState: Store = {
  user: null,
  garageName: "",
  mediaLibrary: [],
  partsLibrary: [],
  mediaRecommendations: [],
  partsRecommendations: []
};

export const createActions = (
  set: (fn: (state: LibraryStore) => void) => void
) => ({
  // User management actions
  setUser: (user?: User) => {
    set((state) => {
      if (user) state.user = { ...(state.user || {}), ...user };
      else state.user = null;
    });
  },

  // Garage actions
  setGarageName: (name: string) => {
    set((state) => {
      state.garageName = name;
    });
  },

  // Library setters
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

  // Add item actions
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
  addMediaRecommendation: (item: Item) => {
    set((state) => {
      if (state.mediaRecommendations?.length === 10) {
        state.mediaRecommendations.pop();
      }
      state.mediaRecommendations?.unshift(item);
    });
  },
  addPartsRecommendation: (item: Item) => {
    set((state) => {
      if (state.partsRecommendations?.length === 10) {
        state.partsRecommendations.pop();
      }
      state.partsRecommendations?.unshift(item);
    });
  },

  // Update item actions
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
  updateMediaRecommendation: (id: number, item: Partial<Item>) => {
    set((state) => {
      const existingItem = state.mediaRecommendations?.find(
        (item) => item.id === id
      );
      if (!existingItem) return;
      Object.assign(existingItem, item);
    });
  },
  updatePartsRecommendation: (id: number, item: Partial<Item>) => {
    set((state) => {
      const existingItem = state.partsRecommendations?.find(
        (item) => item.id === id
      );
      if (!existingItem) return;
      Object.assign(existingItem, item);
    });
  },

  // Delete item actions
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
  },
  deleteMediaRecommendation: (id: number) => {
    set((state) => {
      state.mediaRecommendations =
        state.mediaRecommendations?.filter(
          (existingItem) => existingItem.id !== id
        ) || null;
    });
  },
  deletePartsRecommendation: (id: number) => {
    set((state) => {
      state.partsRecommendations =
        state.partsRecommendations?.filter(
          (existingItem) => existingItem.id !== id
        ) || null;
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
