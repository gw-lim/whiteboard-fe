import { instance } from './config/default';

export const signIn = async (body: { username: string; password: string }) => {
  const { data } = await instance.post<{ accessToken: string }>(
    '/signin',
    body,
  );
  return data;
};

export const signUp = async (body: {
  username: string;
  password: string;
  name: string;
  role: RoleType;
  studentId?: string;
}) => {
  await instance.post<{ accessToken: string }>('/signup', body);
};

export const checkDuplicateUsername = async (username: string) => {
  const res = await instance.post<{ accessToken: string }>('/signup', {
    username,
  });

  if (res.status === 200) {
    return false;
  } else {
    return true;
  }
};
