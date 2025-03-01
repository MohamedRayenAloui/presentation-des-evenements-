export function validateContact(formData) {
    const nom = formData.get("nom");
    const email = formData.get("email");
    const message = formData.get("message");
    const sujet = formData.get("sujet");
    const phone = formData.get("phone");
    const prenom = formData.get("prenom");


    let newState = {
        nom: { valeur: "", erreur: null },
        email: { valeur: "", erreur: null },
        message: { valeur: "", erreur: null },
        prenom: { valeur: "", erreur: null },
        sujet: { valeur: "", erreur: null },
        phone: { valeur: "", erreur: null },
    };

    let erreur = false;

    if (!nom) {
        erreur = true;
        newState.nom.erreur = "Veuillez entrer votre nom.";
    }

    if (!email) {
        erreur = true;
        newState.email.erreur = "Veuillez entrer une adresse courriel.";
    }
    
    else if (
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

    if (!prenom) {
        erreur = true;
        newState.prenom.erreur = "Veuillez entrer votre prénom.";
    }

    if (!sujet) {
        erreur = true;
        newState.sujet.erreur = "Veuillez entrer votre sujet.";
    }

    if (!phone) {
        erreur = true;
        newState.phone.erreur = "Veuillez entrer votre numéro de téléphone.";
    }

    else if (!/^\d+$/.test(phone)) {
        erreur = true;
        newState.phone.erreur = "Le numéro de téléphone doit contenir uniquement des chiffres.";
    }

    else if (phone.length !== 10) {
        erreur = true;
        newState.phone.erreur = "Le numéro de téléphone doit contenir exactement 10 chiffres.";
    }

    return [erreur, newState];
}