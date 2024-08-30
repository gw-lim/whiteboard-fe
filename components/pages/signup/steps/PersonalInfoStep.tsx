import Button from '../Button';

const PersonalInfoStep = (props: { handleNextStep: () => void }) => {
  const { handleNextStep } = props;
  return (
    <div>
      2<Button onClick={handleNextStep}>다음으로</Button>
    </div>
  );
};

export default PersonalInfoStep;
