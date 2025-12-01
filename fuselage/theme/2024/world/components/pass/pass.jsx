import { useState, useEffect } from 'react'
import Link from 'next/link'
import { format, parseISO } from 'date-fns'
import parse from 'html-react-parser'

import { TickIcon } from '../../../../../icons/tick'

import CSS from './pass.module.css'



export const PassPriceBands = ({ flash, title, callout, description, currency, priceBands, soldOut, priceIncreaseMessage, quantityRemaining, label, href }) => {

    const [ currentBand, setCurrentBand ] = useState()
    const [ nextBand, setNextBand ] = useState()

    useEffect( () => {
        // console.log('priceBands:', priceBands)
    
        if ( !priceBands ) return

        let indexOfCurrent = 0
    
        priceBands.forEach( ( band, index ) => {
            // if ( new Date(parseISO(band.endDate)) < Date.now() ) console.log('expired')
            // if ( new Date(parseISO(band.startDate)) > Date.now() ) console.log('not yet available')
            // if ( new Date(parseISO(band.startDate)) < Date.now() && new Date(parseISO(band.endDate)) > Date.now() ) console.log('current')
                    
            if ( new Date(parseISO(band.startDate)) < Date.now() && new Date(parseISO(band.endDate)) > Date.now() ) {
                setCurrentBand( band )
                indexOfCurrent = index
            }
        })
        
        setNextBand( priceBands[indexOfCurrent + 1] )

        // console.log('currentBand:', currentBand )
        // console.log('nextBand:', nextBand )

    }, [])


    
    return (
        <div className={`${CSS.pass} ${soldOut && CSS.soldOut} bg-white p-sm`}>

            {
                soldOut &&
                <div className={CSS.soldOutFlash}><span className='fs-2 fw-600 c-white caps center lh-1'>Sold out</span></div>
            }


            {
                flash &&
                <div className={CSS.flash}><span className='fw-600 fs-6 c-white caps'><TickIcon/>&ensp;{ flash }</span></div>
            }

            <section className={CSS.details}>

                {
                    callout &&
                    <p className={CSS.callout}>{callout}</p>
                }

                <p className='fs-2 fw-600 lh-1 c-primary caps center pt-xs mx-auto'>{ title }</p>
                {
                    currentBand && nextBand && priceIncreaseMessage ?
                        <div className="formatted">
                            <p className="fs-6">
                                <span className="fw-600">Only available at this rate before { format( new Date(currentBand.endDate), "d MMMM" ) }</span> when the price increases to <strong className="fw-600">{ currency }&nbsp;{ nextBand.value }</strong>
                            </p>
                        </div>
                    : null
                }
                
                <div className="formatted">{ description && parse(description) }</div>
            </section>

            <section className={CSS.actions}>
                { 
                    priceBands && currency ?
                        <p className='fs-2 fw-600 c-primary'>
                            { currency } { currentBand ? currentBand.value : 'TBA' }
                        </p>
                    : null
                }
                
                {
                    quantityRemaining &&
                    <div className="formatted fw-600">{ quantityRemaining } passes left at this rate</div>
                }
                
                <a className={`${CSS.button} fs-6 fw-600 mt-xs`} href={ href } target='_blank'>{ label }</a>
            </section>
        </div>
    )
}



export const Pass = ({ flash, title, header, cta, description, currency, value, from, to, href }) => {

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
        <div className={`${CSS.pass} ${ !status && CSS.expired } bg-white p-sm`}>

            {
                flash &&
                <div className={CSS.flash}>{ flash }</div>
            }

            <section className={CSS.details}>
                <p className='fs-2 fw-600 lh-1 c-primary caps center pt-xs mx-auto'>{ title }</p>
                <div className="formatted">{ header }</div>
                
                <div className="formatted">{ description && parse(description) }</div>
            </section>

            <section className={CSS.actions}>
                {/* { handlePassStatus( from, to ) } */}
                <p className='fs-2 fw-600 c-primary'>{ currency } { value }</p>
                <div className="formatted mb-xs">{ cta }</div>
                { handleButtonLabel( from, to )}
            </section>
        </div>
    )
}


export const SpecialPass = ({ title, header, description, currency, value, from, to, label, href }) => {

    return (
        <div className={`${CSS.pass} bg-medium p-sm`}>
            <section>
                <p className='fs-2 fw-600 lh-1 c-primary mb-xs'>{ title }</p>
                <div className="formatted">{ header }</div>
                <div className="formatted">{ description && parse(description) }</div>
            </section>

            <section>
                {/* { handlePassStatus( from, to ) } */}
                {
                    value &&
                    <p className='fs-2 fw-600 c-primary mb-xs'>{ currency } { value }</p>
                }
                {
                    href &&
                    <Link href={ href }>
                        <a className={`${CSS.button} fs-6 fw-600 mt-xxs`}>{ label }</a>
                    </Link>
                }
            </section>
        </div>
    )
}


export const PassGridSectionHeading = ({ heading }) => {
    return (
        <p className={`${CSS.sectionHeading} fs-2 fw-400 mt-sm mb-xxs`}>{ heading }</p>
    )
}


export const PassGrid = ({ children }) => {
    return (
        <div className={CSS.grid}>
            { children }
        </div>
    )
}