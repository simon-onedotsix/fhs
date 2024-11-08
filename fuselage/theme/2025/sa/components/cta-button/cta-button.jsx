import Link from "next/link"

import CSS from './cta-button.module.css'

export const CTAButton = ({ href, label, target }) => {
    if ( target ) {
        return (
            <a href={ href } className={`${CSS.ctaButton} fs-5 fw-600`} target={target} rel={'noreferrer'} >{ label }</a>
        )
    }
    return (
        <Link href={ href }><a className={`${CSS.ctaButton} fs-5 fw-600`} >{ label }</a></Link>
    )
}