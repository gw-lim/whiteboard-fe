import useAuth from '@/hooks/useAuth';
import { IconX } from '@/public/icons';
import { useRemovePost } from '@/services/post';
import { parseDate } from '@/utils/parseDate';
import DOMPurify from 'dompurify';
import Link from 'next/link';
import { SyntheticEvent, useLayoutEffect, useState } from 'react';

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
          <div className='ml-auto flex shrink-0 gap-12 pb-[2px]'>
            {parsedDate}
            <DeleteButton id={post.id} />
          </div>
        </Link>
      )}
      <div
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(String(post.content)),
        }}
      />
      {!showHeader && (
        <div className='flex border-t pt-4 text-12'>
          {parsedDate} <DeleteButton id={post.id} />
        </div>
      )}
    </div>
  );
};

export default Post;

const DeleteButton = (props: { id: string }) => {
  const { id } = props;
  const removePost = useRemovePost();

  const handleDelete = (e: SyntheticEvent) => {
    e.preventDefault();
    const value = confirm('게시물을 삭제하시겠습니까?');
    if (!value) {
      return;
    }
    removePost.mutate(id);
  };

  const { getAuth } = useAuth();
  const { user } = getAuth();
  const [isProfessor, setIsProfessor] = useState(false);
  useLayoutEffect(() => {
    setIsProfessor(user?.role === 'PROFESSOR');
  }, [user]);
  return (
    <>
      {isProfessor && (
        <button className='ml-auto' onClick={handleDelete}>
          <IconX stroke='#fff' />
        </button>
      )}
    </>
  );
};
