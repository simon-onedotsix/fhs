import React from 'react'
import PropTypes from 'prop-types'

export const Text = ({ children, theme, columns, gap, maxWidth, center }) => {
    return (
        <section className={`block bg-${theme}`}>
            <div className={`
                container 
                columns-${columns} 
                gap-${gap} 
                formatted 
                maxw-${maxWidth}
                ${ center ? 'center' : null }
            `}>

                {children}

            </div>
        </section>
    )
}

Text.propTypes = {
    theme: PropTypes.string,
    columns: PropTypes.string,
    gap: PropTypes.string,
    maxWidth: PropTypes.string,
    center: PropTypes.bool
}

Text.defaultProps = {
    theme: 'default',
    columns: 3,
    gap: 'md',
    maxWidth: null,
    center: false
}