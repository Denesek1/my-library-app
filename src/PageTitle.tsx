import { useEffect } from "react";
import { useLocation } from "react-router";

export default function PageTitle() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === "/") {
      document.title = "Библиотека";
    } else if (pathname === "/books") {
      document.title = "Книги";
    } else {
      document.title = "Страница библиотеки";
    }
  }, [pathname]);

  return null;
}