import { useState } from 'react'

import CSS from './button.module.css'

export const Button = ({ children, href, target, rel, disabled, decal, size }) => {

	const [isHovered, setIsHovered] = useState(false)

	const handleMouseEnter = () => {
		setIsHovered(true)
	}
	const handleMouseLeave = () => {
		setIsHovered(false)
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

			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			{children}
		</a>
	)
}
