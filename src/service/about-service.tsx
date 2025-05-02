import api from './API';

export const getAbouts = () => api.get('/sobre');
export const getAboutById = (id: number) => api.get(`/sobre/${id}`);
export const createAbout = (data: []) => api.post('/sobre', data);
export const updateAbout = (data: []) => api.put('/sobre/', data);
export const deleteAbout = (id: number) => api.delete(`/sobre/${id}`);
