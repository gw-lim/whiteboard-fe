import { useGetUser } from '@/services/user';
import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter();
  const currPath = router.pathname;

  const getTitle = () => {
    switch (currPath) {
      case '/stream':
        return '활동 스트림';
      case '/course':
        return '코스';
      case '/courses':
        return '모든 강의';
    }
  };

  const title = getTitle();

  const { data: user } = useGetUser();
  const parsedProfile =
    user?.role === 'PROFESSOR'
      ? `${user?.name} (교수)`
      : `${user?.name} (${user?.studentId})`;

  return (
    <header className='z-nav flex items-center justify-between border-b border-[#dcdcdc] bg-gray-200/20 px-28 text-white'>
      <h1 className='text-28'>{title}</h1>
      {user && <div className='bg-black/25 p-12 text-14'>{parsedProfile}</div>}
    </header>
  );
};

export default Header;
