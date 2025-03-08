import FormLogin from '@/components/ContactForm';

/**
 * @type {import("next").Metadata}
 */

export const metadata = {
    title: "Contactez-nous | Esports Hub",
    description: "Contactez notre équipe pour toute question ou suggestion. Nous sommes à votre écoute pour vous aider dans votre expérience sur Esports Hub !",
};

export default function Form() {
    return <>
        <FormLogin />
    </>
}