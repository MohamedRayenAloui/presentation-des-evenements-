// Code pour afficher le pied de page de l'application

// Importations des icônes des réseaux sociaux et des styles CSS
import { FaFacebookF, FaTwitter, FaInstagram, FaTwitch } from "react-icons/fa";
import styles from "./Footer.module.css";

// Fonction pour afficher le pied de page de l'application
export default function Footer() {
    return (
        <footer className={styles.footer}>
            <p>
                Suivez-nous sur les réseaux sociaux et découvrez nos partenaires.
            </p>

            {/* Liens vers les réseaux sociaux */}
            <div className={styles.socialContainer}>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <FaFacebookF />
                </a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                    <FaTwitter />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                </a>
                <a href="https://www.twitch.tv" target="_blank" rel="noopener noreferrer">
                    <FaTwitch />
                </a>
            </div>

            {/* Liens vers les partenaires */}
            <div className={styles.partners}>
                <a href="#" target="_blank" rel="noopener noreferrer">Partenaire 1</a>
                <a href="#" target="_blank" rel="noopener noreferrer">Partenaire 2</a>
            </div>

            <p>
                &copy; 2025 -  Rayen Aloui &amp; Adam Ouenza
            </p>
        </footer>
    );
}
