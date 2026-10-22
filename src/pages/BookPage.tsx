import { Link, useParams } from "react-router";
import { useContext } from "react";
import { books } from "../books";
import BookCard from "../BookCard";
import { ContextFavorites } from "../ContextFavorites";

export default function BookPage() {
  const context = useContext(ContextFavorites);
  const { id } = useParams<{ id: string }>();
  const book = books.find((b) => b.id === Number(id));

  if (!book) {
    return <h1>Книга не найдена</h1>;
  }

  const idsFavorites = context?.idsFavorites || [];
  const addFavorite = context?.addFavorite || (() => {});
  const deleteFavorite = context?.deleteFavorite || (() => {});

  return (
    <article>
      <BookCard
        book={book}
        isFavorite={idsFavorites.includes(book.id)}
        onAdd={addFavorite}
        onRemove={deleteFavorite}
      />
      <br />
      <Link to="/books">Назад</Link>
    </article>
  );
}