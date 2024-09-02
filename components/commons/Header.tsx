import useAuth from '@/hooks/useAuth';
import { IconHamburger } from '@/public/icons';
import { useGetCourse } from '@/services/course';
import { useGetUser } from '@/services/user';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ReactNode, useEffect, useState } from 'react';

const Header = () => {
  const router = useRouter();
  const currPath = router.pathname;
  const courseId =
    (Array.isArray(router.query.id) ? router.query.id[0] : router.query.id) ??
    '';
  const { data: course } = useGetCourse(courseId);

  const getTitle = () => {
    switch (currPath) {
      case '/stream':
        return '활동 스트림';
      case '/course':
        return '코스';
      case '/courses':
        return '모든 강의';
      case '/course/[id]':
        const parsedTitle = course.name
          ? `${course.name} (${course.professor.name})`
          : '';
        return parsedTitle;
    }
  };

  const title = getTitle();

  const { getAuth } = useAuth();
  const { user } = getAuth();

  const [parsedProfile, setParsedProfile] = useState('');
  useEffect(() => {
    const newParsedProfile =
      user?.role === 'PROFESSOR'
        ? `${user?.name} (교수)`
        : `${user?.name} (${user?.studentId})`;
    setParsedProfile(newParsedProfile);
  }, [user]);

  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <header className='z-floating flex items-center justify-between border-b border-[#dcdcdc] bg-gray-200/20 px-28 text-white'>
        <h1 className='line-clamp-1 text-28 md:text-24'>{title}</h1>
        <div className='flex gap-16'>
          <div className='shrink-0 break-keep bg-black/25 p-12'>
            {parsedProfile}
          </div>
          <button
            onClick={() => setOpenMenu((prev) => !prev)}
            className='w-24 shrink-0'
          >
            <IconHamburger />
          </button>
        </div>
      </header>
      {openMenu && <Menu closeMenu={() => setOpenMenu(false)} />}
    </>
  );
};

export default Header;

const Menu = (props: { closeMenu: () => void }) => {
  const { closeMenu } = props;
  return (
    <>
      <div
        onClick={closeMenu}
        className='animate-slideDown fixed top-92 z-floating w-[100dvw] bg-gray-200/20'
      >
        <MenuButton href='/stream'>활동 스트림</MenuButton>
        <MenuButton href='/course'>코스</MenuButton>
        <MenuButton href='/courses'>모든 강의</MenuButton>
      </div>
      <div
        onClick={closeMenu}
        className='fixed z-nav h-[100dvh] w-[100dvw] bg-black/50'
      />
    </>
  );
};

const MenuButton = (props: { children: ReactNode; href: string }) => {
  const { children, href } = props;
  return (
    <Link
      href={href}
      className='flex h-60 w-full items-center justify-center border-b border-[#dcdcdc]/50 px-12 text-16 text-white'
    >
      {children}
    </Link>
  );
};
