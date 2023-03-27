import CSS from './button.module.css'

export const Button = ({ children, href, target, rel, disabled, outline, inverse, accent, secondary, decal, size }) => {
	return (
		<a 
			href={href} 
			className={`
				${CSS.button} 
				${outline ? CSS.outline : ''} 
				${inverse ? CSS.inverse : ''} 
				${accent ? CSS.accent : ''} 
				${secondary ? CSS.secondary : ''} 
				${decal}
				${disabled ? CSS.disabled : ''}
				${size == 'small' ? CSS.small : ''}
			`}
			target={target}
			rel={rel}
		>
			{children}
		</a>
	)
}
