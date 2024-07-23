import { useState } from 'react'

import Image from 'next/image'

import CSS from './quote-slider.module.css'



export const QuoteSlider = ({ heading, testimonials }) => {

    const [ currentPage, setCurrentPage ] = useState(1)
    const totalPages = testimonials.length

    const nextPage = () => {
        if ( currentPage < totalPages ) setCurrentPage( currentPage + 1 )
    }
    const prevPage = () => {
        if ( currentPage > 1 ) setCurrentPage( currentPage - 1 )
    }

    const handleUpdate = ( i ) => {
        setCurrentPage( i )
    }

    return (
        <>
            <p className="fs-1 fw-600 center c-primary">{ heading }</p>

            <section className={`${CSS.layout} center c-primary`}>

                {
                    testimonials.map( (testimonial, index) => (
                        <div key={index} className={`${CSS.contentWrapper} ${index+1 === currentPage ? CSS.active : ''}`}>
                            <p className='fs-4'>"{ testimonial.quote }"</p>
                            <p className='fs-3 fw-600 mt-sm'>{ testimonial.fullName }</p>
                            <p className='fs-6 fw-500 mt-xxs'>{ testimonial.jobTitle }{ testimonial.organisation && ', ' }{ testimonial.organisation }</p>
                        </div>
                    ))
                }

                <nav className={CSS.nav}>
                    {
                        testimonials.map ( (testimonial, index) => (
                            <button key={index} onClick={() => handleUpdate( index+1 )} className={`${CSS.avatar} ${index+1 === currentPage ? CSS.active : ''}`}>
                                <Image src={testimonial.avatar[0].url} width={400} height={400} />
                            </button>
                        ))
                    }
                </nav>

            </section>
        </>
    )
}