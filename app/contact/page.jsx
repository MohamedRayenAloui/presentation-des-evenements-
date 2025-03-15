import FormLogin from '@/components/ContactForm';

/**
 * @type {import("next").Metadata}
 */

// Définir les métadonnées pour la page de contact
export const metadata = {
    title: "Contactez-nous | Esports Hub",
    description: "Contactez notre équipe pour toute question ou suggestion. Nous sommes à votre écoute pour vous aider dans votre expérience sur Esports Hub !",
};

// Définir la fonction par défaut exportée pour le formulaire de contact
export default function Form() {
    return <>
        <FormLogin />
    </>
}