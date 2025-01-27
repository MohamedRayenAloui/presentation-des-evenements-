import EventLayout from "@/components/EventLayout";
import valo from "@/public/valorant.png";
import valo1 from "@/public/valorant1.png";
import csgo from "@/public/csgo.png";
import csgo1 from "@/public/csgo1.png";

const eventDetails = {
    "1": {
        name: "Tournoi CS:GO",
        description: `
        Plongez au cœur d'un tournoi intense de Counter-Strike: Global Offensive, où les meilleures équipes s'affrontent pour la gloire et des récompenses prestigieuses. 
        Préparez-vous à des stratégies élaborées, des moments palpitants et des retournements de situation incroyables. 
        Que vous soyez joueur ou spectateur, cet événement est une célébration de l'e-sport à son apogée.`,
        date: "2025-02-15",
        time: "18:00",
        images: [csgo, csgo1],
        iframeSrc: "lirik_247",
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

export default function EventDetail({ params }) {
    const { id } = params;
    const event = eventDetails[id];

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

