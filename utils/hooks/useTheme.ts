import { useEffect, useState } from 'react';

const useTheme = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const addClassName = (className: string) => {
    const root = document.getElementsByTagName('html')[0];
    root.classList.add(className);
  };

  const removeClassName = (className: string) => {
    const root = document.getElementsByTagName('html')[0];
    root.classList.remove(className);
  };

  const checkLocalTheme = () => {
    const localTheme = localStorage.getItem('theme');
    if (localTheme === 'dark') {
      setTheme('dark');
    }
  };

  const handleClassName = () => (theme === 'dark' ? addClassName('dark') : removeClassName('dark'));

  useEffect(() => {
    checkLocalTheme();
    handleClassName();
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return [theme, toggleTheme] as const;
};

export default useTheme;
