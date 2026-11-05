import { useState, useEffect } from "react";

export function useLoad(loadFn: (key: any, signal: AbortSignal) => Promise<any>, key: any) {
  const [state, setState] = useState({
    data: null as any,
    error: null as any,
    loading: true,
  });
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    const controller = new AbortController();
    setState({ data: null, error: null, loading: true });

    async function start() {
      try {
        const data = await loadFn(key, controller.signal);
        if (!controller.signal.aborted) {
          setState({ data, error: null, loading: false });
        }
      } catch (error: any) {
        if (!controller.signal.aborted) {
          setState({ data: null, error, loading: false });
        }
      }
    }

    start();
    return () => controller.abort();
  }, [loadFn, key, attempt]);

  const retry = () => setAttempt((n) => n + 1);

  return { ...state, retry };
}