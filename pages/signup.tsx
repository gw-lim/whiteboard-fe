import SignUpFunnel from '@/components/pages/signup/SignUpFunnel';
import Image from 'next/image';

const SignUp = () => {
  return (
    <main className='relative h-[100dvh] w-[100dvw]'>
      <h1 className='sr-only'>White Board 회원가입</h1>
      <SignUpFunnel />
      <Image
        fill
        alt='바다 사진'
        src={'/images/main.jpg'}
        className='object-cover'
      />
    </main>
  );
};

export default SignUp;
