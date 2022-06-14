import { IHomepageMeta, IAuthor, IPost } from 'interfaces';
import { client } from './sanity';

export const homepageMetaQuery = `
*[_type == 'homepageSchema'][0]{ title, seo_title, seo_descr }
`;

export const getHomepageMetaQuery = async (): Promise<IHomepageMeta> => {
  const res = await client.fetch(homepageMetaQuery);
  return res;
};

export const firstAuthorMetaQuery = `
*[_type == 'authorSchema']{ name, avatar, bio } | order(_createdAt asc)[0]
`;

export const getFirstAuthorMetaQuery = async (): Promise<IAuthor> => {
  const res = await client.fetch(firstAuthorMetaQuery);
  return res;
};

export const postBySlugQuery = `
*[_type == 'postSchema' && slug.current == $slug][0]{
  ...,
  'slug': slug.current,
  "readingTime": round(length(pt::text(content)) / 5 / 180 ),
  content[]{
    ...,
    markDefs[]{
      ...,
      _type == 'internalLink' => {
        ...,
        "slug": @.item->slug,
        "url": "${process.env.NEXT_PUBLIC_PROTOCOL}://${process.env.NEXT_PUBLIC_DOMAIN}/posts/" + @.item->slug.current
      }
    }
  }
}`;

export const getPostBySlugQuery = async (slug: string): Promise<IPost> => {
  const posts = await client.fetch(postBySlugQuery, { slug });
  return posts;
};

export const postsSlugsQuery = `
*[_type == 'postSchema' && defined(slug.current)][].slug.current
`;

export const getPostsSlugsQuery = async (): Promise<string[]> => client.fetch(postsSlugsQuery);

export const allPosts = `
*[_type == 'postSchema']{title, headingImage, slug, date, excerpt } | order(_createdAt desc)`;

export const getAllPosts = () => client.fetch(allPosts);
