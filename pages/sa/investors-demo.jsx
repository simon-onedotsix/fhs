import Image from 'next/image'

import { LenisScroller } from '../../fuselage/animation/lenis-scroller'

import Link from 'next/link'

import { Pop, Slide, Fade } from "../../fuselage/theme/2023/ae/layout/animation/animation"
import { Reveal } from "../../fuselage/animation/reveal"
import { AnimatedCounter } from "../../fuselage/theme/2024/world/components/animated-counter/animated-counter"

import { Header } from '../../fuselage/theme/2025/sa/common/header/header'
import { Footer } from '../../fuselage/theme/2025/sa/common/footer/footer'
import { PageHeroImage } from '../../fuselage/blocks/page-hero-image/page-hero-image'
import { Button } from '../../fuselage/theme/2024/world/components/button/button'
import { ButtonKeyline } from '../../fuselage/theme/2024/world/components/button-keyline/button-keyline'
import { ArticleScroller, Article } from "../../fuselage/theme/2025/sa/pages/networking/article-scroller"
import { Billboard } from '../../fuselage/blocks/billboard/billboard'



import CSS from '../../fuselage/theme/2025/sa/css/investors.module.css'



export default function Page () {

    return (
        <>
            <Header compact />

            {/* INTRO */}

            <div className="bg-primary o-hidden">
                <PageHeroImage hero={{ url: '/assets/img/sa/nextgen-forum/bg-1.jpg', width: 2000, height: 1334 }} >
                    <div className="container maxw-60 pb-md c-white center">
                        <Reveal>
                            <h1 className='fs-0'>Spearhead Hospitality Investment at FHS Saudi Arabia</h1>
                        </Reveal>
                    </div>


                    {/* IMPACT */}

                    <div className="container center">
                        <Fade>
                            <p className="fs-1 fw-600 lh-1">2024 in Numbers</p>
                        </Fade>
                        <div className="columns-4 gap-sm mt-md">
                            <InvestorImpact figure={283} label={"Investors"} />
                            <InvestorImpact figure={22} unit={"%"} label={"of Attendees"} />
                            <InvestorImpact prefix={'$'} figure={1.1} unit={'B'} label={"In business opportunities and deals volume gained"} />
                            <InvestorImpact figure={17} label={"Deals Signed"} />
                        </div>
                    </div>


                    <div className="container pt-md">
                        <div className="columns-3 gap-md ai-center">
                            <section>
                                <Slide>
                                    <p className="fs-1 fw-600 lh-1 right">Investor Breakdown</p>
                                </Slide>
                            </section>

                            <Pop>
                                <section className='center'>
                                    <img src="/assets/img/sa/investors/fhs-investor-breakdown.svg" alt="graph" />
                                </section>
                            </Pop>

                            <section>
                                <ul className={CSS.graphKey}>
                                    <GraphKey color={'#9067BD'}>25% Developers</GraphKey>
                                    <GraphKey color={'#DFA46E'}>11% Investment Company</GraphKey>
                                    <GraphKey color={'#694094'}>48% Development Project / Governmental Company</GraphKey>
                                    <GraphKey color={'#FF4B4B'}>3% Private Equity</GraphKey>
                                    <GraphKey color={'#36D0FF'}>3% Bank</GraphKey>
                                    <GraphKey color={'#56E1B2'}>10% Asset Manager</GraphKey>
                                </ul>
                            </section>
                        </div>
                    </div>

                </PageHeroImage>
            </div>



            {/* USPs */}

            <section className="block bg-primary pt-0 o-hidden">
                <div className="container columns-2 gap-md ai-center pt-md">
                    <Pop>
                        <div className={CSS.floaterImg}>
                            <Image src={"https://cms.thebench.com/assets/img/site/FHS-SA/53727899164_7a536940b1_o.jpg"} layout='fill' />
                        </div>
                    </Pop>

                    <div className="formatted">
                        <Slide>
                            <h2>WHY ATTEND AS AN INVESTOR?</h2>
                            <p>At FHS Saudi Arabia, investors gain exclusive access to high-impact deal-making opportunities in one of the world&apos;s fastest-growing hospitality markets. The platform brings together global and regional hospitality leaders, real estate developers, asset owners, and government decision-makers under one roof, with $1.1B+ in business opportunities created last year. The Investors Relations team works closely with investors to understand their development targets and facilitate meetings with the right delegates.</p>

                        </Slide>

                        <p className='mt-md'>
                            <Pop inline>
                                <Link href="https://share.hsforms.com/165e0aXCeSsG2vZWX3GsGeQ8nd8z" target="_blank">
                                    <a className="button fs-5 caps">Register Interest for Investor Pass</a>
                                </Link>
                            </Pop>
                        </p>
                    </div>
                </div>

                <div className="container columns-2 gap-md ai-center pt-lg">
                    <div className="formatted">
                        <Slide>
                            <h2>EXCLUSIVE INVESTOR PASS BENEFITS</h2>
                            <ul><li><strong><u>Access to the Investors Lounge</u> - </strong>A private, invitation-only networking zone where top-tier investors, developers, and leading operators discuss high-impact investment deals in an exclusive setting. There, tailor-made presentations are accessible exclusively to owners and investors.</li><li><strong><u>Pre-arranged 1:1 Meetings</u> - </strong>Personalised introductions to leading hospitality operators, asset managers, and financial leaders to explore investment partnerships.</li><li><strong><u>Invitation to Closed-Door Investor Events</u> - </strong>Join a private, investor-focused roundtable or networking event within 12 months of registration to stay engaged with the industry&apos;s biggest opportunities. These events are organised around the world, providing a key platform to meet and connect with other investors.</li></ul>
                        </Slide>
                    </div>

                    <Pop>
                        <div className={CSS.floaterImg}>
                            <Image src={"https://cms.thebench.com/assets/img/site/FHS-SA/53727951317_1d28a7d78f_o.jpg"} layout='fill' />
                        </div>
                    </Pop>
                </div>
            </section>
           


            {/* BENEFITS */}

            <section className="block bg-primary-2-dark o-hidden">
                <div className="container center">
                    <Fade>
                        <p className="fs-1 fw-600 lh-1">Exclusive Investor Pass Benefits</p>
                    </Fade>
                </div>

                <div className="container center">
                    <Fade>
                        <p className='fs-3 fw-600'>Investor Spotlight at FHS Saudi</p>
                        <p className='fs-4'>A sneak peak at Investor focused sessions</p>
                    </Fade>
                </div>

                <div className="container columns-3 gap-sm">
                    <Pop>
                        <article className={CSS.previewCard}>
                            <p className='fs-5 lh-2'>Beyond the Whistle: The FIFA World Cup 2034&apos;s Ripple Effect on the Saudi Hospitality Sector</p>
                        </article>
                    </Pop>

                    <Pop>
                        <article className={CSS.previewCard}>
                            <p className='fs-5 lh-2'>Saudi Arabia Tourism Outlook: Shaping the Future from 2025 to 2040</p>
                        </article>
                    </Pop>

                    <Pop>
                        <article className={CSS.previewCard}>
                            <p className='fs-5 lh-2'>From White Label Operators, Franchising to Traditional Management Agreements - What is the Future?</p>
                        </article>
                    </Pop>
                </div>
            </section>



            {/* 2024 IN NUMBERS */}

            <section className="block bg-primary">
                <div className="container center">
                    <Fade>
                        <p className="fs-1 fw-600 lh-1">2024 in Numbers</p>
                    </Fade>
                    <div className="columns-4 gap-sm mx-auto mt-md">
                        <InvestorImpact figure={293} label={"Total attending investors"} />
                        <InvestorImpact prefix={'$'} figure={22} unit={"Tr+"} label={"Total Assets Under Management (AUM)"} />
                        <InvestorImpact figure={78} label={"Introductions Facilitated"} />
                        <InvestorImpact figure={22} label={"Meetings Scheduled"} />
                    </div>
                </div>
            </section>


            {/* FEATURES */}

            <section className="block bg-theme">
                <div className="container center maxw-40">
                    <Fade>
                        <p className='fs-2 fw-600 lh-2'>Where Investor Conversations Spark Landmark Deals</p>
                    </Fade>
                </div>

                <div className="container columns-3 gap-md">
                    <Pop><Card heroUrl={'/assets/img/sa/networking/receptions.jpg'}>
                        <p className='fs-4 c-secondary fw-600'>Networking Receptions</p>
                    </Card></Pop>
                    <Pop><Card heroUrl={'/assets/img/sa/networking/speed-networking.jpg'}>
                        <p className='fs-4 c-secondary fw-600'>Speed Networking</p>
                    </Card></Pop>
                    <Pop><Card heroUrl={'/assets/img/sa/networking/lunch.jpg'}>
                        <p className='fs-4 c-secondary fw-600'>Curated Lunch &amp; Coffee</p>
                    </Card></Pop>
                    <Pop><Card heroUrl={'/assets/img/sa/networking/tours.jpg'}>
                        <p className='fs-4 c-secondary fw-600'>Site Tours</p>
                    </Card></Pop>
                    <Pop><Card heroUrl={'/assets/img/sa/networking/investors-lounge.jpg'}>
                        <p className='fs-4 c-secondary fw-600'>Investor&apos;s Lounge</p>
                    </Card></Pop>
                    <Pop><Card heroUrl={'/assets/img/sa/networking/exhibition.jpg'}>
                        <p className='fs-4 c-secondary fw-600'>Exhibition Floor</p>
                    </Card></Pop>
                    
                </div>

                <div className="container center">
                    <Pop>
                        <ButtonKeyline 
                            href={'https://cms.thebench.com/downloads/FHS-Saudi-Arabia-2024-Company-List.pdf'} 
                            decal={'fs-5 fw-600'} 
                            color={'var(--secondary)'}
                            target={'_blank'}
                        >
                            View Attendee List
                        </ButtonKeyline>
                    </Pop>
                </div>
            </section>



            {/* 2024 INVESTORS */}
            
            <section className="block bg-default">
                <div className="container center">
                    <p className='fs-1 fw-600 c-primary'>SAMPLE LIST OF INVESTORS FROM 2024</p>
                </div>

                <div className="container formatted">
                    <article className={CSS.listing}>
                        <p>AB Holding<br/>AIMS Hospitality<br/>AIRZAI<br/>Al Balad Development Company<br/>Al Hokair Group<br/>Al Khozama Investment<br/>Al Muhaidib Holding<br/>Al Othaim Investment<br/>Al Rajhi Bank<br/>Al Raya Real Estate Co.<br/>Al Tamimi holding<br/>Alpha Capital<br/>Almaubah<br/>Alsulaiman Group<br/>Arbireo Capital<br/>ARDARA Company<br/>Aseer Development Authority (ASDA)<br/>ASFAR<br/>Baheej<br/>Blue Bronco<br/>Boutique Group<br/>
               
                        Cayan Group<br/>Cheval Collection<br/>Coolmore Capital<br/>Dallah Real Estate<br/>Dan Company<br/>DAQ<br/>First Projects Co.<br/>General Authority for State Real Estate<br/>Group Sadiki Morocco<br/>Gulf Coast Real Estate Development Company<br/>Hashoo Hotels<br/>Hesperia World<br/>Hihome<br/>HMC<br/>Hwadi Company<br/>Jumana House<br/>KAAJ Ventures<br/>KEC<br/>King Abdullah Financial District (KAFD)<br/>Kingstone Capital Holding<br/>KSL Capital Partners International<br/>
                
                       LADUN<br/>Lifestyle Developers<br/>Maldives Fund Management Corporation<br/>Masar / Umm Al Qura Development<br/>Mobco Group<br/>Mumtalakat<br/>NEOM<br/>New Murabba Development Company (NMDC)<br/>OFC<br/>Olayan Group<br/>Public Investment Fund (PIF)<br/>Qiddiya Investment Company<br/>Radic Real Estate Development<br/>Raseel Properties Co.<br/>RCU<br/>Red Sea Global<br/>REFAD Real Estate<br/>Rikaz<br/>Riyadh Municipality<br/>Roshn Real Estate<br/>Royal Commission of Jubail<br/>
                   
                       Royal Commission of Yanbu<br/>Rua Al Madinah Holding Company<br/>Samaya Group<br/>Saud Alarife Group<br/>Saudi Hospitality Company<br/>Saudi Tourism Authority<br/>SEDCO Capital<br/>SEVEN<br/>Sharjah Investment and Development Authority - Shurooq<br/>Shatha Co.<br/>Siyaha Advanced Limited Company<br/>Soudah Development Company<br/>Taiba Investment<br/>Tashyid Urban Development<br/>TDF (Tourism Development Fund)<br/>Urban Shelter Infrastructure</p>
                    </article>
                </div>
            </section>


            <Footer />
            <LenisScroller />
        </>
    )
}

Page.theme = 'sa-2025'


const InvestorImpact = ({ prefix, figure, unit, label }) => {
    return (
        <Pop>
            <div className={CSS.investorImpact}>
                <p className={CSS.investorImpactFigure}>{prefix}<AnimatedCounter from={0} to={figure} />{unit}</p>
                <p className={CSS.investorImpactLabel}>{label}</p>
            </div>
        </Pop>
    )
}

const Card = ({ children, heroUrl }) => {
    return (
        <div className={CSS.card}>
            <div className={CSS.cardHero}>
                <Image src={heroUrl} layout='fill' />
            </div>
            
            <div className={CSS.cardContent}>
                { children }
            </div>
        </div>
    )
}

const GraphKey = ({ color, children }) => {
    return (
        <Slide>
            <li className={CSS.graphKeyLabel}>
                <span className={CSS.swatch} style={{ backgroundColor: color ? color : 'white' }}/>{ children }
            </li>
        </Slide>
    )
}