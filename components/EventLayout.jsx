import Image from "next/image";
import styles from "./EventLayout.module.css";

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
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>{name}</h1>
      <p className={styles.description}>{description}</p>
      <p className={styles.dateTime}>
        <strong>Date:</strong> {date} | <strong>Heure:</strong> {time}
      </p>
      <div className={styles.mediaContainer}>
        {images[0] && <Image src={images[0]} alt="Image 1" className={styles.image} />}
        {iframeSrc && (
          <iframe
            src={`https://player.twitch.tv/?channel=${iframeSrc}&parent=localhost`}
            frameBorder="0"
            allowFullScreen
            className={styles.iframe}
          />
        )}
        {images[1] && <Image src={images[1]} alt="Image 2" className={styles.image} />}
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
