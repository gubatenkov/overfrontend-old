import React, { FC } from 'react';

const PostList: FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="postlist">
    <p className="postlist__heading text-md mb-[4rem] font-inter font-medium tracking-widest">
      <span className="inline-block border border-b-2 border-transparent border-b-primary pb-2">
        Latest
      </span>
      {' '}
      Updates
    </p>
    {children}
  </div>
);

export default PostList;
