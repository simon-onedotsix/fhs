import { Avatar } from '../avatar/avatar'

import CSS from './quote.module.css'

import QuoteSVG from './img/icon-quote.svg'

export const Quote = ({ avatar, quote, name, title, decal }) => {
    return (
        <>
            {
                avatar &&
                <div className='mb-xs'><Avatar src={avatar.url} alt={`${avatar.alt ? avatar.alt : 'speaker photo'}`} /></div>
            }
            <p className={`${CSS.quote} ${decal}`}>
                <QuoteSVG className={CSS.openingQuote} />
                { quote }
            </p>
            <p className='mt-xs'><span className="fw-600">{ name }</span>, <br/>{ title }</p>
        </>
    )
}