import { FC } from 'react';
import Link from 'next/link';

import { IPost } from 'interfaces';
import { urlForImage } from 'lib/sanity';
import { getDayStrFromTstamp, getMonthStrFromTstamp } from 'utils/funcs';

const PostCard: FC<IPost> = ({
  title, headingImage, date, excerpt, slug,
}) => {
  const postImgW = 160;
  const postImgH = postImgW;
  const postImgUrl = urlForImage(headingImage).fit('crop').url();

  return (
    <article className="post-card group mb-[6rem] flex last:mb-0">
      <div className="post-card__preview relative mr-10 h-[10rem] w-[10rem] shrink-0 overflow-hidden rounded-md">
        <div
          className="post-card__date absolute top-0 left-0 flex h-[100%] w-[100%] flex-col items-center justify-center
          text-center duration-300 ease-in group-hover:translate-y-[-100%]"
        >
          <span className="post-card__date__num block text-[5rem] font-bold leading-[100%]">
            {getDayStrFromTstamp(date)}
          </span>
          <span className="post-card__date__dec mt-3 block text-sm">
            {getMonthStrFromTstamp(date)}
          </span>
        </div>
        <div className="post-card__img-box absolute top-0 left-0 translate-y-full duration-300 ease-in group-hover:translate-y-0">
          <img
            className="post-card__img object-cover"
            loading="lazy"
            src={postImgUrl}
            width={postImgW}
            height={postImgH}
            alt={headingImage.alt}
          />
        </div>
      </div>
      <div className="post-card__info">
        <div className="post-card__tags mb-3 flex gap-7">
          <span className="post-card__tags__tag text-primary">#Todo</span>
          <span className="post-card__tags__tag text-primary">#Implement</span>
          <span className="post-card__tags__tag text-primary">#Tags</span>
        </div>
        <h2 className="post-card__title mb-3 text-2xl">
          <Link href={`/posts/${slug.current}`} passHref>
            {title}
          </Link>
        </h2>
        <p className="post-card__excerpt mb-4 leading-7 tracking-wide line-clamp-2">
          {excerpt}
        </p>
        <Link href={`/posts/${slug.current}`} passHref>
          <button
            className="post-card__link inline-flex rounded-[3rem] border border-primary bg-[#fff] px-[1.5rem] py-[0.25rem]
              text-sm text-primary duration-200 ease-in hover:bg-primary hover:text-[#fff] hover:shadow-md"
            type="button"
          >
            Read
          </button>
        </Link>
      </div>
    </article>
  );
};

export default PostCard;
