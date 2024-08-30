import Button from '../Button';

const RoleStep = (props: { handleNextStep: () => void }) => {
  const { handleNextStep } = props;
  return (
    <div>
      1<Button onClick={handleNextStep}>다음으로</Button>
    </div>
  );
};

export default RoleStep;
