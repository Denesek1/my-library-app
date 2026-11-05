import { useContext } from "react";
import { useSearchParams } from "react-router";
import BookCard from "../BookCard";
import { ContextFavorites } from "../ContextFavorites";
import { useLoad } from "../useLoad";
import { getBooks } from "../api";
import RequestError from "../RequestError";

export default function BooksPage() {
  const context = useContext(ContextFavorites);
  const [params, setParams] = useSearchParams();
  const q: string = params.get("q") ?? "";

  const { data: books, loading, error, retry } = useLoad(getBooks, 1);

  const idsFavorites = context?.idsFavorites || [];
  const addFavorite = context?.addFavorite || (() => {});
  const deleteFavorite = context?.deleteFavorite || (() => {});

  function change(value: string): void {
    setParams(value ? { q: value } : {}, { replace: true });
  }

  if (loading) return <p>Загрузка...</p>;
  if (error) return <RequestError error={error} onRetry={retry} />;
  if (!books || books.length === 0) return <p>Книг пока нет</p>;

  const found = books.filter((b: any) =>
    b.title.toLowerCase().includes(q.toLowerCase())
  );

  return (
    <section>
      <h1>Книги</h1>
      <label>
        Название <input value={q} onChange={(e) => change(e.target.value)} />
      </label>
      <button onClick={() => change("")}>Очистить</button>

      <p>Избранных книг: {idsFavorites.length}</p>

      {found.map((book: any) => (
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