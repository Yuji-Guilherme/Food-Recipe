import axios, { AxiosError } from 'axios';

const api = axios.create({
  baseURL: 'https://www.themealdb.com/api/json/v1/1/'
});

axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (err) {
    if (err instanceof AxiosError) {
      console.log(err);
      return Promise.reject(err);
    }
  }
);

export { api };
