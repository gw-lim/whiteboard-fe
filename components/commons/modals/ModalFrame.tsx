import { ReactNode } from 'react';
import ModalPortal from './ModalPortal';

const ModalFrame = (props: { children: ReactNode; closeModal: () => void }) => {
  const { children, closeModal } = props;
  return (
    <ModalPortal>
      <div
        onClick={closeModal}
        className='fixed left-0 top-0 z-floating size-full bg-[rgba(0,0,0,0.45)]'
      />
      <div className='shadow-main fixed left-1/2 top-1/2 z-floating flex h-fit w-fit -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-4 bg-white/80 p-24'>
        {children}
      </div>
    </ModalPortal>
  );
};

export default ModalFrame;
