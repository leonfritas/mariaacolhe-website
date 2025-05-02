// src/service/UsuarioService.ts
import api from "./API";

export const getUsers = () => api.get('/usuario');
export const getUserById = (id: number) => api.get(`/usuario/${id}`);
export const createUser = (data: any) => api.post('/usuario', data);
export const updateUser = (data: any) => api.put('/usuario/', data);
export const deleteUser = (id: number) => api.delete(`/usuario/${id}`);

export const loginUser = (credentials: { email: string; senha: string }) => 
  api.post('/usuario/login', {
    email: credentials.email,
    senha: credentials.senha
  });