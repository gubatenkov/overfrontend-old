import React, { FC } from 'react';
import Link from 'next/link';

import { Topbar, Switch, Search } from 'components';

interface IProps {
  headerTitle: string
  children: React.ReactNode
}

const MainLayout: FC<IProps> = ({ headerTitle, children }) => (
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
    </Topbar>
    <main className="main">{children}</main>
  </>
);

export default MainLayout;
