import Heading from '../components/Heading';
import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import Socials from '../components/Socials';

const Home = ({ socials }) => (
  <div className={styles.wrapper}>
    <Head>
      <title>Home page</title>
    </Head>
    <Heading text="Next.js application" />
    <Socials socials={socials} />
  </div>
);

export const getStaticProps = async () => {
  const response = await fetch(`${process.env.API_HOST}/socials`);
  const data = await response.json();

  return {
    props: { socials: data }
  };
};

export default Home;
