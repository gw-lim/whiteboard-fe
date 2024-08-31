import { useCreatePost } from '@/services/post';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useState } from 'react';
import 'react-quill/dist/quill.snow.css';
import ModalFrame from './ModalFrame';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const CreatePostModal = (props: { closeModal: () => void }) => {
  const { closeModal } = props;
  const router = useRouter();
  const courseId =
    (Array.isArray(router.query.id) ? router.query.id[0] : router.query.id) ??
    '';

  const [content, setContent] = useState('');

  const createPost = useCreatePost(courseId);

  const handlePost = () => {
    createPost.mutate(content);
    closeModal();
  };

  return (
    <ModalFrame closeModal={closeModal}>
      <div className='flex h-400 w-400 flex-col justify-between overflow-y-auto'>
        <ReactQuill
          theme='snow'
          onChange={setContent}
          style={{ width: '100%', height: '300px' }}
        />
        <button
          onClick={handlePost}
          className='rounded-4 border border-gray-600/80 bg-gray-500/10 p-8'
        >
          게시하기
        </button>
      </div>
    </ModalFrame>
  );
};

export default CreatePostModal;
