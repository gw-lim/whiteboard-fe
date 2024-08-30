import { ReactNode } from 'react';

const Button = (props: {
  children: ReactNode;
  onClick?: () => void;
  type?: 'submit' | 'button';
  disabled?: boolean;
}) => {
  const { children, onClick, type = 'button', disabled } = props;
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={`h-40 w-full rounded-4  ${disabled ? 'bg-gray-400/80 text-slate-500' : 'bg-slate-400/3 border border-slate-800 text-slate-800'}`}
    >
      {children}
    </button>
  );
};

export default Button;
