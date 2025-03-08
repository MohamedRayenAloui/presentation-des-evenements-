// Page de détails d'un événement.

// Importation des cmposants React
import EventLayout from "@/components/EventLayout";
import { notFound } from "next/navigation";

import valo from "@/public/valorant.webp";
import valo1 from "@/public/valorant1.webp";
import csgo from "@/public/csgo.webp";
import csgo1 from "@/public/csgo1.webp";

/**
 * @type {import("next").Metadata}
 */

export async function generateMetadata({ params }) {
    const { id } = params;
    const event = eventDetails[id];

    if (!event) {
        return {
            title: "Événement non trouvé | Esports Hub",
            description: "L'événement que vous recherchez n'existe pas ou a été supprimé.",
        };
    }

    return {
        title: `${event.name} | Esports Hub`,
        description: `Découvrez les détails de l'événement ${event.name}, les équipes participantes et suivez l'action en direct sur Esports Hub !`,
    };
}

// Détails des événements
const eventDetails = {
    "1": {
        name: "Tournoi CS:GO",
        description: `
        Plongez au cœur d'un tournoi intense de Counter-Strike: Global Offensive, où les meilleures équipes s'affrontent pour la gloire et des récompenses prestigieuses. 
        Préparez-vous à des stratégies élaborées, des moments palpitants et des retournements de situation incroyables. 
        Que vous soyez joueur ou spectateur, cet événement est une célébration de l'e-sport à son apogée.`,
        date: "2025-02-15",
        time: "18:00",
        images: [csgo, csgo1], // Images associées à l'événement
        iframeSrc: "lirik_247", // Identifiant du stream Twitch
        teams: [
            {
                name: "Equipe A",
                members: ["Alice", "Bob", "Charlie", "David", "Eve"],
            },
            {
                name: "Equipe B",
                members: ["Frank", "Grace", "Heidi", "Ivan", "Judy"],
            },
        ],
    },
    "2": {
        name: "Ligue Valorant",
        description: `
        Rejoignez-nous pour un événement spectaculaire dédié à Valorant, où les joueurs les plus talentueux et leurs équipes repoussent les limites du possible. 
        Avec une ambiance électrique et des performances de classe mondiale, vivez une immersion totale dans l'univers compétitif de ce FPS emblématique. 
        Préparez-vous à des duels épiques, des tactiques ingénieuses et une communauté passionnée !`,
        date: "2025-03-10",
        time: "20:00",
        images: [valo, valo1],
        iframeSrc: "shrood",
        teams: [
            {
                name: "Equipe X",
                members: ["Xavier", "Yara", "Zane", "Wanda", "Victor"],
            },
            {
                name: "Equipe Y",
                members: ["Uma", "Toby", "Sam", "Quinn", "Peter"],
            },
        ],
    },
};

// Fonction principale qui affiche les détails d'un événement
export default async function EventDetail({ params }) {
    const { id } = await params; // Récupération de l'identifiant de l'événement
    const event = eventDetails[id]; // Récupération des détails de l'événement correspondant à l'identifiant

    if (!event) {
        notFound(); // Affichage de la page d'erreur 404 si l'événement n'existe pas
    }

    // Affichage des détails de l'événement
    return (
        <EventLayout
            name={event.name}
            description={event.description}
            date={event.date}
            time={event.time}
            images={event.images}
            iframeSrc={event.iframeSrc}
            teams={event.teams}
        >
            <p>
                Suivez l'action en direct et découvrez toutes les informations importantes concernant cet événement.
            </p>
        </EventLayout>
    );
}