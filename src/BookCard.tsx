import { Link } from "react-router";
import type { Book } from "./books";

type BookCardProps = {
  book: Book;
  isFavorite: boolean;
  onAdd: (id: number) => void;
  onRemove: (id: number) => void; 
};

export default function BookCard({ book, isFavorite, onAdd, onRemove }: BookCardProps) {
  return (
    <div style={{ 
        border: "1px solid grey", 
        marginBottom: "10px", 
        borderRadius: "10px" }}>
      <h2>
        <Link to={`/books/${book.id}`} style={{
            color:"black"
        }}>
          {book.title}
        </Link>
      </h2>
      
      <p>{book.author}</p>
      
      {isFavorite ? (
        <button onClick={() => onRemove(book.id)}>
          Удалить из избранного
        </button>
      ) : (
        <button onClick={() => onAdd(book.id)}>
          В избранное
        </button>
      )}
    </div>
  );
}