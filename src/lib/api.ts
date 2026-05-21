type TokenProvider = () => Promise<string | null> | string | null;

let getTokenFn: TokenProvider | null = null;
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:4000/api";

export function setTokenProvider(fn: TokenProvider) {
  getTokenFn = fn;
}

async function request(path: string, options: RequestInit = {}) {
  const token = getTokenFn ? await getTokenFn() : null;
  const isForm = options.body instanceof FormData;
  const response = await fetch(`${API_URL}${path}`, {
    ...options,
    headers: {
      ...(isForm ? {} : { "Content-Type": "application/json" }),
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...(options.headers || {}),
    },
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(data.error || "Request failed");
  return data;
}

const qs = (params: Record<string, unknown> = {}) => {
  const search = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== "") search.set(key, String(value));
  });
  const value = search.toString();
  return value ? `?${value}` : "";
};

const crud = (base: string) => ({
  list: (params?: Record<string, unknown>) => request(`${base}${qs(params)}`),
  get: (id: string, params?: Record<string, unknown>) => request(`${base}/${id}${qs(params)}`),
  create: (body: Record<string, unknown>) => request(base, { method: "POST", body: JSON.stringify(body) }),
  update: (id: string, body: Record<string, unknown>) => request(`${base}/${id}`, { method: "PATCH", body: JSON.stringify(body) }),
  delete: (id: string) => request(`${base}/${id}`, { method: "DELETE" }),
});

export const postsApi = crud("/posts");
export const caseStudiesApi = crud("/case-studies");
export const mediaApi = {
  ...crud("/media"),
  upload: (file: File, altText = "") => {
    const form = new FormData();
    form.append("file", file);
    form.append("alt_text", altText);
    return request("/media", { method: "POST", body: form });
  },
};
export const usersApi = {
  list: () => request("/users"),
  me: () => request("/users/me"),
  invite: (body: { email: string; role: string }) => request("/users/invite", { method: "POST", body: JSON.stringify(body) }),
  updateRole: (id: string, role: string) => request(`/users/${id}/role`, { method: "PATCH", body: JSON.stringify({ role }) }),
  delete: (id: string) => request(`/users/${id}`, { method: "DELETE" }),
};
export const analyticsApi = {
  summary: (period = "30d") => request(`/analytics/summary?period=${period}`),
  timeseries: (period = "30d") => request(`/analytics/timeseries?period=${period}`),
  pages: (period = "30d") => request(`/analytics/pages?period=${period}`),
  sources: (period = "30d") => request(`/analytics/sources?period=${period}`),
};
