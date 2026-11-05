import { BASE_URL } from "./config";

export async function getJSON(path: string, signal?: AbortSignal) {
  const response = await fetch(BASE_URL + path, { signal });

  if (!response.ok) {
    const error = new Error("HTTP " + response.status) as Error & { status: number };
    error.status = response.status;
    throw error;
  }

  return response.json();
}