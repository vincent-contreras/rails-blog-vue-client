// src/composables/useAxios.ts
import axios from 'axios';
import { useRouter } from 'vue-router';

export function useAxios() {
  const router = useRouter();

  const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 10000,
  });


  axiosInstance.interceptors.response.use(
    (res) => res,
    (error) => {
      if (error.response && error.response.status === 401) {
        // Use the router to navigate to the 'register' route on 401 error
        router.push("/LoginPage");
      }
      return Promise.reject(error);
    }
  );

  return axiosInstance;
}
