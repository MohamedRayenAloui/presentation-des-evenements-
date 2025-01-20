import Image from 'next/image';
import logo from '@/public/logo.png';
import styles from './Header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logoContainer}>
                <Image src={logo} alt="Logo" width={100} height={100} />
                </div>
                <div className={styles.content}> 
                <h1>Esports Hub</h1>
            <nav className={styles.nav}>
                <a href="/" className={styles.navLink}>Accueil</a>
                <a href="/events" className={styles.navLink}>Événement 2</a>
                <a href="/ranking" className={styles.navLink}>Événement 2</a>
            </nav>
            </div>

        </header>
    );
}
