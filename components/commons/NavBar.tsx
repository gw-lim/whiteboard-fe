import { IconLogo } from '@/public/icons';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';

const NavBar = () => {
  return (
    <nav className='row-span-2 flex flex-col border-r border-[#dcdcdc]'>
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
      className={`flex h-60 w-full items-center rounded-4 p-12 text-18 hover:bg-[#dde3ff] ${selected ? 'bg-[#dde3ff]' : ''}`}
    >
      {children}
    </Link>
  );
};
