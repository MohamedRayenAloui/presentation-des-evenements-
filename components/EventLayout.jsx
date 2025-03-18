// Code: Composant qui affiche la mise en page d'un événement avec ses détails

"use client";

// Importation des hooks useState et useEffect de React
import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./EventLayout.module.css";

// Définir le composant EventLayout
export default function EventLayout({
    name,
    description,
    description1,
    description2,
    date,
    time,
    images,
    iframeSrc,
    teams,
    children,
}) {
    // Définir l'état local pour afficher ou non le stream Twitch
    const [showTwitch, setShowTwitch] = useState(false);
    // Définir l'état local pour vérifier si le code s'exécute côté client
    const [isClient, setIsClient] = useState(false);

    // Utiliser useEffect pour s'assurer que ce code ne s'exécute que côté client
    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        // Conteneur principal du composant
        <section className={styles.container}>
            {/* Titre de l'événement */}
            <h1 className={styles.title}>{name}</h1>
            {/* Description de l'événement */}
            <p className={styles.description}>{description}</p>
            <p className={styles.description}>{description1}</p>
            <p className={styles.description}>{description2}</p>
            {/* Date et heure de l'événement */}
            <p className={styles.dateTime}>
                <strong>Date:</strong> {date} | <strong>Heure:</strong> {time}
            </p>
            {/* Conteneur pour les médias */}
            <div className={styles.mediaContainer}>
                {/* Afficher la première image si elle existe */}
                {images[0] && (
                    <Image
                        src={images[0]}
                        alt="Image de l'événement"
                        width={600}
                        height={340}
                        sizes="(max-width: 768px) 100vw, 600px"
                        quality={80}
                        loading="lazy"
                        className={styles.image}
                    />
                )}

                {/* Afficher le stream Twitch si le code s'exécute côté client */}
                {isClient && (
                    !showTwitch ? (
                        // Bouton pour afficher le stream Twitch
                        <button className={styles.twitchPlaceholder} onClick={() => setShowTwitch(true)}>
                            Cliquez pour voir le stream
                        </button>
                    ) : (
                        // Iframe pour afficher le stream Twitch
                        <iframe
                            src={`https://player.twitch.tv/?channel=${iframeSrc}&parent=localhost&autoplay=false`}
                            frameBorder="0"
                            allowFullScreen
                            className={styles.iframe}
                            title={`Vidéo en direct de l'événement - ${name}`}
                        />
                    )
                )}

                {/* Afficher la deuxième image si elle existe */}
                {images[1] && (
                    <Image
                        src={images[1]}
                        alt="Image supplémentaire de l'événement"
                        width={600}
                        height={340}
                        sizes="(max-width: 768px) 100vw, 600px"
                        quality={80}
                        loading="lazy"
                        className={styles.image}
                    />
                )}
            </div>

            {/* Afficher les équipes si elles existent */}
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
            {/* Afficher le contenu additionnel si fourni */}
            {children && <div className={styles.additionalContent}>{children}</div>}
        </section>
    );
}
