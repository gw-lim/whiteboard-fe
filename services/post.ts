import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { authInstance, instance } from './config/default';

const getPosts = async (courseId: string) => {
  const { data } = await instance.get<PostType[]>(`/post/${courseId}`);
  const sortedData = data.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
  );
  console.log(sortedData);
  return sortedData;
};

export const useGetPosts = (courseId: string) => {
  return useQuery({
    queryKey: ['post', courseId],
    queryFn: () => getPosts(courseId),
    initialData: [],
    enabled: !!courseId,
  });
};

const createPost = async (props: { courseId: string; content: string }) => {
  const { courseId, content } = props;
  await authInstance.post(`/post/${courseId}`, { content });
};

export const useCreatePost = (courseId: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (content: string) => createPost({ courseId, content }),
    onSuccess: () => {
      toast.success('게시물이 게시되었습니다.');
      queryClient.invalidateQueries({ queryKey: ['post', courseId] });
      queryClient.invalidateQueries({ queryKey: ['user', 'posts'] });
    },
    onError: () => {
      toast.error('게시물이 게시하는 데에 실패했습니다.');
    },
  });
};

const removePost = async (postId: string) => {
  await authInstance.delete<PostType[]>(`/post/${postId}`);
};

export const useRemovePost = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: removePost,
    onSuccess: () => {
      toast.success('게시물이 삭제되었습니다.');
      queryClient.invalidateQueries({ queryKey: ['post'] });
      queryClient.invalidateQueries({ queryKey: ['user', 'posts'] });
    },
    onError: () => {
      toast.error('게시물이 삭제하는 데에 실패했습니다.');
    },
  });
};
