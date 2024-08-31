import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='kr'>
      <Head>
        <link id='favicon' rel='icon' href='/icons/logo.svg' />
        <title>Whiteboard</title>
      </Head>
      <body>
        <Main />
        <div id='modal-root' />
        <NextScript />
      </body>
    </Html>
  );
}
