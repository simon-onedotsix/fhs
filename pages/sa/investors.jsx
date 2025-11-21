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
import { ButtonKeyline } from '../../fuselage/theme/2024/world/components/button-keyline/button-keyline'
import { SpeakerCarousel } from "../../fuselage/theme/2024/world/blocks/speaker-carousel/speaker-carousel"
import { SpeakerCard } from '../../fuselage/components/speaker-card/speaker-card'
import { BarChart, Field } from '../../fuselage/theme/2025/sa/components/bar-chart/bar-chart'



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
        value: 7.5
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
    {
        label: 'RE',
        value: 0.4
    },
    
]


export default function Page () {

    const { locale } = useRouter()

    return (
        <div dir={ locale === 'ar' ? 'rtl' : 'ltr' }>
            <Header compact />

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

                        {/* INVESTORS */}

                        <section className="block">
                            
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

                        {/* <p className='mt-md'>
                            <Pop inline>
                                <Link href="https://share.hsforms.com/165e0aXCeSsG2vZWX3GsGeQ8nd8z" target="_blank">
                                    <a className="button fs-5 caps">
                                        {
                                            locale === 'ar'
                                            ?   "سجّل اهتمامك للحصول على تذكرة المستثمر"
                                            :   "Register Interest for Investor Pass"
                                        }
                                    </a>
                                </Link>
                            </Pop>
                        </p> */}
                    </div>
                </div>

                <div className="container columns-2 gap-md ai-center pt-lg">
                    <div className="formatted">
                        <Slide>
                            {
                                locale === 'ar'
                                ?
                                    <>
                                        <h2>مزايا حصرية لتذكرة المستثمر</h2>
                                        <ul>
                                            <li><strong><u>الوصول إلى صالة المستثمرين </u> - </strong> منطقة حصرية مخصصة بالدعوات فقط للتواصل، حيث يلتقي كبار المستثمرين والمطورين والمشغلين الرائدين لمناقشة صفقات استثمارية عالية التأثير في بيئة حصرية، مع عروض تقديمية مخصصة متاحة فقط للمالكين والمستثمرين.</li>
                                            <li><strong><u>اجتماعات فردية مُرتبة مسبقًا </u> - </strong> لقاءات مخصصة مع كبار مشغلي الضيافة، ومديري الأصول، والقادة الماليين لاستكشاف شراكات استثمارية مثمرة.</li>
                                            <li><strong><u>دعوة لحضور فعاليات المستثمرين المغلقة </u> - </strong>فرصة للمشاركة في اجتماع مائدة مستديرة خاص أو فعالية تواصل تركز على المستثمرين خلال 12 شهرًا من التسجيل، للبقاء على اطلاع دائم بأهم الفرص في القطاع. تُنظَّم هذه الفعاليات في مختلف أنحاء العالم، مما يوفر منصة أساسية للقاء والتواصل مع مستثمرين آخرين.</li></ul>
                                            <p className='mt-md'>
                                                <Pop inline>
                                                    <Link href="/sa/download-investor-prospectus" target="_blank">
                                                        <a className="button fs-5 caps">Download Investor Prospectus</a>
                                                    </Link>
                                                </Pop>
                                            </p>
                                    </>
                                :
                                    <>
                                        <h2>EXCLUSIVE INVESTOR PASS BENEFITS</h2>
                                        <ul><li><strong><u>Access to the Investors Lounge</u> - </strong>A private, invitation-only networking zone where top-tier investors, developers, and leading operators discuss high-impact investment deals in an exclusive setting. There, tailor-made presentations are accessible exclusively to owners and investors.</li><li><strong><u>Pre-arranged 1:1 Meetings</u> - </strong>Personalised introductions to leading hospitality operators, asset managers, and financial leaders to explore investment partnerships.</li><li><strong><u>Invitation to Closed-Door Investor Events</u> - </strong>Join a private, investor-focused roundtable or networking event within 12 months of registration to stay engaged with the industry&apos;s biggest opportunities. These events are organised around the world, providing a key platform to meet and connect with other investors.</li></ul>
                                        <p className='mt-md'>
                                            <Pop inline>
                                                <Link href="/sa/download-investor-prospectus" target="_blank">
                                                    <a className="button fs-5 caps">Download Investor Prospectus</a>
                                                </Link>
                                            </Pop>
                                        </p>
                                    </>
                            }
                            
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
                                    <p className='fs-3 mt-sm'>A sneak peak at Investor focused sessions</p>
                                </>
                        }
                    </Fade>
                </div>

                <div className="container columns-3 gap-sm formatted">
                    <Pop>
                        <article className={CSS.previewCard}>
                            {
                                locale === 'ar'
                                ?
                                    <>
                                        <p className='fs-4 lh-3'>ما بعد الصافرة: الأثر المتسلسل الذي نشأ عن كأس العالم فيفا 2034 على قطاع الضيافة السعودي</p>
                                        <p className='fw-600'>Speaker:</p>
                                        <li><strong>Dr. Sarah Gasim</strong>, Senior Vice President, Head of Hotels KSA, JLL</li>
                                    </>
                                :
                                <>
                                        <p className='fs-4 lh-3'>Beyond the Whistle: The FIFA World Cup 2034&apos;s Ripple Effect on the Saudi Hospitality Sector</p>
                                        <p className='fw-600'>Speaker:</p>
                                        <li><strong>Dr. Sarah Gasim</strong>, Senior Vice President, Head of Hotels KSA, JLL</li>
                                    </>
                            }
                            <ul>
                            </ul>
                        </article>
                    </Pop>

                    <Pop>
                        <article className={CSS.previewCard}>
                            {
                                locale === 'ar'
                                ?
                                    <>
                                        <p className='fs-4 lh-3'>توقعات السياحة في السعودية: رسم خريطة المستقبل من</p>
                                        <p className='fw-600'>Speaker:</p>
                                        <li><strong>Muhammad Bassrawi</strong>, President Domestic Tourism Business Unit, Saudi Tourism Authority</li>
                                    </>
                                :
                                <>
                                        <p className='fs-4 lh-3'>Saudi Arabia Tourism Outlook: Shaping the Future from 2025 to 2040</p>
                                        <p className='fw-600'>Speaker:</p>
                                        <li><strong>Muhammad Bassrawi</strong>, President Domestic Tourism Business Unit, Saudi Tourism Authority</li>
                                    </>
                            }
                            <ul>
                            </ul>
                        </article>
                    </Pop>

                    <Pop>
                        <article className={CSS.previewCard}>
                            {
                                locale === 'ar'
                                ?
                                    <>
                                        <p className='fs-4 lh-3'>من مشغلي المنشآت التي تعمل بنظام &quot;وايت ليبل&quot; والامتيازات التجارية إلى اتفاقيات الإدارة التقليدية - ما هو مستقبل إدارة الفنادق؟</p>
                                        <p className='fw-600'>Speakers:</p>
                                        <ul>
                                            <li><strong>Scott Antel</strong>, Founder & Owner, Scott&apos;s FZ LLE</li>
                                            <li><strong>Victor Abou Ghanem</strong>, Chief Executive Officer, Story Hospitality</li>
                                            <li><strong>Tariq Dowidar</strong>, Vice President KSA, Aleph Hospitality</li>
                                            <li><strong>David Thomson</strong>, Senior Vice President of Business Development, The First Group</li>
                                            <li><strong>Eddy Tannous</strong>, Chief Operating Officer, Rotana</li>
                                        </ul>
                                    </>
                                :
                                    <>
                                        <p className='fs-4 lh-3'>From White Label Operators, Franchising to Traditional Management Agreements - What is the Future?</p>
                                        <p className='fw-600'>Speakers:</p>
                                        <ul>
                                            <li><strong>Scott Antel</strong>, Founder & Owner, Scott&apos;s FZ LLE</li>
                                            <li><strong>Victor Abou Ghanem</strong>, Chief Executive Officer, Story Hospitality</li>
                                            <li><strong>Tariq Dowidar</strong>, Vice President KSA, Aleph Hospitality</li>
                                            <li><strong>David Thomson</strong>, Senior Vice President of Business Development, The First Group</li>
                                            <li><strong>Eddy Tannous</strong>, Chief Operating Officer, Rotana</li>
                                        </ul>
                                    </>
                            }
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
                heading={`Investor-Speakers at FHS Saudi Arabia 2025`} 
                color={`c-white`}
                text={``}
                decal={'bg-primary'}
                ctaLink={'/sa/speakers'}
                ctaLabel={'View All Speakers'}
            >

                <Pop>
                    <SpeakerCard
                    color={'c-accent'}
                        photoUrl={'https://static.swapcard.com/public/images/2540878a4ce149da8e5f9cb8384277cc.jpeg'}
                        fullName={'Khalid Saud Abu Haimed'}
                        jobTitle={'Chief Executive Officer'}
                        company={'Al Khozama Investment Company'}
                    />
                </Pop>
                <Pop>
                    <SpeakerCard
                    color={'c-accent'}
                        photoUrl={'https://static.swapcard.com/public/images/7b395ba5c8d146cb970582231d498e01.jpeg'}
                        fullName={'Sultan Bader Al-Otaibi'}
                        jobTitle={'Chief Executive Officer'}
                        company={'Taiba Investments'}
                    />
                </Pop>
                <Pop>
                    <SpeakerCard
                    color={'c-accent'}
                        photoUrl={'https://cms.thebench.com/assets/img/avatars/Ahdab_Hassan.jpg'}
                        fullName={'Hassan Ahdab'}
                        jobTitle={'Chief Hospitality Operations Officer'}
                        company={'Taiba Investments'}
                    />
                </Pop>
                <Pop>
                    <SpeakerCard
                    color={'c-accent'}
                        photoUrl={'https://static.swapcard.com/public/images/7a338419909044c5b3a29f6d9820e408.jpeg'}
                        fullName={'Fahad Mohammed Alobailan'}
                        jobTitle={'Chief Executive Officer'}
                        company={'BAAN Holding'}
                    />
                </Pop>
                <Pop>
                    <SpeakerCard
                    color={'c-accent'}
                        photoUrl={'https://static.swapcard.com/public/images/323171e14d9b42c593b657cec119176e.jpeg'}
                        fullName={'Sean Hehir'}
                        jobTitle={'President & CEO'}
                        company={'Trinity Investments'}
                    />
                </Pop>
                <Pop>
                    <SpeakerCard
                    color={'c-accent'}
                        photoUrl={'https://static.swapcard.com/public/images/97a1ef7bc8bb47fc9a6ce1108c7fc3a3.jpeg'}
                        fullName={'Nick Candy'}
                        jobTitle={'Chief Executive Officer'}
                        company={'Candy Capital'}
                    />
                </Pop>
                <Pop>
                    <SpeakerCard
                    color={'c-accent'}
                        photoUrl={'https://static.swapcard.com/public/images/8cadb1f6b939436ab08ad4dd957f35e2.jpeg'}
                        fullName={'Sundip Patel'}
                        jobTitle={'Chief Executive Officer'}
                        company={'Ezdaher Financing Company'}
                    />
                </Pop>
                <Pop>
                    <SpeakerCard
                    color={'c-accent'}
                        photoUrl={'https://static.swapcard.com/public/images/1de1fe42566f4d0dbdb24885e0724c4b.jpeg'}
                        fullName={'Amit Nayak'}
                        jobTitle={'Vice President'}
                        company={'HAMA MEA'}
                    />
                </Pop>

            </SpeakerCarousel>

            


            {/* FEATURES */}

            <section className="block bg-primary-2">
                <div className="container center maxw-40">
                    <Fade>
                        <p className='fs-2 fw-600 lh-2'>{locale === 'ar' ? "حيث تثمر محادثات المستثمرين عن صفقات كبيرة" : "Where Investor Conversations Spark Landmark Deals"}</p>
                    </Fade>
                </div>

                <div className="container columns-3 gap-md">
                    <Pop><Card heroUrl={'/assets/img/sa/networking/receptions.jpg'}>
                        <p className='fs-4 c-primary fw-600'>{locale === 'ar' ? "حفلات تواصل" : "Networking Receptions"}</p>
                    </Card></Pop>
                    <Pop><Card heroUrl={'/assets/img/sa/networking/speed-networking.jpg'}>
                        <p className='fs-4 c-primary fw-600'>{locale === 'ar' ? "جلسات تواصل سريع" : "Speed Networking"}</p>
                    </Card></Pop>
                    <Pop><Card heroUrl={'/assets/img/sa/networking/lunch.jpg'}>
                        <p className='fs-4 c-primary fw-600'>{locale === 'ar' ? "استراحة غداء وقهوة خاصة" : "Curated Lunch & Coffee"}</p>
                    </Card></Pop>
                    <Pop><Card heroUrl={'/assets/img/sa/networking/tours.jpg'}>
                        <p className='fs-4 c-primary fw-600'>{locale === 'ar' ? "جولات ميدانية" : "Site Tours"}</p>
                    </Card></Pop>
                    <Pop><Card heroUrl={'/assets/img/sa/networking/investors-lounge.jpg'}>
                        <p className='fs-4 c-primary fw-600'>{locale === 'ar' ? "ردهة المستثمرين" : "Investor's Lounge"}</p>
                    </Card></Pop>
                    <Pop><Card heroUrl={'/assets/img/sa/networking/exhibition.jpg'}>
                        <p className='fs-4 c-primary fw-600'>{locale === 'ar' ? "طابق المعرض" : "Exhibition Floor"}</p>
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
                            {locale === 'ar' ? "عرض قائمة الحضور" : "View Attendee List"}
                        </ButtonKeyline>
                    </Pop>
                </div>
            </section>



            {/* 2024 INVESTORS */}
            
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