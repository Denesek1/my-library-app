import { createContext } from "react";

export type FavoritesContextType = {
  idsFavorites: number[];
  addFavorite: (id: number) => void;
  deleteFavorite: (id: number) => void;
};

export const ContextFavorites = createContext<FavoritesContextType | null>(null);