import { useCookies } from 'react-cookie';

const ACCESS_TOKEN = 'accessToken';
const USER = 'user';
const LOGIN_TIME = 3600 * 1000 * 3; // 3시간

const useAuth = () => {
  const [cookie, setCookie, removeCookie] = useCookies([ACCESS_TOKEN, USER]);

  const getAuth = () => {
    const accessToken: string | undefined = cookie[ACCESS_TOKEN];
    const user: UserType | undefined = cookie[USER];
    return { accessToken, user };
  };

  const setAuth = async (props: { accessToken: string; user: UserType }) => {
    const { accessToken, user } = props;
    const expiration = new Date(Date.now() + LOGIN_TIME);
    const cookieOptions = {
      secure: false,
      sameSite: 'lax',
      path: '/',
      expires: expiration,
    } as const;

    setCookie(ACCESS_TOKEN, accessToken, cookieOptions);
    setCookie(USER, user, cookieOptions);
  };

  const removeAuth = () => {
    removeCookie(ACCESS_TOKEN);
    removeCookie(USER);
  };

  return { getAuth, setAuth, removeAuth };
};

export default useAuth;
