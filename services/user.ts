import { useQuery } from '@tanstack/react-query';
import { authInstance } from './config/default';

const getUser = async () => {
  const { data } = await authInstance.get<UserType>('/user');
  return data;
};

export const useGetUser = () => {
  return useQuery({ queryKey: ['user'], queryFn: getUser });
};

const getUserCourses = async () => {
  const { data } = await authInstance.get<CourseType[]>('/user/courses');
  return data;
};

export const useGetUserCourses = () => {
  return useQuery({
    queryKey: ['user', 'courses'],
    queryFn: getUserCourses,
    initialData: [],
  });
};

const getUserPosts = async () => {
  const { data } = await authInstance.get<PostType[]>('/user/posts');
  return data;
};

export const useGetUserPosts = () => {
  return useQuery({
    queryKey: ['user', 'posts'],
    queryFn: getUserPosts,
    initialData: [],
  });
};
