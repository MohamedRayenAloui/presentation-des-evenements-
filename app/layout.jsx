"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Acceuil from "@/components/Acceuil";
import EvenementPage from "@/components/EvenementPage";
import EventDetail from "@/app/Evenements/[id]/page";

import { Roboto, Poppins } from "next/font/google";
import styles from "./layout.module.css";
import "./globals.css";

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

export default function RootLayout() {
    const [view, setView] = useState("home");
    const [selectedEventId, setSelectedEventId] = useState(null);

    const handleNavClick = (page) => {
        setView(page);
        setSelectedEventId(null);
    };

    const handleEventSelect = (id) => {
        setSelectedEventId(id);
        setView("eventDetail");
    };

    let content;
    if (view === "home") {
        content = <Acceuil />;
    } else if (view === "evenements") {
        content = <EvenementPage onEventSelect={handleEventSelect} />;
    } else if (view === "eventDetail") {
        content = <EventDetail params={{ id: selectedEventId }} />;
    } else {
        content = <div>Page Not Found</div>;
    }
    return <html lang="en" className={`${roboto.variable} ${poppins.variable}`}>
        <body className={styles.body}>
            <Header onNavClick={handleNavClick} />
            <main>{content}</main>
            <Footer />
        </body>
    </html>
}
