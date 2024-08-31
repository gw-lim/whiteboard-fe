import { INITIAL_COURSE } from '@/contants/initialData';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import toast from 'react-hot-toast';
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
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createCourse,
    onSuccess: () => {
      toast.success('강의가 생성되었습니다.');
      queryClient.invalidateQueries({ queryKey: ['courses'] });
    },
    onError: () => {
      toast.error('강의가 생성에 실패했습니다.');
    },
  });
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
    enabled: !!courseId,
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
      toast.success('수강신청 되었습니다.');
    },
    onError: (err: AxiosError) => {
      if (err.status === 403) {
        toast.error('학생만 수강신청을 할 수 있습니다.');
      }
    },
  });
};

const removeRegisteredStudent = async (props: {
  courseId: string;
  studentId: string;
}) => {
  const { courseId, studentId } = props;
  await authInstance.delete(`/course/${courseId}/students?id=${studentId}`);
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
