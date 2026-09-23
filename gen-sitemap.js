// gen-sitemap.js — El Dorado Forward
// Generates sitemap.xml from the PAGES list in build.js.
// Run: node gen-sitemap.js
// NOTE: All pages are noindex until the site launches.
// When launching, update robots.txt + head partial, then re-run this.

const fs = require('fs');
const path = require('path');

const TODAY = new Date().toISOString().slice(0, 10);

// Matches the PAGES list in build.js — keep in sync
const PAGES = [
  { url: 'https://eldoradoforward.com/', priority: '1.0' },
  { url: 'https://eldoradoforward.com/ballot/', priority: '0.8' },
  { url: 'https://eldoradoforward.com/why/', priority: '0.8' },
  { url: 'https://eldoradoforward.com/regulate/', priority: '0.8' },
  { url: 'https://eldoradoforward.com/impacts/', priority: '0.8' },
  { url: 'https://eldoradoforward.com/battery/', priority: '0.8' },
  { url: 'https://eldoradoforward.com/communities/', priority: '0.8' },
  { url: 'https://eldoradoforward.com/sources/', priority: '0.8' },
];

const urlEntries = PAGES.map(p => `  <url>
    <loc>${p.url}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${p.priority}</priority>
  </url>`).join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>
`;

const outPath = path.join(__dirname, 'sitemap.xml');
fs.writeFileSync(outPath, xml, 'utf8');
console.log(`sitemap.xml written — ${PAGES.length} URLs, lastmod ${TODAY}`);
