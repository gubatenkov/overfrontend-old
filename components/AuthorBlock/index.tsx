import { FC } from 'react';
import Image from 'next/image';

import { IAuthor } from 'interfaces';
import { urlForImage } from 'lib/sanity';
import { SteamIcon, GitIcon, TgIcon } from 'components';

interface IProps {
  author: IAuthor
}

const AuthorBlock: FC<IProps> = ({ author: { name, avatar, bio } }) => {
  const avatarW = 150;
  const avatarH = 150;
  const avatarUrl = urlForImage(avatar).width(avatarW).url();

  return (
    <div className="author mx-auto flex  max-w-[75%] items-center">
      <div className="author__preview flex min-w-fit rounded-full border border-[#ededed] p-8">
        <div className="author__preview-box flex rounded-full shadow-[0px_5px_10px_0px_rgba(156,163,175,0.5)]">
          <Image
            className="rounded-full"
            width={avatarW}
            height={avatarH}
            src={avatarUrl}
            alt={avatar.alt}
            priority
          />
        </div>
      </div>
      <div className="author__descr pl-8">
        <div className="author__descr-name mb-5 font-inter text-[2rem] font-medium">
          Yo! I’m
          {' '}
          <span className="font-bold">{name}</span>
        </div>
        <div className="author__descr-bio mb-5">{bio}</div>
        <div className="author__descr-socials flex gap-6">
          <GitIcon
            className="cursor-pointer transition-colors hover:text-primary"
            width="1.5rem"
          />
          <TgIcon
            className="cursor-pointer transition-colors hover:text-primary"
            width="1.5rem"
          />
          <SteamIcon
            className="cursor-pointer transition-colors hover:text-primary"
            width="1.5rem"
          />
        </div>
      </div>
    </div>
  );
};

export default AuthorBlock;
