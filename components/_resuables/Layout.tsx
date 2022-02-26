import Head from 'next/head';

export default function Layout({
  additionalOuterContainerStyles,
  children,
  className = "layout-standard",
  content,
  title,
}: LayoutProps) {
  return (
    <div className={`${additionalOuterContainerStyles}`}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={content} />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      </Head>

      <main className={`${className}`}>
        {children}
      </main>
    </div>
  );
};

interface LayoutProps {
  additionalOuterContainerStyles?: string,
  children: JSX.Element[] | JSX.Element,
  className?: string,
  content: string,
  title: string,
};
