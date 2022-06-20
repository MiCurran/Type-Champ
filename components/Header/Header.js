import styles from './Header.module.scss';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => (
    <header className={styles.header}>
        <div className={styles.left}>
            <Link href="/">
                <a className={styles.logo}>
                    <Image src="/sword.svg" width="64" height="64" alt="Logo" />
                    <span className={styles.appName}>Type Warrior</span>
                </a>
            </Link>
        </div>
        <div className={styles.right}>
            <Link href="/">Home</Link>
        </div>
    </header>
);

export default Header;
