import PropTypes from 'prop-types'

import CSS from './flipflop.module.css'

export const FlipFlop = ({ children, theme, hero, caption, flipped }) => {
    return (
        <section className={`${CSS.flipFlop} bg-${theme} ${flipped ? CSS.flipped : ''}`}>

            <div className={CSS.image}>
                <img src={hero} alt="" />

                {
                    caption &&
                    <div className={`${CSS.caption} bg-black-60 center py-xs px-sm`}>
                        <p>{ caption }</p>
                    </div>
                }
            </div>

            <div className={`${CSS.body} formatted`}>
                {children}
            </div>

        </section>
    )
}

FlipFlop.propTypes = {
    hero: PropTypes.string.isRequired,
    decal: PropTypes.string
}