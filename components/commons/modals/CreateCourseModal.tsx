import ModalFrame from './ModalFrame';

const CreateCourseModal = (props: { closeModal: () => void }) => {
  const { closeModal } = props;

  return (
    <ModalFrame closeModal={closeModal}>
      <div className='flex h-100 w-300 flex-col justify-between gap-12'>
        <input
          placeholder='강의명을 작성해주세요.'
          className='w-full grow rounded-4 border p-8 outline-none'
        />
        <button className='rounded-4 border border-gray-500/80 bg-gray-400/50 p-12'>
          강의 생성하기
        </button>
      </div>
    </ModalFrame>
  );
};

export default CreateCourseModal;
