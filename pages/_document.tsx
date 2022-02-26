import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

// Page used to solve "Do not add stylesheets using next/head" warning
// https://nextjs.org/docs/messages/no-stylesheets-in-head-component
