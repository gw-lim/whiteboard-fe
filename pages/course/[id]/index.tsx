import Layout from '@/components/commons/Layout';
import Post from '@/components/commons/Post';
import { useGetPosts } from '@/services/post';
import { useRouter } from 'next/router';

const CoursePage = () => {
  const router = useRouter();
  const courseId = Array.isArray(router.query.id)
    ? router.query.id[0]
    : router.query.id;

  const { data: posts } = useGetPosts(courseId ?? '');

  console.log(posts);
  return (
    <Layout>
      <section className='flex flex-col gap-16 p-20'>
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </section>
    </Layout>
  );
};

export default CoursePage;
