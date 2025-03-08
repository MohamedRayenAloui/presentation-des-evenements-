/**
 * @returns {import("next").MetadataRoute.Sitemap}
 */

export default function sitemap() {
    return [
        {
            url: "http://localhost:3000/",
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 1,
        },
        {
            url: "http://localhost:3000/Evenements",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: "http://localhost:3000/Evenements/1",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: "http://localhost:3000/Evenements/2",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: "http://localhost:3000/contact",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
    ]
}
