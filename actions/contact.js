"use server"

import { validateContact } from "@/validation/contact";

export default async function contactServeur(formData) {
    let [erreur, newState] = validateContact(formData);

    const nom = formData.get("nom");
    const prenom = formData.get("prenom");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const sujet = formData.get("sujet");
    const message = formData.get("message");

    console.log("Formulaire soumis :", {
        prenom,
        nom,
        email,
        sujet,
        phone,
        message
    });

    return [erreur, newState];

}