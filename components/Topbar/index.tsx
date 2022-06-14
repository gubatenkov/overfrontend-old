import React, { FC } from 'react';

import useIsScrolled from 'utils/hooks/useIsScrolled';

const Topbar: FC<{ children: React.ReactNode }> = ({ children }) => {
  const isScrolled = useIsScrolled();

  return (
    <header
      className={`${
        isScrolled ? ' shadow-sm' : ''
      } topbar sticky top-0 z-20 border border-transparent border-b-borderGrey 
      bg-[rgba(255,255,255,0.9)] py-5 backdrop-blur-md transition-shadow duration-500 ease-in-out`}
    >
      {children}
    </header>
  );
};

export default Topbar;
