import InputContainer from '@/components/commons/InputContainer';
import { SignUpFormValues } from '@/pages/signup';
import { useFormContext } from 'react-hook-form';
import Button from '../Button';

const PersonalInfoStep = (props: {
  handleNextStep: () => void;
  handlePrevStep: () => void;
}) => {
  const { handleNextStep, handlePrevStep } = props;
  const { control, getValues } = useFormContext<SignUpFormValues>();

  const { role } = getValues();
  const isStudent = role === 'STUDENT';

  return (
    <div className='flex h-full flex-col'>
      <InputContainer name='name' control={control}>
        이름
      </InputContainer>
      {isStudent && (
        <InputContainer name='studentId' control={control}>
          학번
        </InputContainer>
      )}
      <div className='mt-auto grid grid-cols-[1fr_2fr] gap-8'>
        <Button onClick={handlePrevStep}>이전으로</Button>
        <Button onClick={handleNextStep}>다음으로</Button>
      </div>
    </div>
  );
};

export default PersonalInfoStep;
