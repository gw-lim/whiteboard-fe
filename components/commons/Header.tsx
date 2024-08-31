import useAuth from '@/hooks/useAuth';
import { useGetCourse } from '@/services/course';
import { useGetUser } from '@/services/user';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const Header = () => {
  const router = useRouter();
  const currPath = router.pathname;
  const courseId = Array.isArray(router.query.id)
    ? router.query.id[0]
    : router.query.id;
  const { data: course } = useGetCourse(courseId ?? '');

  const getTitle = () => {
    switch (currPath) {
      case '/stream':
        return '활동 스트림';
      case '/course':
        return '코스';
      case '/courses':
        return '모든 강의';
      case '/course/[id]':
        const parsedTitle = course.name
          ? `${course.name} (${course.professor.name})`
          : '';
        return parsedTitle;
    }
  };

  const title = getTitle();

  const { getAuth } = useAuth();
  const { user } = getAuth();

  const [parsedProfile, setParsedProfile] = useState('');
  useEffect(() => {
    const newParsedProfile =
      user?.role === 'PROFESSOR'
        ? `${user?.name} (교수)`
        : `${user?.name} (${user?.studentId})`;
    setParsedProfile(newParsedProfile);
  }, [user]);

  return (
    <header className='z-nav flex items-center justify-between border-b border-[#dcdcdc] bg-gray-200/20 px-28 text-white'>
      <h1 className='line-clamp-1 text-28'>{title}</h1>
      <div className='shrink-0 break-keep bg-black/25 p-12'>
        {parsedProfile}
      </div>
    </header>
  );
};

export default Header;
