import Image from 'next/image'

import { HeaderShim } from '../../global/header-legacy/header'

import CSS from './hero-unit-events.module.css'

export const AboveTheFold = ({ children, hero }) => {
    return (
        <section className={`${CSS.layout} global`}>
                
            <div className={CSS.tri}>
                {
                    hero ?
                        <Image src={hero.url} width={hero.width} height={hero.height} priority />
                    :
                        <Image src={`/assets/img/global/homepage/hero.jpg`} width={2100} height={2100} priority />
                }
            </div>
            <div className={CSS.triCorner}></div>



            <div className={`${CSS.content} block formatted`}>

                <HeaderShim />

                <div className={`${CSS.message} formatted`}>
                    <p className='fs-lg fw-600 lh-1 c-accent'>Invest in Change </p>
                    <p className='fs-4 mt-sm fw-400'>FHS is an international platform by The Bench where some of the world&apos;s most influential hospitality investment decision makers connect, exchange knowledge, explore new partnerships and shape the future of the hospitality sector. </p>
                </div>
                

                <p className='fs-4 fw-600 lh-1 mt-md c-accent'>Featuring Conference Tracks From:</p>

                <div className={`${CSS.featuredEvents} maxw-50 mt-sm`}>
                   <Image src={`/assets/img/global/homepage/events/ahic-logo.png`} width={149} height={161}/>
                   <Image src={`/assets/img/global/homepage/events/ahif-logo.png`} width={144} height={161} />
                   <Image src={`/assets/img/global/homepage/events/grif-logo.png`} width={145} height={161} />
                   <Image src={`/assets/img/global/homepage/events/aviadev-logo.png`} width={289} height={108} />
                </div>


                <p className='fs-2 fw-600 lh-1 mt-lg c-accent'>Future Hospitality event series</p>

                <div className="columns-2 gap-sm mt-sm">
                    { children }
                </div>
            </div>

        </section>
    )
}


export const BelowTheFold = ({ children }) => {
    return (
        <section className='global' style={{ position: `relative`, backgroundColor: `#352579`, overflow: `hidden`}}>
            <div className={CSS.triThree}></div>
            <div className={CSS.triThreeDeco}></div>

            <div className="block formatted columns-1 gap-lg" style={{ position: `relative`, zIndex: 2}}>
                
                { children }

            </div>

        </section>
    )
}