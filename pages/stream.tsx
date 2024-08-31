import Layout from '@/components/commons/Layout';
import Post from '@/components/commons/Post';
import { useGetUserPosts } from '@/services/user';

const Stream = () => {
  const { data: posts } = useGetUserPosts();

  return (
    <Layout>
      <div className='flex flex-col gap-16 p-20'>
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </Layout>
  );
};

export default Stream;
