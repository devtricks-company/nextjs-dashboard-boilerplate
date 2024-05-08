'use client';
import { axiosInstance } from '../api/axiosConfig/axios.config';
import { useAuth } from './useAuth';
import URLS from '../api/endpoints/endpoints';
import { RefreshTokenResponse } from '../types/types';
const useRefreshToken = async () => {
  const { auth, setAuth } = useAuth();
  const refresh = async () => {
    const response = await axiosInstance.post<RefreshTokenResponse>(
      URLS.REFRESH_TOKEN_URL,
      JSON.stringify({ refresh: auth?.refresh }),
    );

    setAuth!((prev) => {
      console.log(JSON.stringify(prev));
      console.log(response.data.access);
      return { ...prev, access: response.data.access };
    });
    return response.data.access;
  };

  return refresh;
};

export default useRefreshToken;
