import { useRegisterCourse } from '@/services/course';

const Course = (props: { course: CourseType; registered: boolean }) => {
  const { course, registered } = props;
  const registerCourse = useRegisterCourse();

  return (
    <div className='relative flex flex-col gap-12 rounded-4 bg-black/40 px-20 py-24 text-white'>
      <div className='text-20 font-500 underline underline-offset-2'>
        {course.name}
      </div>
      <div>{course.professor.name}</div>
      <button
        onClick={() => registerCourse.mutate(course.id)}
        disabled={registered}
        className={`absolute right-28 top-1/2 -translate-y-1/2 rounded-4 px-8 py-4 ${registered ? 'bg-white/30 text-black/70' : 'bg-white/80 text-black'}`}
      >
        수강신청
      </button>
    </div>
  );
};

export default Course;
