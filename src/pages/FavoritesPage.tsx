import { useContext } from "react";
import { books } from "../books";
import { ContextFavorites } from "../ContextFavorites";

export default function FavoritesPage() {
  const context = useContext(ContextFavorites);
  if (!context) return null;

  const { idsFavorites, deleteFavorite } = context;

  const selected = books.filter((book) => idsFavorites.includes(book.id));

  return (
    <section>
      <h1>Избранное</h1>
      <p>Избранных книг: {idsFavorites.length}</p>

      {selected.length === 0 && <p>Избранное пусто</p>}

      {selected.map((book) => (
        <div style={{
          border:"1px solid #676767",
          borderRadius: "10px",
          marginBottom: "10px"
        }}
        key={book.id}>
          <h2>{book.title}</h2>
          <p>{book.author}</p>
          <button style={{
            backgroundColor: "transparent",
            border:0,
            cursor:"pointer"
          }}
           onClick={() => deleteFavorite(book.id)}>Удалить</button>
        </div>
      ))}
    </section>
  );
}