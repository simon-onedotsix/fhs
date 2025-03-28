import { motion } from 'framer-motion'

import Image from 'next/image'

import { Reveal } from '../../../../../animation/reveal'
import { Fade, Pop } from '../../../../../animation/animation'
import { Button } from '../../../../2024/world/components/button/button'

import CSS from './theme-billboard.module.css'



export const ThemeBillboard = () => {
    return (
        <section className={CSS.layout}>

            <div className={CSS.triGrid}>
                <motion.div
                    initial={{ x: -200, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", bounce: 0.25, duration: 1, delay: .5 }}
                >
                    <Tri />
                </motion.div>

                <motion.div
                    initial={{ x: -200, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", bounce: 0.25, duration: 1, delay: .25 }}
                >
                    <Tri fill={'blue'} />
                </motion.div>

                <motion.div
                    initial={{ x: -200, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", bounce: 0.25, duration: 1 }}
                >
                    <Tri />
                </motion.div>
            </div>

            <div className={CSS.overlay}>
                <div>
                    <div className={CSS.headline}>
                        <Reveal delay={.75}>
                            <p className='fs-0 fw-500 caps lh-1'>Where Vision Leads,</p>
                        </Reveal>
                        <Reveal delay={1}>
                            <p className='fs-0 fw-500 caps lh-1'>Investment Follows</p>
                        </Reveal>
                    </div>

                    <Fade delay={1.2}>
                        <p className={`fs-5 fw-500 c-white mt-md`} >27-29 October 2025, Madinat Jumeirah, Dubai</p>
                    </Fade>

                    <Fade delay={1.3}>
                        <div className="mt-sm">
                            <Pop inline>
                                <Button href={`/world/purchase-pass`} theme={{ background: `var(--secondary-2)`, hover: `var(--secondary-2-dark)`, color: `white`}} decal={`fs-5 fw-600`}>Purchase Pass</Button>
                            </Pop>
                        </div>
                    </Fade>
                </div>

                <div className={CSS.logosContainer}>
                    <div className={CSS.logoGrid}>
                        {/* <Pop><LogoBox label={"Host Sponsor"}><Image src={`/assets/site/ae/jumeirah-2024.png`} layout={`fill`} /></LogoBox></Pop>
                        <Pop><LogoBox scale={0.8} label={"Organised by"}><Image src={'/assets/site/the-bench-inverse@2x.png'} layout='fill' /></LogoBox></Pop> */}
                        <Pop><LogoBox><Image src={'/assets/theme/world-2025/fhs-20-years.png'} layout='fill' /></LogoBox></Pop>
                    </div>
                </div>
            </div>


        </section>
    )
}


export const Tri = ({ fill }) => {

    // red = 233,55,66
    // blue = 113, 207, 235

    return (
        <svg width="100%" height="100%" viewBox="0 0 718 804" style={{ fillRule: "evenodd", clipRule: "evenodd", strokeLinejoin: "round", strokeMiterlimit: 2 }}>

        <defs>
            <linearGradient id="red" x1="0%" x2="100%" y1="0%" y2="0%">
                <stop offset="33%" stopColor={`rgb(233, 55, 66)`} />
                <stop offset="100%" stopColor={`rgba(233, 55, 66, 0)`} />
            </linearGradient>
            <linearGradient id="blue" x1="0%" x2="100%" y1="0%" y2="0%">
                <stop offset="33%" stopColor={`rgb(113, 207, 235)`} />
                <stop offset="100%" stopColor={`rgba(113, 207, 235, 0)`} />
            </linearGradient>
        </defs>

            <g transform="matrix(1,0,0,1,-2451,-1318)">
                <g transform="matrix(1,0,0,1,2160,1180)">
                    <g id="fhs-tri" transform="matrix(-717.399,0,0,717.399,1008.4,540)">
                        <path d="M0.675,0.163L0.675,-0.126L0.425,0.018L0.675,0.163ZM0.837,-0.56L1,-0.466L1,0.466L0.837,0.56L0,0.076L0,-0.076L0.837,-0.56Z" style={{ fill: fill === 'blue' ? "url(#blue)" : "url(#red)", fillRule: "nonzero" }}/>
                    </g>
                </g>
            </g>
        </svg>
    )
}


const LogoBox = ({ children, label, scale }) => (
	<div>
		{ label && <p className={CSS.logoBoxLabel}>{label}</p> }
		<div className={CSS.logoBox} style={{ marginTop: label && 10, transform: scale && `scale(${scale})` }}>
			{ children }
		</div>
	</div>
)