import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setIsAnimating } from '@/redux/slices/appSlice';
import Progress from './progress/Progress';

export default function Config({ children }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const { isAnimating } = useSelector((state) => state.app);

  useEffect(() => {
    console.log('runnn');
    const handleStart = () => dispatch(setIsAnimating(true));
    const handleStop = () => dispatch(setIsAnimating(false));

    router.events.on('routeChangeStart', () => handleStart());
    router.events.on('routeChangeComplete', () => handleStop());
    router.events.on('routeChangeError', () => handleStop());

    return () => {
      router.events.off('routeChangeStart', () => handleStart());
      router.events.off('routeChangeComplete', () => handleStop());
      router.events.off('routeChangeError', () => handleStop());
    };
  }, [router]);

  return (
    <>
      <Progress isAnimating={isAnimating} />

      {children}
    </>
  );
}
