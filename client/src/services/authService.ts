import axios from 'axios';

const base = (import.meta.env.VITE_API_BASE || '').replace(/\/+$/, '');

const api = axios.create({
  baseURL: base, // dev: http://localhost:5000 | prod: https://ticketslonewolf.onrender.com
  timeout: 15000,
  headers: { 'Content-Type': 'application/json' },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default api;
