import Head from 'next/head';
import ContactInfo from '../../components/ContactInfo';
import { GetServerSideProps } from 'next';
import { FC } from 'react';
import { contactType } from '../../types';

type contactTypeProps = {
  contact: contactType
}

const Contact: FC<contactTypeProps> = ({ contact }) => (
  <>
    <Head><title>{contact.name}</title></Head>
    <ContactInfo contact={contact} />
  </>
);

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params;
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await response.json();

  if (!data) {
    return {
      notFound: true
    };
  }

  return {
    props: { contact: data }
  };
};

export default Contact;
