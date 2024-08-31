import { parseDate } from '@/utils/parseDate';
import Link from 'next/link';

const Post = (props: { post: PostType }) => {
  const { post } = props;
  const parsedDate = parseDate(post.createdAt);
  return (
    <div className='flex flex-col gap-16 rounded-4 bg-black/40 p-16 text-white'>
      <Link
        href={`/course/${post?.course.id}`}
        className='flex items-end gap-8 border-b border-white/40'
      >
        <span className='text-18'>{post.course.name}</span>
        <span className='pb-[3px]'>({post.course.professor.name})</span>
        <div className='ml-auto'>{parsedDate}</div>
      </Link>
      <div>{post.content}</div>
    </div>
  );
};

export default Post;
