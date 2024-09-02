import { useCreateCourse } from '@/services/course';
import { ChangeEvent, useState } from 'react';
import ModalFrame from './ModalFrame';

const CreateCourseModal = (props: { closeModal: () => void }) => {
  const { closeModal } = props;

  const createCourse = useCreateCourse();

  const [value, setValue] = useState('');
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = () => {
    createCourse.mutate(value);
    closeModal();
  };

  return (
    <ModalFrame closeModal={closeModal}>
      <form className='flex h-100 w-300 flex-col justify-between gap-12 md:w-[80dvw]'>
        <input
          onChange={handleChange}
          placeholder='강의명을 작성해주세요.'
          className='w-full grow rounded-4 border p-8 outline-none'
        />
        <button
          onClick={handleSubmit}
          disabled={!value}
          className='rounded-4 border border-gray-500/80 bg-gray-400/50 p-12 disabled:border-gray-400/30 disabled:bg-gray-400/20 disabled:text-black/40'
        >
          강의 생성하기
        </button>
      </form>
    </ModalFrame>
  );
};

export default CreateCourseModal;
