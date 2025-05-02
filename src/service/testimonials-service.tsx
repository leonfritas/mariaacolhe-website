import api from './API';

export const getTestimonials = () => api.get('/depoimento');
export const getTestimonialById = (id: number) => api.get(`/depoimento/${id}`);
export const createTestimonial = (data: []) => api.post('/depoimento', data);
export const updateTestimonial = (data: []) => api.put('/depoimento/', data);
export const deleteTestimonial = (id: number) => api.delete(`/depoimento/${id}`);
