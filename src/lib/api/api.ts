import axios, { InternalAxiosRequestConfig, AxiosResponse } from 'axios';

const API = axios.create({ 'baseURL': process.env.NEXT_PUBLIC_API_URL });

API.interceptors.request.use(function (config: InternalAxiosRequestConfig) {
  if (!config.headers.has('Content-Type')) {
    config.headers.set('Content-Type', 'application/json');
  }
  if (!config.headers['Content-Type']) {
    config.headers['Content-Type'] = 'application/json';
  }
  const token = sessionStorage.getItem('token');

  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
});

API.interceptors.response.use(
  async (response: AxiosResponse) => {
    if (!response.data.result) {
      throw response.data;
    }
    const newToken = response.headers['x-auth-token'];

    if (newToken) {
      sessionStorage.setItem('token', newToken);
    }
    return response.data;
  },
  error => Promise.reject(error?.response?.data || error)
);

export default API;
