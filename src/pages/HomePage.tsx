import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { books } from "../books";

export default function HomePage() {
  const [id, setId] = useState<string>("");
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  function open(): void {
    const book = books.find((b) => b.id === Number(id));

    if (!book) {
      setError("Книга не найдена");
      return;
    }

    setError("");
    navigate(`/books/${book.id}`);
  }

  return (
    <section>
      <h1>Библиотека</h1>
      <p>Найдите книгу для чтения.</p>
      <Link to="/books">Посмотреть книги</Link>

      <hr />

      <label>
        Номер{" "}
        <input
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
      </label>
      <button onClick={open}>Открыть</button>
      <p>{error}</p>
    </section>
  );
}