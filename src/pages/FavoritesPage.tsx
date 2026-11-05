import { useContext } from "react";
import { Link } from "react-router";
import { ContextFavorites } from "../ContextFavorites";
import { useLoad } from "../useLoad";
import { getFavorites } from "../api";
import RequestError from "../RequestError";

export default function FavoritesPage() {
  const context = useContext(ContextFavorites);
  
  if (!context) return null;
  
  const { idsFavorites, deleteFavorite } = context;

  const { data: books, loading, error, retry } = useLoad(getFavorites, idsFavorites);

  if (loading) return <p>Загрузка...</p>;
  if (error) return <RequestError error={error} onRetry={retry} />;
  if (!books || books.length === 0) return <p>Избранное пусто</p>;

  return (
    <section>
      <h1>Избранное</h1>
      <p>Избранных книг: {idsFavorites.length}</p>

      {books.map((book: any) => (
        <article key={book.id} style={{ border: "1px solid #ccc", padding: "16px", marginBottom: "12px" }}>
          <h2>
            <Link to={`/books/${book.id}`}>{book.title}</Link>
          </h2>
          <p>{book.author}</p>
          <button onClick={() => deleteFavorite(book.id)}>Удалить</button>
        </article>
      ))}
    </section>
  );
}