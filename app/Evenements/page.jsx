// Page de la page des événements

import EvenementPage from "@/components/EvenementPage";

/**
 * @type {import("next").Metadata}
 */

export const metadata = {
    title: "Événements | Esports Hub",
    description: "Découvrez les événements à venir sur Esports Hub. Tournois, compétitions, matchs de haut niveau des jeux vidéo et d'esports !",
};

// Fonction principale qui affiche la page des événements
export default function Evenement() {
    return <EvenementPage />
}