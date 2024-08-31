import { useRouter } from 'next/router';
import { useEffect } from 'react';
import useAuth from './useAuth';

const ALLOWED_PATH = ['/', '/signup'];

const useRedirect = () => {
  const { getAuth } = useAuth();
  const { accessToken } = getAuth();
  const router = useRouter();

  useEffect(() => {
    if (accessToken) {
      return;
    }
    if (!ALLOWED_PATH.includes(router.pathname)) {
      router.push('/');
    }
  }, []);
};

export default useRedirect;
