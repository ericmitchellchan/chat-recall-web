const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:8081";

export async function apiFetch(path: string, options?: RequestInit) {
  const url = `${API_URL}${path}`;
  const response = await fetch(url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers,
    },
  });
  if (!response.ok) {
    throw new Error(`API error: ${response.status} ${response.statusText}`);
  }
  return response.json();
}
