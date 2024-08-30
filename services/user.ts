import { authInstance } from './config/default';

export const getUser = async () => {
  const { data } = await authInstance.get<UserType>('/user');
  return data;
};

export const getUserCourses = async () => {
  const { data } = await authInstance.get<CourseType[]>('/user/courses');
  return data;
};

export const getUserPosts = async () => {
  const { data } = await authInstance.get<PostType[]>('/user/posts');
  return data;
};
