import Link from 'next/link';
import styles from '../styles/Navbar.module.scss';
import { navigation } from './constants/nav';
import { useRouter } from 'next/router';

const Navbar = () => {
  const { pathname } = useRouter();
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>webDev</div>
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