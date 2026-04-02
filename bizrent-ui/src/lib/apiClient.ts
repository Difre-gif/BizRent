import axios from 'axios';
import { useAuthStore } from './store/authStore';
import Cookies from 'js-cookie';

export const apiClient = axios.create({
  // Use a relative path so the request goes through the Next.js proxy we just created
  baseURL: '/api/v1',
});

apiClient.interceptors.request.use((config) => {
  const token = Cookies.get('bizrent_token') || useAuthStore.getState().token;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});