import axios from 'axios';

const base = (import.meta.env.VITE_API_BASE || '').replace(/\/+$/, ''); // sin "/" final

const api = axios.create({
  baseURL: base,               // dev: http://localhost:5000 | prod: Render
  timeout: 15000,
  headers: { 'Content-Type': 'application/json' },
  // withCredentials: true, // activa si usas cookies/sesiones
});

export default api;
