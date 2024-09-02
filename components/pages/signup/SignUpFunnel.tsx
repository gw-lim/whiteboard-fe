import useFunnel from '@/hooks/useFunnel';
import { SignUpFormValues } from '@/pages/signup';
import { useSignUp } from '@/services/auth';
import { SubmitHandler, useFormContext } from 'react-hook-form';
import AccountStep from './steps/AccountStep';
import PersonalInfoStep from './steps/PersonalInfoStep';
import RoleStep from './steps/RoleStep';

const SIGN_UP_STEPS = ['역할 정보', '사용자 정보', '계정 정보'] as const;

const SignUpFunnel = () => {
  const { Funnel, Step, handleNextStep, handlePrevStep } =
    useFunnel(SIGN_UP_STEPS);

  const { handleSubmit } = useFormContext<SignUpFormValues>();

  const signUp = useSignUp();
  const handleSignUp: SubmitHandler<SignUpFormValues> = (formValues) => {
    if (!formValues.role) {
      return;
    }
    const parsedFormValues = {
      username: formValues.username,
      password: formValues.password,
      name: formValues.name,
      role: formValues.role,
      studentId:
        formValues.role === 'STUDENT' ? formValues.studentId : undefined,
    };
    signUp.mutate(parsedFormValues);
  };

  return (
    <form
      onSubmit={handleSubmit(handleSignUp)}
      className='absolute left-[10%] top-1/2 z-floating h-360 w-400 -translate-y-1/2 bg-white/70 px-12 py-32 md:left-[5%] md:w-[90%]'
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
          <AccountStep handlePrevStep={handlePrevStep} />
        </Step>
      </Funnel>
    </form>
  );
};

export default SignUpFunnel;
