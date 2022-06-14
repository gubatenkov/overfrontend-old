import { FC, useEffect, useState } from 'react';

import { ArrowTopIcon } from 'components';

const BackToTop: FC = () => {
  const [isVisible, setVisible] = useState(false);

  const listener = () => {
    if (window.scrollY > 350) setVisible(true);
    else setVisible(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', listener);
    return () => window.removeEventListener('scroll', listener);
  }, []);

  return (
    <button
      className={`${
        isVisible ? 'opacity-100' : 'opacity-0'
      } fixed right-6 bottom-8 flex h-[2.5rem] w-[2.5rem] items-center justify-center rounded-full
    bg-primary shadow-md transition-opacity duration-200 ease-in-out`}
      type="button"
      onClick={() => window.scrollTo(0, 0)}
    >
      <ArrowTopIcon className="text-[#fff]" width="20" height="20" />
    </button>
  );
};

export default BackToTop;
