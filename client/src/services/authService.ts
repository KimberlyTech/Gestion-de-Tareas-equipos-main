// client/src/services/authService.ts
import api from './api';

export interface AuthUser {
  id: string;
  nombre: string;
  email: string;
}

export interface LoginResponse {
  token: string;
  user: AuthUser;
}

export async function login(email: string, password: string): Promise<AuthUser> {
  const { data } = await api.post<LoginResponse>('/auth/login', { email, password });
  // Guarda el token para que los requests siguientes lo usen
  localStorage.setItem('token', data.token);
  return data.user;
}

export async function register(nombre: string, email: string, password: string): Promise<AuthUser> {
  const { data } = await api.post<LoginResponse>('/auth/register', { nombre, email, password });
  localStorage.setItem('token', data.token);
  return data.user;
}

// Función para obtener usuarios
export async function getUsers(): Promise<AuthUser[]> {
  const { data } = await api.get<AuthUser[]>('/users');
  return data;
}
