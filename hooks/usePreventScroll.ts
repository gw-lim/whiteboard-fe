import { useLayoutEffect } from 'react';

const usePreventScroll = () => {
  useLayoutEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);
};

export default usePreventScroll;
