import { authInstance } from '@/services/config/default';
import { removeToken } from '@/utils/token';
import { AxiosError } from 'axios';
import { useRouter } from 'next/router';
import { useLayoutEffect } from 'react';
import { Cookies } from 'react-cookie';
import toast from 'react-hot-toast';

const cookies = new Cookies();

const useAxiosInterceptor = () => {
  const router = useRouter();

  useLayoutEffect(() => {
    const requestInterceptor = authInstance.interceptors.request.use(
      (config) => {
        const accessToken = cookies.get('accessToken') ?? '';
        if (accessToken) {
          config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
      },
    );

    const responseInterceptor = authInstance.interceptors.response.use(
      (res) => res,
      (error: AxiosError) => {
        console.error(error);

        if (error.status === 401) {
          removeToken();
          router.push('/');
          toast.error('다시 로그인 해주세요.');
        }
      },
    );

    return () => {
      authInstance.interceptors.request.eject(requestInterceptor);
      authInstance.interceptors.response.eject(responseInterceptor);
    };
  }, []);
};

export default useAxiosInterceptor;
