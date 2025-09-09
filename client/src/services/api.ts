// client/src/services/api.ts
import axios from 'axios';

const BASE = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

const api = axios.create({
  baseURL: BASE,
  withCredentials: true, // si usas cookies/JWT
});

// Interceptor para token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers = config.headers ?? {};
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api; // <-- import api from '@/services/api'
