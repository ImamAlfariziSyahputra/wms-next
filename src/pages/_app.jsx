import '@/styles/globals.css';
import Head from 'next/head';
import { Provider } from 'react-redux';
import Layout from '@/components/layouts/Layout';
import { store } from '@/redux/store';

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Head>
        <title>WMS App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
