import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#f85555" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
