// Using Images from Contentful
// https://www.youtube.com/watch?v=Mdx3ywlnzk8&list=PL4cUxeGkcC9jClk8wl1yJcN3Zlrr8YSA1&index=5
import Image from 'next/image';
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Link from 'next/link';

// https://github.com/contentful/rich-text/tree/master/packages/rich-text-react-renderer
import { createClient, EntryCollection } from 'contentful';
import { IBlogPost, IBlogPostFields } from '../../@types/generated/contentful';
import { documentToReactComponents, Options } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';

import Layout from '../../components/_resuables/Layout';

const BlogPost: NextPage<BlogPostProps> = ({ blogPost }) => {

  const {
    author,
    content,
    datePublished,
    heroImage,
    tags,
    title,
  } = blogPost.fields;

  // Enables documentToReactComponents to render assets embedded in content using the Next.js image component 
  const options: Options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node) => (
        <Image
          src={`http:${node.data.target.fields.file.url}`}
          alt={node.data.target.fields.description}
          width={node.data.target.fields.file.details.image?.width}
          height={node.data.target.fields.file.details.image?.height}
          priority
        />
      ),
      [BLOCKS.HR]: () => (
        <hr className="w-full" />
      ),
      [BLOCKS.HEADING_3]: (node, children) => (
        <h3 className="heading-h3">
          {children}
        </h3>
      ),
      [BLOCKS.HEADING_4]: (node, children) => (
        <h4 className="heading-h4">
          {children}
        </h4>
      ),
      [BLOCKS.HEADING_5]: (node, children) => (
        <h5 className="heading-h5">
          {children}
        </h5>
      ),
      [BLOCKS.HEADING_6]: (node, children) => (
        <h6 className="heading-h6">
          {children}
        </h6>
      ),
      [BLOCKS.OL_LIST]: (node, children) => (
        <ol className="flex flex-col gap-2 w-full px-8 list-decimal">
          {children}
        </ol>
      ),
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <p className="w-full">
          {children}
        </p>
      ),
      [BLOCKS.UL_LIST]: (node, children) => (
        <ul className="flex flex-col gap-2 w-full px-8 list-disc">
          {children}
        </ul>
      ),
    },
  };

  return (
    <Layout
      content={`Blog post about ${title} written by ${author}`}
      title={title}
      className="layout-standard items-center"
    >
      <article className="flex flex-col items-center gap-4">
        <h2 className="heading-h2">
          {title}
        </h2>
        <div className="flex gap-4">
          <span>
            {author}
          </span>
          <span>
            {new Date(datePublished).toLocaleDateString()}
          </span>
        </div>
        <Image
          src={`http:${heroImage?.fields.file.url}`}
          alt={heroImage?.fields.description}
          width={heroImage?.fields.file.details.image?.width}
          height={heroImage?.fields.file.details.image?.height}
          priority
        />
        <div className="flex flex-col items-center gap-4">
          {documentToReactComponents(content, options)}
        </div>
      </article>

      <div className="flex gap-4">
        {tags.map((tag, index) => {
          return (
            <span key={index} className="pill-standard bg-blue-100">
              {tag}
            </span>
          );
        })}
      </div>

      <Link href="/blog" passHref>
        <a className="button-text button-with-icon">
          <span className="material-icons">
            arrow_back
          </span>
          <span>
            All posts
          </span>
        </a>
      </Link>
    </Layout>
  );
};

// Create contentfulClient here so it can be used in both getStaticPaths and getStaticProps
const contentfulClient = createClient({
  accessToken: process.env.CONTENTFUL_CONTENT_DELIVERY_API_ACCESS_TOKEN as string,
  space: process.env.CONTENTFUL_SPACE_ID as string,
});

export const getStaticPaths: GetStaticPaths = async () => {
  const res: EntryCollection<IBlogPostFields> = await contentfulClient.getEntries({
    content_type: 'blogPost',
  });

  const paths = res.items.map(item => ({ params: { slug: item.fields.slug, }, }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const res: EntryCollection<IBlogPostFields> = await contentfulClient.getEntries({
    content_type: 'blogPost',
    'fields.slug': context.params?.slug,
  });

  return { props: { blogPost: res.items[0], }, };
};

interface BlogPostProps {
  blogPost: IBlogPost,
};

export default BlogPost;
