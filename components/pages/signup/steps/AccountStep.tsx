import Button from '../Button';

const AccountStep = (props: { handlePrevStep: () => void }) => {
  const { handlePrevStep } = props;
  return (
    <div>
      <div className='mt-auto grid grid-cols-[1fr_2fr] gap-8'>
        <Button onClick={handlePrevStep}>이전으로</Button>
        <Button type='submit'>회원가입하기</Button>
      </div>
    </div>
  );
};

export default AccountStep;
