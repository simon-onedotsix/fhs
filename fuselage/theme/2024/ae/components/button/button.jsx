import { useState } from 'react'

import CSS from './button.module.css'

export const Button = ({ children, href, target, rel, disabled, theme, decal, size }) => {

	const [isHovered, setIsHovered] = useState(false)

	const handleMouseEnter = () => {
		setIsHovered(true)
	}
	const handleMouseLeave = () => {
		setIsHovered(false)
	}
	const buttonStyle = {
		background: isHovered ? ( theme ? theme.hover : 'var(--primary-3') : ( theme ? theme.background : 'var(--primary-2'),
		color: theme ? theme.color : 'white',
	}

	return (
		<a 
			href={href} 
			className={`
				${CSS.button} 
				${decal}
				${disabled ? CSS.disabled : ''}
				${size == 'small' ? CSS.small : ''}
			`}
			target={target}
			rel={rel}

			style={buttonStyle}

			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			{children}
		</a>
	)
}
