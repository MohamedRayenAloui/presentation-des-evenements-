"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";
import logo from "@/public/logo.webp";

// Définir le composant Header
export default function Header() {
    const pathname = usePathname(); // Récupérer le chemin actuel

    // Fonction pour vérifier si le lien est actif
    const isActive = (path) => pathname === path ? styles.active : "";

    return (
        <>
            { /* En-tête du site */}
            <header className={styles.header}>
                {/* Logo du site */}
                <div className={styles.logoContainer}>
                    <Link href="/">
                        <Image src={logo} alt="Logo" width={100} height={100} />
                    </Link>
                </div>
                <div className={styles.content}>
                    <h1>Esports Hub</h1>
                    {/* Navigation du site */}
                    <nav className={styles.nav}>
                        <Link href="/" className={`${styles.navLink} ${isActive("/")}`}>Accueil</Link>
                        <Link href="/Evenements" className={`${styles.navLink} ${isActive("/Evenements")}`}>Événements</Link>
                        <Link href="/contact" className={`${styles.navLink} ${isActive("/contact")}`}>Contact</Link>
                    </nav>
                </div>
            </header>
        </>
    );
}
