import { IconArrowRight } from '@/public/icons';
import Link from 'next/link';

const Course = (props: { course: CourseType }) => {
  const { course } = props;

  return (
    <Link
      href={`/course/${course.id}`}
      className='relative flex flex-col gap-12 rounded-4 bg-black/40 px-20 py-24 text-white'
    >
      <div className='text-20 font-500 underline underline-offset-2'>
        {course.name}
      </div>
      <div>{course.professor.name}</div>
      <div className='absolute right-16 top-1/2 -translate-y-1/2'>
        <IconArrowRight />
      </div>
    </Link>
  );
};

export default Course;
