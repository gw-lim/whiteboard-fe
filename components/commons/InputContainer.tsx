import { HTMLInputTypeAttribute, ReactNode, useState } from 'react';
import {
  FieldValues,
  UseControllerProps,
  useController,
} from 'react-hook-form';

interface Props<T extends FieldValues> extends UseControllerProps<T> {
  children: ReactNode;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
}

const InputContainer = <T extends FieldValues>({
  children,
  placeholder,
  type: initialType = 'text',
  ...controls
}: Props<T>) => {
  const { field, fieldState } = useController({
    ...controls,
  });
  const [type, setType] = useState<HTMLInputTypeAttribute>(initialType);

  const togglePasswordShow = () => {
    if (type === 'password') {
      setType('text');
    } else if (type === 'text') {
      setType('password');
    }
  };

  return (
    <div className='relative'>
      <label htmlFor={field.name} className='font-500 block h-16'>
        {children}
      </label>
      <input
        id={field.name}
        placeholder={placeholder}
        type={type}
        {...field}
        className={`rounded-4 text-14 mt-8 h-44 w-full border border-gray-200 bg-gray-100 p-8 outline-none placeholder:text-[#8A909F] focus:border-gray-300 active:border-gray-300 ${fieldState?.error && 'border-red-600'}`}
      />
      {initialType === 'password' && (
        <button
          onClick={togglePasswordShow}
          type='button'
          className='absolute right-0 top-44 h-24 w-24 -translate-x-1/2 -translate-y-1/2'
        >
          {type === 'password' ? <div>off</div> : <div>on</div>}
        </button>
      )}
      <div className='text-12 h-[10px] pt-[2px] text-red-600'>
        {fieldState?.error?.message}
      </div>
    </div>
  );
};

export default InputContainer;
