// Page pour la page d'accueil

import Acceuil from "@/components/Acceuil";

/**
 * @type {import("next").Metadata}
 */

// Définir les métadonnées pour la page d'accueil
export const metadata = {
    title: "Accueil | Esports Hub",
    description: "Bienvenue sur Esports Hub, la plateforme incontournable des tournois et compétitions pour les passionnés de jeux vidéo et d'esports !",
};

// Fonction principale qui affiche la page d'accueil
export default function Home() {
    return <Acceuil />
}