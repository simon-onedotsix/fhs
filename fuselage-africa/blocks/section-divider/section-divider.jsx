import Image from 'next/image'

import CSS from './section-divider.module.css'

export const SectionDivider = ({ heading, theme }) => {
    return (
        <section className={`${CSS.layout} block bg-default section-divider`} >

            <p className={`
                ${CSS.heading} 
                ${theme ? theme : `bg-primary`}
                fs-2 fw-600 lh-1
            `}>{ heading }</p>

        </section>
    )
}