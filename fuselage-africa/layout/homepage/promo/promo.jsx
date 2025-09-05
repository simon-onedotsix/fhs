import Image from 'next/image'

import { Pop, Fade } from '../../../animation/animation'
import { Button } from '../../../components/button/button'

import CSS from './promo.module.css'

export const Promo = () => {
    return (
        <Pop>
            <section className="block pt-0">
                <div className="container">
                    
                <div className={CSS.layout}>
                    <div className={CSS.image}>
                        <Image src="/assets/img/str-webinar/benchmarking.jpg" layout='fill' alt="" />
                    </div>
                    <div className='formatted p-sm'>
                        <Pop delay={.1}>
                            <p className='fs-2 fw-600 c-primary lh-1'>FHS Africa Webinar: Unlocking STR Hotel Benchmarking: Insights You Can&apos;t Ignore</p>
                        </Pop>

                        <Fade delay={.2}>
                            <p className='fs-5 fw-500 py-xs'>8 May | 09:00 GMT+1</p>
                        </Fade>
                        
                        <div className={CSS.actions}>
                            <Pop delay={.3} inline>
                                <Button inverse href={'/fhs-africa-str-webinar'} decal={'fs-5 fw-600'}>Learn more</Button>
                            </Pop>
                        </div>
                    </div>
                    <div className={CSS.graphic}>
                        <Image src={'/assets/img/homepage/new-2025/new-graphic.jpg'} layout={'fill'} />
                    </div>
                </div>

                </div>
            </section>
        </Pop>
    )
}