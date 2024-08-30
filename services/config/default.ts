import axios from 'axios';
import { Cookies } from 'react-cookie';

const cookies = new Cookies();

export const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  timeout: 20000,
});

export const authInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  timeout: 20000,
});

authInstance.interceptors.request.use(function (config) {
  const accessToken = cookies.get('accessToken') ?? '';

  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});
