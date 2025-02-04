// Code pour la page d'erreur 404

import styles from './not-found.module.css';

// Fonction pour afficher la page d'erreur 404
export default function NotFound() {
    return (
        <div className={styles.div}>
            <h1>Erreur 404</h1>
            <p>Page introuvable. Veuillez vérifier l'URL ou retourner à la page d'accueil.</p>
        </div >
    );
}