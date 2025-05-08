import api from './API';

type AboutType = {
    idSobre: number;
    titulo: string;
    subTitulo: string;
    texto: string;
  };

export const getAbouts = () => api.get('/sobre');
export const getAboutById = (id: number) => api.get(`/sobre/${id}`);
export const createAbout = (data: Omit<AboutType, 'idSobre'>) => {
    return api.post('/sobre', {
      titulo: data.titulo,
      subTitulo: data.subTitulo,
      texto: data.texto
    });
  };
export const deleteAbout = (id: number) => api.delete(`/sobre/${id}`);
export const updateAbout = (data: any) => api.put(`/sobre`, data);

