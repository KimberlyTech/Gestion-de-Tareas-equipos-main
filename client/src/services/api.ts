import axios from 'axios';

// Usar VITE_API_URL como variable oficial
const raw =
  import.meta.env.VITE_API_URL ??
  (typeof window !== 'undefined' && window.location.hostname.endsWith('onrender.com')
    ? 'https://ticketslonewolf.onrender.com'   // PRODUCCIÓN (backend en Render)
    : 'http://localhost:3000');                // DESARROLLO (backend local)

const base = raw.replace(/\/+$/, '');
console.log('[API base]', base);

const api = axios.create({
  baseURL: base,
  timeout: 15000,
  headers: { 'Content-Type': 'application/json' },
});

// Adjunta token si existe
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default api;
