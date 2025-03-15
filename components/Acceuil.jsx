import Image from "next/image"
import styles from "./Acceuil.module.css"
import banner from "/public/banner.webp"

export default function Acceuil() {
    return <>
        {/* Section principale de la page d'accueil */}
        <section className={styles.section}>
            <h1>Esports Hub</h1>
            <p>
                La plateforme incontournable pour les passionnés de jeux vidéo et d'esports !
            </p>
            <div className={styles.imageContainer}>
                <Image src={banner} alt="Bannière Esports" width={800} height={400} priority sizes="(max-width: 768px) 100vw, 800px" />
            </div>
        </section>

        {/* Sections supplémentaires de la page d'accueil */}
        <section className={styles.section}>
            <h2>Découvrez un monde compétitif</h2>
            <p>
                Plongez au cœur des tournois les plus prestigieux, avec des équipes de renommée mondiale et des joueurs stars qui repoussent les limites du possible. Explorez nos sections dédiées pour en savoir plus sur les prochaines compétitions, les diffusions en direct et les annonces exclusives.
            </p>
            <div className={styles.videoContainer}>
                <iframe
                    width="960"
                    height="540"
                    src="https://www.youtube.com/embed/_7LzTtfjCyU?autoplay=0&mute=1&rel=0"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    loading="lazy">
                </iframe>
            </div>
        </section>

        <section className={styles.section}>
            <h2>Pourquoi choisir Esports Hub ?</h2>
            <ul>
                <li>Accès rapide aux événements à venir.</li>
                <li>Informations détaillées sur les équipes et joueurs.</li>
                <li>Actualités en temps réel pour ne rien manquer.</li>
                <li>Une interface moderne, adaptée à tous vos appareils.</li>
            </ul>
        </section>

        <section className={styles.section}>
            <p>
                Nous croyons que l'esport est bien plus qu'une compétition : c'est une communauté en pleine expansion, un art de vivre numérique, et un lieu où se croisent passion et talent. Rejoignez-nous pour célébrer ensemble cette incroyable aventure.
            </p>
        </section>
    </>
}