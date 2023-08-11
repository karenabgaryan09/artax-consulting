// import fs from 'fs';
// import routes from './routes-config.mjs';

// const baseUrl = 'https://artaxconsulting.com'; // Replace with your actual website URL

// const generateSitemap = () => {
//   let sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
//   sitemapXml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

//   routes.forEach(route => {
//     sitemapXml += `  <url>\n    <loc>${baseUrl}${route.path}</loc>\n  </url>\n`;
//   });

//   sitemapXml += `</urlset>\n`;

//   fs.writeFileSync('sitemap.xml', sitemapXml, 'utf-8');
// };

// generateSitemap();

import fs from "fs";
import routes from "./routes-config.mjs"; // Use .mjs extension
import axios from "axios";

const baseUrl = "https://artaxconsulting.com"; // Replace with your actual website URL

const getConvertedData = (data) => {
    const tempData = JSON.parse(data.data.substr(47).slice(0, -2));
    const convertedData = [];
    tempData.table.rows.forEach((item) => convertedData.push(item.c[0]?.v));
    return convertedData;
};

axios("https://docs.google.com/spreadsheets/d/1Aon9bNJFDs-joF7BhjD8BKulbLG79-ACcqxStSxwVX0/gviz/tq?").then((data) => {
    generateSitemap(getConvertedData(data));
});

const generateSitemap = (slugs = ["slug1", "slug2", "slug3"]) => {
    let sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
    sitemapXml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

    routes.forEach((route) => {
        if (route.path.includes(":slug")) {
            // Assuming you fetch slugs from an API and store them in slugsArray
            const slugsArray = slugs; // Replace with actual slugs
            slugsArray.forEach((slug) => {
                const dynamicPath = route.path.replace(":slug", slug);
                sitemapXml += `  <url>\n    <loc>${baseUrl}${dynamicPath}</loc>\n  </url>\n`;
            });
        } else {
            sitemapXml += `  <url>\n    <loc>${baseUrl}${route.path}</loc>\n  </url>\n`;
        }
    });

    sitemapXml += `</urlset>\n`;

    fs.writeFileSync("sitemap.xml", sitemapXml, "utf-8");
    console.log(`Sitemap generated and saved at sitemap.xml`);
};
