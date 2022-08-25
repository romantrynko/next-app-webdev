import Layout from '../components/Layout';
import '../styles/globals.scss';
import Image from 'next/image';
import youtubeImg from '../public/logo.png';
import Head from 'next/head';

const MyApp = ({ Component, pageProps }) => (
  <Layout>
    <Head>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&family=Mulish:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>
    </Head>

    <main>
      <Component {...pageProps} />
    </main>
    <Image
      src={youtubeImg}
      width={500}
      height={500}
      alt="preview"
      placeholder="blur"
    />
  </Layout>
);

export default MyApp;
