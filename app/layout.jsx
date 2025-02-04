// Code source du composant de mise en page principale de l'application

"use client"; // Indique que le code est destiné au client

// Importation des composants React et du hook useState pour gérer l'état
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Acceuil from "@/components/Acceuil";
import EvenementPage from "@/components/EvenementPage";
import EventDetail from "@/app/Evenements/[id]/page";
import NotFound from "@/app/not-found";

// Importation des styles CSS et de la police de caractères
import { Roboto, Poppins } from "next/font/google";
import styles from "./layout.module.css";
import "./globals.css";

// Définition des polices de caractères utilisées dans l'application
const roboto = Roboto({
    subsets: ["latin"],
    weight: ["400", "700"],
    style: ["normal", "italic"],
    display: "swap",
    variable: "--font-roboto"
});

const poppins = Poppins({
    subsets: ["latin"],
    weight: "700",
    display: "swap",
    variable: "--font-poppins"
});

// Fonction principale qui gère l'affichage des différentes pages de l'application
export default function RootLayout() {
    const [view, setView] = useState("home"); // État local pour gérer la vue actuelle
    const [selectedEventId, setSelectedEventId] = useState(null); // État local pour gérer l'identifiant de l'événement sélectionné

    // Fonction pour gérer le changement de page
    const handleNavClick = (page) => {
        setView(page);
        setSelectedEventId(null);
    };

    // Fonction pour gérer la sélection d'un événement
    const handleEventSelect = (id) => {
        setSelectedEventId(id);
        setView("eventDetail");
    };

    // Contenu de la page en fonction de la vue actuelle
    let content;
    if (view === "home") {
        content = <Acceuil />; // Affichage de la page d'accueil
    } else if (view === "evenements") {
        content = <EvenementPage onEventSelect={handleEventSelect} />; // Affichage de la page des événements
    } else if (view === "eventDetail") {
        content = <EventDetail params={{ id: selectedEventId }} />; // Affichage des détails de l'événement sélectionné
    } else {
        content = <NotFound />; // Affichage de la page d'erreur 404 si la page demandée n'existe pas
    }

    // Affichage de la page principale avec le contenu et les composants de navigation
    return <html lang="en" className={`${roboto.variable} ${poppins.variable}`}>
        <body className={styles.body}>
            <Header onNavClick={handleNavClick} />
            <main>{content}</main>
            <Footer />
        </body>
    </html>
}
