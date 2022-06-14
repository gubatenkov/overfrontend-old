import Head from 'next/head';
import type { NextPage } from 'next';

import {
  getAllPosts,
  getHomepageMetaQuery,
  getFirstAuthorMetaQuery,
} from 'lib/queries';
import {
  PostCard,
  PostList,
  MainLayout,
  Pagination,
  AuthorBlock,
} from 'components';
import { IAuthor, IHomepageMeta, IPost } from 'interfaces';

interface IProps {
  pageMeta: IHomepageMeta
  authorMeta: IAuthor
  posts: IPost[]
}

const Index: NextPage<IProps> = ({
  pageMeta: { title, seo_title: pageTitle, seo_descr: descr },
  authorMeta,
  posts,
}) => (
  <div className="homepage">
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={descr} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <MainLayout headerTitle={title}>
      <div className="container">
        <div className="pt-[10rem] pb-[12rem]">
          <AuthorBlock author={authorMeta} />
        </div>
        <div className="mx-auto mb-[8rem] max-w-[73.125rem]">
          <PostList>
            {posts.map(({
              title: postTitle, headingImage, date, excerpt, slug,
            }) => (
              <PostCard
                key={date}
                date={date}
                slug={slug}
                readingTime={0}
                title={postTitle}
                excerpt={excerpt}
                headingImage={headingImage}
              />
            ))}
          </PostList>
        </div>
        <div className="mb-[6rem]">
          <Pagination
            totalItems={posts.length}
            currentPage={1}
            itemsPerPage={10}
          />
        </div>
      </div>
    </MainLayout>
  </div>
);

/**
  *  This func runs once at buildtime to get all the data from the
  *  sanity api and pass this data into component via props
  * */
export const getStaticProps = async () => {
  const data = await Promise.all([
    getHomepageMetaQuery(),
    getFirstAuthorMetaQuery(),
    getAllPosts(),
  ]);

  return {
    props: {
      pageMeta: data[0],
      authorMeta: data[1],
      posts: data[2],
    },
  };
};

export default Index;
