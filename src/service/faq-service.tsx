import api from './API';

export const getFaqs = () => api.get('/faq');
export const getFaqById = (id: number) => api.get(`/faq/${id}`);
export const createFaq = (data: []) => api.post('/faq', data);
export const updateFaq = (data: []) => api.put('/faq/', data);
export const deleteFaq = (id: number) => api.delete(`/faq/${id}`);
