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
import { SpeakerCarousel } from "../../fuselage/theme/2024/world/blocks/speaker-carousel/speaker-carousel"
import { SpeakerCard } from '../../fuselage/components/speaker-card/speaker-card'



import CSS from '../../fuselage/theme/2025/sa/css/investors.module.css'



export default function Page () {

    const { locale } = useRouter()

    return (
        <div dir={ locale === 'ar' ? 'rtl' : 'ltr' }>
            <Header compact />

            {/* INTRO */}

            <div className="bg-primary o-hidden">
                <PageHeroImage hero={{ url: '/assets/img/sa/investors/investors-hero.jpg', width: 6192, height: 4128 }} >
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
                                       "2024 بالأرقام"
                                    :
                                       "2024 in Numbers"
                                }
                            </p>
                        </Fade>
                        <div className="columns-4 gap-sm mt-md">
                            <InvestorImpact figure={283} label={ locale === 'ar' ? "مستثمرًا" : "Investors"} />
                            <InvestorImpact figure={22} unit={"%"} label={ locale === 'ar' ? "من الحضور" : "of Attendees"} />
                            <InvestorImpact prefix={'$'} figure={1.1} unit={'B'} label={ locale === 'ar' ? "1.1 مليار دولار قيمة صفقات وفرص تجارية مُحققة في 2024" : "In business opportunities and deals volume gained"} />
                            <InvestorImpact figure={17} label={ locale === 'ar' ? "" : "Deals Signed"} />
                        </div>
                    </div>


                    <div className="container pt-md">
                        <div className="columns-3 gap-md ai-center">
                            <section>
                                <Slide>
                                    <p className="fs-1 fw-600 lh-1 right">
                                        {
                                            locale === 'ar'
                                            ?   "تحليل المستثمرين"
                                            :   "Investor Breakdown"
                                        }
                                    </p>
                                </Slide>
                            </section>

                            <Pop>
                                <section className='center'>
                                    <img src="/assets/img/sa/investors/fhs-investor-breakdown.svg" alt="graph" />
                                </section>
                            </Pop>

                            <section>
                                <ul className={CSS.graphKey}>
                                    <GraphKey color={'#694094'}>{ locale === 'ar' ? "48% مشاريع تطوير / شركات حكومية" : "48% Development Project / Governmental Company" }</GraphKey>
                                    <GraphKey color={'#9067BD'}>{ locale === 'ar' ? "25% شركات تطوير عقاري" : "25% Developers" }</GraphKey>
                                    <GraphKey color={'#DFA46E'}>{ locale === 'ar' ? "11% شركات" : "11% Investment Company" }</GraphKey>
                                    <GraphKey color={'#56E1B2'}>{ locale === 'ar' ? "10% مدراء أصول" : "10% Asset Manager" }</GraphKey>
                                    <GraphKey color={'#FF4B4B'}>{ locale === 'ar' ? "3% شركات استثمار مباشر (Private Equity)" : "3% Private Equity" }</GraphKey>
                                    <GraphKey color={'#36D0FF'}>{ locale === 'ar' ? "3% بنوك" : "3% Bank" }</GraphKey>
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

                        <p className='mt-md'>
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
                        </p>
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
                                    </>
                                :
                                    <>
                                        <h2>EXCLUSIVE INVESTOR PASS BENEFITS</h2>
                                        <ul><li><strong><u>Access to the Investors Lounge</u> - </strong>A private, invitation-only networking zone where top-tier investors, developers, and leading operators discuss high-impact investment deals in an exclusive setting. There, tailor-made presentations are accessible exclusively to owners and investors.</li><li><strong><u>Pre-arranged 1:1 Meetings</u> - </strong>Personalised introductions to leading hospitality operators, asset managers, and financial leaders to explore investment partnerships.</li><li><strong><u>Invitation to Closed-Door Investor Events</u> - </strong>Join a private, investor-focused roundtable or networking event within 12 months of registration to stay engaged with the industry&apos;s biggest opportunities. These events are organised around the world, providing a key platform to meet and connect with other investors.</li></ul>
                                        {/* <p className='mt-md'>
                                            <Pop inline>
                                                <Link href="https://share.hsforms.com/165e0aXCeSsG2vZWX3GsGeQ8nd8z" target="_blank">
                                                    <a className="button fs-5 caps">
                                                        {
                                                            locale === 'ar'
                                                            ?   "Download Investor Prospectus"
                                                            :   "Download Investor Prospectus"
                                                        }
                                                    </a>
                                                </Link>
                                            </Pop>
                                        </p> */}
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
                            ?   "عينة من قائمة المستثمرين في 2024"
                            :   "SAMPLE LIST OF INVESTORS FROM 2024"
                        }
                    </p>
                </div>

                <div className="container formatted">
                    <article className={CSS.listing}>
                        {
                            locale === 'ar'
                            ?
                                <p>AB القابضة
                                <br/>إيمز للضيافة
                                <br/>AIRZAI
                                <br/>شركة تطوير البلد
                                <br/>مجموعة الحكير
                                <br/>شركة الخزامى للاستثمار
                                <br/>مجموعة المهيدب
                                <br/>شركة العثيم للاستثمار
                                <br/>مصرف الراجحي
                                <br/>شركة الراية العقارية
                                <br/>مجموعة التميمي
                                <br/>ألفا كابيتال
                                <br/>المصباح
                                <br/>مجموعة السليمان
                                <br/>أربيرو كابيتال
                                <br/>شركة أردارا
                                <br/>هيئة تطوير منطقة عسير (ASDA)
                                <br/>أسفار
                                <br/>بهيج
                                <br/>بلو برونكو
                                <br/>مجموعة بوتيك
                                
                                <br/>مجموعة كيان
                                <br/>مجموعة شيفال
                                <br/>كولمور كابيتال
                                <br/>دلة العقارية
                                <br/>شركة دان
                                <br/>DAQ
                                <br/>شركة المشاريع الأولى
                                <br/>الهيئة العامة لعقارات الدولة
                                <br/>مجموعة صديقي المغرب
                                <br/>شركة تطوير العقارات الساحلية الخليجية
                                <br/>فنادق هاشو
                                <br/>هيسبيريا وورلد
                                <br/>هاي هوم
                                <br/>HMC
                                <br/>شركة هوادي
                                <br/>بيت جمانة
                                <br/>KAAJ Ventures
                                <br/>KEC
                                <br/>حي الملك عبد الله المالي (KAFD)
                                <br/>كينغستون كابيتال هولدينغ
                                <br/>KSL كابيتال بارتنرز إنترناشيونال
                                
                                <br/>لدن
                                <br/>لايفستايل ديفيلوبرز
                                <br/>شركة إدارة صناديق المالديف
                                <br/>مسار / تطوير أم القرى
                                <br/>مجموعة موبكو
                                <br/>ممتلكات
                                <br/>نيوم
                                <br/>شركة تطوير المربع الجديد (NMDC)
                                <br/>OFC
                                <br/>مجموعة العليان
                                <br/>صندوق الاستثمارات العامة (PIF)
                                <br/>شركة القدية للاستثمار
                                <br/>راديك للتطوير العقاري
                                <br/>شركة رسيل العقارية
                                <br/>RCU
                                <br/>شركة البحر الأحمر الدولية
                                <br/>ريفاد العقارية
                                <br/>ركاز
                                <br/>أمانة منطقة الرياض
                                <br/>روشن العقارية
                                <br/>الهيئة الملكية للجبيل
                                
                                <br/>الهيئة الملكية لينبع
                                <br/>شركة رؤى المدينة القابضة
                                <br/>مجموعة سمايا
                                <br/>مجموعة سعود العريفي
                                <br/>شركة الضيافة السعودية
                                <br/>الهيئة السعودية للسياحة
                                <br/>سدكو كابيتال
                                <br/>شركة مشاريع الترفيه السعودية &apos;سڤن&apos;
                                <br/>هيئة الشارقة للاستثمار والتطوير (شروق)
                                <br/>شركة شذا
                                <br/>شركة سياحة المتقدمة المحدودة
                                <br/>شركة السودة للتطوير
                                <br/>شركة طيبة للاستثمار
                                <br/>تشييد للتطوير العمراني
                                <br/>صندوق التنمية السياحي (TDF)
                                <br/>أوربان شيلتر للبنية التحتية</p>
                            :
                                <p>AB Holding<br/>AIMS Hospitality<br/>AIRZAI<br/>Al Balad Development Company<br/>Al Hokair Group<br/>Al Khozama Investment<br/>Al Muhaidib Holding<br/>Al Othaim Investment<br/>Al Rajhi Bank<br/>Al Raya Real Estate Co.<br/>Al Tamimi holding<br/>Alpha Capital<br/>Almaubah<br/>Alsulaiman Group<br/>Arbireo Capital<br/>ARDARA Company<br/>Aseer Development Authority (ASDA)<br/>ASFAR<br/>Baheej<br/>Blue Bronco<br/>Boutique Group<br/>Cayan Group<br/>Cheval Collection<br/>Coolmore Capital<br/>Dallah Real Estate<br/>Dan Company<br/>DAQ<br/>First Projects Co.<br/>General Authority for State Real Estate<br/>Group Sadiki Morocco<br/>Gulf Coast Real Estate Development Company<br/>Hashoo Hotels<br/>Hesperia World<br/>Hihome<br/>HMC<br/>Hwadi Company<br/>Jumana House<br/>KAAJ Ventures<br/>KEC<br/>King Abdullah Financial District (KAFD)<br/>Kingstone Capital Holding<br/>KSL Capital Partners International<br/>LADUN<br/>Lifestyle Developers<br/>Maldives Fund Management Corporation<br/>Masar / Umm Al Qura Development<br/>Mobco Group<br/>Mumtalakat<br/>NEOM<br/>New Murabba Development Company (NMDC)<br/>OFC<br/>Olayan Group<br/>Public Investment Fund (PIF)<br/>Qiddiya Investment Company<br/>Radic Real Estate Development<br/>Raseel Properties Co.<br/>RCU<br/>Red Sea Global<br/>REFAD Real Estate<br/>Rikaz<br/>Riyadh Municipality<br/>Roshn Real Estate<br/>Royal Commission of Jubail<br/>Royal Commission of Yanbu<br/>Rua Al Madinah Holding Company<br/>Samaya Group<br/>Saud Alarife Group<br/>Saudi Hospitality Company<br/>Saudi Tourism Authority<br/>SEDCO Capital<br/>SEVEN<br/>Sharjah Investment and Development Authority - Shurooq<br/>Shatha Co.<br/>Siyaha Advanced Limited Company<br/>Soudah Development Company<br/>Taiba Investment<br/>Tashyid Urban Development<br/>TDF (Tourism Development Fund)<br/>Urban Shelter Infrastructure</p>
                        }
                        
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