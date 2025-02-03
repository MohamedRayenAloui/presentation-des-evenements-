"use client";

import Image from "next/image";
import styles from "./EvenementPage.module.css";

import valo from "/public/valorant.png";
import csgo from "/public/csgo.png";

export default function EvenementPage({ onEventSelect }) {
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

    return (
        <section className={styles.container}>
            <h1>Événements</h1>
            <div className={styles.eventGrid}>
                {events.map((event) => (
                    <div
                        key={event.id}
                        onClick={() => onEventSelect(event.id)}
                        className={styles.detailsLink}
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
