import { useState } from 'react'
import PropTypes from 'prop-types'

import CSS from './image-cta.module.css'

export const ImageCta = ({ children, imageUrl, theme }) => {
    const [hover, setHover] = useState(false)

    const handleTheme = ( theme ) => {
        switch ( theme ) {
            case 'secondary' : return CSS.secondary
                break

            case 'accent' : return CSS.accent
                break

            default: return 
        }
    }

    return (
        <div className={CSS.container}>
            <div className={`${CSS.imageContainer} ${ hover ? CSS.hovering : '' } ${handleTheme(theme)}`}>
                <img className={`${CSS.image} ${ hover ? CSS.hovering : '' }`} src={imageUrl} alt="" />
            </div>
            
            <div className={CSS.children} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                { children }
            </div>
        </div>
    )
}

ImageCta.propTypes = {
    imageUrl: PropTypes.string.isRequired,
}
  
ImageCta.defaultProps = {
    imageUrl: 'https://picsum.photos/300/300',
    theme: 'accent'
}