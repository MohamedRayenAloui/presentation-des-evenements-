/**
  * @returns {import("next").MetadataRoute.Robots}
  */

// Fonction qui génère les règles pour le fichier robots.txt
export default function robots() {
    return {
        rules: [
            {
                userAgent: '*', // Autoriser tous les robots
                allow: '/' // Autoriser l'accès à toutes les pages
            }
        ],
        sitemap: 'http://localhost:3000/sitemap.xml' // URL du fichier sitemap
    }
}