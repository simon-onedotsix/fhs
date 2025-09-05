import PropTypes from 'prop-types'
import { format, parseISO } from 'date-fns'

import { formatPrice } from '../../../lib/format-price'
import { Button } from '../button/button'

import CSS from './pass-box.module.css'



export const PassBox = ({ title, availableFrom, availableTo, price, currency, description, buttonLink, buttonLabel }) => {


    const handleTicketStatus = (startTime, endTime) => {
        if ( new Date(parseISO(endTime)) < Date.now() ) {
            return <p>[ testing: expired ]</p>
        }
        if ( new Date(parseISO(startTime)) > Date.now() ) {
            return <p>[ testing: not yet available ]</p>
        }
        return <p className='fw-600'>[ testing: available for purchase ]</p>
    }

    const handleTicketStart = (startTime) => {
        if ( new Date(parseISO(startTime)) > Date.now() ) {
            return <p className='fw-600 c-primary'>Available from: {format(new Date(parseISO(availableFrom)), 'dd MMM yyyy')}</p>
        }
        return
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


    return (
        <div className={CSS.passBox}>

            <div className='bb-5 bc-primary'>
                <p className='fs-3 fw-600 c-black mb-xxs'>{ title }</p>
            </div>
            
            { description && <p className='fw-300'>{ description }</p> }
            
            { handleTicketStart( availableFrom, availableTo ) }

            {/* { handleTicketStatus( availableFrom, availableTo ) } */}


            { price > 0 && <p className='fs-2 fw-800 lh-1 c-black'>{ currency } {formatPrice(price)}</p> }

            <div className={CSS.actions}>
                <Button href={ buttonLink } decal="fw-600" disabled={handleButtonStatus(availableFrom, availableTo)}>
                    {
                        buttonLabel ? <p>{buttonLabel}</p> : handleButtonLabel(availableFrom, availableTo)
                    }
                </Button>
            </div>
        </div>
    )
}



PassBox.propTypes = {
    title: PropTypes.string,
    availableFrom: PropTypes.string,
    availableTo: PropTypes.string,
    quantity: PropTypes.number,
    price: PropTypes.number,
    currency: PropTypes.string,
    description: PropTypes.string,
}