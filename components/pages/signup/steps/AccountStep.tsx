import InputContainer from '@/components/commons/InputContainer';
import { SignUpFormValues } from '@/pages/signup';
import { useFormContext } from 'react-hook-form';
import Button from '../Button';

const AccountStep = (props: { handlePrevStep: () => void }) => {
  const { handlePrevStep } = props;
  const { control } = useFormContext<SignUpFormValues>();

  return (
    <div className='flex h-full flex-col'>
      <InputContainer
        name='username'
        control={control}
        rules={{
          required: '아이디를 입력해주세요.',
          maxLength: { value: 10, message: '10자 이하로 입력해주세요.' },
        }}
        placeholder='10자 이하로 입력해주세요.'
      >
        아이디
      </InputContainer>
      <InputContainer
        name='password'
        type='password'
        control={control}
        rules={{
          required: '비밀번호를 입력해주세요.',
        }}
      >
        비밀번호
      </InputContainer>
      <InputContainer
        name='passwordCheck'
        type='password'
        control={control}
        rules={{
          required: '비밀번호를 확인해주세요.',
          validate: (value, formValues) => {
            if (value !== formValues.password)
              return '비밀번호가 일치하지 않습니다.';
          },
        }}
      >
        비밀번호 확인
      </InputContainer>
      <div className='mt-auto grid grid-cols-[1fr_2fr] gap-8'>
        <Button onClick={handlePrevStep}>이전으로</Button>
        <Button type='submit'>회원가입하기</Button>
      </div>
    </div>
  );
};

export default AccountStep;
