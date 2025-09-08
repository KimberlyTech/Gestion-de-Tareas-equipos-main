import api from './api';

export interface LoginPayload { email: string; password: string }
export async function login(payload: LoginPayload) {
  const { data } = await api.post('/api/auth/login', payload);
  return data;
}
