import { useMutation, useQuery } from '@tanstack/react-query';
import { authInstance, instance } from './config/default';

const getPosts = async (courseId: string) => {
  const { data } = await instance.get<PostType[]>(`/post/${courseId}`);
  return data;
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

export const useCreatePost = () => {
  return useMutation({ mutationFn: createPost });
};

const removePost = async (postId: string) => {
  await instance.delete<PostType[]>(`/post/${postId}`);
};

export const useRemovePost = () => {
  return useMutation({ mutationFn: removePost });
};
