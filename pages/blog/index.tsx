import type { GetStaticProps, NextPage } from 'next';
import Link from 'next/link';

import { createClient, EntryCollection } from 'contentful';
import { IBlogPost, IBlogPostFields } from '../../@types/generated/contentful';
import Layout from '../../components/_reusables/Layout';

const BlogPostIndex: NextPage<BlogPostIndexProps> = ({ blogPosts }) => {
  return (
    <Layout
      content="List of blog posts for (site/author name here)"
      title="Blog Posts"
    >
      <div className="flex flex-col gap-4">
        <h2 className="heading-h2">
          Blog Posts
        </h2>
        <ul className="flex flex-col gap-4">
          {blogPosts.map((post, index) => {
            return (
              <li key={index}>
                <Link href={`/blog/${encodeURIComponent(post.fields.slug)}`} >
                  {post.fields.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const contentfulClient = createClient({
    accessToken: process.env.CONTENTFUL_CONTENT_DELIVERY_API_ACCESS_TOKEN as string,
    space: process.env.CONTENTFUL_SPACE_ID as string,
  });

  const res: EntryCollection<IBlogPostFields> = await contentfulClient.getEntries({
    content_type: 'blogPost',
  });

  return { props: { blogPosts: res.items, }, };
};

interface BlogPostIndexProps {
  blogPosts: IBlogPost[],
};

export default BlogPostIndex;
