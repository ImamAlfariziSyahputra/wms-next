import '@/styles/globals.css';
import Head from 'next/head';
import Layout from '@/components/layouts/Layout';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>WMS App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
