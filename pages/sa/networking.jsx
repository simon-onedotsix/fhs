import Image from 'next/image'

import { LenisScroller } from '../../fuselage/animation/lenis-scroller'

import { Pop, Slide, Fade } from "../../fuselage/theme/2023/ae/layout/animation/animation"
import { Reveal } from "../../fuselage/animation/reveal"
import { AnimatedCounter } from "../../fuselage/theme/2024/world/components/animated-counter/animated-counter"

import { Header } from '../../fuselage/theme/2025/sa/common/header/header'
import { Footer } from '../../fuselage/theme/2025/sa/common/footer/footer'
import { PageHeroImage } from '../../fuselage/blocks/page-hero-image/page-hero-image'
import { ButtonKeyline } from '../../fuselage/theme/2024/world/components/button-keyline/button-keyline'
import { ArticleScroller, Article } from "../../fuselage/theme/2025/sa/pages/networking/article-scroller"



import CSS from '../../fuselage/theme/2025/sa/css/networking.module.css'

const ARTICLE_DATA = [
    {
        heroUrl: '/assets/img/sa/press-release-1.webp',
        title: 'Rua Al Madinah Holding Signs Agreement With Hilton To Open Three Hotels At Rua Al Madinah Project',
        excerpt: 'Rua Al Madinah Holding has signed an agreement with Hilton to open three hotels comprising of over 1600 keys.',
        url: '/sa/content-library/rua-al-madinah-holding-signs-agreement-with-hilton-to-open-three-hotels-at-rua-al-madinah-project',
    },
    {
        heroUrl: '/assets/img/sa/press-release-4.webp',
        title: 'Marriott International and Al Qimmah Hospitality Sign Agreement to Open a JW Marriott Hotel in Jeddah',
        excerpt: 'Marriott International, Inc. and Al Qimmah Hospitality (a subsidiary of BinDawood Trading) today announced the signing of an agreement to introduce the JW Marriott brand in Jeddah. Situated on the Jeddah Corniche, JW Marriott Hotel Jeddah is anticipated to be a haven for travelers who seek a luxury escape to the waterfront destination, paired with exceptional service and holistic well-being experiences.',
        url: '/sa/content-library/marriott-international-and-al-qimmah-hospitality-sign-agreement-to-open-a-jw-marriott-hotel-in-jeddah',
    },
    {
        heroUrl: 'https://cms.thebench.com/assets/content-library/img/FHS-SA/IHG_REFAD-Signing.jpg',
        title: 'IHG Hotels & Resorts expands Luxury & Lifestyle footprint in Saudi Arabia with a new Hotel Indigo signing',
        excerpt: "IHG Hotels & Resorts, one of the world's leading hotel companies, has signed a management agreement with Refad Real estate investment & development company.",
        url: '/sa/content-library/ihg-hotels-resorts-expands-luxury-lifestyle-footprint-in-saudi-arabia-with-a-new-hotel-indigo-signing',
    },
    {
        heroUrl: 'https://cms.thebench.com/assets/content-library/img/FHS-SA/Inhabitr-Signing-FHS.jpg',
        title: "Silicon Valley's Inhabitr Brings AI-Powered Furnishing Solutions to the Middle East",
        excerpt: "Inhabitr, the first AI-powered commercial real estate furnishing platform, is excited to announce its expansion into the Middle East, marked by the opening of new office and design studios in Saudi Arabia.",
        url: '/sa/content-library/silicon-valleys-inhabitr-brings-ai-powered-furnishing-solutions-to-the-middle-east',
    },
    {
        heroUrl: 'https://cms.thebench.com/assets/content-library/img/FHS-SA/ASFAR-Announces-Baheej-and-Kerten-Hospitality-Partnership-to-Elevate-Integrated-Living-in-Yanbu-1.jpg',
        title: "ASFAR Announces Baheej and Kerten Hospitality Partnership to Elevate Integrated Living in Yanbu",
        excerpt: "Baheej Tourism Development Company, a joint venture between ASFAR, the Saudi tourism investment company owned by PIF, and the Tamimi-AWN Alliance, has signed a strategic agreement with Kerten Hospitality, a global leader in the integrated living and hospitality sector.",
        url: '/sa/content-library/asfar-announces-baheej-and-kerten-hospitality-partnership-to-elevate-integrated-living-in-yanbu',
    },
    {
        heroUrl: 'https://cms.thebench.com/assets/content-library/img/FHS-SA/FHS-Saudi-Arabia-2024-1.jpg',
        title: "Kerten Hospitality Announces Record Expansion, Doubling Portfolio in First Quarter of 2024",
        excerpt: "Kerten Hospitality, a global leader in bespoke hospitality and integrated living solutions, has announced it has doubled year-on-year growth in the first quarter of 2024",
        url: '/sa/content-library/kerten-hospitality-announces-record-expansion-doubling-portfolio-in-first-quarter-of-2024',
    },
    
]

