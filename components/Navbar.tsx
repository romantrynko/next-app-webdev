import Link from 'next/link';
import styles from '../styles/Navbar.module.scss';
import { navigation } from './constants/nav';
import { useRouter } from 'next/router';
import { FC } from 'react';
import Image from 'next/image';

const Navbar: FC = () => {
  const { pathname } = useRouter();
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <Image src="/logo.png" width="60" height="60" alt="webDev" />
      </div>
      <div className={styles.links}>
        {navigation.map(({ path, title, id }) => (
          <Link href={path} key={id}>
            <a className={pathname === path ? styles.active : null}>{title}</a>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
