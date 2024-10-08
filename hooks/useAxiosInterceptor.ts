import { authInstance } from '@/services/config/default';
import { AxiosError } from 'axios';
import { useRouter } from 'next/router';
import { useLayoutEffect } from 'react';
import toast from 'react-hot-toast';
import useAuth from './useAuth';

const useAxiosInterceptor = () => {
  const router = useRouter();
  const { getAuth, removeAuth } = useAuth();
  const { accessToken } = getAuth();

  useLayoutEffect(() => {
    if (!accessToken) {
      return;
    }

    const requestInterceptor = authInstance.interceptors.request.use(
      (config) => {
        config.headers.Authorization = `Bearer ${accessToken}`;
        return config;
      },
    );

    const responseInterceptor = authInstance.interceptors.response.use(
      (res) => res,
      (error: AxiosError) => {
        console.error(error);

        if (error.status === 401) {
          removeAuth();
          router.push('/');
          toast.error('다시 로그인 해주세요.');
        }
      },
    );

    return () => {
      authInstance.interceptors.request.eject(requestInterceptor);
      authInstance.interceptors.response.eject(responseInterceptor);
    };
  }, [accessToken]);
};

export default useAxiosInterceptor;
