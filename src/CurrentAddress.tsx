import { useLocation } from "react-router";

export default function CurrentAddress() {
  const location = useLocation();
  return <p>Текущий путь: {location.pathname}</p>;
}