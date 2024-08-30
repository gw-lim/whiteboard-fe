import Button from '../Button';

const AccountStep = (props: { handleNextStep: () => void }) => {
  const { handleNextStep } = props;
  return (
    <div>
      3<Button onClick={handleNextStep}>다음으로</Button>
    </div>
  );
};

export default AccountStep;
