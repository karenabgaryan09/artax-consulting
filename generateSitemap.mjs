// import fs from "fs";
// import routes from "./routes-config.mjs"; // Use .mjs extension
// import axios from "axios";

// const baseUrl = "https://artaxconsulting.com"; // Replace with your actual website URL

// const getConvertedData = (data) => {
//     const tempData = JSON.parse(data.data.substr(47).slice(0, -2));
//     const convertedData = [];
//     tempData.table.rows.forEach((item,index) => {
//         if(index == 0) return
//         convertedData.push(item.c[0]?.v);
//     });
//     return convertedData;
// };

// axios("https://docs.google.com/spreadsheets/d/1Aon9bNJFDs-joF7BhjD8BKulbLG79-ACcqxStSxwVX0/gviz/tq?").then((data) => {
//     const convertedData = getConvertedData(data)
//     generateSitemap(convertedData);
// });

// const generateSitemap = (slugs = ["slug1", "slug2", "slug3"]) => {
//     let sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
//     sitemapXml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

//     routes.forEach((route) => {
//         if (route.path.includes(":slug")) {
//             // Assuming you fetch slugs from an API and store them in slugsArray
//             const slugsArray = slugs; // Replace with actual slugs
//             slugsArray.forEach((slug) => {
//                 const dynamicPath = route.path.replace(":slug", slug);
//                 sitemapXml += `  <url>\n    <loc>${baseUrl}${dynamicPath}</loc>\n  </url>\n`;
//             });
//         } else {
//             sitemapXml += `  <url>\n    <loc>${baseUrl}${route.path}</loc>\n  </url>\n`;
//         }
//     });

//     sitemapXml += `</urlset>\n`;

//     fs.writeFileSync("sitemap.xml", sitemapXml, "utf-8");
//     console.log(`Sitemap generated and saved at sitemap.xml`);
// };

import fs from "fs";
import routes from "./routes-config.mjs"; // Use .mjs extension
import axios from "axios";

const baseUrl = "https://artaxconsulting.com"; // Replace with your actual website URL

const getConvertedData = (data) => {
    const tempData = JSON.parse(data.data.substr(47).slice(0, -2));
    const convertedData = [];
    tempData.table.rows.forEach((item, index) => {
        // if(index == 0) return
        convertedData.push(item.c[0]?.v);
    });
    return convertedData;
};

(async function () {
    const firstData = await axios(
        "https://docs.google.com/spreadsheets/d/1Aon9bNJFDs-joF7BhjD8BKulbLG79-ACcqxStSxwVX0/gviz/tq?"
    );
    const secondData = await axios(
        "https://docs.google.com/spreadsheets/d/1e68mUP2UIc5GW66umO1tl2ldjBImEp1yBpT0Yurx9h0/gviz/tq?"
    );
    const convertedFirstData = getConvertedData(firstData);
    const convertedSecondtData = getConvertedData(secondData);
    generateSitemap(convertedFirstData, convertedSecondtData);
})();

const generateSitemap = (slugs = ["slug1", "slug2", "slug3"], slugs2 = ["slug1", "slug2", "slug3"]) => {
    let sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
    sitemapXml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

    routes.forEach((route) => {
        if (route.path == "/business-glossary/:slug") {
            slugs.forEach((slug) => {
                const dynamicPath = route.path.replace(":slug", slug);
                sitemapXml += `  <url>\n    <loc>${baseUrl}${dynamicPath}</loc>\n  </url>\n`;
            });
        } else if (route.path == "/business-people/:slug") {
            slugs2.forEach((slug) => {
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
