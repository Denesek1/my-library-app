export type Book = {
  id: number;
  title: string;
  author: string;
};

export const books: Book[] = [
  { id: 1, title: "1984", author: "Джордж Оруэлл" },
  { id: 2, title: "Хоббит", author: "Дж. Р. Р. Толкин" },
  { id: 3, title: "Дюна", author: "Фрэнк Герберт" },
];