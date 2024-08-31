import { INITIAL_COURSE } from '@/contants/initialData';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { authInstance, instance } from './config/default';

const getCourses = async () => {
  const { data } = await instance.get<CourseType[]>('/course');
  return data;
};

export const useGetCourses = () => {
  return useQuery({
    queryKey: ['courses'],
    queryFn: getCourses,
    initialData: [],
  });
};

const getCourse = async (courseId: string) => {
  const { data } = await instance.get<CourseType>(`/course/${courseId}`);
  return data;
};

export const useGetCourse = (courseId: string) => {
  return useQuery({
    queryKey: ['course', courseId],
    queryFn: () => getCourse(courseId),
    initialData: INITIAL_COURSE,
    enabled: !!courseId,
  });
};

const createCourse = async (name: string) => {
  await authInstance.post('/course', { name });
};

export const useCreateCourse = () => {
  return useMutation({ mutationFn: createCourse });
};

const getRegisteredStudents = async (courseId: string) => {
  const { data } = await authInstance.get<
    {
      id: string;
      name: string;
      studentId: string;
    }[]
  >(`/course/${courseId}/students`);
  return data;
};

export const useGetRegisteredStudents = (courseId: string) => {
  return useQuery({
    queryKey: ['course', courseId, 'students'],
    queryFn: () => getRegisteredStudents(courseId),
    initialData: [],
  });
};

const registerCourse = async (courseId: string) => {
  await authInstance.post('/course/register', {
    id: courseId,
  });
};

export const useRegisterCourse = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: registerCourse,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user', 'courses'] });
    },
  });
};

const removeRegisteredStudent = async (courseId: string) => {
  await authInstance.delete(`/course/${courseId}/students`);
  return courseId;
};

export const useRemoveRegisteredStudent = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: removeRegisteredStudent,
    onSuccess: (courseId) => {
      queryClient.invalidateQueries({
        queryKey: ['course', courseId, 'students'],
      });
    },
  });
};
