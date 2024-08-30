import InputContainer from '@/components/commons/InputContainer';
import Link from 'next/link';
import { useForm } from 'react-hook-form';

interface SigninFormValues {
  username: string;
  password: string;
}

const LoginForm = () => {
  const { control } = useForm<SigninFormValues>();

  return (
    <form className='z-floating w-400 h-320 absolute left-[10%] top-1/2 -translate-y-1/2 bg-white/70 px-12 pt-32'>
      <h1 className='sr-only'>White Board</h1>
      <InputContainer name='username' control={control}>
        아이디
      </InputContainer>
      <InputContainer name='password' control={control}>
        비밀번호
      </InputContainer>
      <button className='rounded-4 mt-12 h-40 w-full border border-gray-400 bg-gray-400/25 text-gray-700'>
        로그인
      </button>
      <div className='text-12 mt-20'>
        아직 회원이 아니신가요?{' '}
        <Link
          href={'/signup'}
          className='text-blue-500 underline underline-offset-1'
        >
          회원가입
        </Link>
        하러 가기
      </div>
      <div className='absolute bottom-8 right-12 text-[1rem] text-gray-500'>
        whiteboard made by gw-lim
      </div>
    </form>
  );
};

export default LoginForm;
