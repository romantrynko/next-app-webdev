import Heading from '../components/Heading';
import Head from 'next/head';
import styles from '../styles/404.module.scss';

import { useEffect } from 'react';
import { useRouter } from 'next/dist/client/router';

const Error = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 1500);
  }, [router]);

  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Error</title>
      </Head>
      <div>
        <Heading text="Error" />
        <Heading tag="h2" text="Something wrong" />
      </div>
    </div>
  );
};

export default Error;
