import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import URLS from '../endpoints/endpoints';

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: URLS.BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

export const privateAxiosInstance: AxiosInstance = axios.create({
  baseURL: URLS.BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

// axiosInstance.interceptors.request.use((config: AxiosRequestConfig) => {
//   if (isTokenExpiring(accessToken)) {
//     return refreshToken()
//       .then((newAccessToken: UserAccessToken) => {
//         config.headers.Authorization = `Bearer ${newAccessToken.token}`;
//         return config;
//       })
//       .catch((error) => {
//         // Handle refresh token error
//         throw error;
//       });
//   }
//   return config;
// });

// axiosInstance.interceptors.response.use(
//     (response: AxiosResponse) => {
//       console.log("response", response);
//       return response;
//     },
//     async (error) => {
//       console.log("error", error);
//       if (error.response.status === 403) {
//         console.log("403 error");
//         try {
//           const newAccessToken = await refreshToken();
//           // Retry the original request with the new token
//           const originalRequest = error.config;
//           // originalRequest.headers.Authorization = `Bearer ${newAccessToken.token}`;
//           return await axios(originalRequest);
//         } catch (error_1) {
//           // Handle refresh token error or redirect to login
//           throw error_1;
//         }
//       }
//       return Promise.reject(error);
//     }
//   );
