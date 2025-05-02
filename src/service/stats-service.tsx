import api from './API';

export const getStats = () => api.get('/estatistica');
export const getStatById = (id: number) => api.get(`/estatistica/${id}`);
export const createStat = (data: []) => api.post('/estatistica', data);
export const updateStat = (data: []) => api.put('/estatistica/', data);
export const deleteStat = (id: number) => api.delete(`/estatistica/${id}`);
