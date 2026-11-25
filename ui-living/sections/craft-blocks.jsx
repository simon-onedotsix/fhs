import { useEffect, useState } from 'react'
import Link from 'next/link'

import { c } from '../lib/c'
import { R } from '../lib/routes'
import { HubspotForm } from '../site/hubspot-form'
import { HIGH, NEW_TAB } from '../lib/attrs'

// A Craft page in the Living design (data from ../lib/craft-page.js). Every Content Blocks module the team can add in
// Craft has a Living drawing here, so a new page never falls back to the old theme. Layout: the title (with the
// opening Flip Flops row beside it), then the sections, numbered, with an "On this page" index once there are three
// or more; one purple band closes the page (purple once per page).

const Body = ({ html, className }) => html ? <div className={c('cmsbody', className)} dangerouslySetInnerHTML={{ __html: html }} /> : null

const Photo = ({ p, sizes = '(max-width: 900px) 100vw, 50vw', className }) => p ? (
	<figure className={c('photo', className)}>
		<img src={p.url} srcSet={`${p.thumb} 720w, ${p.url} 1200w, ${p.wide} 1600w`} sizes={sizes} width={p.width} height={p.height} alt={p.alt} loading="lazy" decoding="async" />
	</figure>
) : null

// YouTube and Vimeo share links as privacy-friendly embeds
function embed(url) {
	const yt = /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([\w-]{11})/.exec(url || '')
	if (yt) return `https://www.youtube-nocookie.com/embed/${yt[1]}?rel=0`
	const vm = /vimeo\.com\/(?:video\/)?(\d+)/.exec(url || '')
	if (vm) return `https://player.vimeo.com/video/${vm[1]}?dnt=1`
	return null
}
const Video = ({ url, title }) => {
	const src = embed(url)
	return src ? <div className={c('cmsvideo')}><iframe src={src} title={title || 'Video'} loading="lazy" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen /></div> : null
}

function Block({ b }) {
	switch (b.kind) {
		case 'text':
			if (b.items.length === 1 && b.cols === 1) return <Body html={b.items[0]} />
			return (
				<div className={c('cmsgrid')} style={{ '--cols': Math.min(b.cols, b.items.length) }}>
					{b.items.map((h, i) => <Body key={i} html={h} className="cmsitem" />)}
				</div>
			)
		case 'flipFlops':
			return b.rows.map((r, i) => (
				<div key={r.id} className={c('cmsrow', (i % 2 === 1) !== b.flip && 'cmsrow--flip', !r.photo && 'cmsrow--text')}>
					<Photo p={r.photo} />
					<Body html={r.body} />
				</div>
			))
		case 'cards':
			return (
				<div className={c('cmsgrid')} style={{ '--cols': Math.min(b.cols, b.cards.length) }}>
					{b.cards.map(x => <div key={x.id} className={c('cmscard')}><Photo p={x.photo} sizes="(max-width: 900px) 100vw, 33vw" /><Body html={x.body} /></div>)}
				</div>
			)
		case 'images':
			return <div className={c('cmsgrid')} style={{ '--cols': Math.min(b.cols, b.images.length) }}>{b.images.map((p, i) => <Photo key={i} p={p} sizes="(max-width: 900px) 100vw, 50vw" />)}</div>
		case 'billboard':
			return b.slides.map(s => (
				<figure key={s.id} className={c('cmsboard')}>
					{s.photo && <img src={s.photo.wide} width={s.photo.width} height={s.photo.height} alt={s.photo.alt} loading="lazy" decoding="async" />}
					{s.body && <figcaption><Body html={s.body} /></figcaption>}
				</figure>
			))
		case 'impactFigures':
			return <ul className={c('facts')}>{b.figures.map(f => <li key={f.id}><b>{f.figure}</b><span>{f.label}</span></li>)}</ul>
		case 'video':
			return <Video url={b.url} />
		case 'hubspotForm':
			return <div className={c('cmsform')}><Body html={b.body} />{b.formId && <HubspotForm formId={b.formId} id={`hs-${b.id}`} />}</div>
		case 'people':
			return (
				<div className={c('cmspeople')}>
					{(b.title || b.body) && <div className={c('cmspeople__head')}>{b.title && <h3>{b.title}</h3>}<Body html={b.body} /></div>}
					<ul className={c('directory')}>
						{b.people.map(p => (
							<li key={p.id} className={c('person')}>
								<figure>
									<div className={c('window')}>{p.photo && <img src={p.photo} width="480" height="586" alt={p.name} loading="lazy" />}</div>
									<figcaption><b>{p.name}</b><span>{p.role}</span></figcaption>
								</figure>
							</li>
						))}
					</ul>
					{b.cta && <p className={c('actions')}><a className={c('btn')} href={b.cta.href}>{b.cta.label}</a></p>}
				</div>
			)
		case 'testimonials':
			return <div className={c('cmsgrid')} style={{ '--cols': Math.min(2, b.quotes.length) }}>{b.quotes.map(q => (
				<blockquote key={q.id} className={c('cmsquote')}><p>{q.quote}</p><footer><b>{q.who}</b>{q.role && <span>{q.role}</span>}</footer></blockquote>
			))}</div>
		case 'ticker':
			return <ul className={c('cmstags')}>{b.items.map(t => <li key={t.id}>{t.href ? <a href={t.href}>{t.text}</a> : t.text}</li>)}</ul>
		case 'faq':
			return <div className={c('faq')}>{b.items.map(x => <details key={x.id}><summary>{x.q}</summary><Body html={x.a} /></details>)}</div>
		case 'videoTestimonials':
			return <div className={c('cmsgrid')} style={{ '--cols': Math.min(2, b.videos.length) }}>{b.videos.map(v => (
				<figure key={v.id} className={c('cmsclip')}><Video url={v.url} title={v.who} /><figcaption><b>{v.who}</b>{v.role && <span>{v.role}</span>}</figcaption></figure>
			))}</div>
		case 'logos':
			return b.groups.map((g, i) => (
				<div key={i} className={c('cmslogos')}>
					{g.title && <h3>{g.title}</h3>}
					<Body html={g.body} />
					<ul>{g.logos.map(l => <li key={l.id}>{l.href ? <a href={l.href} {...NEW_TAB}><img src={l.src} alt={l.name} loading="lazy" /></a> : <img src={l.src} alt={l.name} loading="lazy" />}</li>)}</ul>
				</div>
			))
		case 'passes':
			return <div className={c('cmsgrid')} style={{ '--cols': Math.min(3, b.passes.length) }}>{b.passes.map(p => (
				<div key={p.id} className={c('cmsitem')}>
					<h3>{p.title}</h3><Body html={p.body} />
					{p.soldOut ? <p className={c('muted')}>Sold out</p> : p.href && <p className={c('actions')}><a className={c('btn')} href={p.href}>{p.label}</a></p>}
				</div>
			))}</div>
		default:
			return null
	}
}

