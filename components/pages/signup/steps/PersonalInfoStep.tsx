import InputContainer from '@/components/commons/InputContainer';
import { SignUpFormValues } from '@/pages/signup';
import { useFormContext } from 'react-hook-form';
import Button from '../Button';

const PersonalInfoStep = (props: {
  handleNextStep: () => void;
  handlePrevStep: () => void;
}) => {
  const { handleNextStep, handlePrevStep } = props;
  const { control, getValues, trigger } = useFormContext<SignUpFormValues>();

  const { role } = getValues();
  const isStudent = role === 'STUDENT';

  const handleCheckForm = async () => {
    const isFormValid = await trigger(['name', 'studentId']);
    if (isFormValid) {
      handleNextStep();
    }
  };

  return (
    <div className='flex h-full flex-col'>
      <InputContainer
        name='name'
        control={control}
        rules={{
          required: '이름을 입력해주세요.',
        }}
      >
        이름
      </InputContainer>
      {isStudent && (
        <InputContainer
          name='studentId'
          control={control}
          rules={{
            required: '학번을 입력해주세요.',
            pattern: {
              value: /^[0-9]{10}$/,
              message: '올바른 학번을 입력해주세요.',
            },
          }}
        >
          학번
        </InputContainer>
      )}
      <div className='mt-auto grid grid-cols-[1fr_2fr] gap-8'>
        <Button onClick={handlePrevStep}>이전으로</Button>
        <Button onClick={handleCheckForm}>다음으로</Button>
      </div>
    </div>
  );
};

export default PersonalInfoStep;
