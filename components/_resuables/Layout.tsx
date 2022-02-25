import Head from 'next/head';

export default function Layout({
  children,
  containerStyles,
  content,
  title,
}: LayoutProps) {
  return (
    <div className={`${containerStyles}`}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={content} />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      </Head>

      {children}
    </div>
  );
};

interface LayoutProps {
  children: JSX.Element[] | JSX.Element,
  containerStyles?: string,
  content: string,
  title: string,
};
