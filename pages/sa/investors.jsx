import { useRouter } from 'next/router'
import Image from 'next/image'

import { LenisScroller } from '../../fuselage/animation/lenis-scroller'

import Link from 'next/link'
import Script from "next/script"

import { Pop, Slide, Fade } from "../../fuselage/theme/2023/ae/layout/animation/animation"
import { Reveal } from "../../fuselage/animation/reveal"
import { AnimatedCounter } from "../../fuselage/theme/2024/world/components/animated-counter/animated-counter"

import { EventsBar } from "../../ui/site/eventsbar"
import { Header } from '../../ui/site/header'
import { FHS_SA as header } from '../../fixtures/nav'
import { Footer } from '../../fuselage/theme/2025/sa/common/footer/footer'

import { PageHeroImage } from '../../fuselage/blocks/page-hero-image/page-hero-image'
import { ButtonKeyline } from '../../fuselage/theme/2024/world/components/button-keyline/button-keyline'
import { SpeakerCarousel } from "../../fuselage/theme/2024/world/blocks/speaker-carousel/speaker-carousel"
import { SpeakerCard } from '../../fuselage/components/speaker-card/speaker-card'
import { BarChart, Field } from '../../fuselage/theme/2025/sa/components/bar-chart/bar-chart'
import { Button } from "../../fuselage/theme/2024/world/components/button/button"
import { PopOverlay } from "../../fuselage/components/popoverlay/popoverlay"



import CSS from '../../fuselage/theme/2025/sa/css/investors.module.css'


const INDUSTRY_DATA = [
    {
        label: 'Investment Company',
        value: 26.5
    },
    {
        label: 'Developer',
        value: 24.5
    },
    {
        label: 'Development Project',
        value: 11.9
    },
    {
        label: 'Sovereign Fund',
        value: 9.5
    },
    {
        label: 'REIT',
        value: 7.9
    },
    {
        label: 'Private Equity',
        value: 4.3
    },
    {
        label: 'Owner-operator',
        value: 4.0
    },
    {
        label: 'Asset Manager',
        value: 2.8
    },
    {
        label: 'Bank',
        value: 2.4
    },
    {
        label: 'Family Office',
        value: 1.6
    },
    {
        label: 'Government / Tourism Officiale',
        value: 1.6
    },
    {
        label: 'Other Financial Institution',
        value: 1.2
    },
    {
        label: 'VC',
        value: 1.2
    },
    {
        label: 'Restaurant Owner',
        value: 0.8
    },
    
]


