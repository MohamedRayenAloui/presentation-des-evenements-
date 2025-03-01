"use server"

import { validateContact } from "@/validation/contact";

export default async function contactServeur(formData) {
    let [erreur, newState] = validateContact(formData);


        return [erreur, newState];
    }