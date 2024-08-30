import { SignUpFormValues } from '@/pages/signup';
import { ReactNode, useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import Button from '../Button';

const RoleStep = (props: { handleNextStep: () => void }) => {
  const { handleNextStep } = props;
  const { getValues, setValue } = useFormContext<SignUpFormValues>();

  const { role: initialRole } = getValues();
  const [role, setRole] = useState<RoleType | undefined>(initialRole);

  useEffect(() => {
    setValue('role', role);
  }, [role]);

  return (
    <div className='flex h-full flex-col gap-12'>
      <RoleButton
        onClick={() => setRole('PROFESSOR')}
        selected={role === 'PROFESSOR'}
      >
        교수
      </RoleButton>
      <RoleButton
        onClick={() => setRole('STUDENT')}
        selected={role === 'STUDENT'}
      >
        학생
      </RoleButton>
      <Button disabled={!role} onClick={handleNextStep}>
        다음으로
      </Button>
    </div>
  );
};

export default RoleStep;

const RoleButton = (props: {
  children: ReactNode;
  onClick: () => void;
  selected: boolean;
}) => {
  const { children, onClick, selected } = props;
  return (
    <button
      onClick={onClick}
      className={`w-full grow rounded-4 border font-500 ${selected ? 'border-blue-600 bg-blue-500/20' : 'border-gray-600 bg-gray-300/20'}`}
    >
      {children}
    </button>
  );
};
