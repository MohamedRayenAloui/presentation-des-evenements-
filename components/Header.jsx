// Code pour afficher l'en-tête de l'application

"use client"; // Indique que le code est destiné au client

// Importation du composant Image de Next.js, du logo et des styles CSS
import Image from "next/image";
import styles from "./Header.module.css";
import logo from "@/public/logo.png";

// Fonction pour afficher l'en-tête de l'application
export default function Header({ onNavClick }) {
    return (
        <header className={styles.header}>
            <div className={styles.logoContainer}>
                {/* Logo cliquable pour retourner à la page d'accueil */}
                <a onClick={() => onNavClick("home")}>
                    <Image src={logo} alt="Logo" width={100} height={100} />
                </a>
            </div>
            {/* Menu de navigation pour accéder aux différentes pages de l'application */}
            <div className={styles.content}>
                <h1>Esports Hub</h1>
                <nav className={styles.nav}>
                    <a onClick={() => onNavClick("home")} className={styles.navLink}>
                        Accueil
                    </a>
                    <a onClick={() => onNavClick("evenements")} className={styles.navLink}>
                        Événements
                    </a>
                </nav>
            </div>
        </header>
    );
}
