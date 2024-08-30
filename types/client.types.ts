type RoleType = 'PROFESSOR' | 'STUDENT';

interface UserType {
  id: string;
  name: string;
  role: RoleType;
  studentId?: string;
}

interface CourseType {
  id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  professor?: {
    id: string;
    name: string;
  };
}

interface PostType {
  id: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}
