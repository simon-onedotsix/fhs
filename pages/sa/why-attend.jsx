import Head from "next/head"
import Image from "next/image"
import Script from "next/script"

import { useRouter } from "next/router"

import { ReactLenis, useLenis } from '@studio-freight/react-lenis'
import { LenisScroller } from '../../fuselage/animation/lenis-scroller'

import { Header } from '../../fuselage/theme/2025/sa/common/header/header'
import { Footer } from '../../fuselage/theme/2025/sa/common/footer/footer'

import { Pop, Fade } from "../../fuselage/animation/animation"

import CSS from '../../fuselage/theme/2025/sa/css/why-attend.module.css'

export default function WhyAttend () {

    const { locale } = useRouter()

    const lenis = useLenis()

    return (
        <ReactLenis root>
            <Script src="https://bot.leadoo.com/bot/dynamic.js?company=IqbUBErW" strategy="afterInteractive" />
        <div className="bg-pattern-blue"  dir={ locale === 'ar' ? 'rtl' : 'ltr' }>
            <Head>
				<link rel="icon" type="image/png" href="/assets/favicons/sa/favicon-16x16.png" sizes="16x16" />
			</Head>

            <Header compact />

            
            
            <section className={CSS.header}>
                <Image src={'/assets/img/sa/why-attend/why-attend-hero.jpg'} width={1920} height={910} />
                <div className={CSS.overlay}>
                    <Fade>
                        <p className="fs-1 fw-600 maxw-50 c-secondary center">
                            {
                                locale === 'ar'
                                ?
                                    "لماذا يجب أن تحضر قمة مستقبل الضيافة بالمملكة العربية السعودية؟"
                                :
                                    "Why Attend FHS Saudi Arabia"
                            }
                        </p>
                    </Fade>
                </div>
            </section>


            <section className="block pt-0">
                <div className="container center">
                    <div className={CSS.jumpMenu}>
                        <Pop>
                            <p className={`${CSS.jumpButton} ${ locale === 'ar' && CSS.rtl }`} onClick={ ()=> lenis.scrollTo('#delegate', { duration: 1.5, offset: -40 }) }>
                                { locale === 'ar' ? "انضم إلينا كمشارك " : <>Attend as a <br/>delegate</> } <JumpArrow/>
                            </p>
                        </Pop>
                        <Pop>
                            <p className={`${CSS.jumpButton} ${ locale === 'ar' && CSS.rtl }`} onClick={ ()=> lenis.scrollTo('#sponsor', { duration: 1.5, offset: -40 }) }>
                                { locale === 'ar' ? "كن أحد رعاة قمة مستقبل الضيافة بالمملكة العربية السعودية" : <>Sponsor FHS Saudi&nbsp;Arabia</> } <JumpArrow/>
                            </p>
                        </Pop>
                        <Pop>
                            <p className={`${CSS.jumpButton} ${ locale === 'ar' && CSS.rtl }`} onClick={ ()=> lenis.scrollTo('#investor', { duration: 1.5, offset: -40 }) }>
                                { locale === 'ar' ? "شارك كمستثمر أو مالك" : <>Attend as an Investor or Owner</> } <JumpArrow/>
                            </p>
                        </Pop>
                    </div>
                </div>
            </section>

            <section className="block pt-sm" id="delegate">
                <div className="container maxw-70">
                    <Pop>
                        <Card imageUrl={'/assets/img/sa/why-attend/why-attend-delegate-2025.jpg'}>
                            <p className="fs-2 c-secondary lh-1">{ locale === 'ar' ? "الحضور كمشارك" : "Attend as a Delegate" }</p>
                            <div className="formatted mt-sm">
                                <p className="fw-600">Network with industry leaders and investors, access critical insights and turn conversations into partnerships.</p>
                                <p>As a delegate you can find a multitude of curated networking opportunities, enabling you to connect closely with our premium audience of hotel owners and operators, developers, government representatives, potential business partners, and investors. Benefit from our action-packed agenda spanning three days with 150+ thought-leaders taking the stage.</p>
                            </div>
                        </Card>
                    </Pop>
                </div>

                <div className="container maxw-70" id="sponsor">
                    <Pop>
                        <Card imageUrl={'/assets/img/sa/why-attend/why-attend-sponsor-2025.jpg'}>
                            <p className="fs-2 c-secondary lh-1">{ locale === 'ar' ? "كن أحد رعاة قمة مستقبل الضيافة بالمملكة العربية السعودية" : "Sponsor FHS Saudi Arabia" }</p>
                            <div className="formatted mt-sm">
                                <p className="fw-600">“Being at FHS Saudi Arabia is an obligation” Hassan AhdabChief Hospitality Operations Officer, Taiba Investments</p>
                                <p>Leverage visibility in front of a premium audience comprised of local and global hospitality investment leaders. Showcase your brand in a focused environment where organisations like yours can engage directly with capital partners, operators, and policymakers who are shaping the next phase of Riyadh&apos;s growth.</p>
                                <p className='mt-sm'>
                                    <a className='button fs-6' href={`https://youtu.be/JZtXoVLgCFg?si=CSrqL-V2FsoJjGFd`}>
                                        Hear from our sponsors
                                    </a>
                                </p>
                            </div>
                        </Card>
                    </Pop>
                </div>

                <div className="container maxw-70" id="investor">
                    <Pop>
                        <Card imageUrl={'/assets/img/sa/why-attend/why-attend-investor-2025.jpg'}>
                            <p className="fs-2 c-secondary lh-1">{ locale === 'ar' ? "شارك كمستثمر أو مالك" : "Attend as an Investor or Owner" }</p>
                            <div className="formatted mt-sm">
                                <p className="fw-600">FHS Saudi Arabia offers investors personalised access to local and cross-border partnerships. Investors gain exclusive access to the Investor Lounge built for curated, private meetings and investor-only gatherings during the summit. </p>
                                <p className='mt-sm'>
                                    <a className='button fs-6' href={`/sa/purchase-pass`}>
                                        Register as Investor
                                    </a>
                                </p>
                            </div>
                        </Card>
                    </Pop>
                </div>
            </section>

            

        
            <Footer />
            <LenisScroller />
        </div>
        </ReactLenis>
    )
}

WhyAttend.theme='sa-2025'



const Card = ({ imageUrl, children }) => {
    return (
        <div className={CSS.card}>
            <section className={CSS.cardContent}>
                {children}
            </section>

            <section className={CSS.cardImage}>
                <Image src={imageUrl} layout="fill"/>
            </section>
        </div>
    )
}

const JumpArrow = () => {
    return (
        <span className={CSS.jumpArrow}>
            <svg width="100%" height="100%" viewBox="0 0 30 30" style={{ fillRule:`evenodd`, clipRule:`evenodd`, strokeLiterlimit:10 }}>
                <rect id="jumparrow" x="0" y="0" width="30" height="30" style={{ fill:'none', stroke: 'none'}}/>
                <clipPath id="_clip1">
                    <rect x="0" y="0" width="30" height="30"/>
                </clipPath>
                <g clipPath="url(#_clip1)">
                    <path d="M23.144,14.655L15,22.799L6.856,14.655" style={{fill:'none', strokeWidth:3 }}/>
                    <path d="M15,5.08L15,22.799" style={{ fill:'none', strokeWidth:3, strokeMiterlimit:1.5 }}/>
                </g>
            </svg>
        </span>

    )
}