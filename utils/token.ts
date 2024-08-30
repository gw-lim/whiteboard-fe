import { Cookies } from 'react-cookie';

const ACCESS_TOKEN = 'accessToken';

const cookies = new Cookies();

export const getToken = () => {
  const accessToken = cookies.get(ACCESS_TOKEN);
  return accessToken;
};

export const setToken = (accessToken: string) => {
  cookies.set(ACCESS_TOKEN, accessToken);
};

export const removeToken = () => {
  cookies.remove(ACCESS_TOKEN);
};
