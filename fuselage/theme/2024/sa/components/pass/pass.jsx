import { useState, useEffect } from 'react'
import { format, parseISO } from 'date-fns'

import Link from 'next/link'

import CSS from './pass.module.css'



export const Pass = ({ title, description, currency, value, from, to, href }) => {

    const [ status, setStatus ] = useState(true)

    useEffect( () => {
        handlePassStatus( from, to )
    }, [])


    const handlePassStatus = (startTime, endTime) => {
        if ( new Date(parseISO(endTime)) < Date.now() ) {
            setStatus(false)
            return <p className='fw-600 c-accent'>[ testing: expired ]</p>
        }
        if ( new Date(parseISO(startTime)) > Date.now() ) {
            return <p className='fw-600 c-accent'>[ testing: not yet available ]</p>
        }
        return <p className='fw-600 c-accent'>[ testing: available for purchase ]</p>
    }

    const handleButtonLabel = (startTime, endTime) => {
        if ( new Date(parseISO(endTime)) < Date.now() ) {
            return <p className={`${CSS.button} ${CSS.disabled} fs-6 fw-600`}>Sold out!</p>
        }
        if ( new Date(parseISO(startTime)) > Date.now() ) {
            return <p className={`${CSS.button} ${CSS.disabled} fs-6 fw-600`}>Released {format(new Date(parseISO(from)), 'dd MMMM')}</p>
        }
        return <a className={`${CSS.button} fs-6 fw-600`} href={ href } target='_blank'>Purchase Pass</a>
    }


    return (
        <div className={`${CSS.pass} ${ !status && CSS.expired } p-sm`}>
            <section>
                <p className='fs-2 fw-600 lh-1 c-secondary mb-xs'>{ title }</p>
                <div className="formatted" dangerouslySetInnerHTML={{__html: description }} />
            </section>

            <section>
                {/* { handlePassStatus( from, to ) } */}
                <p className='fs-2 fw-600 c-secondary mb-xs'>{ currency } { value }</p>
                { handleButtonLabel( from, to )}
            </section>
        </div>
    )
}


export const SpecialPass = ({ title, description, currency, value, from, to, label, href }) => {

    return (
        <div className={`${CSS.pass} p-sm`}>
            <section>
                <p className='fs-2 fw-600 lh-1 c-secondary mb-xs'>{ title }</p>
                <div className="formatted" dangerouslySetInnerHTML={{__html: description }} />
            </section>

            <section>
                {/* { handlePassStatus( from, to ) } */}
                {
                    value &&
                    <p className='fs-2 fw-600 c-secondary mb-xs'>{ value }</p>
                }
                {
                    href && label ?
                        <Link href={ href }>
                            <a className={`${CSS.button} fs-6 fw-600 mt-xxs`}>{ label }</a>
                        </Link>
                    : null
                }
            </section>
        </div>
    )
}


export const PassGridSectionHeading = ({ heading }) => {
    return (
        <p className={`${CSS.sectionHeading} fs-3 fw-400 mt-sm mb-xxs c-primary`}>{ heading }</p>
    )
}


export const PassGrid = ({ children }) => {
    return (
        <div className={CSS.grid}>
            { children }
        </div>
    )
}