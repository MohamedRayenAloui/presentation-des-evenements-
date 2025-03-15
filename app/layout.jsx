// Code source du composant de mise en page principale de l'application

// Importation des composants
import Footer from "@/components/Footer";
import Header from "@/components/Header";

// Importation des styles CSS et de la police de caractères
import { Roboto, Poppins } from "next/font/google";
import styles from "./layout.module.css";
import "./globals.css";

// Définition des polices de caractères à utiliser dans l'application
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

/**
 * @type {import("next").Metadata}
 */

// Définir les métadonnées pour l'application
export const metadata = {
    title: "Esports Hub",
    description: "La plateforme incontournable des tournois et compétitions pour les passionnés de jeux vidéo et d'esports !",
};

// Fonction principale qui affiche la mise en page principale de l'application
export default function RootLayout({ children }) {
    return <html lang="en" className={`${roboto.variable} ${poppins.variable}`}>
        <body className={styles.body}>
            <Header />

            <main className={styles.main}>

                {children}

            </main>

            <Footer />
        </body>
    </html>
}
