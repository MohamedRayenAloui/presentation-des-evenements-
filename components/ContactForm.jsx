// Code: Composant ContactForm
"use client";

// Importer les hooks personnalisés
import { useActionState, useState } from "react";
import { validateContact } from "@/validation/contact";
import contactServeur from "@/actions/contact";
import { useRouter } from "next/navigation";
import styles from "./ContactForm.module.css";

// Définir le composant ContactForm
export default function ContactForm() {
    const [successMessage, setSuccessMessage] = useState("");

    const router = useRouter();
    /**
     * @param {FormData} formData 
     */
    const handleSubmit = async (previousState, formData) => {

        // Valider les données du formulaire
        let [erreur, newState] = validateContact(formData);
        if (!erreur) {
            // Envoyer les données au serveur si aucune erreur de validation
            [erreur, newState] = await contactServeur(formData);
            if (!erreur) {
                // Afficher un message de succès si l'envoi est réussi
                setSuccessMessage("Nous avons bien reçu votre demande. Merci !");
                setTimeout(() => {
                    setSuccessMessage("");
                    router.push("/");
                }, 3000);
            }
        }

        if (erreur) {
            // Mettre à jour l'état du formulaire avec les valeurs saisies en cas d'erreur
            newState.prenom.valeur = formData.get("prenom");
            newState.nom.valeur = formData.get("nom");
            newState.email.valeur = formData.get("email");
            newState.sujet.valeur = formData.get("sujet");
            newState.phone.valeur = formData.get("phone");
            newState.message.valeur = formData.get("message");
        }

        return newState;
    };

    // Initialiser l'état du formulaire avec des valeurs par défaut
    const [formState, formAction] = useActionState(handleSubmit, {
        prenom: { valeur: "", erreur: null },
        nom: { valeur: "", erreur: null },
        email: { valeur: "", erreur: null },
        sujet: { valeur: "", erreur: null },
        phone: { valeur: "", erreur: null },
        message: { valeur: "", erreur: null },
    });

    return (
        <div className={styles.container}>
            <h1>Contactez-nous</h1>
            <form action={formAction} className={styles.form} noValidate>
                {successMessage && <div className={styles.success}>{successMessage}</div>}
                <label>
                    Nom:
                    <input type="text" name="nom" defaultValue={formState.nom.valeur} />
                    <div className={styles.erreur}>{formState.nom.erreur}</div>
                </label>

                <label>
                    Prénom:
                    <input type="text" name="prenom" defaultValue={formState.prenom.valeur} />
                    <div className={styles.erreur}>{formState.prenom.erreur}</div>
                </label>

                <label>
                    Courriel:
                    <input type="email" name="email" defaultValue={formState.email.valeur} />
                    <div className={styles.erreur}>{formState.email.erreur}</div>
                </label>

                <label>
                    Téléphone:
                    <input type="tel" name="phone" defaultValue={formState.phone.valeur} />
                    <div className={styles.erreur}>{formState.phone.erreur}</div>
                </label>

                <label>
                    Sujet:
                    <input type="text" name="sujet" defaultValue={formState.sujet.valeur} />
                    <div className={styles.erreur}>{formState.sujet.erreur}</div>
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
