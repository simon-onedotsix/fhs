// The corporate pages were designed as a static sample with its own paths. These are the app's:
// files in public/corporate, the hero film on Cloudflare R2, links relative to this site and without trailing slashes.
export const ASSETS = '/corporate'
// The Bench's R2 bucket fhs-web-media (37 MB of film stays out of the repo). A new cut goes in a new folder (v2, ...).
export const FILM = 'https://pub-ec0bd70272c6486aa07ae79696c9dd89.r2.dev/corporate/film/v1'

// sample markup -> app markup. The saved pages in ui-corporate/html are already converted; the section renderers
// in this folder write sample paths, so their output passes through here (see fill() in slots.mjs).
export const toApp = html => html
	.replace(/="\/assets\/video\//g, `="${FILM}/`)
	.replace(/="\/assets\//g, `="${ASSETS}/assets/`)
	.replace(/href="https:\/\/(?:www\.)?futurehospitality\.com\/?"/g, 'href="/"')
	.replace(/href="https:\/\/(?:www\.)?futurehospitality\.com\//g, 'href="/')
	.replace(/href="(\/[^"#?]*?)\/(?=["#?])/g, 'href="$1')
