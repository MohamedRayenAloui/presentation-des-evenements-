// Code: Composant qui affiche la mise en page d'un événement avec ses détails

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./EventLayout.module.css";

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
    const [showTwitch, setShowTwitch] = useState(false);
    const [isClient, setIsClient] = useState(false);

    // ✅ Ensures this runs only on the client to prevent hydration mismatch
    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <section className={styles.container}>
            <h1 className={styles.title}>{name}</h1>
            <p className={styles.description}>{description}</p>
            <p className={styles.description}>{description1}</p>
            <p className={styles.description}>{description2}</p>
            <p className={styles.dateTime}>
                <strong>Date:</strong> {date} | <strong>Heure:</strong> {time}
            </p>
            <div className={styles.mediaContainer}>
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

                {isClient && (
                    !showTwitch ? (
                        <button className={styles.twitchPlaceholder} onClick={() => setShowTwitch(true)}>
                            Cliquez pour voir le stream
                        </button>
                    ) : (
                        <iframe
                            src={`https://player.twitch.tv/?channel=${iframeSrc}&parent=localhost&autoplay=false`}
                            frameBorder="0"
                            allowFullScreen
                            className={styles.iframe}
                            title={`Vidéo en direct de l'événement - ${name}`}
                        />
                    )
                )}

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
            {children && <div className={styles.additionalContent}>{children}</div>}
        </section>
    );
}
