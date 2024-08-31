import Layout from '@/components/commons/Layout';
import Post from '@/components/commons/Post';
import ProfessorSettingBar from '@/components/pages/course/ProfessorSettingBar';
import useAuth from '@/hooks/useAuth';
import { useGetPosts } from '@/services/post';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const CoursePage = () => {
  const router = useRouter();
  const courseId = Array.isArray(router.query.id)
    ? router.query.id[0]
    : router.query.id;

  const { data: posts } = useGetPosts(courseId ?? '');

  const { getAuth } = useAuth();
  const { user } = getAuth();
  const [showSettingBar, setShowSettingBar] = useState(false);
  useEffect(() => {
    setShowSettingBar(user?.role === 'PROFESSOR');
  }, [user]);

  return (
    <Layout>
      <div className='flex flex-col gap-16 p-20'>
        {showSettingBar && <ProfessorSettingBar />}
        <section className='flex flex-col gap-16'>
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </section>
      </div>
    </Layout>
  );
};

export default CoursePage;
