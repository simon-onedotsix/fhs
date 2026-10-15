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

// The shell every FHS Living page shares: head tags, events bar, header, footer.
export function LivingPage({ page, title, description, head, children }) {
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

	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name="description" content={description} />
				<link rel="canonical" href={SITE + R[page]} />
				<meta property="og:type" content="website" />
				<meta property="og:site_name" content="FHS Living" />
				<meta property="og:title" content={title} />
				<meta property="og:description" content={description} />
				<meta property="og:image" content={`${SITE}/assets/img/living/v3/og.jpg`} />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="theme-color" content="#FBD4CD" />
				<link rel="icon" type="image/png" href="/assets/favicons/living/favicon-16x16.png" sizes="16x16" />
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
