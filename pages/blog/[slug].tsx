import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Image from 'next/image';

import { createClient, EntryCollection } from 'contentful';
import { IBlogPost, IBlogPostFields } from '../../@types/generated/contentful';

// https://www.npmjs.com/package/@contentful/rich-text-react-renderer
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const client = createClient({
  accessToken: process.env.CONTENTFUL_CONTENT_DELIVERY_API_ACCESS_TOKEN as string,
  space: process.env.CONTENTFUL_SPACE_ID as string,
});

export const getStaticPaths: GetStaticPaths = async () => {
  const res: EntryCollection<IBlogPostFields> = await client.getEntries({
    content_type: 'blogPost',
  });

  const paths = res.items.map(item => {
    return { params: { slug: item.fields.slug, }, };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const res: EntryCollection<IBlogPostFields> = await client.getEntries({
    content_type: 'blogPost',
    'fields.slug': params?.slug,
  });

  return { props: { blogPost: res.items[0] }, };
};

const BlogPost: NextPage<BlogPostProps> = ({ blogPost }) => {
  return (
    <div>
      <article className="flex flex-col gap-4">
        <h2 className="heading-h2">
          {blogPost.fields.title}
        </h2>
        {/* Using Images from Contentful */}
        {/* https://www.youtube.com/watch?v=Mdx3ywlnzk8&list=PL4cUxeGkcC9jClk8wl1yJcN3Zlrr8YSA1&index=5 */}
        {/* <Image /> */}
        <span>
          {blogPost.fields.author}
        </span>
        <span>
          {new Date(blogPost.fields.datePublished).toLocaleDateString()}
        </span>
        <div className="flex flex-col gap-4">
          {documentToReactComponents(blogPost.fields.content)}
        </div>
        <div className="flex gap-4">
          {blogPost.fields.tags.map((tag, index) => {
            return (
              <span key={index} className="pill-standard bg-blue-100">
                {tag}
              </span>
            );
          })}
        </div>
      </article>
    </div>
  );
};

interface BlogPostProps {
  blogPost: IBlogPost,
};

export default BlogPost;
