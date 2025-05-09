import api from './API';


type FaqType = {
    idFaq: number;
    pergunta: string;
    resposta: string;
  };

export const getFaqs = () => api.get('/faq');
export const getFaqById = (id: number) => api.get(`/faq/${id}`);

export const createFaq = (data: Omit<FaqType, 'idFaq'>) => {
    return api.post('/faq', {
      pergunta: data.pergunta,
      resposta: data.resposta
    });
  };
export const deleteFaq = (id: number) => api.delete(`/faq/${id}`);
export const updateFaq = (data: any) => api.put(`/faq`, data);