import { useState } from "react";
import { Routes, Route } from "react-router";
import Layout from "./Layout";
import HomePage from "./pages/HomePage";
import BooksPage from "./pages/BooksPage";
import BookPage from "./pages/BookPage";
import AboutPage from "./pages/AboutPage";
import FavoritesPage from "./pages/FavoritesPage";

export default function App() {
  const [favoriteIds, setFavoriteIds] = useState<number[]>([]);

  function addFavorite(id: number): void {
    setFavoriteIds((prev) =>
      prev.includes(id) ? prev : [...prev, id]
    );
  }

  function removeFavorite(id: number): void {
    setFavoriteIds((prev) => prev.filter((x) => x !== id));
  }

  return (
    <Routes>
      <Route element={<Layout favoriteCount={favoriteIds.length} />}>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/books"
          element={
            <BooksPage
              favoriteIds={favoriteIds}
              onAdd={addFavorite}
            />
          }
        />
        <Route
          path="/books/:id"
          element={
            <BookPage
              favoriteIds={favoriteIds}
              onAdd={addFavorite}
            />
          }
        />
        <Route
          path="/favorites"
          element={
            <FavoritesPage
              favoriteIds={favoriteIds}
              onRemove={removeFavorite}
            />
          }
        />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<h1>Страница не найдена</h1>} />
      </Route>
    </Routes>
  );
}