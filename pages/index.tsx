import Heading from '../components/Heading';
import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import Socials from '../components/Socials';
import { GetStaticProps } from 'next';
import { FC } from 'react';
import { socialsType } from '../types';

type socialsTypeProps = {
  socials: socialsType[]
}

const Home: FC<socialsTypeProps> = ({ socials }) => (
  <div className={styles.wrapper}>
    <Head>
      <title>Home page</title>
    </Head>
    <Heading text="Next.js application" />
    <Socials socials={socials} />
  </div>
);

export const getStaticProps: GetStaticProps = async () => {
  try {
    const response = await fetch(`${process.env.API_HOST}/socials`);
    const data = await response.json();

    return {
      props: { socials: data }
    };
  } catch (error) {
    return {
      props: { socials: null }
    };
  }
};

export default Home;
