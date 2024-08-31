import Layout from '@/components/commons/Layout';
import { useRouter } from 'next/router';

const CoursePage = () => {
  const router = useRouter();
  console.log(router);
  return <Layout>123</Layout>;
};

export default CoursePage;
