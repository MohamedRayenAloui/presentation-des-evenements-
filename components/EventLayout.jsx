// Code: Composant qui affiche la mise en page d'un événement avec ses détails

"use client";

// Importation du composant Image de Next.js et des styles CSS
import Image from "next/image";
import styles from "./EventLayout.module.css";
import { useState } from "react";

export default function EventLayout({
    name,
    description,
    date,
    time,
    images,
    iframeSrc,
    teams,
    children,
}) {
    const [showTwitch, setShowTwitch] = useState(false);


    return (
        <section className={styles.container}>
            <h1 className={styles.title}>{name}</h1>
            <p className={styles.description}>{description}</p>
            <p className={styles.dateTime}>
                <strong>Date:</strong> {date} | <strong>Heure:</strong> {time}
            </p>
            <div className={styles.mediaContainer}>
                {/* Affichage des images et de la vidéo en direct de l'événement */}
                {images[0] && <Image src={images[0]} alt="Image 1" className={styles.image} width={800}
                    height={450} sizes="(max-width: 768px) 100vw, 800px" priority quality={80}/>}
                {iframeSrc && (
                    <iframe
                        src={`https://player.twitch.tv/?channel=${iframeSrc}&parent=localhost&autoplay=false`}
                        frameBorder="0"
                        allowFullScreen
                        className={styles.iframe}
                        title={`Vidéo en direct de l'événement - ${name}`}
                    />
                )}
                {images[1] && <Image src={images[1]} alt="Image 2" className={styles.image} width={800}
                    height={450} sizes="(max-width: 768px) 100vw, 800px" loading="lazy" quality={80}/>}
            </div>
            {/* Affichage des équipes participantes */}
            {teams && (
                <div className={styles.teamsContainer}>
                    <h2>Équipes</h2>
                    <div className={styles.teams}>
                        {teams.map((team, index) => (
                            <div key={index} className={styles.team}>
                                <h3>{team.name}</h3>
                                <ul>
                                    {team.members.map((member, idx) => (
                                        <li key={idx}>{member}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            )}
            {/* Affichage du contenu supplémentaire */}
            {children && <div className={styles.additionalContent}>{children}</div>}
        </section>
    );
}
