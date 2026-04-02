import axios from 'axios';
import { useAuthStore } from './store/authStore';
import Cookies from 'js-cookie';

export const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api/v1',
});

apiClient.interceptors.request.use((config) => {
  const token = Cookies.get('bizrent_token') || useAuthStore.getState().token;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
