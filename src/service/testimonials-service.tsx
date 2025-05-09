import api from './API';

type TestimonialsType = {
    idDepoimento: number;
    nomeDepoente: string;
    idadeDepoente: number;
    textoDepoimento: string;
  };

export const getTestimonials = () => api.get('/depoimento');
export const getTestimonialById = (id: number) => api.get(`/depoimento/${id}`);
export const updateTestimonial = (data: any) => api.put(`/depoimento`, data);
export const deleteTestimonial = (id: number) => api.delete(`/depoimento/${id}`);

export const createTestimonial = (data: Omit<TestimonialsType, 'idDepoimento'>) => {
    return api.post('/depoimento', {
      nomeDepoente: data.nomeDepoente,
      idadeDepoente: data.idadeDepoente,
      textoDepoimento: data.textoDepoimento
    });
  };