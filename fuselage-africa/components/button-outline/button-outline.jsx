import Link from 'next/link'

import CSS from './button-outline.module.css'

export const ButtonOutline = ({ children, href, target, rel, disabled, inverse, decal }) => {
	return (
		<Link href={href} target={target} rel={rel}>
			<a 
				className={`
					${CSS.button} 
					${inverse ? CSS.inverse : ''} 
					${disabled ? CSS.disabled : ''}
					${decal}
				`}	
			>
				{children}
			</a>
		</Link>
	)
}
