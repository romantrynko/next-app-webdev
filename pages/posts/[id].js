import Head from 'next/head';
import ContactInfo from '../../components/ContactInfo';

const Post = ({ posts }) => (
  <>
    <Head>
      <title>{posts.title}</title>
    </Head>
    <ContactInfo contact={data} />
  </>
);

export const getServerSideProps = async (context) => {
  const { id } = context.params;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const data = await response.json();

  if (!data) {
    return {
      notFound: true
    };
  }

  return {
    props: { data }
  };
};

export default Post;
