import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_ENDPOINT_URL,
  withCredentials: true, 
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;