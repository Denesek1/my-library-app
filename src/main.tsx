import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { FavoritesProvider } from "./FavoritesProvider"; // Импортируем
import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <FavoritesProvider> {/* Оборачиваем */}
        <App />
      </FavoritesProvider>
    </BrowserRouter>
  </StrictMode>
);