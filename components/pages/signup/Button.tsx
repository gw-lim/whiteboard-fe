import { ReactNode } from 'react';

const Button = (props: {
  onClick: () => void;
  type?: 'submit' | 'button';
  children: ReactNode;
}) => {
  const { onClick, type = 'button', children } = props;
  return (
    <button
      onClick={onClick}
      type={type}
      className='mt-12 h-40 w-full rounded-4 border border-slate-800 bg-gray-400/40 text-slate-800'
    >
      {children}
    </button>
  );
};

export default Button;
