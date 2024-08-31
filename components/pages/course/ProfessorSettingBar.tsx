import CreateCourseModal from '@/components/commons/modals/CreateCourseModal';
import CreatePostModal from '@/components/commons/modals/CreatePostModal';
import StudentsModal from '@/components/commons/modals/StudentsModal';
import { IconList, IconPencil } from '@/public/icons';
import { ReactNode, useState } from 'react';

const ProfessorSettingBar = (props: {
  student?: boolean;
  post?: boolean;
  course?: boolean;
}) => {
  const { student = false, post = false, course = false } = props;
  const [openStudentsModal, setOpenStudentsModal] = useState(false);
  const [openCreatePostModal, setOpenCreatePostModal] = useState(false);
  const [openCreateCourseModal, setOpenCreateCourseModal] = useState(false);

  return (
    <>
      <div className='flex gap-12'>
        {student && (
          <Button onClick={() => setOpenStudentsModal(true)}>
            <IconList />
            <div>학생 목록</div>
          </Button>
        )}
        {post && (
          <Button onClick={() => setOpenCreatePostModal(true)}>
            <IconPencil />
            <div>게시물 작성</div>
          </Button>
        )}
        {course && (
          <Button onClick={() => setOpenCreateCourseModal(true)}>
            <IconPencil />
            <div>강의 생성</div>
          </Button>
        )}
      </div>
      {openStudentsModal && (
        <StudentsModal closeModal={() => setOpenStudentsModal(false)} />
      )}
      {openCreatePostModal && (
        <CreatePostModal closeModal={() => setOpenCreatePostModal(false)} />
      )}
      {openCreateCourseModal && (
        <CreateCourseModal closeModal={() => setOpenCreateCourseModal(false)} />
      )}
    </>
  );
};

export default ProfessorSettingBar;

const Button = (props: { children: ReactNode; onClick: () => void }) => {
  const { children, onClick } = props;
  return (
    <button
      onClick={onClick}
      className='flex items-center gap-8 rounded-4 bg-black/40 px-12 py-8 text-12 text-white'
    >
      {children}
    </button>
  );
};
