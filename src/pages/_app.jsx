import '@/styles/globals.css';
import Head from 'next/head';
import { Provider } from 'react-redux';
import { store } from '@/redux/store';
import Config from '@/components/Config';
import Layout from '@/components/layouts/Layout';

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Head>
        <title>WMS App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Config>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Config>
    </Provider>
  );
}
