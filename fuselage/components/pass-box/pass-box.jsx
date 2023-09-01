import { useState, useEffect } from 'react'

import { format, parseISO } from 'date-fns'

import { formatPrice } from '../../../lib/format-price'
import { Button } from '../button/button'

import CSS from './pass-box.module.css'



export const PassBox = ({ title, availableFrom, availableTo, hideAvailability, price, currency, description, buttonLink, buttonLabel }) => {

    const [ available, setAvailable ] = useState(true)

    useEffect ( () => {
        if ( Date.now() > new Date(parseISO(availableFrom)) && Date.now() < new Date(parseISO(availableTo)) ) {
            setAvailable(true)
        } else {
            setAvailable(false)
        }
    })


    const handleTicketStatus = (startTime, endTime) => {
        if ( new Date(parseISO(endTime)) < Date.now() ) {
            return <p className='fw-600 c-accent'>[ testing: expired ]</p>
        }
        if ( new Date(parseISO(startTime)) > Date.now() ) {
            return <p className='fw-600 c-accent'>[ testing: not yet available ]</p>
        }
        return <p className='fw-600 c-accent'>[ testing: available for purchase ]</p>
    }
    
    const handleButtonLabel = (startTime, endTime) => {
        if ( new Date(parseISO(endTime)) < Date.now() ) {
            return <p>Sold out!</p>
        }
        if ( new Date(parseISO(startTime)) > Date.now() ) {
            return <p>Not yet released</p>
        }
        return <p className='fw-600'>Purchase Pass</p>
    }
    
    const handleButtonStatus = (startTime, endTime) => {
        if ( new Date(parseISO(startTime)) > Date.now() || new Date(parseISO(endTime)) < Date.now() ) {
            return true
        }
        return false
    }

    const handleAvailableFrom = ( date) => {
        if ( !date ) return
        return (
            <p className='fw-500'>Released on {format(new Date(parseISO(availableFrom)), 'd MMMM')}</p>
        )
    }
    
    const handleAvailableTo = ( date ) => {
        if ( !date ) return
        return (
            <p className='fw-500'>Price increases on {format(new Date(parseISO(date)), 'd MMMM')}</p>
        )
    }

    return (
        <div className={`${CSS.passBox} bg-white p-sm ${ available ? '' : CSS.disabled }`}>

            <div className='bb-5 bc-accent'>
                <p className='fs-3 fw-600 c-primary lh-1 pb-xs'>{ title }</p>
            </div>

            { price > 0 && <p className='fs-2 fw-800 lh-1 c-primary'>{ currency } {formatPrice(price)}</p> }

            {
                !hideAvailability &&
                
                <div className="bg-white formatted">
                    { available ? handleAvailableTo(availableTo) : handleAvailableFrom(availableFrom)}
                </div>
            }
       
            { description && <div className="bg-white fw-400 formatted" dangerouslySetInnerHTML={{__html: description }} /> }
            
            {
                buttonLink &&
                <div className={CSS.actions}>
                    <Button href={ buttonLink } secondary decal="fw-600" disabled={handleButtonStatus(availableFrom, availableTo)}>
                        {
                            buttonLabel ? 'Register' : handleButtonLabel(availableFrom, availableTo)
                        }
                    </Button>
                </div>
            }

            {
                handleButtonStatus(availableFrom, availableTo) &&
                <div className={CSS.flash}>
                    <div className={CSS.flashContent}>
                        <p className='fs-3 fw-600 center lh-1'>SOLD OUT!</p>
                    </div>
                </div>
            }
        </div>
    )
}



export const PassBoxGrid = ({ heading, desicription, children }) => {
    return (
        <>
            <div className={CSS.header}>
                <p className='fs-2 fw-600 lh-1 c-primary'>FHS Saudi Arabia Standard Pass</p>
                <p className='fs-5 fw-400 mt-xs c-dark'>Provides full conference access including conference sessions, networking events, and post-event resources.</p>
            </div>
            <div className={CSS.grid}>
                { children }
            </div>
        </>
    )
}


export const PassBoxActions = ({ children }) => {
    return (
        <div className={CSS.footerActions}>
            { children }
        </div>
    )
}