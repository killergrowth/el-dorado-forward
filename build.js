// build.js — El Dorado Forward
// Assembles all 8 pages into dist/ using partials injection.
// Run: node build.js from the site root.

const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const DIST = path.join(ROOT, 'dist');

// Page definitions: [sourceFile, outputDir, pageKey, title, canonical, ogTitle, metaDesc]
const PAGES = [
  ['home.html',        '',             'home',        'El Dorado Forward · Vote No on November 3', 'https://eldoradoforward.com/', 'El Dorado Forward · Vote No on November 3', 'A 10-year ban on an entire industry is a bad idea. Vote No on November 3 in El Dorado, Kansas.'],
  ['ballot.html',      'ballot',       'ballot',      'The Ballot Question · El Dorado Forward', 'https://eldoradoforward.com/ballot/', 'The Ballot Question · El Dorado Forward', 'Read the exact ballot language for the November 3 special election in El Dorado, Kansas.'],
  ['why.html',         'why',          'why',         'Why This Matters for El Dorado · El Dorado Forward', 'https://eldoradoforward.com/why/', 'Why This Matters for El Dorado · El Dorado Forward', 'High property taxes, bad roads, declining population. Without economic development, none of it improves.'],
  ['regulate.html',    'regulate',     'regulate',    'Regulate vs. Ban · El Dorado Forward', 'https://eldoradoforward.com/regulate/', 'Regulate vs. Ban · El Dorado Forward', 'Communities use many tools to manage data centers. El Dorado already adopted several of them.'],
  ['impacts.html',     'impacts',      'impacts',     'Impacts: Water, Power, Jobs & Taxes · El Dorado Forward', 'https://eldoradoforward.com/impacts/', 'Impacts: Water, Power, Jobs & Taxes · El Dorado Forward', 'The issues organized one at a time — water, power, jobs, taxes, and land use — with documented facts.'],
  ['battery.html',     'battery',      'battery',     'Battery Storage · El Dorado Forward', 'https://eldoradoforward.com/battery/', 'Battery Storage · El Dorado Forward', 'The ban isn\'t only about data centers. It also prohibits battery energy storage systems above 80 kWh.'],
  ['communities.html', 'communities',  'communities', 'Other Communities · El Dorado Forward', 'https://eldoradoforward.com/communities/', 'Other Communities · El Dorado Forward', 'One town set clear rules and has benefited for 25 years. The other let talks happen out of view.'],
  ['sources.html',     'sources',      'sources',     'Sources & Further Reading · El Dorado Forward', 'https://eldoradoforward.com/sources/', 'Sources & Further Reading · El Dorado Forward', 'The evidence library for El Dorado Forward — organized by type and authority.'],
];

// Read partials
const headPartial   = fs.readFileSync(path.join(ROOT, '_partials', 'head.html'), 'utf8');
const headerPartial = fs.readFileSync(path.join(ROOT, '_partials', 'header.html'), 'utf8');
const footerPartial = fs.readFileSync(path.join(ROOT, '_partials', 'footer.html'), 'utf8');

// Wipe and recreate dist/
if (fs.existsSync(DIST)) fs.rmSync(DIST, { recursive: true });
fs.mkdirSync(DIST);

// Copy static asset folders into dist/
const COPY_DIRS = ['css', 'fonts', 'tokens', 'js', 'images', 'research'];
for (const dir of COPY_DIRS) {
  copyDir(path.join(ROOT, dir), path.join(DIST, dir));
}

// Copy root static files
const COPY_FILES = ['robots.txt', '_worker.js', '_routes.json', '_redirects', 'sitemap.xml', '404.html'];
for (const f of COPY_FILES) {
  const src = path.join(ROOT, f);
  if (fs.existsSync(src)) fs.copyFileSync(src, path.join(DIST, f));
}

// Build each page
let builtCount = 0;
for (const [srcFile, outDir, pageKey, title, canonical, ogTitle, metaDesc] of PAGES) {
  let html = fs.readFileSync(path.join(ROOT, srcFile), 'utf8');

  // Build head partial with substitutions
  let head = headPartial
    .replace('<!-- BUILD:TITLE -->', `<title>${escHtml(title)}</title>`)
    .replace('<!-- BUILD:META -->', `<meta name="description" content="${escHtml(metaDesc)}">`)
    .replace(/<!-- BUILD:CANONICAL -->/g, canonical)
    .replace(/<!-- OG_TITLE -->/g, escHtml(ogTitle));

  // Resolve nav active states in header
  const NAV_KEYS = ['ballot','why','regulate','impacts','battery','communities','sources'];
  let header = headerPartial;
  for (const k of NAV_KEYS) {
    const token = `<!-- NAV_ACTIVE:${k} -->`;
    header = header.replace(token, pageKey === k ? ' edf-site-header__link--active' : '');
  }

  // Inject partials into page
  html = html
    .replace('<!-- INJECT:HEAD -->', head)
    .replace('<!-- INJECT:HEADER -->', header)
    .replace('<!-- INJECT:FOOTER -->', footerPartial);

  // Strip source-only comments
  html = html
    .replace(/^<!-- PAGE:.*-->\n?/m, '')
    .replace(/^<!-- CANONICAL:.*-->\n?/gm, '')
    .replace(/^<!-- OG_TITLE:.*-->\n?/gm, '');

  // Write output
  const outPath = outDir
    ? path.join(DIST, outDir)
    : DIST;
  fs.mkdirSync(outPath, { recursive: true });
  fs.writeFileSync(path.join(outPath, 'index.html'), html, 'utf8');
  console.log(`  ✓ ${outDir || '/'}/index.html`);
  builtCount++;
}

console.log(`\nBuild complete — ${builtCount} pages written to dist/\n`);

// --- Helpers ---

function copyDir(src, dest) {
  if (!fs.existsSync(src)) return;
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const s = path.join(src, entry.name);
    const d = path.join(dest, entry.name);
    if (entry.isDirectory()) copyDir(s, d);
    else fs.copyFileSync(s, d);
  }
}

function escHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
