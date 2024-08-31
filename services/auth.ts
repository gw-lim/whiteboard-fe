import useAuth from '@/hooks/useAuth';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { instance } from './config/default';

const signIn = async (props: { username: string; password: string }) => {
  const { data } = await instance.post<{ accessToken: string; user: UserType }>(
    '/auth/signin',
    props,
  );
  return data;
};

export const useSignIn = (onError: () => void) => {
  const router = useRouter();
  const { setAuth } = useAuth();
  return useMutation({
    mutationFn: signIn,
    onSuccess: (data) => {
      setAuth(data);
      router.push('/stream');
    },
    onError,
  });
};

const signUp = async (props: {
  username: string;
  password: string;
  name: string;
  role: RoleType;
  studentId?: string;
}) => {
  await instance.post<{ accessToken: string }>('/auth/signup', props);
  const data = await signIn({
    username: props.username,
    password: props.password,
  });
  return data;
};

export const useSignUp = () => {
  const router = useRouter();
  const { setAuth } = useAuth();
  return useMutation({
    mutationFn: signUp,
    onSuccess: (data) => {
      setAuth(data);
      router.push('/stream');
    },
  });
};

const checkDuplicateUsername = async (username: string) => {
  const res = await instance.post<{ accessToken: string }>('/auth/username', {
    username,
  });
  if (res.status === 200) {
    return false;
  } else {
    return true;
  }
};

export const useCheckDuplicateUsername = (username: string) => {
  return useQuery({
    queryKey: ['duplicateUsername', username],
    queryFn: () => checkDuplicateUsername(username),
  });
};
