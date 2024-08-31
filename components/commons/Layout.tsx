import usePreventScroll from '@/hooks/usePreventScroll';
import Image from 'next/image';
import { ReactNode } from 'react';
import Header from './Header';
import NavBar from './NavBar';

const Layout = (props: { children: ReactNode }) => {
  const { children } = props;
  usePreventScroll();
  return (
    <div className='relative grid h-[100dvh] w-[100dvw] grid-cols-[240px_1fr] grid-rows-[112px_1fr]'>
      <Image
        src='/images/main.jpg'
        fill
        className='object-cover'
        alt='바다 사진'
      />
      <NavBar />
      <Header />
      <main className='relative w-full overflow-y-scroll bg-gray-400/20'>
        {children}
      </main>
    </div>
  );
};

export default Layout;
