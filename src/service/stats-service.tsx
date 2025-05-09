import api from './API';

type StatsType = {
    idEstatistica: number;
    numeroEstatistica: string;
    legendaEstatistica: string;
  };

export const getStats = () => api.get('/estatistica');
export const getStatById = (id: number) => api.get(`/estatistica/${id}`);
export const createStat = (data: Omit<StatsType, 'idEstatistica'>) => {
    return api.post('/estatistica', {
      numeroEstatistica: data.numeroEstatistica,
      legendaEstatistica: data.legendaEstatistica
    });
  };
export const deleteStat = (id: number) => api.delete(`/estatistica/${id}`);
export const updateStat = (data: any) => api.put(`/estatistica`, data);
