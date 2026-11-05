import { Link, useParams } from "react-router";
import { useContext } from "react";
import BookCard from "../BookCard";
import { ContextFavorites } from "../ContextFavorites";
import { useLoad } from "../useLoad";
import { getBook } from "../api";
import RequestError from "../RequestError";

export default function BookPage() {
  const { id } = useParams<{ id: string }>();
  const context = useContext(ContextFavorites);

  const { data: book, loading, error, retry } = useLoad(getBook, id);

  const idsFavorites = context?.idsFavorites || [];
  const addFavorite = context?.addFavorite || (() => {});
  const deleteFavorite = context?.deleteFavorite || (() => {});

  if (loading) return <p>Загрузка...</p>;

  if (error) return <RequestError error={error} onRetry={retry} />;

  return (
    <article>
      <BookCard
        book={book}
        isFavorite={idsFavorites.includes(book.id)}
        onAdd={addFavorite}
        onRemove={deleteFavorite}
      />
      
      {book.description && <p>{book.description}</p>}
      
      <br />
      <Link to="/books">← Все книги</Link>
    </article>
  );
}