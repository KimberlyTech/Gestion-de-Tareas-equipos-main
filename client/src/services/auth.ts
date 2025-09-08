import api from './api';

export interface RegisterPayload {
  name: string;
  email: string;
  password: string;
}

export async function register(payload: RegisterPayload) {
  // El backend espera "nombre", no "name"
  const { data } = await api.post('/api/auth/register', {
    nombre: payload.name,
    email: payload.email,
    password: payload.password,
  });
  return data;
}
