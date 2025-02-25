"use client";

import { useActionState } from "react";
import styles from "./ContactForm.module.css";

export default function ContactForm() {
    /**
     * @param {FormData} formData 
     */
    const handleSubmit = (previousState, formData) => {
        const nom = formData.get("nom");
        const email = formData.get("email");
        const message = formData.get("message");

        let newState = {
            nom: { valeur: "", erreur: null },
            email: { valeur: "", erreur: null },
            message: { valeur: "", erreur: null },
        };

        let erreur = false;

        if (!nom) {
            erreur = true;
            newState.nom.erreur = "Veuillez entrer votre nom.";
        }

        if (!email) {
            erreur = true;
            newState.email.erreur = "Veuillez entrer une adresse courriel.";
        } else if (
            !email.match(
                /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
            )
        ) {
            erreur = true;
            newState.email.erreur = "Veuillez entrer une adresse courriel valide.";
        }

        if (!message) {
            erreur = true;
            newState.message.erreur = "Veuillez entrer votre message.";
        }

        if (erreur) {
            newState.nom.valeur = nom;
            newState.email.valeur = email;
            newState.message.valeur = message;
            return newState;
        }

        console.log("Formulaire soumis :", { nom, email, message });

        return newState;
    };

    const [formState, formAction] = useActionState(handleSubmit, {
        nom: { valeur: "", erreur: null },
        email: { valeur: "", erreur: null },
        message: { valeur: "", erreur: null },
    });

    return (
        <div className={styles.container}>
        <form action={formAction} className={styles.form} noValidate>
            <label>
                Nom:
                <input type="text" name="nom" defaultValue={formState.nom.valeur} />
                <div className={styles.erreur}>{formState.nom.erreur}</div>
            </label>

            <label>
                Courriel:
                <input type="email" name="email" defaultValue={formState.email.valeur} />
                <div className={styles.erreur}>{formState.email.erreur}</div>
            </label>

            <label>
                Message:
                <textarea name="message" rows="4" defaultValue={formState.message.valeur} />
                <div className={styles.erreur}>{formState.message.erreur}</div>
            </label>

            <button type="submit">Envoyer</button>
        </form>
        </div>
    );
}
