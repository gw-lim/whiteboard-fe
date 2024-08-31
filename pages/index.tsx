import SignInForm from '@/components/pages/home/SignInForm';
import usePreventScroll from '@/hooks/usePreventScroll';
import Image from 'next/image';

const HomePage = () => {
  usePreventScroll();
  return (
    <main className='relative h-[100dvh] w-[100dvw]'>
      <h1 className='sr-only'>White Board</h1>
      <SignInForm />
      <Image
        fill
        alt='바다 사진'
        src={'/images/main.jpg'}
        className='object-cover'
      />
    </main>
  );
};

export default HomePage;
