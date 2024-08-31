import Course from '@/components/commons/Course';
import Layout from '@/components/commons/Layout';
import { useGetUserCourses } from '@/services/user';

const MyCoursesPage = () => {
  const { data: courses } = useGetUserCourses();

  return (
    <Layout>
      <section className='flex flex-col gap-16 p-20'>
        {courses.map((course) => (
          <Course key={course.id} course={course} />
        ))}
      </section>
    </Layout>
  );
};

export default MyCoursesPage;
