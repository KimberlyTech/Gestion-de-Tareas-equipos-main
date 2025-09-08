import api from './api';

export async function getBoards() {
  const { data } = await api.get('/api/boards');
  return data; // ajusta al shape real que devuelve tu API
}
