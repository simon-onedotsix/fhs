import Image from 'next/image'
import { Button } from '../../../components/button/button'

import CSS from './page-header.module.css'

export const PageHeader = () => {
    return (
        <section className={CSS.layout}>
            <div className={`${CSS.intro}`}>
                <div className='block bg-primary'>
                    <p className='fs-2 fw-400 caps'>Sponsorship</p>
                    <p className='fs-0 fw-600 lh-1 mt-sm'>Join our Esteemed Partners in 2025</p>
                    <div className="button-grid mt-md">
                        <Button href={'/get-in-touch'} outline decal={'fw-600'}>Get in Touch</Button>
                        <Button href={'/2025-floorplan'} outline decal={'fw-600'}>FHS Africa 2025 Floor Plan</Button> 
                    </div>
                </div>
                <section className={CSS.graphic}>
                    <Image src={`/assets/img/homepage/brand-pattern-horizontal.jpg`} layout={`fill`} width={1920} height={1000} alt="" priority />
                </section>
            </div>

            <div className={CSS.hero}>
                <Image src={`/assets/img/sponsorship/sponsorship-hero.jpg`} layout={`fill`} alt="" priority />
            </div>

            <div className={`${CSS.actions} bg-dark p-md`}>
                <div className="formatted">
                    <p className='fs-5'>By fully understanding your company's needs, we are able to tailor our proposals to meet your objectives.</p>
                    <p className='fs-5'>Our diverse range of sponsorship and networking opportunities both pre, present and post-event is what makes us unique.</p>
                    <p className='fs-5'>If you are seeking to develop business in the African continent - there is no other forum for Africa that will bring you such a highly profiled and influential audience.</p>
                </div>
            </div>
        </section>
    )
}