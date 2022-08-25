import Heading from '../../components/Heading';
import Head from 'next/head';
import Link from 'next/link';

const Contacts = ({ data }) => {
  return (
    <>
      <Head>
        <title>Contacts</title>
      </Head>
      <Heading text="Contacts list:" />
      <ul>
        {data &&
          data.map(({ id, name, email }) => {
            return (
              <li key={id}>
                <Link href={`/contacts/${id}`}>{name}</Link>
              </li>
            );
          })}
      </ul>
    </>
  );
};

export const getStaticProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();
  // const data = null;

  if (!data) {
    return {
      notFound: true
    };
  }

  return {
    props: { data }
  };
};

export default Contacts;
