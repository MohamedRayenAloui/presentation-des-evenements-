import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Acceuil from "@/components/Acceuil";

import styles from "./layout.module.css";
import "./globals.css";

export const metadata = {
    title: "Esports Hub",
    description: "Generated by create next app",
};

export default function RootLayout({ children }) {
    return <html lang="en">
        <body className={styles.body}>
            <Header />

            <main>

                <Acceuil />

                {children}

            </main>

            <Footer />
        </body>
    </html>
}
