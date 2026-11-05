type RequestErrorProps = {
  error: any;
  onRetry: () => void;
};

export default function RequestError({ error, onRetry }: RequestErrorProps) {
  const message = error.status === 404 
    ? "Книга не найдена" 
    : "Не удалось загрузить данные";

  return (
    <section role="alert">
      <p style={{ color: "red" }}>{message}</p>
      <button onClick={onRetry}>Повторить</button>
    </section>
  );
}