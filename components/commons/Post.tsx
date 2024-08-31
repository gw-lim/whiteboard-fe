import { parseDate } from '@/utils/parseDate';
import Link from 'next/link';

const Post = (props: { post: PostType; showHeader?: boolean }) => {
  const { post, showHeader = false } = props;
  const parsedDate = parseDate(post.createdAt);

  return (
    <div className='flex flex-col gap-16 overflow-hidden rounded-4 bg-black/40 p-16 text-white'>
      {showHeader && (
        <Link
          href={`/course/${post?.course.id}`}
          className='flex items-end gap-8 border-b border-white/40'
        >
          <span className='line-clamp-1 text-18'>{post.course.name}</span>
          <span className='shrink-0 pb-[3px]'>
            ({post.course.professor.name})
          </span>
          <div className='ml-auto shrink-0 pb-[2px]'>{parsedDate}</div>
        </Link>
      )}
      <div>{post.content}</div>
      {!showHeader && <div className='border-t pt-4 text-12'>{parsedDate}</div>}
    </div>
  );
};

export default Post;
