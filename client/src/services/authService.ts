// client/src/services/authService.ts
import api from './api'

export interface AuthUser {
  _id: string
  nombre: string
  email: string
}

export interface LoginResponse {
  token: string
  user: AuthUser
}

export async function login(email: string, password: string): Promise<AuthUser> {
  const { data } = await api.post<LoginResponse>('/auth/login', { email, password })
  // guarda el token para que los requests siguientes lo usen
  localStorage.setItem('token', data.token)
  return data.user
}

export async function register(nombre: string, email: string, password: string): Promise<AuthUser> {
  const { data } = await api.post<LoginResponse>('/auth/register', { nombre, email, password })
  localStorage.setItem('token', data.token)
  return data.user
}

export function logout() {
  localStorage.removeItem('token')
}
