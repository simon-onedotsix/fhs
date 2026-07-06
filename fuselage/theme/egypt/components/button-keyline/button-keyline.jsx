import { useState } from 'react'

import CSS from './button-keyline.module.css'

export const ButtonKeyline = ({ children, href, target, rel, disabled, color, decal, size, inverse }) => {

	const [isHovered, setIsHovered] = useState(false)

	const handleMouseEnter = () => {
		setIsHovered(true)
	}
	const handleMouseLeave = () => {
		setIsHovered(false)
	}
	const buttonStyle = {
		color: isHovered ? ( color ? color : 'var(--secondary)' ) : ( 'inherit' )
	}

	return (
		<a 
			href={href} 
			className={`
				${CSS.button} 
				${decal}
				${disabled ? CSS.disabled : ''}
				${inverse ? CSS.inverse : ''}
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
