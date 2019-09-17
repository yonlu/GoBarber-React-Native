import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.gobarber.tech',
});

export default api;
