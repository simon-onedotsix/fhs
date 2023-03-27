import PropTypes from 'prop-types'

import CSS from './zoom-floater.module.css'

export const ZoomFloaters = ({ children, theme, flipped }) => {
    return (
        <section className={`${CSS.floaters} block bg-${theme} ${flipped ? CSS.flipped : ''}`}>
            <div className="container">
                {children}
            </div>
        </section>
    )
}

ZoomFloaters.propTypes = {
    theme: PropTypes.string,
    flipped: PropTypes.bool
}
ZoomFloaters.defaultProps = {
    theme: 'default',
    flipped: false
}


export const ZoomFloater = ({ children, hero, id }) => {
    
    return (
        <section className={CSS.floater}>
            <div className={CSS.container}>
                <div className={CSS.hero}>
                    <img className={CSS.image} src={hero} alt={hero.title} />
                </div>

                <div className={`${CSS.body} formatted`}>
                    {children}
                </div>
                
            </div>
        </section>
    )
}

ZoomFloater.propTypes = {
    hero: PropTypes.string
}