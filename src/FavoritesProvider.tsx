import { useState, ReactNode } from "react";
import { ContextFavorites } from "./ContextFavorites";

export const FavoritesProvider = ({ children }: { children: ReactNode }) => {
  const [idsFavorites, setIdsFavorites] = useState<number[]>([]);

  const addFavorite = (id: number) => {
    setIdsFavorites((prev) => (prev.includes(id) ? prev : [...prev, id]));
  };

  const deleteFavorite = (id: number) => {
    setIdsFavorites((prev) => prev.filter((x) => x !== id));
  };

  return (
    <ContextFavorites.Provider value={{ idsFavorites, addFavorite, deleteFavorite }}>
      {children}
    </ContextFavorites.Provider>
  );
};