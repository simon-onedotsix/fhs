import s from '../living.module.css'

const warned = new Set()

// c('section tint') -> the module's names for a prototype class list; falsy parts are dropped.
export function c(...parts) {
	return parts.filter(Boolean).join(' ').split(/\s+/).filter(Boolean).map(name => {
		if (!s[name] && process.env.NODE_ENV !== 'production' && !warned.has(name)) {
			warned.add(name)
			console.warn(`living.module.css has no .${name}`)
		}
		return s[name] || name
	}).join(' ')
}

export { s }
