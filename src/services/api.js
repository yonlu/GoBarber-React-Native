import axios from 'axios';

const api = axios.create({
  baseURL: '192.168.5.174:3333',
});

export default api;
