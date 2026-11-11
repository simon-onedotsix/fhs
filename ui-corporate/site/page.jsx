import { useEffect, useLayoutEffect, useRef } from 'react'
import Head from 'next/head'

import { ASSETS } from '../lib/paths.mjs'

const SITE = 'https://futurehospitality.com'
const useIsoLayoutEffect = typeof window === 'undefined' ? useEffect : useLayoutEffect

// The styles hide a few things until scripts run (`js` on the wrapper). This runs before the first paint.
const swap = `<script>document.getElementById('cp').classList.add('js')</script>`

// The shell of every FHS corporate page (home, About, content library, award winners, FHS Club, Partner, ESG,
// contact, Advisory Board terms). `html` is the page's markup from ui-corporate/html with its CMS sections filled
// (ui-corporate/lib/cms.js); styles and scripts are plain files in public/corporate, so nothing here joins the
// app's own CSS and every other event's pages build exactly as before.
export function CorporatePage({ path, title, description, css = [], js = [], html }) {
	const root = useRef(null)
	const loaded = useRef(false)

	useIsoLayoutEffect(() => {  // client-side navigation does not run the inline script
		root.current.classList.add('js')
	}, [])

	useEffect(() => {  // the pages' scripts enhance markup that is already there, so they load once it is in the document
		if (loaded.current) return  // React's development double-mount
		loaded.current = true
		for (const file of ['main.js', ...js]) {
			const s = document.createElement('script')
			s.src = `${ASSETS}/js/${file}`
			s.async = false
			document.body.appendChild(s)
		}
	}, [js])

	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name="description" content={description} />
				<link rel="canonical" href={SITE + path} />
				<meta property="og:type" content="website" />
				<meta property="og:site_name" content="Future Hospitality Summit" />
				<meta property="og:title" content={title} />
				<meta property="og:description" content={description} />
				<meta property="og:image" content={`${SITE}${ASSETS}/assets/img/room/plenary.jpg`} />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="theme-color" content="#3D1A51" />
				<link rel="icon" href={`${ASSETS}/assets/logos/fhs-mark-reversa.svg`} type="image/svg+xml" />
				{/* Neue Haas Grotesk Display, the brand font, from The Bench's Adobe Fonts web kit (Adobe hosts the files
				    under its licence). In this kit Roman is weight 500 and Medium 600 */}
				<link rel="preconnect" href="https://use.typekit.net" crossOrigin="anonymous" />
				<link rel="stylesheet" href="https://use.typekit.net/xjp3jcj.css" />
				{['tokens.css', 'main.css', ...css].map(file => <link key={file} rel="stylesheet" href={`${ASSETS}/css/${file}`} />)}
			</Head>
			<div id="cp" ref={root} suppressHydrationWarning dangerouslySetInnerHTML={{ __html: swap + html }} />
		</>
	)
}