// "On this page": a sticky index on wide screens that follows the reader through the sections
function Index({ sections }) {
	const [on, setOn] = useState(null)
	useEffect(() => {
		const els = sections.map(s => document.getElementById(s.id)).filter(Boolean)
		if (!els.length || !('IntersectionObserver' in window)) return
		const io = new IntersectionObserver(entries => {
			const seen = entries.filter(e => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0]
			if (seen) setOn(seen.target.id)
		}, { rootMargin: '-20% 0px -70% 0px' })
		els.forEach(el => io.observe(el))
		return () => io.disconnect()
	}, [sections])
	return (
		<nav className={c('cmsdoc__nav')} aria-label="On this page">
			<p className={c('label')}>On this page</p>
			<ol>
				{sections.map((s, i) => (
					<li key={s.id}><a href={`#${s.id}`} aria-current={on === s.id ? 'true' : undefined}><span>{String(i + 1).padStart(2, '0')}</span>{s.title}</a></li>
				))}
			</ol>
		</nav>
	)
}

export function CraftPage({ page }) {
	const titled = page.sections.filter(s => s.title)
	const indexed = titled.length >= 3
	let n = 0
	return (
		<>
			<section className={c('page-hero cmshero', !page.hero?.photo && 'cmshero--plain')} aria-labelledby="hero-h">
				<div className={c('wrap')}>
					<div>
						<h1 id="hero-h">{page.title}</h1>
						{page.hero && <Body html={page.hero.body} className="cmsbody--hero" />}
					</div>
					{page.hero?.photo && (
						<figure className={c('page-hero__fig')}>
							<div className={c('diamond')}><img src={page.hero.photo.url} width={page.hero.photo.width} height={page.hero.photo.height} alt={page.hero.photo.alt} {...HIGH} /></div>
						</figure>
					)}
				</div>
			</section>
			<div className={c('wrap cmsdoc', indexed && 'cmsdoc--indexed')}>
				{indexed && <Index sections={titled} />}
				<div className={c('cmsdoc__main')}>
					{page.sections.map((s, i) => {
						if (s.title) n++
						return (
							<section key={s.id || `s${i}`} id={s.id} className={c('cmssec')} aria-labelledby={s.id ? `${s.id}-h` : undefined}>
								{s.title && (
									<header className={c('cmssec__head')}>
										{indexed && <span className={c('cmssec__n')} aria-hidden="true">{String(n).padStart(2, '0')}</span>}
										<h2 className={c('ruled')} id={`${s.id}-h`}>{s.title}</h2>
									</header>
								)}
								<Body html={s.intro} />
								{s.blocks.map(b => (
									<div key={b.id} id={b.anchor || undefined} className={c('cmsblock')}><Block b={b} /></div>
								))}
							</section>
						)
					})}
				</div>
			</div>
			<section className={c('section band section--tight')} aria-labelledby="ask-h">
				<div className={c('wrap split')}>
					<h2 id="ask-h">Questions?<br />Talk to the team.</h2>
					<div className={c('actions')}><Link href={R.contact} prefetch={false}><a className={c('btn btn--light')}>Contact the team</a></Link></div>
				</div>
			</section>
		</>
	)
}
