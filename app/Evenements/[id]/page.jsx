// Page de détails d'un événement.

// Importation des composants React
import EventLayout from "@/components/EventLayout";
import { notFound } from "next/navigation";
import eventDetails from "@/data/events.json"; // Importation des détails des événements

/**
 * @type {import("next").Metadata}
 */

// Générer les métadonnées pour la page de détails de l'événement
export async function generateMetadata({ params }) {
    const { id } = await params; // Récupération de l'identifiant de l'événement
    const event = eventDetails[id]; // Récupération des détails de l'événement correspondant à l'identifiant

    // Vérifier si l'événement existe
    if (!event) {
        return {
            title: "Événement non trouvé | Esports Hub",
            description: "L'événement que vous recherchez n'existe pas ou a été supprimé.",
        };
    }

    // Retourner les métadonnées pour l'événement
    return {
        title: `${event.name} | Esports Hub`,
        description: `Découvrez les détails de l'événement ${event.name}, les équipes participantes et suivez l'action en direct sur Esports Hub !`,
    };
}

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
            description1={event.description1}
            description2={event.description2}
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