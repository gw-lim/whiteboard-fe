import useFunnel from '@/hooks/useFunnel';
import { SignUpFormValues } from '@/pages/signup';
import { useSignUp } from '@/services/auth';
import { SubmitHandler, useFormContext } from 'react-hook-form';
import AccountStep from './steps/AccountStep';
import PersonalInfoStep from './steps/PersonalInfoStep';
import RoleStep from './steps/RoleStep';

const SIGN_UP_STEPS = ['문의자 정보', '사용 정보', '기타 정보'] as const;

const SignUpFunnel = () => {
  const { Funnel, Step, handleNextStep, handlePrevStep } =
    useFunnel(SIGN_UP_STEPS);

  const { handleSubmit } = useFormContext<SignUpFormValues>();

  const signIn = useSignUp();
  const handleSignUp: SubmitHandler<SignUpFormValues> = (formValues) => {
    console.log(formValues);
  };

  return (
    <form
      onSubmit={handleSubmit(handleSignUp)}
      className='absolute left-[10%] top-1/2 z-floating h-360 w-400 -translate-y-1/2 bg-white/70 px-12 py-32'
    >
      <Funnel>
        <Step name={SIGN_UP_STEPS[0]}>
          <RoleStep handleNextStep={handleNextStep} />
        </Step>
        <Step name={SIGN_UP_STEPS[1]}>
          <PersonalInfoStep
            handleNextStep={handleNextStep}
            handlePrevStep={handlePrevStep}
          />
        </Step>
        <Step name={SIGN_UP_STEPS[2]}>
          <AccountStep handleNextStep={handleNextStep} />
        </Step>
      </Funnel>
    </form>
  );
};

export default SignUpFunnel;
