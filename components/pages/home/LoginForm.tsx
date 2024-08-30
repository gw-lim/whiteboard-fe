import InputContainer from '@/components/commons/InputContainer';
import Link from 'next/link';
import { useForm } from 'react-hook-form';

interface SignInFormValues {
  username: string;
  password: string;
}

const LoginForm = () => {
  const { control } = useForm<SignInFormValues>();

  return (
    <form className='absolute left-[10%] top-1/2 z-floating h-320 w-400 -translate-y-1/2 bg-white/70 px-12 pt-32'>
      <h1 className='sr-only'>White Board</h1>
      <InputContainer name='username' control={control}>
        아이디
      </InputContainer>
      <InputContainer name='password' control={control}>
        비밀번호
      </InputContainer>
      <button className='mt-12 h-40 w-full rounded-4 border border-slate-800 bg-gray-400/20 text-slate-800'>
        로그인
      </button>
      <div className='mt-20 text-12'>
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
