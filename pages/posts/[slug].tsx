import Head from 'next/head';
import Image from 'next/image';
import { ParsedUrlQuery } from 'querystring';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

import { IPost } from 'interfaces';
import { urlForImage } from 'lib/sanity';
import { PostLayout, PostBody } from 'components';
import { getPostBySlugQuery, getPostsSlugsQuery } from 'lib/queries';
import { getDateStrFromTstamp } from 'utils/funcs';

interface IParams extends ParsedUrlQuery {
  slug: string
}

interface IProps {
  post: IPost
}

const Index: NextPage<IProps> = ({
  post: {
    title,
    headingImage,
    date,
    // slug,
    readingTime,
    content,
    excerpt: postDescription,
  },
}) => {
  const postImgW = 1200;
  const postImgH = 600;
  const postImgUrl = urlForImage(headingImage)
    .width(postImgW)
    .height(postImgH)
    .fit('crop')
    .url();

  return (
    <div className="post">
      <Head>
        <title>{title}</title>
        <meta name="description" content={postDescription} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PostLayout headerTitle="querytitle">
        <div className="container">
          <div className="post__content mx-auto mt-[3rem]">
            <div className="post__content-head">
              <h1 className="post__content-title text-[3rem]">{title}</h1>
              <div className="post__meta flex gap-6">
                <p className="post__meta-date">{getDateStrFromTstamp(date)}</p>
                <p className="post__meta-read before:content-['☕️']">
                  {readingTime}
                  {' '}
                  min
                </p>
              </div>
              <div className="post__content-img__wrap flex overflow-hidden rounded-md shadow-md">
                <Image
                  className="post__content-img"
                  width={postImgW}
                  height={postImgH}
                  src={postImgUrl}
                  alt={headingImage.alt}
                  priority
                />
              </div>
            </div>
            <div className="post__content-body prose mx-auto max-w-[45rem]">
              <PostBody content={content} />
            </div>
          </div>
        </div>
      </PostLayout>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getPostsSlugsQuery();

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as IParams;
  const post = await getPostBySlugQuery(slug);

  return {
    props: {
      post,
    },
  };
};

export default Index;
