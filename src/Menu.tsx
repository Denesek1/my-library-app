import { NavLink } from "react-router";
import { useContext } from "react";
import { ContextFavorites } from "./ContextFavorites";

export default function Menu() {
  const context = useContext(ContextFavorites);
  const count = context?.idsFavorites.length || 0;

  return (
    <nav>
      <NavLink to="/">Главная</NavLink>
      {" | "}
      <NavLink to="/books">Книги</NavLink>
      {" | "}
      <NavLink to="/favorites">Избранное: {count}</NavLink>
      {" | "}
      <NavLink to="/about" end>О библиотеке</NavLink>
    </nav>
  );
}