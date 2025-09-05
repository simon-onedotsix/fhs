import React from 'react'

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