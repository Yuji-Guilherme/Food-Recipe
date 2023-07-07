import axios, { AxiosError } from 'axios';

const api = axios.create({
  baseURL: 'https://www.themealdb.com/api/json/v1/1/'
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error instanceof AxiosError && error.name != 'CanceledError') {
      throw new Error(error.message);
    }
  }
);

export { api };
