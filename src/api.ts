import { getJSON } from "./request";

export function toBook(raw: any) {
  const info = raw.volumeInfo || {};
  return {
    id: Number(raw.id),
    title: info.title || "Без названия",
    author: info.authors?.join(", ") ?? "Автор неизвестен",
    description: info.description ?? "",
  };
}

export async function getBooks(page = 1, signal?: AbortSignal) {
  const payload = await getJSON(`/public/books?page=${page}&limit=3`, signal);
  return payload.data.data.map(toBook);
}

export async function getBook(id: string | number, signal?: AbortSignal) {
  const payload = await getJSON(`/public/books/${id}`, signal);
  return toBook(payload.data);
}

export async function getFavorites(ids: number[], signal?: AbortSignal) {
  const fetchedBooks = [];
  for (const id of ids) {
    const book = await getBook(id, signal);
    fetchedBooks.push(book);
  }
  return fetchedBooks;
}