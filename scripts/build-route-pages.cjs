// Give direct visits and search crawlers the same metadata as client navigation.
const fs = require('node:fs');
const path = require('node:path');
const pages = require('../src/seo/pages.json');

const siteUrl = 'https://toolnurse.ufn.edu.br';
const output = path.resolve(__dirname, '../dist');
const template = fs.readFileSync(path.join(output, 'index.html'), 'utf8').replace(/[\t ]+$/gm, '');
const escape = value => value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

for (const [route, page] of Object.entries(pages)) {
  const canonical = siteUrl + (page.canonicalPath || route);
  let html = template.replace(/<title>[^<]*<\/title>/, `<title>${escape(page.title)}</title>`);
  for (const [attribute, key, value] of [
    ['name', 'description', page.description],
    ['property', 'og:title', page.title],
    ['property', 'og:description', page.description],
    ['property', 'og:url', canonical],
    ['name', 'twitter:title', page.title],
    ['name', 'twitter:description', page.description],
  ]) {
    html = html.replace(new RegExp(`<meta ${attribute}="${key}" content="[^"]*"\\s*/?>`), `<meta ${attribute}="${key}" content="${escape(value)}" />`);
  }
  html = html.replace(/<link rel="canonical" href="[^"]*"\s*\/?>/, `<link rel="canonical" href="${canonical}" />`);
  const directory = path.join(output, route);
  fs.mkdirSync(directory, { recursive: true });
  fs.writeFileSync(path.join(directory, 'index.html'), html);
}

const locations = Object.entries(pages)
  .filter(([route, page]) => !page.canonicalPath || page.canonicalPath === route)
  .map(([route]) => `  <url><loc>${siteUrl}${route}</loc></url>`);
fs.writeFileSync(path.join(output, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${locations.join('\n')}\n</urlset>\n`);
console.log(`Generated metadata for ${Object.keys(pages).length} routes and sitemap.xml.`);
