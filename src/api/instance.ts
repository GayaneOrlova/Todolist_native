import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const instance = axios.create({
  baseURL: 'http://localhost:8000',
});

instance.interceptors.request.use(config => {
  const token = AsyncStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default instance;
