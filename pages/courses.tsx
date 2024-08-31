import Layout from '@/components/commons/Layout';
import ProfessorSettingBar from '@/components/pages/course/ProfessorSettingBar';
import Course from '@/components/pages/courses/Course';
import useAuth from '@/hooks/useAuth';
import { useGetCourses } from '@/services/course';
import { useGetUserCourses } from '@/services/user';
import { useEffect, useState } from 'react';

const CoursesPage = () => {
  const { data: courses } = useGetCourses();
  const { data: registeredCourses } = useGetUserCourses();

  const { getAuth } = useAuth();
  const { user } = getAuth();
  const [isProfessor, setIsProfessor] = useState(false);

  useEffect(() => {
    setIsProfessor(user?.role === 'PROFESSOR');
  }, [user]);

  return (
    <Layout>
      <div className='flex flex-col gap-16 p-20'>
        {isProfessor && <ProfessorSettingBar course />}
        {courses.map((course) => (
          <Course
            key={course.id}
            course={course}
            registered={
              isProfessor ||
              !!registeredCourses.find(
                (registeredCourse) => registeredCourse.id === course.id,
              )
            }
          />
        ))}
      </div>
    </Layout>
  );
};

export default CoursesPage;
