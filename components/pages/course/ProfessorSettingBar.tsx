import { IconList, IconPencil } from '@/public/icons';

const ProfessorSettingBar = () => {
  return (
    <div className='flex gap-12'>
      <button className='flex items-center gap-8 rounded-4 bg-black/40 px-12 py-8 text-white'>
        <IconList />
        <div className='text-12'>학생 목록</div>
      </button>
      <button className='flex items-center gap-8 rounded-4 bg-black/40 px-12 py-8 text-white'>
        <IconPencil />
        <div className='text-12'>게시물 작성</div>
      </button>
    </div>
  );
};

export default ProfessorSettingBar;
