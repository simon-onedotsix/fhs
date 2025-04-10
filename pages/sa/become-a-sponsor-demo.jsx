import { useRouter } from 'next/router'
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
import { Quote, QuoteGrid } from '../../fuselage/theme/2025/sa/components/quote/quote'



import CSS from '../../fuselage/theme/2025/sa/css/become-a-sponsor.module.css'






export default function Page () {

    const { locale } = useRouter()

    return (
        <div dir={ locale === 'ar' ? 'rtl' : 'ltr' }>
            <Header compact />

            {/* INTRO */}

            <div className="bg-default o-hidden">
                <PageHeroImage inverse hero={{ url: 'https://cms.thebench.com/assets/img/site/FHS-SA/53726532587_e90f8d8abb_o.jpg', width: 7557, height: 4448 }} >
                    <div className="container maxw-60 pb-md c-primary center minvh-20">
                        <Reveal>
                            {
                                locale === 'ar'
                                ?
                                    <h1 className='fs-0'>انضم إلى الجهات الراعية لقمة مستقبل الضيافة 2025</h1>
                                :
                                    <h1 className='fs-0'>Become a Sponsor for 2025</h1>
                            }
                        </Reveal>
                    </div>


                    {/* links */}
                    <div className={CSS.linkGrid}>
                        <div>
                            <Pop inline>
                                <Link href="/sa/download-prospectus">
                                    <a className="button">
                                        {
                                            locale === 'ar'
                                            ?   "كتيب 2025"
                                            :   "2025 Brochure"
                                        }
                                    </a>
                                </Link>
                            </Pop>
                        </div>
                        <div>
                            <Pop inline>
                                <Link href="https://floorplan.live/interactive/shows/3936/views/3/plan" target="_blank">
                                    <a className="button">
                                        {
                                            locale === 'ar'
                                            ?   "خريطة المعرض 2025"
                                            :   "2025 Floor Plan"
                                        }
                                    </a>
                                </Link>
                            </Pop>
                        </div>
                        <div>
                            <Pop inline>
                                <Link href="https://14527187.fs1.hubspotusercontent-na1.net/hubfs/14527187/FHS%202024%20Post%20event%20Report%20FINALV2.pdf" target="_blank">
                                    <a className="button">
                                        {
                                            locale === 'ar'
                                            ?   "تقرير ما بعد الحدث 2024"
                                            :   "2024 Post-event Report"
                                        }
                                    </a>
                                </Link>
                            </Pop>
                        </div>
                        <div>
                            <Pop inline>
                                <Link href="/sa/partners">
                                    <a className="button">
                                        {
                                            locale === 'ar'
                                            ?   "شركاء 2025"
                                            :   "2025 Partners"
                                        }
                                    </a>
                                </Link>
                            </Pop>
                        </div>
                    </div>



                    {/* features */}
                    <div className="container columns-2 gap-md ai-center pt-md">
                        <div className="formatted">
                            <Slide>
                                {
                                    locale === 'ar'
                                    ?
                                        <>
                                            <h2>لماذا الانضكام لقائمة الجهات الراعية لقمة مستقبل الضيافة بالمملكة العربية السعودية</h2>
                                            <p>تُعدُّ قمة مستقبل الضيافة بالمملكة العربية السعودية الحدث الأبرز لعرض خبرتك وجهودك في قطاع الضيافة، والتواصل مع رواد الصناعة وصُنّاع القرارات الاستثمارية، والإسهام في تشكيل مستقبل الاستثمارات في قطاع الضيافة في المنطقة.</p>
                                        </>
                                    :
                                        <>
                                            <h2>Why Sponsor FHS Saudi Arabia</h2>
                                            <p>FHS Saudi Arabia is the ideal platform to showcase your brand&apos;s leadership and expertise in the region, connect with industry thought leaders and investment decision-makers, and shape the future of hospitality investment.</p>
                                        </>
                                }
                            </Slide>
                        </div>

                         <Pop>
                            <div className={CSS.floaterImg}>
                                <Image src={"https://cms.thebench.com/assets/img/site/FHS-SA/53252269696_4fa04c159f_o.jpg"} layout='fill' />
                            </div>
                        </Pop>
                    </div>
                    
                    <div className="container columns-2 gap-md ai-center pt-sm">
                        <Pop>
                            <div className={CSS.floaterImg}>
                                <Image src={"https://cms.thebench.com/assets/img/site/FHS-SA/53727435021_84df4727d7_o_2024-06-04-060453_xkhq.jpg"} layout='fill' />
                            </div>
                        </Pop>

                        <div className="formatted">
                            <Slide>
                                {
                                    locale === 'ar'
                                    ?
                                        <>
                                            <h2>تواصل مع المستثمرين والمشغلين</h2>
                                            <p>لتعزيز فرص التواصل الفعّال، توفر قمة مستقبل الضيافة بالمملكة العربية السعودية صورًا متنوعة لفعاليات التواصل والتعارف، تشمل اللقاءات السريعة، واستراحات تناول القهوة، وحفلات الاستقبال الحصرية، مما سيمكنك من إجراء محادثاتٍ قيّمة مع المستثمرين والزملاء في القطاع وصُنّاع القرار.</p>
                                        </>
                                    :
                                        <>
                                            <h2>Network With Investors & Operators</h2>
                                            <p>To facilitate you in making meaningful connections, FHS Saudi Arabia offers different formats for networking. Have that conversation with an investor, get insights from colleagues and network with those that lead the industry over a coffee break, receptions or speed networking sessions.</p>
                                        </>
                                }
                            </Slide>
                        </div>
                    </div>
                    
                    <div className="container columns-2 gap-md ai-center pt-sm">
                        <div className="formatted">
                            <Slide>
                                {
                                    locale === 'ar'
                                    ?
                                        <>
                                            <h2>لماذا الانضكام لقائمة الجهات الراعية لقمة مستقبل الضيافة بالمملكة العربية السعودية</h2>
                                            <p>تُعدُّ قمة مستقبل الضيافة بالمملكة العربية السعودية الحدث الأبرز لعرض خبرتك وجهودك في قطاع الضيافة، والتواصل مع رواد الصناعة وصُنّاع القرارات الاستثمارية، والإسهام في تشكيل مستقبل الاستثمارات في قطاع الضيافة في المنطقة.</p>
                                        </>
                                    :
                                        <>
                                            <h2>Showcase Your Thought-Leadership</h2>
                                            <p>Your company can lead the change at FHS Saudi Arabia. Executives from partner companies can share insights in thought-provoking panel discussions and lead critical workshops for the FHS audience.</p>
                                            <p>Announce ground-breaking deals and partnerships in front of major global media publications.</p>
                                        </>
                                }
                            </Slide>
                        </div>

                        <Pop>
                            <div className={CSS.floaterImg}>
                                <Image src={"https://cms.thebench.com/assets/img/site/FHS-SA/RAY14172.jpg"} layout='fill' />
                            </div>
                        </Pop>
                    </div>

                    <div className="container columns-2 gap-md ai-center pt-sm">
                        <Pop>
                            <div className={CSS.floaterImg}>
                                <Image src={"https://cms.thebench.com/assets/img/site/FHS-SA/RM1_9919.jpg"} layout='fill' />
                            </div>
                        </Pop>

                        <div className="formatted">
                            <Slide>
                                {
                                    locale === 'ar'
                                    ?
                                        <>
                                            <h2>تعزيز الوعي بعلامتك التجارية</h2>
                                            <p>تمنحك قمة مستقبل الضيافة بالمملكة العربية السعودية الفرصة لتسريع نمو علامتك التجارية في المملكة، حيث تمكنك من الوصول إلى جمهور مختار بعناية من كبار المديرين التنفيذيين والمستثمرين والأطراف المعنية الرئيسية في قطاع الضيافة في المنطقة.</p>
                                            <p>أنت على بُعد محادثة واحدة فقط لتحصل على فرص استثمارية وشراكات مهمة متميزة!</p>
                                        </>
                                    :
                                        <>
                                            <h2>Brand Awareness</h2>
                                            <p>FHS Saudi Arabia is the platform to accelerate your brand&apos;s growth in Saudi Arabia. By sponsoring, you showcase your brand to a carefully curated audience of C-level executives, key stakeholders and investors in the region&apos;s hospitality industry.</p>
                                            <p>Lucrative business opportunities and transformative partnership opportunities are just a conversation away at the summit.</p>
                                        </>
                                }
                            </Slide>
                        </div>
                    </div>

                </PageHeroImage>
            </div>


            <section className='bg-default o-hidden'>
                <QuoteGrid>
                    <Quote 
                        locale={locale}
                        quote={ locale === 'ar' ? "حدث رائع للتواصل، منظم بإتقان. شيء مثير للإعجاب!" : "Excellent networking event, very well organised. Impressive!" }
                        name={ locale === 'ar' ? "مدان مانجيشوار" : "Madan Manjeshwar" }
                        title={ locale === 'ar' ? "المدير المالي" : "Director of Finance" }
                        company={ locale === 'ar' ? "المعجل القابضة للضيافة" : "Almoajil Holding Hospitality" }
                    />
                    <Quote 
                        locale={locale}
                        quote={ locale === 'ar' ? "فرصة رائعة للاجتماع بصُنّاع القرار وإجراء محادثات مثمرة!" : "Fantastic. Great to meet decision-makers and engage in fruitful conversations." }
                        name={ locale === 'ar' ? "إليزابيث أوفيلي" : "Elizabeth Ofili" }
                        title={ locale === 'ar' ? "المستشارة الخاصة للوزير المعنية بالإعلام والاتصالات والشراكات" : "Special Advisor to the Minister on Media, Communications and Partnerships" }
                        company={ locale === 'ar' ? "وزارة السياحة الفيدرالية في نيجيريا" : "Federal Ministry of Tourism Nigeria" }
                    />
                    <Quote 
                        locale={locale}
                        quote={ locale === 'ar' ? "مكان مثالي للتواصل مع روّاد الصناعة!" : "Very good networking venue with all the industry leaders present." }
                        name={ locale === 'ar' ? "خلدون صبرا" : "Khaldoun Soubra" }
                        title={ locale === 'ar' ? "نائب الرئيس التنفيذي" : "Deputy CEO" }
                        company={ locale === 'ar' ? "شركة الرمز السعودي" : "Saudi Icon Company" }
                    />
                    <Quote 
                        locale={locale}
                        quote={ locale === 'ar' ? "منصة رائعة لبناء العلاقات والتواصل مع كبار صُنّاع القرار!" : "FHS is a great platform to network and build relationships as well as meet with key decision-makers." }
                        name={ locale === 'ar' ? "حسين طوالبة" : "Hussein Tawalbeh" }
                        title={ locale === 'ar' ? "نائب الرئيس التجاري، منطقة الشرق الأوسط وأفريقيا" : "VP Commercial, MEA Region" }
                        company={ locale === 'ar' ? "Thynk.Cloud" : "Thynk.Cloud" }
                    />
                </QuoteGrid>
            </section>
  
           

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