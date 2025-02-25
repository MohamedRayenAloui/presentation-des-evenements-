// Code pour afficher l'en-tête de l'application

// Importation du composant Image de Next.js, du logo et des styles CSS
import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";

import logo from "@/public/logo.png";

export default function Header() {
    return (
        <header className={styles.header}>
            {/* Logo cliquable pour retourner à la page d'accueil */}
            <div className={styles.logoContainer}>
                <Link href="/">
                    <Image src={logo} alt="Logo" width={100} height={100} />
                </Link>
            </div>
            {/* Menu de navigation pour accéder aux différentes pages de l'application */}
            <div className={styles.content}>
                <h1>Esports Hub</h1>
                <nav className={styles.nav}>
                    <Link href="/" className={styles.navLink}>Accueil</Link>
                    <Link href="/Evenements" className={styles.navLink}>Événements</Link>
                    <Link href="/contact" className={styles.navLink}>Contact</Link>
                </nav>
            </div>
        </header>
    );
}