export default function Page () {

    const { locale } = useRouter()

    return (
        <div dir={locale === 'ar' ? 'rtl' : 'ltr'}>
            
            <Script src="https://bot.leadoo.com/bot/dynamic.js?company=IqbUBErW" strategy="afterInteractive" />

            <EventsBar site={'/sa'} />
            <Header
                site={`/sa`}
                handle={`Saudi Arabia`}
                event={header.data.event}
                mainMenu={header.data.mainMenu}
                ctas={header.data.event.headerCtas}
            />

            {/* INTRO */}

            <div className="bg-primary o-hidden">
                <PageHeroImage hero={{ url: '/assets/img/sa/investors/investors-hero.jpg', width: 6192, height: 4128 }} >
                    
                    <section className="block">

                        <div className="container maxw-60 pb-md c-white center">
                            <Reveal>
                                {
                                    locale === 'ar'
                                    ?
                                        <h1 className='fs-0'>Investors at FHS Saudi Arabia</h1>
                                    :
                                        <h1 className='fs-0'>Investors at FHS Saudi Arabia</h1>
                                }
                            </Reveal>
                        </div>


                        {/* IMPACT */}

                        <div className="container center">
                            <Fade>
                                <p className="fs-1 fw-600 lh-1">
                                    {
                                        locale === 'ar'
                                        ?
                                        "2025 بالأرقام"
                                        :
                                        "2025 in Numbers"
                                    }
                                </p>
                            </Fade>
                            <div className="columns-4 gap-sm mt-md">
                                <InvestorImpact figure={254} label={ locale === 'ar' ? "مستثمرًا" : "Investors"} />
                                <InvestorImpact figure={20} unit={"%"} label={ locale === 'ar' ? "من الحضور" : "of Attendees"} />
                                <InvestorImpact prefix={'$'} figure={1.6} unit={'B'} label={ locale === 'ar' ? "1.1 مليار دولار قيمة صفقات وفرص تجارية مُحققة في 2024" : "In business opportunities and deals volume gained"} />
                                <InvestorImpact figure={11} label={ locale === 'ar' ? "" : "Deals Signed"} />
                            </div>
                        </div>

                    </section>
                </PageHeroImage>
            </div>



            <section className="block bg-primary">
                <div className="container center formatted">
                    <Pop inline>
                        <Link href="https://share.hsforms.com/1QE6T_8dHTi-yjWLzMytQmw8nd8z" target="_blank">
                            <a className="button fs-5 caps">Apply for Investor Pass</a>
                        </Link>
                    </Pop>
                </div>
            </section>


            {/* USPs */}

            <section className="block bg-primary o-hidden">
                <div className="container columns-2 gap-md ai-center pt-md">
                    <Pop>
                        <div className={CSS.floaterImg}>
                            <Image src={"https://cms.thebench.com/assets/img/site/FHS-SA/53727899164_7a536940b1_o.jpg"} layout='fill' />
                        </div>
                    </Pop>

                    <div className="formatted">
                        <Slide>
                            {
                                locale === 'ar'
                                ?
                                    <>
                                        <h2>لماذا المشاركة كمستثمر؟</h2>
                                        <p>في قمة مستقبل الضيافة بالمملكة العربية السعودية، يحظى المستثمرون بإمكانية الوصول الحصري إلى فرص فريدة لعقد صفقات ضخمة في أحد أسرع أسواق الضيافة نموًا في العالم. تجمع المنصة بين قادة الضيافة العالميين والإقليميين، والمطورين العقاريين، ومالكي الأصول، وصُنَّاع القرار الحكوميين تحت سقفٍ واحد، مع فرص استثمارية بلغت قيمتها 1.1 مليار دولار في العام الماضي. يعمل فريق علاقات المستثمرين بشكلٍ وثيق مع المستثمرين لفهم أهدافهم للتطوير وتنسيق الاجتماعات مع الوفود المناسبين.</p>
                                    </>
                                :
                                    <>
                                        <h2>WHY ATTEND AS AN INVESTOR?</h2>
                                        <p>At FHS Saudi Arabia, investors gain exclusive access to high-impact deal-making opportunities in one of the world&apos;s fastest-growing hospitality markets. The platform brings together global and regional hospitality leaders, real estate developers, asset owners, and government decision-makers under one roof, with $1.1B+ in business opportunities created last year. The Investors Relations team works closely with investors to understand their development targets and facilitate meetings with the right delegates.</p>
                                    </>
                            }
                        </Slide>
                    </div>
                </div>
            </section>


            <section className="block bg-primary o-hidden">
                <div className="container formatted center">
                    <h2>EXCLUSIVE INVESTOR PASS BENEFITS</h2>
                </div>

                <div className={`container ${CSS.cardFlexContainer}`}>
                    <Pop><Card heroUrl={'/assets/img/sa/networking/closed-door-investors.jpg'}>
                        <p className='fs-4 c-primary fw-600 lh-1'>{locale === 'ar' ? "Closed-door Investor Sessions" : "Closed-door Investor Sessions"}</p>
                    </Card></Pop>
                    <Pop><Card heroUrl={'/assets/img/sa/networking/investors-lounge.jpg'}>
                        <p className='fs-4 c-primary fw-600 lh-1'>{locale === 'ar' ? "ردهة المستثمرين" : "Investor's Lounge"}</p>
                    </Card></Pop>
                    <Pop><Card heroUrl={'/assets/img/sa/networking/pre-scheduled.jpg'}>
                        <p className='fs-4 c-primary fw-600 lh-1'>{locale === 'ar' ? "1-2-1 Pre-Scheduled Meetings" : "1-2-1 Pre-Scheduled Meetings"}</p>
                    </Card></Pop>
                </div>

                <div className="container formatted center">
                    <p className='mt-md'>
                        <Pop inline>
                            <Link href="/sa/download-investor-prospectus" target="_blank">
                                <a className="button fs-5 caps">Download Investor Prospectus</a>
                            </Link>
                        </Pop>
                    </p>
                </div>
            </section>

            <section className="block bg-primary o-hidden">
                <div className="container columns-2 gap-md ai-center">
                    <Pop>
                        <div className={CSS.floaterImg}>
                            <Image src={"/assets/img/sa/investors/dealroom.jpg"} layout='fill' />
                        </div>
                    </Pop>

                    <div className="formatted">
                        <Slide>

                            <h2>FHS DEALROOM</h2>
                            <p>Publish your project on the FHS website (subject to the investor&apos;s preference) for exposure to our global network of over 113,000 engaged users, connecting you with targeted investors and industry leaders. Select projects will be featured in our exclusive DealRoom at the Investor Breakfast, where senior decision-makers from top investment firms, REITs, family offices, and financial institutions can engage directly with owners, ensuring transparent dialogue and access to active capital.</p>
                            <p className='mt-md'>
                                <Pop inline>
                                    <Link href="https://share.hsforms.com/1zaAPAyl_QL6Nl3XPCTbB_A8nd8z" target="_blank">
                                        <a className="button fs-5 caps">Submit Project</a>
                                    </Link>
                                </Pop>
                            </p>
                            
                        </Slide>
                    </div>
                </div>
            </section>
           


            {/* BENEFITS */}

            <section className="block bg-primary-2-dark o-hidden">
                <div className="container center">
                    <Fade>
                        {
                            locale === 'ar'
                            ? 
                                <>
                                    <p className='fs-1 fw-600'>تسليط الضوء على المستثمرين في قمة مستقبل الضيافة بالمملكة العربية السعودية</p>
                                    <p className='fs-3 mt-sm'>نظرة خاطفة على الجلسات المخصصة للمستثمرين</p>
                                </>
                            :
                                <>
                                    <p className='fs-1 fw-600'>Investor Spotlight at FHS Saudi Arabia</p>
                                    <p className='fs-3 mt-sm'>A sneak peak at Investor-focused sessions</p>
                                </>
                        }
                    </Fade>
                </div>

                <div className="container columns-3 gap-sm formatted">
                    <Pop>
                        <article className={CSS.previewCard}>
                            <p className='fs-4 lh-3'>Reforms to Returns: How New Regulations &amp; Incentives are Powering Saudi Investment</p>
                        </article>
                    </Pop>

                    <Pop>
                        <article className={CSS.previewCard}>
                            <p className='fs-4 lh-3'>Investing into the Kingdom: Connecting Global Capital with Saudi&apos;s High-End Hospitality Pipeline</p>
                        </article>
                    </Pop>

                    <Pop>
                        <article className={CSS.previewCard}>
                            <p className='fs-4 lh-3'>Investor-Ready Saudi: Unlocking Capital Through IB, JV Structuring &amp; Fundraising</p>
                        </article>
                    </Pop>

                    <Pop>
                        <article className={CSS.previewCard}>
                            <p className='fs-4 lh-3'>Beyond Bank Debt: Alternative Funding and Fund Structures for Hospitality Growth in Saudi Arabia (Closed Door Workshop)</p>
                        </article>
                    </Pop>

                    <Pop>
                        <article className={CSS.previewCard}>
                            <p className='fs-4 lh-3'>The State of Branded Residential Development in Saudi Arabia 2026</p>
                        </article>
                    </Pop>

                    <Pop>
                        <article className={CSS.previewCard}>
                            <p className='fs-4 lh-3'>Unlocking Investment: How to Navigate Saudi Arabia&apos;s Regulatory and Multi-Authority Landscape</p>
                        </article>
                    </Pop>
                </div>

                <div className="container center">
                    <Pop inline>
                        <ButtonKeyline 
                            href={'/sa/agenda'} 
                            decal={'fs-5 fw-600'} 
                            color={'var(--primary)'}
                        >
                            Agenda
                        </ButtonKeyline>
                    </Pop>
                    
                </div>
            </section>


            
            {/* INVESTOR SPEAKERS */}
            
            <SpeakerCarousel 
                heading={`Investor-Speakers at FHS Saudi Arabia 2026`} 
                color={`c-white`}
                text={``}
                decal={'bg-primary'}
                ctaLink={'/sa/speakers'}
                ctaLabel={'View All Speakers'}
            >

                <Pop>
                    <SpeakerCard
                    color={'c-accent'}
                        photoUrl={'https://static.swapcard.com/public/images/144a200935cd4bdfa2c5abf157ce8a37.png'}
                        fullName={'Muin Serhan'}
                        jobTitle={'Chief Executive Officer'}
                        company={'Amsa Hospitality'}
                    />
                </Pop>
                <Pop>
                    <SpeakerCard
                    color={'c-accent'}
                        photoUrl={'https://static.swapcard.com/public/images/6ca30824e50d47d68b7cc5d3c3baa322.jpeg'}
                        fullName={'Jaume Tàpies-Ibern'}
                        jobTitle={'Founder & Co-Chairman'}
                        company={'Aina Hospitality'}
                    />
                </Pop>
                <Pop>
                    <SpeakerCard
                    color={'c-accent'}
                        photoUrl={'https://static.swapcard.com/public/images/7b17a5205c6842d1aab87311c6cf6908.jpeg'}
                        fullName={'Kholoud Almanea'}
                        jobTitle={'Development Manager'}
                        company={'Ennismore'}
                    />
                </Pop>
                <Pop>
                    <SpeakerCard
                    color={'c-accent'}
                        photoUrl={'https://static.swapcard.com/public/images/8744509ba8354d31abfb050affddc9ed.jpeg'}
                        fullName={'Samer Sabra'}
                        jobTitle={'Chief Hospitality Officer'}
                        company={'Jabal Omar Development Company'}
                    />
                </Pop>
                <Pop>
                    <SpeakerCard
                    color={'c-accent'}
                        photoUrl={'https://static.swapcard.com/public/images/e9a2e33c4ec841f1a7b2adec77d63701.jpeg'}
                        fullName={'Mounib Hammoud'}
                        jobTitle={'Mega Project Consultant'}
                        company={'AlNahla Group'}
                    />
                </Pop>
                <Pop>
                    <SpeakerCard
                    color={'c-accent'}
                        photoUrl={'https://static.swapcard.com/public/images/e0dd7c51a08843e895efbd901a951270.jpeg'}
                        fullName={'Meshari Al Nahari'}
                        jobTitle={'Chief Executive Officer'}
                        company={'Aseer Investment'}
                    />
                </Pop>
                <Pop>
                    <SpeakerCard
                    color={'c-accent'}
                        photoUrl={'https://cdn-api.swapcard.com/public/images/047feab9eb2745eb9cc8cbfdd1cd09e2.jpeg'}
                        fullName={'Khalid Saud Abuhaimed'}
                        jobTitle={'Chief Executive Officer'}
                        company={'Al Khozama Investment Company'}
                    />
                </Pop>
                <Pop>
                    <SpeakerCard
                    color={'c-accent'}
                        photoUrl={'https://static.swapcard.com/public/images/699febbc64ce499b998fac5842cf2455.jpeg'}
                        fullName={'Khalid Al Gahtani'}
                        jobTitle={'Chairman & CEO'}
                        company={'Rikaz Properties'}
                    />
                </Pop>
                <Pop>
                    <SpeakerCard
                    color={'c-accent'}
                        photoUrl={'https://static.swapcard.com/public/images/7b395ba5c8d146cb970582231d498e01.jpeg'}
                        fullName={'Sultan Bader Al-Otaibi'}
                        jobTitle={'Chief Executive Officer'}
                        company={'TAIBA'}
                    />
                </Pop>
                <Pop>
                    <SpeakerCard
                    color={'c-accent'}
                        photoUrl={'https://static.swapcard.com/public/images/cc513b964f454364b47f376cb3d19b0e.png'}
                        fullName={'Tarek Elkady'}
                        jobTitle={'Vice President Investments'}
                        company={'Osoolre'}
                    />
                </Pop>
                <Pop>
                    <SpeakerCard
                    color={'c-accent'}
                        photoUrl={'https://static.swapcard.com/public/images/4647f1b3e985405383b25e68d832ede9.jpeg'}
                        fullName={'Hamza Farooqui'}
                        jobTitle={'Chief Executive Officer'}
                        company={'Millat Global'}
                    />
                </Pop>
                

            </SpeakerCarousel>

            

            {/* INVESTORS */}

            <section className="block bg-primary">
                    
                    <div className="container center">
                        <p className="fs-1 fw-600 lh-1">
                            {
                                locale === 'ar'
                                ?   "تحليل المستثمرين"
                                :   "Investor Breakdown"
                            }
                        </p>
                    </div>
                    
                <div className="container mx-auto maxw-50">
                    <BarChart>
                        {
                            INDUSTRY_DATA.map((field, index) => <Field key={index} label={field.label} value={field.value} unit={'%'} normalise={{ min: 0.4, max: 26.5 }} />)
                        }
                    </BarChart>
                </div>
            
            
            </section>



            {/* PAST INVESTORS */}
            
            <section className="block bg-default">
                <div className="container center">
                    <p className='fs-1 fw-600 c-primary'>
                        {
                            locale === 'ar'
                            ?   "عينة من قائمة المستثمرين في 20254"
                            :   "SAMPLE LIST OF INVESTORS FROM 2025"
                        }
                    </p>
                </div>

                <div className="container formatted">
                    <article className={CSS.listing}>
                        <p>Abu Dhabi Capital Group<br/>
                                Afyaa Holding<br/>
                                AIMS Holding<br/>
                                Aina Hospitality<br/>
                                Ajbal Real Estate Development<br/>
                                Ajdan Real Estate Development Co.<br/>
                                Ameen Development Company<br/>
                                Al Balad Development Company<br/>
                                Al Khaldi Holding<br/>
                                Al Khozama Investments<br/>
                                Al Mashreq Hospitality<br/>
                                Al Nokhbah<br/>
                                Alola for RealEstate Development<br/>
                                Al Othaim Investments<br/>
                                AlRajhi Capital<br/>
                                Aldossarygroup<br/>
                                Aldyar Alarabiya Real Estate Development<br/>
                                Al-Hassoun<br/>
                                Center Company<br/>
                                Almusbah<br/>
                                Alrabwah Real Estate Development Company<br/>
                                Alrajhi Bank<br/>
                                Alrajhi Capital<br/>
                                Alworoud Real Estate Investments<br/>
                                Amek Group<br/>
                                Angel Investor<br/>
                                AOAR Holding Group<br/>
                                Arbireo Hospitality Invest<br/>
                                Ardara<br/>
                                Argaam Investments<br/>
                                Arkan Plaza Properties<br/>
                                Aroundtown SA<br/>
                                Aseel Holding<br/>
                                Aseer Investment Company<br/>
                                ASFAR<br/>
                                Ashaad<br/>
                                Awjholding<br/>
                                Azhar<br/>
                                BAAN Holding<br/>
                                Baheej<br/>
                                Baraka for Real Estate Development & Investment<br/>
                                Baraka Investment<br/>
                                Baraka MAF<br/>
                                BAS Global Investments<br/>
                                Boudl Hotels & Resorts<br/>
                                Candy Capital<br/>
                                Certares<br/>
                                Confidential PIF Project<br/>
                                Courbet Heritage<br/>
                                CP Holdings Ltd.<br/>
                                Daika Company Ltd<br/>
                                Dammamdev<br/>
                                Dan Company<br/>
                                Diriyah Company<br/>
                                El Mouradi Group<br/>
                                Elaf Group<br/>
                                EMERGING<br/>
                                EQ Group<br/>
                                Ezdaher Financing Company<br/>
                                F.M. Abunayyan Holding<br/>
                                Fawasel<br/>
                                FIM Partners<br/>
                                First Avenue for Real Estate Development<br/>
                                FTG Development<br/>
                                GCDC<br/>
                                Growth Partner<br/>
                                Gulf Coast Development Company<br/>
                                Gulf Real Estate Co<br/>
                                Hamat<br/>
                                HQ Capital<br/>
                                IHC<br/>
                                Jabal Omar Development Company<br/>
                                JP Morgan<br/>
                                KAFD DMC<br/>
                                KFSHRC<br/>
                                King Abdullah Financial District DMC HQ<br/>
                                Koushan Real Estate Development<br/>
                                Kun Investment Holding<br/>
                                Luxebridge Capital<br/>
                                Masharee<br/>
                                Maskan Arabia<br/>
                                Mdr<br/>
                                ME & West Investments<br/>
                                Mered Investment Co LLC<br/>
                                Millennium Hotels & Resorts<br/>
                                Ministry of Tourism<br/>
                                Miyar Capital<br/>
                                Moqam Urban Development Co<br/>
                                Naif Al Rajhi Investment Company<br/>
                                NEOM<br/>
                                New Murabba<br/>
                                NHC<br/>
                                Nmr<br/>
                                Olayan Financing Company<br/>
                                Osus Real Estate<br/>
                                Pandox Germany<br/>
                                PIF Projects<br/>
                                PIF Subsidiary<br/>
                                Polis<br/>
                                Public Investment Fund<br/>
                                Pygmalion Capital<br/>
                                QUBE Development<br/>
                                Radar Holdings<br/>
                                RAFAL Real Estate Development Company<br/>
                                Rajhi RIET<br/>
                                Raseel Properties Co.<br/>
                                Red Sea Global<br/>
                                Refad Real Estate Company<br/>
                                Retal<br/>
                                Rikaz<br/>
                                RIKAZ Properties<br/>
                                Royal Commission for Jubail and Yanbu<br/>
                                Royal Commission of Jubail & Yanbu<br/>
                                Rua Al Madinah<br/>
                                Sarcc-PIF Company<br/>
                                Sateaa<br/>
                                Saud Alarife Group<br/>
                                Saudi Hospitality Company<br/>
                                SBH<br/>
                                SEDCO Capital<br/>
                                SEDCO Holding Group<br/>
                                Shada Hotels<br/>
                                Shaden Hospitality<br/>
                                Shaksy Group<br/>
                                Sharjah Investment and Development Authority - Shurooq<br/>
                                Sidra Capital<br/>
                                Snasco<br/>
                                Solidere<br/>
                                Qortuba LLC<br/>
                                Soudah Development<br/>
                                Sumou Global Investment<br/>
                                Sumou Holding<br/>
                                Sumou Investment Global<br/>
                                Taiba Investments<br/>
                                Tanmeya Capital<br/>
                                Tarfeehfakieh<br/>
                                TDF<br/>
                                Thakher Development Company<br/>
                                Tourism Development Fund<br/>
                                Trinity Investments<br/>
                                UBS Saudi Arabia<br/>
                                United Othaim<br/>
                                Yanbu<br/>
                                Umluj<br/>
                                Al Wajh<br/>
                                Duba Development Authority<br/>
                                YUWDA</p>
                        
                    </article>
                </div>
            </section>


            <PopOverlay id={"sa2026prospectus"}>
                <div className="formatted p-xs center">
                    <img src="/assets/img/sa/2026-prospectus-cover.png" alt="" width={300} />
                    <p className="fs-2 fw-600 c-primary lh-1 mt-sm">FHS Saudia Arabia 2026 Prospectus</p>
                    <p className="mt-sm"><Button href={`/sa/prospectus-download`}>Download</Button></p>
                </div>
            </PopOverlay>


            <Footer />
            <LenisScroller />
        </div>
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