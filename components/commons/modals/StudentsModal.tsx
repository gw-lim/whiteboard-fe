import { IconX } from '@/public/icons';
import {
  useGetRegisteredStudents,
  useRemoveRegisteredStudent,
} from '@/services/course';
import { useRouter } from 'next/router';
import ModalFrame from './ModalFrame';

const StudentsModal = (props: { closeModal: () => void }) => {
  const { closeModal } = props;
  const router = useRouter();
  const courseId =
    (Array.isArray(router.query.id) ? router.query.id[0] : router.query.id) ??
    '';

  const { data: students } = useGetRegisteredStudents(courseId);
  const removeRegisteredStudent = useRemoveRegisteredStudent();

  return (
    <ModalFrame closeModal={closeModal}>
      <div className='h-300 w-300 overflow-y-auto md:w-[80dvw]'>
        {students.map((student) => (
          <Student
            key={student.id}
            student={student}
            onDelete={() =>
              removeRegisteredStudent.mutate({
                courseId,
                studentId: student.id,
              })
            }
          />
        ))}
      </div>
    </ModalFrame>
  );
};

export default StudentsModal;

const Student = (props: {
  student: {
    id: string;
    name: string;
    studentId: string;
  };
  onDelete: () => void;
}) => {
  const { student, onDelete } = props;
  return (
    <div className='flex justify-between border-b border-gray-400 py-8'>
      <span>{student.name}</span>
      <span>{student.studentId}</span>
      <button onClick={onDelete}>
        <IconX />
      </button>
    </div>
  );
};
