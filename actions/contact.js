"use server"

// Importer la fonction validateContact depuis le module validation
import { validateContact } from "@/validation/contact";

// Définir la fonction exportée par défaut contactServeur qui est asynchrone
export default async function contactServeur(formData) {
    // Valider le formData en utilisant la fonction validateContact et déstructurer le résultat en erreur et newState
    let [erreur, newState] = validateContact(formData);

    // Extraire les champs individuels du formData
    const nom = formData.get("nom");
    const prenom = formData.get("prenom");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const sujet = formData.get("sujet");
    const message = formData.get("message");

    // Logger les données du formulaire soumis dans la console
    console.log("Formulaire soumis :", {
        prenom,
        nom,
        email,
        phone,
        sujet,
        message
    });

    // Retourner l'erreur de validation et le nouvel état
    return [erreur, newState];

}