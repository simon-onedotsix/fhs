import React from 'react'
import PropTypes from 'prop-types'

import CSS from './brand.module.css'

import LogoSVGinverse from './img/FHS-logo.svg'
import LogoSVG from './img/FHS-logo.svg'

export const Brand = ({ href, inverse }) => {
    return (
        <a href={href} aria-label='FHS Home'>
            {
                inverse ?
                    <LogoSVGinverse className={CSS.logo} />
                :
                    <LogoSVG className={CSS.logo} />
            }
        </a>
    )
}

Brand.propTypes = {
    inverse: PropTypes.bool,
    decal: PropTypes.string
}
Brand.defaultProps = {
    inverse: false,
    decal: ''
}