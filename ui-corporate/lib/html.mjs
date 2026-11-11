// Helpers shared by the corporate pages' section renderers (ui-corporate/lib/*.mjs). The renderers return HTML
// strings that drop into the pages' saved markup (ui-corporate/html), so they write the same tags the pages use.

// text from the CMS into HTML (titles and names can carry & < > and quotes)
export const esc = s => String(s ?? '').replace(/&(?!(?:[a-z]+|#\d+|#x[0-9a-f]+);)/gi, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
// '2026-11-05' -> '05 November 2026'
export const date = d => `${d.slice(8, 10)} ${MONTHS[+d.slice(5, 7) - 1]} ${d.slice(0, 4)}`

export const CHEV = '<svg class="chev" viewBox="0 0 10 16" aria-hidden="true"><path d="M2 1l6 7-6 7"/></svg>'

// A picture. `src` is either one of our prepared images (a path without extension: .webp and .jpg both exist)
// or a full URL from the CMS (one file, as the CMS crops it).
export function pic(src, { alt = '', w = 960, h = 540, lazy = true } = {}) {
	const tail = `alt="${esc(alt)}" width="${w}" height="${h}"${lazy ? ' loading="lazy"' : ''}`
	return /^https?:/.test(src)
		? `<picture><img src="${esc(src)}" ${tail}></picture>`
		: `<picture><source srcset="${src}.webp" type="image/webp"><img src="${src}.jpg" ${tail}></picture>`
}
