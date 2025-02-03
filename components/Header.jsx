"use client";

import Image from "next/image";
import styles from "./Header.module.css";
import logo from "@/public/logo.png";

export default function Header({ onNavClick }) {
    return (
        <header className={styles.header}>
            <div className={styles.logoContainer}>
                <a onClick={() => onNavClick("home")}>
                    <Image src={logo} alt="Logo" width={100} height={100} />
                </a>
            </div>
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