export default function Page () {

    return (
        <>
            <Header compact />

            {/* INTRO */}

            <div className={CSS.themeWrapper}>

                <div className="bg-primary">
                    <PageHeroImage hero={{ url: '/assets/img/sa/nextgen-forum/bg-1.jpg', width: 2000, height: 1334 }} >
                        <div className="container maxw-60 pb-md c-white center">
                            <Reveal>
                                <h1 className='fs-0'>The Networking Experience at&nbsp;FHS</h1>
                            </Reveal>
                        </div>

                        <div className="container pb-lg">
                            <p className='fs-5 c-accent caps center'>Sponsored by:</p>
                            <Pop>
                                <Image src={'/assets/img/sa/nextgen-forum/baraka-logo.png'} width={1000} height={499} layout='responsive' />
                            </Pop>
                        </div>


                        <div className="container columns-2 gap-md ai-center">
                            <Pop>
                                <div className={CSS.floaterImg}>
                                    <Image src={"https://cms.thebench.com/assets/img/site/FHS-SA/53726683447_d8d4a3f298_o.jpg"} layout='fill' />
                                </div>
                            </Pop>

                            <div className="formatted">
                                <Slide>
                                    <h2>Connect with 1,400+ hospitality investors, owners, and industry leaders shaping the Kingdom&apos;s tourism future</h2>
                                    <p>With over 1,400 delegates expected at FHS Saudi Arabia 2025, you&apos;ll have unparalleled access to the most influential figures driving hospitality investment across the region. From government officials and tourism authorities to international hotel chains, investors, and developers—the key decision-makers transforming Saudi Arabia&apos;s hospitality landscape will all be in one place.</p>
                                    <p>This premier gathering offers you the chance to connect with visionaries and leaders driving Saudi Arabia&apos;s ambitious Vision 2030 tourism goals, while positioning yourself at the center of one of the world&apos;s most dynamic hospitality markets.</p>

                                </Slide>

                                <p className='mt-md'>
                                    <Pop inline>
                                        <ButtonKeyline 
                                            href={'/sa/purchase-pass'} 
                                            decal={'fs-5 fw-600'} 
                                            color={'var(--secondary)'}
                                        >
                                            Register Now
                                        </ButtonKeyline>
                                    </Pop>
                                </p>
                            </div>
                        </div>

                        <div className="container columns-2 gap-md ai-center pt-lg">
                            <div className="formatted">
                                <Slide>
                                    <h2>Curated Networking Opportunities</h2>
                                    <p>Engage in a variety of curated networking opportunities to connect closely in unique environments. Our on-site experiences include brilliant coffee breaks and exciting speed networking sessions to foster lasting connections.</p>
                                    <p>As part of the FHS Networking experience, you can also participate in site tours that offer an immersive experience to connect more deeply with your peers. 98% of delegates surveyed in 2024 indicated that FHS met their objective of networking with industry peers and business partners.</p>
                                </Slide>
                            </div>

                            <Pop>
                                <div className={CSS.floaterImg}>
                                    <Image src={"https://cms.thebench.com/assets/img/site/FHS-SA/53261232098_7a73073d90_o.jpg"} layout='fill' />
                                </div>
                            </Pop>
                        </div>
                    </PageHeroImage>
                </div>

            </div>


            {/* INVESTORS */}

            <section className="block bg-primary">
                <div className="container center">
                    <Fade>
                        <p className="fs-1 fw-600 lh-1 caps maxw-40 mx-auto">Networking Stats from FHS Saudi Arabia 2024</p>
                    </Fade>
                    <div className="columns-3 gap-sm maxw-50 mx-auto mt-md">
                        <InvestorImpact prefix={"$"} figure={1.1} unit={"B"} label={"in Business"} />
                        <InvestorImpact figure={22} unit={"%"} label={"Investors"} />
                        <InvestorImpact figure={17} label={"Deals Signed"} />
                    </div>
                </div>
            </section>


            {/* FEATURES */}

            <section className="block bg-theme">
                <div className="container center maxw-40">
                    <Fade>
                        <p className='fs-2 fw-600 lh-2'>Your next landmark deal begins with a conversation at FHS Saudi Arabia</p>
                    </Fade>
                </div>

                <div className="container columns-3 gap-md">
                    <Pop><Card>
                        <p className='fs-4 c-secondary fw-600'>Networking Receptions</p>
                    </Card></Pop>
                    <Pop><Card>
                        <p className='fs-4 c-secondary fw-600'>Speed Networking</p>
                    </Card></Pop>
                    <Pop><Card>
                        <p className='fs-4 c-secondary fw-600'>Curated Lunch &amp; Coffee</p>
                    </Card></Pop>
                    <Pop><Card>
                        <p className='fs-4 c-secondary fw-600'>Site Tours</p>
                    </Card></Pop>
                    <Pop><Card>
                        <p className='fs-4 c-secondary fw-600'>Investor&apos;s Lounge</p>
                    </Card></Pop>
                    <Pop><Card>
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


            {/* APP */}
            
            <section className="block bg-primary" style={{ width: '100%', overflow: 'hidden' }}>
                <div className="container columns-2 gap-md ai-center">
                    <Pop>
                        <div className={CSS.floaterImg}>
                            <Image src={"https://cms.thebench.com/assets/img/site/FHS-SA/Networking-Page-Artwork.jpg"} layout='fill' />
                        </div>
                    </Pop>

                    <div className="formatted">
                        <Slide>
                            <h2>Power your networking with the FHS&nbsp;app</h2>
                            <p>Start building your network before you even arrive in Riyadh. The FHS Saudi Arabia mobile app puts the entire event ecosystem at your fingertips:</p>
                            <p><strong>Attendee Directory:</strong> Browse
                            the comprehensive list of registered delegates and initiate conversations with potential partners.</p>
                            <p><strong>Meeting Scheduler:</strong> Arrange and manage your meetings with key industry figures directly through the app.</p>
                            <p><strong>Personalised Agenda:</strong> Create a custom schedule that balances educational sessions with your networking priorities.</p>
                            <p><strong>Real-Time Updates:</strong> Receive notifications about networking events, special sessions, and deal announcements happening throughout the summit</p>
                            <p><span className="c-secondary"><br/></span></p>
                            <p><a className="button" href="https://page.swapcard.com/app/the-bench/" target="_blank" rel="noreferrer noopener">Download the event app</a><br/></p>
                        </Slide>
                    </div>
                </div>      
            </section>


            {/* CONTENT-LIBRARY */}

            <ArticleScroller>
                {
                    ARTICLE_DATA &&
                    ARTICLE_DATA.map(( article, index ) => <Article key={index} heroUrl={article.heroUrl} title={article.title} excerpt={article.excerpt} url={article.url} />)
                }
            </ArticleScroller>


            <section className="block bg-primary">
                <div className="container center maxw-55 c-white">
                    <p className='fs-4'>FHS Saudi Arabia isn&apos;t just about making contacts—it&apos;s about creating lasting business relationships that drive the future of hospitality in the Kingdom. With a demonstrated track record of facilitating meaningful industry connections, our 2025 event promises to deliver the relationships that will shape the next phase of Saudi Arabia&apos;s hospitality growth.</p>
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

const Card = ({ children }) => {
    return (
        <div className={CSS.card}>
            <div className={CSS.cardHero}>

            </div>
            
            <div className={CSS.cardContent}>
                { children }
            </div>
        </div>
    )
}