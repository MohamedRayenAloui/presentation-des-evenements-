// Code source de la page des événements

// Importation du composant Image de Next.js et des styles CSS
import Image from "next/image";
import Link from "next/link";
import styles from "./EvenementPage.module.css";

// Importation des images des jeux
import valo from "/public/valorant.webp";
import csgo from "/public/csgo.webp";

// Fonction principale qui affiche la page des événements
export default function EvenementPage() {
    // Données des événements
    const events = [
        {
            id: "1",
            name: "Tournoi CS:GO",
            date: "2025-02-15",
            time: "18:00",
            description: "Un tournoi compétitif de Counter-Strike: Global Offensive.",
            image: csgo,
        },
        {
            id: "2",
            name: "Ligue Valorant",
            date: "2025-03-10",
            time: "20:00",
            description: "Compétition de haut niveau entre équipes professionnelles.",
            image: valo,
        },
    ];

    // Affichage des événements sous forme de cartes avec leurs détails 
    return (
        <section className={styles.container}>
            <h1>Événements</h1>
            <div className={styles.eventGrid}>
                {events.map((event, index) => ( // Parcours de la liste des événements
                    <Link
                        key={event.id} // Clé unique pour chaque événement
                        href={`/Evenements/${event.id}`} // Gestion de la sélection de l'événement
                        className={styles.detailsLink}
                    >
                        <div className={styles.eventCard}>
                            <Image
                                src={event.image}
                                alt={event.name}
                                className={styles.eventImage}
                                width={600}
                                height={350}
                                sizes="(max-width: 768px) 100vw, 600px"
                                priority={index === 0}
                                loading={index === 0 ? "eager" : "lazy"}
                            />
                            <h2>{event.name}</h2>
                            <p>{event.description}</p>
                            <p>
                                <strong>Date:</strong> {event.date} | <strong>Heure:</strong> {event.time}
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
