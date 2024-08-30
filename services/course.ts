import { authInstance, instance } from './config/default';

export const getCourses = async () => {
  const { data } = await instance.get<CourseType[]>('/course');
  return data;
};

export const getCourse = async (courseId: string) => {
  const { data } = await instance.get<CourseType>(`/course/${courseId}`);
  return data;
};

export const createCourse = async (name: string) => {
  await authInstance.post('/course', { name });
};

export const getRegisteredStudents = async (courseId: string) => {
  const { data } = await authInstance.get<{
    id: string;
    name: string;
    studentId: string;
  }>(`/course/${courseId}/students`);
  return data;
};

export const registerCourse = async (courseId: string) => {
  await authInstance.post('/course/register', {
    id: courseId,
  });
};

export const removeRegisteredStudent = async (courseId: string) => {
  await authInstance.delete(`/course/${courseId}/students`);
};
