import { useContext } from "react";
import { useSearchParams } from "react-router";
import { books } from "../books";
import BookCard from "../BookCard";
import { ContextFavorites } from "../ContextFavorites";

export default function BooksPage() {
  const context = useContext(ContextFavorites);
  const [params, setParams] = useSearchParams();
  const q: string = params.get("q") ?? "";

  const idsFavorites = context?.idsFavorites || [];
  const addFavorite = context?.addFavorite || (() => {});
  const deleteFavorite = context?.deleteFavorite || (() => {});

  const found = books.filter((b) =>
    b.title.toLowerCase().includes(q.toLowerCase())
  );

  function change(value: string): void {
    setParams(value ? { q: value } : {}, { replace: true });
  }

  return (
    <section>
      <h1>Книги</h1>
      <label>
        Название <input value={q} onChange={(e) => change(e.target.value)} />
      </label>
      <button onClick={() => change("")}>Очистить</button>

      {found.map((book) => (
        <BookCard
          key={book.id}
          book={book}
          isFavorite={idsFavorites.includes(book.id)}
          onAdd={addFavorite}
          onRemove={deleteFavorite}
        />
      ))}

      {found.length === 0 && <p>Ничего не найдено</p>}
    </section>
  );
}