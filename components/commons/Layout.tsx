import usePreventScroll from '@/hooks/usePreventScroll';
import { ReactNode } from 'react';
import Header from './Header';
import NavBar from './NavBar';

const Layout = (props: { children: ReactNode }) => {
  const { children } = props;
  usePreventScroll();
  return (
    <div className='grid h-[100dvh] w-[100dvw] grid-cols-[240px_1fr] grid-rows-[112px_1fr]'>
      <NavBar />
      <Header />
      <main className='w-full overflow-y-scroll bg-[#f8f8f8]'>{children}</main>
    </div>
  );
};

export default Layout;
