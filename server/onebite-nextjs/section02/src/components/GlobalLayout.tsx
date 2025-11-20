import styles from './GlobalLayout.module.css';
import Link from 'next/link';

export default function GlobalLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link href="/">📚 띨리의 서재</Link>
      </header>
      <main className={styles.main}>
        {children}
      </main>  
      <footer className={styles.footer}>
        <p>Copyright 2025. camomilekr. All rights reserved.</p>
      </footer>
    </div>
  )
};