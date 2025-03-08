"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";
import logo from "@/public/logo.webp";

export default function Header() {
    const pathname = usePathname();

    const isActive = (path) => pathname === path ? styles.active : "";

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
                    <Link href="/" className={`${styles.navLink} ${isActive("/")}`}>Accueil</Link>
                    <Link href="/Evenements" className={`${styles.navLink} ${isActive("/Evenements")}`}>Événements</Link>
                    <Link href="/contact" className={`${styles.navLink} ${isActive("/contact")}`}>Contact</Link>
                </nav>
            </div>
        </header>
    );
}
