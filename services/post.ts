import { authInstance, instance } from './config/default';

export const getPosts = async (courseId: string) => {
  const { data } = await instance.get<PostType[]>(`/post/${courseId}`);
  return data;
};

export const createPost = async (props: {
  courseId: string;
  content: string;
}) => {
  const { courseId, content } = props;
  await authInstance.post(`/post/${courseId}`, { content });
};

export const removePost = async (postId: string) => {
  await instance.delete<PostType[]>(`/post/${postId}`);
};
