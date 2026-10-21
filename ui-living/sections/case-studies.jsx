import Link from 'next/link'

import { c } from '../lib/c'
import { img } from '../lib/format'
import { R } from '../lib/routes'

export const casePath = k => `${R['case-studies']}/${k.slug}`
const firstSentence = s => s.split(/(?<=\.)\s/)[0]

export function CaseBy({ a }) {
	if (!a) return null
	return (
		<p className={c('cs__by')}>
			{a.photo && <img src={img(a.photo)} width="48" height="48" alt="" loading="lazy" />}
			<span><b>{a.name}</b>{a.role && `, ${a.role}`}</span>
		</p>
	)
}

// Asset class, where and stage: a meta list under the headline (no eyebrow above it, DESIGN.md).
export function CaseFacts({ k }) {
	const facts = [['Asset class', k.classes.join(', ')], ['Where', k.where], ['Stage', k.stage]].filter(([, v]) => v)
	return facts.length > 0 && (
		<dl className={c('cs__facts')}>
			{facts.map(([t, v]) => <div key={t}><dt className={c('label')}>{t}</dt><dd>{v}</dd></div>)}
		</dl>
	)
}

export function CaseStory({ k, parts = ['what', 'gap', 'answer'] }) {
	const t = { what: 'What it is', gap: 'The gap', answer: 'The answer' }
	return (
		<dl className={c('cs__dl')}>
			{parts.filter(p => k[p]).map(p => <div key={p}><dt className={c('label')}>{t[p]}</dt><dd>{k[p]}</dd></div>)}
		</dl>
	)
}

// The key figure and the Paris conversation the case points to.
export function CaseFoot({ k }) {
	return (
		<>
			{k.figure && <p className={c('cs__num')}><b>{k.figure.value}</b><span>{k.figure.label}</span></p>}
			{k.conversation && (
				<p className={c('cs__talk')}>
					<span className={c('label')}>In Paris</span>
					<Link href={R.programme} prefetch={false}><a className={c('link')}>{k.conversation}</a></Link>
				</p>
			)}
		</>
	)
}

// One case as a flip-flop row: photo one side, the story the other, alternating down the page.
export function CaseRow({ k, flip }) {
	return (
		<article className={c('cs', flip && 'cs--flip')} id={k.slug} aria-labelledby={`cs-${k.slug}`}>
			<figure className={c('cs__fig')}>{k.image && <img src={k.image.card} width="1200" height="900" alt={k.project} loading="lazy" />}</figure>
			<div className={c('cs__text')}>
				<h2 id={`cs-${k.slug}`}>{k.project}</h2>
				<CaseBy a={k.advisor} />
				<CaseFacts k={k} />
				<CaseStory k={k} />
				<CaseFoot k={k} />
				<p className={c('cs__share')}><Link href={casePath(k)} prefetch={false}><a className={c('link')}>Link to this case</a></Link></p>
			</div>
		</article>
	)
}

export function CaseTile({ k }) {
	return (
		<Link href={casePath(k)} prefetch={false}>
			<a className={c('case-tile')}>
				<figure>{k.image && <img src={k.image.tile} width="800" height="1000" alt="" loading="lazy" />}</figure>
				<div className={c('case-tile__body')}>
					<h3>{k.project}</h3>
					{k.what && <p>{firstSentence(k.what)}</p>}
					{k.advisor && <small>{k.advisor.photo && <img src={img(k.advisor.photo)} width="36" height="36" alt="" loading="lazy" />}<span>{k.advisor.name}</span></small>}
				</div>
			</a>
		</Link>
	)
}

// Three cases with a way to the rest: on /living and under each case page.
export function CaseStrip({ cases, id = 'cases-h', title = 'Living, in practice.', bg }) {
	return (
		<section className={c('section', bg)} aria-labelledby={id}>
			<div className={c('wrap')}>
				<div className={c('head')}>
					<h2 className={c('ruled')} id={id}>{title}</h2>
					<p>Projects led by FHS Living Founding Advisors, and the questions they bring to Paris.</p>
				</div>
				<ul className={c('cases')}>{cases.map(k => <li key={k.slug}><CaseTile k={k} /></li>)}</ul>
				<div className={c('actions cases__all')}>
					<Link href={R['case-studies']} prefetch={false}><a className={c('btn btn--ghost')}>All case studies</a></Link>
				</div>
			</div>
		</section>
	)
}
