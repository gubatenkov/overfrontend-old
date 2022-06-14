import React, { FC } from 'react';
import Link from 'next/link';

import useProgress from 'utils/hooks/useProgress';
import {
  Topbar, Switch, Search, BackToTop,
} from 'components';

interface IProps {
  headerTitle: string
  children: React.ReactNode
}

const PostLayout: FC<IProps> = ({ headerTitle, children }) => {
  const progress = useProgress();

  return (
    <>
      <Topbar>
        <div className="container">
          <div className="topbar-inner flex items-center justify-between">
            <div className="text-[1.5rem] font-bold uppercase dark:text-[#fff]">
              <Link
                href={`${process.env.NEXT_PUBLIC_PROTOCOL}://${process.env.NEXT_PUBLIC_DOMAIN}/`}
              >
                {headerTitle}
              </Link>
            </div>
            <Search />
            <Switch />
          </div>
        </div>
        <span
          className="progressbar absolute top-[-1px] h-[2px] w-full bg-primary transition-transform
          duration-100 ease-linear"
          style={{ transform: `translateX(${progress - 100}%)` }}
        />
      </Topbar>
      <main className="main">{children}</main>
      <BackToTop />
    </>
  );
};

export default PostLayout;
