import Heading from '../components/Heading';
import Head from "next/head";
import styles from '../styles/Home.module.scss';

const Home = () => (
  <div className={styles.wrapper}>
    <Head>
      <title>Home page</title>
    </Head>
    <Heading text="Next.js application" />
  </div>
);

export default Home;
