import { useEffect, useLayoutEffect, useRef } from 'react'
import Head from 'next/head'

import { c, s } from '../lib/c'
import { noOrphans } from './page'

const useIsoLayoutEffect = typeof window === 'undefined' ? useEffect : useLayoutEffect

// The FHS Living design inside another event's page (17 Nov 2026: /world/living and /egypt/living keep their event's
// events bar, menu and footer, as /sa/living does; only the body is Living). Loads the brand font and the `.root` scope.
export function LivingBody({ children }) {
	const root = useRef(null)
	useIsoLayoutEffect(() => {
		root.current.classList.remove(s.nojs)
		root.current.classList.add(s.js)
	}, [])
	useEffect(() => noOrphans(root.current), [])
	return (
		<>
			<Head>
				<link rel="preconnect" href="https://use.typekit.net" crossOrigin="anonymous" />
				<link rel="preconnect" href="https://p.typekit.net" crossOrigin="anonymous" />
				<link rel="stylesheet" href="https://use.typekit.net/xjp3jcj.css" />
			</Head>
			<div ref={root} className={c('root nojs')} suppressHydrationWarning>
				<main id="main">{children}</main>
			</div>
		</>
	)
}
