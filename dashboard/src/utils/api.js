import axios from 'axios';

   const api = axios.create({
     baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000',
   });

   // Опционально: добавление интерцептора для обработки ошибок или токенов
   api.interceptors.request.use(config => {
     // Здесь можно добавить авторизационные заголовки (например, токен JWT)
     return config;
   }, error => {
     return Promise.reject(error);
   });

   export default api;