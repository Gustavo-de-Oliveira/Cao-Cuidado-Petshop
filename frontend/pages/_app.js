import Head from 'next/head';
import '../style/index.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>ReactJS with react-bootstrap</title>
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
