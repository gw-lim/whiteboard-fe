import CreatePostModal from '@/components/commons/modals/CreatePostModal';
import StudentsModal from '@/components/commons/modals/StudentsModal';
import { IconList, IconPencil } from '@/public/icons';
import { useState } from 'react';

const ProfessorSettingBar = () => {
  const [openStudentsModal, setOpenStudentsModal] = useState(false);
  const [openPostModal, setOpenPostModal] = useState(false);

  return (
    <>
      <div className='flex gap-12'>
        <button
          onClick={() => setOpenStudentsModal(true)}
          className='flex items-center gap-8 rounded-4 bg-black/40 px-12 py-8 text-white'
        >
          <IconList />
          <div className='text-12'>학생 목록</div>
        </button>
        <button
          onClick={() => setOpenPostModal(true)}
          className='flex items-center gap-8 rounded-4 bg-black/40 px-12 py-8 text-white'
        >
          <IconPencil />
          <div className='text-12'>게시물 작성</div>
        </button>
      </div>
      {openStudentsModal && (
        <StudentsModal closeModal={() => setOpenStudentsModal(false)} />
      )}
      {openPostModal && (
        <CreatePostModal closeModal={() => setOpenPostModal(false)} />
      )}
    </>
  );
};

export default ProfessorSettingBar;
