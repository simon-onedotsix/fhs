import { useEffect, useLayoutEffect, useRef } from 'react'
import Head from 'next/head'

import { c, s } from '../lib/c'
import { R, SITE } from '../lib/routes'
import { EventsBar } from './eventsbar'
import { Header } from './header'
import { Footer } from './footer'

const useIsoLayoutEffect = typeof window === 'undefined' ? useEffect : useLayoutEffect

// No-JS fallbacks hang off `nojs`, motion pre-states off `js`. The server renders `nojs`; this script swaps it
// before the first paint, so visitors with JavaScript never see the fallback layout flash.
const swap = `(function(r){r.classList.remove('${s.nojs}');r.classList.add('${s.js}')})(document.getElementById('lv-root'))`

// The shell every FHS Living page shares: head tags, events bar, header, footer. `path` and `image` override the
// canonical URL and share image for pages under a section (a case study page sits under page "case-studies").
export function LivingPage({ page, path, image, title, description, head, children }) {
	const root = useRef(null)

	useIsoLayoutEffect(() => {  // client-side navigation does not run the inline script
		root.current.classList.remove(s.nojs)
		root.current.classList.add(s.js)
		// the Living theme paints the page purple and the app paints html white; both show when a phone over-scrolls
		const html = document.documentElement.style, body = document.body.style
		const prev = [html.backgroundColor, body.backgroundColor]
		html.backgroundColor = body.backgroundColor = '#FBD4CD'
		return () => { [html.backgroundColor, body.backgroundColor] = prev }
	}, [])

	useEffect(() => {  // no single word alone on a last line (Ahmed, 6 Nov 2026): join each block's last two words with a
		// no-break space (the space may end the text before a link) and keep a hyphenated last word whole (a word joiner
		// after its hyphens: Firefox breaks there). A join that makes its box overflow more than before goes back
		// (reads, writes, reads: two reflows)
		const blocks = [...root.current.querySelectorAll('p, li, dd, figcaption, blockquote, h1, h2, h3, h4')]
		const wide = blocks.map(el => el.scrollWidth)
		const done = []
		blocks.forEach((el, i) => {
			const tw = document.createTreeWalker(el, NodeFilter.SHOW_TEXT)
			const nodes = []
			for (let n; (n = tw.nextNode());) if (n.data.trim()) nodes.push(n)
			const last = nodes[nodes.length - 1], prev = nodes[nodes.length - 2]
			if (!last) return
			const edits = []
			let text = last.data
			if (/\S[ \t\n]+\S+\s*$/.test(text)) text = text.replace(/[ \t\n]+(\S+\s*)$/, '\u00A0$1')
			else if (prev && /[ \t\n]$/.test(prev.data) && !/\s/.test(text.trim())) edits.push([prev, prev.data.replace(/[ \t\n]+$/, '\u00A0')])
			else return
			text = text.replace(/(\S+)(\s*)$/, (m, w, s) => w.replace(/-(?!\u2060)/g, '-\u2060') + s)
			if (text !== last.data) edits.push([last, text])
			done.push([el, wide[i], edits.map(([n]) => [n, n.data])])
			for (const [n, t] of edits) n.data = t
		})
		for (const [el, w, before] of done) if (el.scrollWidth > Math.max(w, el.clientWidth) + 1) for (const [n, t] of before) n.data = t
	}, [])

	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name="description" content={description} />
				<link rel="canonical" href={SITE + (path || R[page])} />
				<meta property="og:type" content="website" />
				<meta property="og:site_name" content="FHS Living" />
				<meta property="og:title" content={title} />
				<meta property="og:description" content={description} />
				<meta property="og:image" content={image || `${SITE}/assets/img/living/v3/og.jpg`} />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="theme-color" content="#FBD4CD" />
				<link rel="icon" type="image/png" href="/assets/favicons/living/favicon-16x16.png" sizes="16x16" />
				{/* Neue Haas Grotesk Text, the brand font, from The Bench's Adobe Fonts web kit (Adobe hosts the files under its
				    licence, so none sit in this public repo). Living pages only; the kit's p.typekit.net call counts page views */}
				<link rel="preconnect" href="https://use.typekit.net" crossOrigin="anonymous" />
				<link rel="preconnect" href="https://p.typekit.net" crossOrigin="anonymous" />
				<link rel="stylesheet" href="https://use.typekit.net/xjp3jcj.css" />
				{head}
			</Head>
			<div id="lv-root" ref={root} className={c('root nojs')} suppressHydrationWarning>
				<script dangerouslySetInnerHTML={{ __html: swap }} />
				<a className={c('skip')} href="#main">Skip to content</a>
				<EventsBar />
				<Header page={page} />
				<main id="main">{children}</main>
				<Footer />
			</div>
		</>
	)
}
