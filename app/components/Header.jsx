import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <span className={styles.g}>G</span>
        <span className={styles.u}>u</span>
        <span className={styles.n1}>n</span>
        <span className={styles.a}>a</span>
        <span className={styles.w}>w</span>
        <span className={styles.a2}>a</span>
        <span className={styles.n2}>n</span>
      </div>
      <nav>
        <ul className={styles.navList}>
          <li><Link href="#about">About</Link></li>
          <li><Link href="#projects">Projects</Link></li>
          <li><Link href="#skills">Skills</Link></li>
          <li><Link href="#contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}