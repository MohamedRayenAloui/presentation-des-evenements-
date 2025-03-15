// Code pour la page d'erreur 404

import Link from 'next/link';
import styles from './not-found.module.css';

/**
 * @type {import("next").Metadata}
 */

// Définir les métadonnées pour la page d'erreur 404
export const metadata = {
    title: "Erreur 404 | Esports Hub",
    description: "Erreur 404 : Page introuvable. Veuillez vérifier l'URL ou retourner à la page d'accueil.",
};

// Fonction principale qui affiche la page d'erreur 404
export default function NotFound() {
    return (
        <div className={styles.div}>
            <h1>Erreur 404</h1>
            <p>Page introuvable. Veuillez vérifier l'URL ou retourner à la
                <Link href="/" className={styles.Link}> page d'accueil.</Link>
            </p>
        </div>
    );
}