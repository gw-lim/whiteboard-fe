import Layout from '@/components/commons/Layout';
import Post from '@/components/commons/Post';
import ProfessorSettingBar from '@/components/pages/course/ProfessorSettingBar';
import { useGetPosts } from '@/services/post';
import { useRouter } from 'next/router';

const CoursePage = () => {
  const router = useRouter();
  const courseId = Array.isArray(router.query.id)
    ? router.query.id[0]
    : router.query.id;

  const { data: posts } = useGetPosts(courseId ?? '');

  return (
    <Layout>
      <div className='flex flex-col gap-16 p-20'>
        <ProfessorSettingBar />
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
