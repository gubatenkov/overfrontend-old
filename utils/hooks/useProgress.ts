import { useEffect, useState } from 'react';

const useProgress = () => {
  const [progress, setProgress] = useState(0);

  const handleScroll = () => {
    const scrolled = window.scrollY;
    const height = document.documentElement.scrollHeight
      - document.documentElement.clientHeight;
    const value = Number(Math.floor((scrolled / height) * 100).toFixed(2));
    setProgress(value);
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return progress;
};

export default useProgress;
