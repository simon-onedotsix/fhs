import parse from 'html-react-parser'

import Image from 'next/image'

import { Pop, Slide, Fade } from '../../animation/animation'
import { Reveal } from '../../animation/reveal'

import CSS from './pavilion.module.css'

export const Pavilion = ({ data }) => {
    return (
        <Pop>
            <article className={`${CSS.pavilion} bg-light`}>
                <div className={CSS.pavilionFlag}>
                    <Image src={data.flag[0].url} layout={'fill'} />
                </div>
            
                <section className={CSS.pavilionHero}>
                    <Fade once={true}>
                        <Image src={data.hero[0].url} layout={'fill'} />
                    </Fade>
                </section>

                <section className={`${CSS.pavilionContent} formatted`}>
                    <Reveal>
                        <h2>{data.country}</h2>
                    </Reveal>
                    <Slide delay={.2}>
                        { parse(data.body) }
                    </Slide>

                    {
                        data.logoGroup.length ?
                        data.logoGroup.map( group => (
                            <div key={group.id}>
                                <p className="fw-600 mt-xs c-accent">{ group.groupHeading }</p>
                                <div className={CSS.pavilionLogoGrid}>
                                    {
                                        group.logos.length &&
                                        group.logos.map( (logo, index) => <PavilionLogo key={index} logo={logo} /> )
                                    }    
                                </div>
                            </div>
                        ))
                        : null
                    }
                
                </section>
            </article>
        </Pop>
    )
}

export const PavilionLogo = ({ logo }) => {
    return (
        <Pop>
            <div className={CSS.pavilionLogo}>
                <Image src={logo.url } layout={'fill'} />
            </div>
        </Pop>
    )
}