import Layout from '@/components/commons/Layout';
import Post from '@/components/commons/Post';
import { useGetUserPosts } from '@/services/user';

const StreamPage = () => {
  const { data: posts } = useGetUserPosts();

  return (
    <Layout>
      <section className='flex flex-col gap-16 p-20'>
        {posts.map((post) => (
          <Post key={post.id} post={post} showHeader />
        ))}
      </section>
    </Layout>
  );
};

export default StreamPage;
