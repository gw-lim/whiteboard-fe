import { IconDoubleArrowLeft, IconLogo } from '@/public/icons';
import { removeToken } from '@/utils/token';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';

const NavBar = () => {
  const router = useRouter();
  const handleLogout = () => {
    removeToken();
    router.push('/');
  };

  return (
    <nav className='z-nav row-span-2 flex flex-col border-r border-[#dcdcdc] bg-gray-200/20'>
      <div className='flex h-112 items-center gap-4 pl-12'>
        <Link href='/stream'>
          <IconLogo />
        </Link>
      </div>
      <div className='flex flex-col gap-8 px-12 pt-8'>
        <NavButton href='/stream'>활동 스트림</NavButton>
        <NavButton href='/course'>코스</NavButton>
        <NavButton href='/courses'>모든 강의</NavButton>
      </div>
      <button
        onClick={handleLogout}
        className='mb-16 ml-12 mt-auto flex items-center gap-8 text-white'
      >
        <IconDoubleArrowLeft />
        로그아웃
      </button>
    </nav>
  );
};

export default NavBar;

const NavButton = (props: { href: string; children: ReactNode }) => {
  const { href, children } = props;
  const router = useRouter();
  const currPath = router.pathname;
  const selected = currPath === href;

  return (
    <Link
      href={href}
      className={`flex h-60 w-full items-center rounded-4 p-12 text-18 text-white hover:bg-[#2f3e7f92] ${selected ? 'bg-[#2f3e7f92]' : ''}`}
    >
      {children}
    </Link>
  );
};
