import SignUpFunnel from '@/components/pages/signup/SignUpFunnel';
import usePreventScroll from '@/hooks/usePreventScroll';
import Image from 'next/image';
import { FormProvider, useForm } from 'react-hook-form';

export interface SignUpFormValues {
  username: string;
  password: string;
  passwordCheck: string;
  name: string;
  role: RoleType | undefined;
  studentId?: string;
}

const SignUp = () => {
  usePreventScroll();
  const methods = useForm<SignUpFormValues>({
    defaultValues: {
      username: '',
      password: '',
      passwordCheck: '',
      name: '',
      role: undefined,
      studentId: '',
    },
  });

  return (
    <main className='relative h-[100dvh] w-[100dvw]'>
      <h1 className='sr-only'>White Board 회원가입</h1>
      <FormProvider {...methods}>
        <SignUpFunnel />
      </FormProvider>
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
