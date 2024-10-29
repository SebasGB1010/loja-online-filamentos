// frontend/src/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001/api', // Asegúrate de que esta URL sea correcta
});

export default api;