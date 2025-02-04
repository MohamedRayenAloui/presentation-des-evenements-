// Code source de la page des événements

"use client"; // Indique que le code est destiné au client

// Importation du composant Image de Next.js et des styles CSS
import Image from "next/image";
import styles from "./EvenementPage.module.css";

// Importation des images des jeux
import valo from "/public/valorant.png";
import csgo from "/public/csgo.png";

// Fonction principale qui affiche la page des événements
export default function EvenementPage({ onEventSelect }) {
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
                {events.map((event) => ( // Parcours de la liste des événements
                    <div
                        key={event.id} // Clé unique pour chaque événement
                        onClick={() => onEventSelect(event.id)} // Gestion de la sélection de l'événement
                    >
                        <div className={styles.eventCard}>
                            <Image src={event.image} alt={event.name} className={styles.eventImage} />
                            <h2>{event.name}</h2>
                            <p>{event.description}</p>
                            <p>
                                <strong>Date:</strong> {event.date} | <strong>Heure:</strong> {event.time}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
