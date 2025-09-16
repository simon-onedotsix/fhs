import CSS from './button.module.css'

export const Button = ({ children, href, target, rel, outline, primary, inverse }) => {
	return (
		<a 
			href={href} 
			className={`
				${CSS.button} 
				${outline && CSS.outline}
				${primary && CSS.primary}
				${inverse && CSS.inverse}
			`}
			target={target}
			rel={rel}
		>
			{children}
		</a>
	)
}


export const ButtonGrid = ({ children }) => <div className={CSS.buttonGrid}>{children}</div>