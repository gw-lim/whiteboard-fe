import { useMutation, useQuery } from '@tanstack/react-query';
import { instance } from './config/default';

const signIn = async (props: { username: string; password: string }) => {
  const { data } = await instance.post<{ accessToken: string }>(
    '/signin',
    props,
  );
  return data;
};

export const useSignIn = () => {
  return useMutation({ mutationFn: signIn });
};

const signUp = async (props: {
  username: string;
  password: string;
  name: string;
  role: RoleType;
  studentId?: string;
}) => {
  await instance.post<{ accessToken: string }>('/signup', props);
  const data = await signIn({
    username: props.username,
    password: props.password,
  });
  return data;
};

export const useSignUp = () => {
  return useMutation({ mutationFn: signUp });
};

const checkDuplicateUsername = async (username: string) => {
  const res = await instance.post<{ accessToken: string }>('/signup', {
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
