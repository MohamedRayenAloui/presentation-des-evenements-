"use client";

import { useActionState, useState } from "react";
import { validateContact } from "@/validation/contact";
import contactServeur from "@/actions/contact";
import { useRouter } from "next/navigation";
import styles from "./ContactForm.module.css";

export default function ContactForm() {
    const [successMessage, setSuccessMessage] = useState("");

    const router = useRouter();
    /**
     * @param {FormData} formData 
     */
    const handleSubmit = async (previousState, formData) => {

        useRouter
        let [erreur, newState] = validateContact(formData);
        if (!erreur) {
            [erreur, newState] = await contactServeur(formData);
            if (!erreur) {
                setSuccessMessage("Nous avons bien reçu votre demande. Merci !");
            }
        }

        if (erreur) {
            newState.nom.valeur = formData.get("nom");
            newState.email.valeur = formData.get("email");
            newState.message.valeur = formData.get("message");
        }
        const nom = formData.get("nom");
        const email = formData.get("email");
        const message = formData.get("message");

        console.log("Formulaire soumis :", {
            nom: formData.get("nom"),
            email: formData.get("email"),
            message: formData.get("message")
        });

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
            {successMessage && <div className={styles.success}>{successMessage}</div>}
        </div>
    );
}
