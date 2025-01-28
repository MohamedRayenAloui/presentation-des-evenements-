import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";

import logo from "@/public/logo.png";

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logoContainer}>
                <Link href="/">
                    <Image src={logo} alt="Logo" width={100} height={100} />
                </Link>
            </div>
            <div className={styles.content}>
                <h1>Esports Hub</h1>
                <nav className={styles.nav}>
                    <Link href="/" className={styles.navLink}>Accueil</Link>
                    <Link href="/Evenements" className={styles.navLink}>Événements</Link>
                </nav>
            </div>

        </header>
    );
}
