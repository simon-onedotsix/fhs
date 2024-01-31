import { Pop, Slide } from '../../../../../animation/animation'
 
import CSS from './quote.module.css'

export const Quote = ({ quote, name, title, company }) => {
    return (
        <div className={CSS.container}>
            <Pop>
                <div className={`${CSS.quote}`}>
                    <p className='fs-2 lh-1'>{ quote }</p>
                </div>
            </Pop>
            <Slide delay={0.25}>
                <p className={`${CSS.quotee} fs-6 c-primary`}>
                    <span className='fw-600'>{ name }</span> 
                    <br/>{ title } 
                    <br/><span className='fw-600'>{ company }</span>
                </p>
            </Slide>
        </div>
    )
}

export const QuoteGrid = ({ children }) => {
    return (
        <section className={`${CSS.grid} block`}>
            { children }
        </section>
    )
}