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

  return (
    <header className='flex items-center border-b border-[#dcdcdc] pl-28 text-28'>
      {title}
    </header>
  );
};

export default Header;
