import { privateAxiosInstance } from '../api/axiosConfig/axios.config';
import { useEffect } from 'react';
import useRefreshToken from './useRefreshToken';
import { useAuth } from './useAuth';
import { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

const useAxiosPrivate = () => {
  const refresh = useRefreshToken();
  const { auth } = useAuth();

  useEffect(() => {
    const requestIntercept = privateAxiosInstance.interceptors.request.use(
      (config) => {
        if (!config.headers.Authorization) {
          config.headers.Authorization = `Bearer ${auth?.access}`;
        }
        return config;
      },
      async (error: AxiosError) => Promise.reject(error),
    );

    const responseIntercept = privateAxiosInstance.interceptors.response.use(
      (response: AxiosResponse) => response,
      async (error: AxiosError) => {
        console.log('error', error);
        if (error.response?.status === 403) {
          console.log('403 error');

          const newAccessToken = await (await refresh)();
          // Retry the original request with the new token
          const originalRequest = error.config;
          originalRequest!.headers.Authorization = `Bearer ${newAccessToken}`;
          return await privateAxiosInstance(originalRequest!);
        }
        return Promise.reject(error);
      },
    );

    return () => {
      privateAxiosInstance.interceptors.request.eject(requestIntercept);
      privateAxiosInstance.interceptors.response.eject(responseIntercept);
    };
  }, [auth, refresh]);
  return privateAxiosInstance;
};
export default useAxiosPrivate;
