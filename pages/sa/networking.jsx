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
        excerpt: 'Marriott International, Inc. and Al Qimmah Hospitality (a subsidiary of BinDawood Trading) today announced the signing of an agreement to introduce the JW Marriott brand in Jeddah.',
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
const ARTICLE_DATA_AR = [
    {
        heroUrl: '/assets/img/sa/press-release-1.webp',
        title: 'رُوى المدينة القابضة توقّع اتفاقية مع هيلتون لافتتاح ثلاث فنادق ضمن مشروع رُوى المدينة',
        excerpt: 'أعلنت شركة رُوى المدينة القابضة عن توقيع اتفاقية مع مجموعة Hilton لافتتاح ثلاث فنادق جديدة ضمن مشروع رُوى المدينة، تضم أكثر من 1600 غرفة.',
        url: '/sa/content-library/rua-al-madinah-holding-signs-agreement-with-hilton-to-open-three-hotels-at-rua-al-madinah-project',
    },
    {
        heroUrl: '/assets/img/sa/press-release-4.webp',
        title: 'ماريوت الدولية و"القمّة للضيافة" يوقعان اتفاقية لافتتاح فندق JW Marriott في جدة',
        excerpt: 'أعلنت شركة ماريوت الدولية والقمة للضيافة (إحدى الشركات التابعة لشركة بن داود التجارية) عن توقيع اتفاقية لإطلاق علامة JW Marriott في مدينة جدة.',
        url: '/sa/content-library/marriott-international-and-al-qimmah-hospitality-sign-agreement-to-open-a-jw-marriott-hotel-in-jeddah',
    },
    {
        heroUrl: 'https://cms.thebench.com/assets/content-library/img/FHS-SA/IHG_REFAD-Signing.jpg',
        title: 'مجموعة فنادق ومنتجعات IHG توسّع نطاق تواجدها في عالم الفخامة وأسلوب الحياة بالمملكة العربية السعودية بتوقيع اتفاقية فندق Indigo جديد',
        excerpt: "أعلنت مجموعة فنادق ومنتجعات IHG، إحدى أبرز شركات الضيافة في العالم، عن توقيع اتفاقية إدارة مع شركة رفاد للتطوير والاستثمار العقاري.",
        url: '/sa/content-library/ihg-hotels-resorts-expands-luxury-lifestyle-footprint-in-saudi-arabia-with-a-new-hotel-indigo-signing',
    },
    {
        heroUrl: 'https://cms.thebench.com/assets/content-library/img/FHS-SA/Inhabitr-Signing-FHS.jpg',
        title: "شركة Inhabitr من وادي السيليكون تدخل الشرق الأوسط بحلول تأثيث تعتمد على الذكاء الاصطناعي",
        excerpt: "أعلنت شركة Inhabitr، أول منصة تأثيث عقاري تجاري مدعومة بالذكاء الاصطناعي، عن توسعها في الشرق الأوسط بافتتاح مكاتب واستوديوهات تصميم جديدة في المملكة العربية السعودية.",
        url: '/sa/content-library/silicon-valleys-inhabitr-brings-ai-powered-furnishing-solutions-to-the-middle-east',
    },
    {
        heroUrl: 'https://cms.thebench.com/assets/content-library/img/FHS-SA/ASFAR-Announces-Baheej-and-Kerten-Hospitality-Partnership-to-Elevate-Integrated-Living-in-Yanbu-1.jpg',
        title: "شركة أسفار تعلن عن شراكة بين مجموعة بهيج وشركة كيرتن للضيافة (Kerten Hospitality)، لتعزيز مفهوم العيش المتكامل في ينبع",
        excerpt: "أعلنت شركة بهيج للتطوير السياحي، وهي مشروع مشترك بين شركة أسفار (شركة استثمار سياحي تابعة لصندوق الاستثمارات العامة) وتحالف التميمي-AWN، عن توقيع اتفاقية استراتيجية مع شركة كيرتن للضيافة (Kerten Hospitality)، الرائدة في قطاع العيش المتكامل والضيافة عالميًا.",
        url: '/sa/content-library/asfar-announces-baheej-and-kerten-hospitality-partnership-to-elevate-integrated-living-in-yanbu',
    },
    {
        heroUrl: 'https://cms.thebench.com/assets/content-library/img/FHS-SA/FHS-Saudi-Arabia-2024-1.jpg',
        title: "كيرتن للضيافة (Kerten Hospitality) تعلن عن توسّع قياسي، وتضاعف محفظتها في الربع الأول من 2024",
        excerpt: "أعلنت شركة كيرتن للضيافة (Kerten Hospitality)، الرائدة عالميًا في حلول الضيافة المخصصة ومفاهيم العيش المتكامل، عن تحقيق نمو سنوي مضاعف في الربع الأول من عام 2024.",
        url: '/sa/content-library/kerten-hospitality-announces-record-expansion-doubling-portfolio-in-first-quarter-of-2024',
    },
    
]

export default function Page () {

    const { locale } = useRouter()

    return (
        <div dir={ locale === 'ar' ? 'rtl' : 'ltr' }>
            <Header compact />

            {/* INTRO */}

            <div className={CSS.themeWrapper}>

                <div className="bg-primary">
                    <PageHeroImage hero={{ url: '/assets/img/sa/nextgen-forum/bg-1.jpg', width: 2000, height: 1334 }} >
                        <div className="container maxw-60 pb-md c-white center">
                            <Reveal>
                                <h1 className='fs-0 maxw-40'>{ locale === 'ar' ? "تجربة التواصل في قمة مستقبل الضيافة" : "The Networking Experience at FHS"}</h1>
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
                                    {
                                        locale === 'ar'
                                        ?
                                            <>
                                                <h2>تواصل مع أكثر من 1,400 مستثمر ومالك ورائد في قطاع الضيافة يساهمون في تشكيل مستقبل السياحة في المملكة</h2>
                                                <p>مع توقع حضور أكثر من 1,400 مشارك في قمة مستقبل الضيافة بالمملكة العربية السعودية 2025، ستتاح لك فرصة استثنائية للوصول إلى أبرز الشخصيات المؤثرة في دفع عجلة الاستثمار الفندقي في المنطقة. فمن المسؤولين الحكوميين والهيئات السياحية، إلى سلاسل الفنادق العالمية والمستثمرين والمطورين - جميع صُنّاع القرار الذين يُحدثون تحولاً في مشهد الضيافة السعودي سيتواجدون في مكان واحد.</p>
                                                <p>هذا الحدث المهم هو فرصتك الذهبية للتواصل مع أصحاب الرؤى والقيادات التي تدفع أهداف رؤية السعودية 2030 السياحية الطموحة، بينما تضع نفسك في قلب أحد أكثر أسواق الضيافة حيوية في العالم. سجل الآن</p>
                                            </>
                                        :
                                            <>
                                                <h2>Connect with 1,400+ hospitality investors, owners, and industry leaders shaping the Kingdom&apos;s tourism future</h2>
                                                <p>With over 1,400 delegates expected at FHS Saudi Arabia 2025, you&apos;ll have unparalleled access to the most influential figures driving hospitality investment across the region. From government officials and tourism authorities to international hotel chains, investors, and developers—the key decision-makers transforming Saudi Arabia&apos;s hospitality landscape will all be in one place.</p>
                                                <p>This premier gathering offers you the chance to connect with visionaries and leaders driving Saudi Arabia&apos;s ambitious Vision 2030 tourism goals, while positioning yourself at the center of one of the world&apos;s most dynamic hospitality markets.</p>
                                            </>
                                    }

                                </Slide>

                                <p className='mt-md'>
                                    <Pop inline>
                                        <Link href="/sa/purchase-pass">
                                            <a className="button fs-5 caps">Register Now</a>
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
                                                <h2>فرص تواصل وتعارف مُنظمة بعناية</h2>
                                                <p>شارك في العديد من فعاليات التعارف والتواصل المُنظمة بعناية لتمكين المشاركين من بناء العلاقات الوثيقة في بيئاتٍ فريدة من نوعها. نوفر لك تجارب محسوسة تشمل استراحات القهوة التفاعلية وجلسات التواصل السريع لبناء روابط وعلاقات دائمة.</p>
                                                <p>في إطار تجربة التواصل والتعارف في قمة مستقبل الضيافة، يمكنك أيضًا المشاركة في جولاتٍ ميدانية تساعدك في بناء علاقات أفضل مع نظرائك. فقد أكد 98% من المشاركين في نسخة القمة عام 2023 أنَّ مشاركتهم في القمة مكنتهم من تحقيق أهدافهم في التواصل مع النظراء في القطاع وشركاء الأعمال.</p>
                                            </>
                                        :
                                            <>
                                                <h2>Curated Networking Opportunities</h2>
                                                <p>Engage in a variety of curated networking opportunities to connect closely in unique environments. Our on-site experiences include brilliant coffee breaks and exciting speed networking sessions to foster lasting connections.</p>
                                                <p>As part of the FHS Networking experience, you can also participate in site tours that offer an immersive experience to connect more deeply with your peers. 98% of delegates surveyed in 2024 indicated that FHS met their objective of networking with industry peers and business partners.</p>
                                            </>
                                    }
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
                        <p className="fs-1 fw-600 lh-1 maxw-40 mx-auto">
                            {
                                locale === 'ar'
                                ?   "إحصائيات التواصل من قمة مستقبل الضيافة بالمملكة العربية السعودية 2024"
                                :   "Networking Stats from FHS Saudi Arabia 2024"
                            }
                        </p>
                    </Fade>
                    <div className="columns-3 gap-sm maxw-50 mx-auto mt-md">
                        <InvestorImpact prefix={"$"} figure={1.1} unit={"B"} label={locale === 'ar' ? "مليار دولار قيمة الأعمال التجارية" : "in Business"} />
                        <InvestorImpact figure={22} unit={"%"} label={locale === 'ar' ? "نسبة المستثمرين" : "Investors"} />
                        <InvestorImpact figure={17} label={locale === 'ar' ? "صفقة تم توقيعها" : "Deals Signed"} />
                    </div>
                </div>
            </section>


            {/* FEATURES */}

            <section className="block bg-primary-2-dark">
                <div className="container center maxw-40">
                    <Fade>
                        <p className='fs-2 fw-600 lh-2'>
                            {
                                locale === 'ar'
                                ?   "صفقتك القادمة تبدأ بمحادثة في قمة مستقبل الضيافة بالمملكة العربية السعودية"
                                :   "Your next landmark deal begins with a conversation at FHS Saudi Arabia"
                            }
                        </p>
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
                            {
                                locale === 'ar'
                                ?
                                    <>
                                        <h2>عزّز فرصك في التواصل عبر تطبيق قمة مستقبل الضيافة (FHS)</h2>
                                        <p>سارع إلى بناء شبكة علاقاتك من الآن قبل وصولك إلى الرياض. تطبيق قمة مستقبل الضيافة بالمملكة العربية السعودية (FHS Saudi Arabia) يضع النظام الكامل للحدث بين يديك:</p>
                                        <p>دليل الحضور: تصفّح القائمة الكاملة للمسجلين وابدأ المحادثات مع شركاء محتملين.</p>
                                        <p>جدولة الاجتماعات: رتّب وأدِر لقاءاتك مع الشخصيات الرئيسية في القطاع مباشرة عبر التطبيق.</p>
                                        <p>أجندة مخصصة: أنشئ جدولًا شخصيًا يوازن بين الجلسات التعليمية وأولويات التواصل.</p>
                                        <p>تحديثات مباشرة: استقبل إشعارات حول فعاليات التواصل، الجلسات الخاصة، والإعلانات عن الصفقات طوال أيام القمة.</p>
                                    </>
                                :
                                    <>
                                        <h2>Power your networking with the FHS&nbsp;app</h2>
                                        <p>Start building your network before you even arrive in Riyadh. The FHS Saudi Arabia mobile app puts the entire event ecosystem at your fingertips:</p>
                                        <p><strong>Attendee Directory:</strong> Browse
                                        the comprehensive list of registered delegates and initiate conversations with potential partners.</p>
                                        <p><strong>Meeting Scheduler:</strong> Arrange and manage your meetings with key industry figures directly through the app.</p>
                                        <p><strong>Personalised Agenda:</strong> Create a custom schedule that balances educational sessions with your networking priorities.</p>
                                        <p><strong>Real-Time Updates:</strong> Receive notifications about networking events, special sessions, and deal announcements happening throughout the summit</p>
                                        <p><span className="c-secondary"><br/></span></p>
                                    </>
                            }
                            
                            <p><a className="button" href="https://page.swapcard.com/app/the-bench/" target="_blank" rel="noreferrer noopener">
                                { locale === 'ar' ? "حمل التطبيق الآن" : "Download the Event App" }
                            </a><br/></p>
                        </Slide>
                    </div>
                </div>      
            </section>



            {/* SIGNINGS */}

            <section className="block bg-primary-2-dark">
                <div className="container center maxw-50">
                    <Fade>
                        <p className="fs-1 fw-600 lh-1">
                            {
                                locale === 'ar'
                                ?   "إحداث تأثير من خلال علاقات هادفة"
                                :   "Creating impact through meaningful connections"
                            }
                        </p>
                    </Fade>
                    <p className='mt-sm'>
                        {
                            locale === 'ar'
                            ?   "في قمة مستقبل الضيافة بالمملكة العربية السعودية 2024، تم الإعلان عن عدد من الصفقات والشراكات التي غيّرت قواعد اللعبة، منها توقيع اتفاقية بين فنادق ومنتجعات IHG، وشركة أسفار (ASFAR)، مجموعة بهيج، كيرتن للضيافة (Kerten Hospitality)، مجموعة السليمان، هليتون، ماريوت، رؤى المدينة، وغيرها من العلامات التجارية الأخرى."
                            :   "At FHS Saudi Arabia 2024, industry-shaping deals and partnerships were announced on-site, including agreements between IHG Hotels and Resorts, ASFAR, Baheej Group, Kerten Hospitality, AlSulaiman Group, Hilton,Marriott, Rua Al Madinah and much more!"
                        }
                    </p>
                    <p className='mt-md'>
                    </p>
                </div>

                <div className="container columns-3 gap-md">
                    {
                        ( locale === 'ar' ? ARTICLE_DATA_AR : ARTICLE_DATA ).map(( article, index ) => (
                            <Pop key={index}>
                                <Card heroUrl={article.heroUrl}>
                                    <p className='fs-6 lh-2 c-secondary fw-600 pb-xs'>{article.title}</p>
                                    <p>{article.excerpt}</p>
                                    <p className='fw-600 c-accent mt-xs'><Link href={article.url}><a className='uLink'>{locale === 'ar' ? "اعرف المزيد" : "Read more"}</a></Link></p>
                                </Card>
                            </Pop>
                        ))
                    }
                    
                </div>

                <div className="container center">
                    <Pop inline>
                        <ButtonKeyline 
                            href={'/sa/content-library/category/press-room'} 
                            decal={'fs-5 fw-600'} 
                            color={'var(--secondary)'}
                        >
                            { locale === 'ar' ? "عرض المزيد" : "View More" }
                        </ButtonKeyline>
                    </Pop>
                </div>
            </section>



            {/* RELATIONSHIPS STATEMENT */}

            <section className="block bg-primary">
                <div className="container center maxw-55 c-white">
                    {
                        locale === 'ar'
                        ?
                            <p className='fs-4'>قمة مستقبل الضيافة بالمملكة العربية السعودية لا يقتصر على بناء علاقات فحسب - بل يصنع شراكات أعمال طويلة الأمد تدفع مستقبل قطاع الضيافة في المملكة. فبفضل سجله الحافل في بناء روابط فعّالة داخل القطاع، يعدك مؤتمر 2025 بتوفير العلاقات التي ستشكل المرحلة المقبلة من نمو قطاع الضيافة في السعودية.</p>
                        :
                            <p className='fs-4'>FHS Saudi Arabia isn&apos;t just about making contacts—it&apos;s about creating lasting business relationships that drive the future of hospitality in the Kingdom. With a demonstrated track record of facilitating meaningful industry connections, our 2025 event promises to deliver the relationships that will shape the next phase of Saudi Arabia&apos;s hospitality growth.</p>
                    }
                </div>
            </section>



            {/* FAQs */}
            
            <Billboard 
                hero={{ url: "/assets/img/sa/networking/networking-faqs-banner.jpg" }}
                height={"50"}
                tint={"20"}
                horizontalAlign={"center"}
                verticalAlign={"center"}
                maxContentWidth={""}
            >
                <p className='fs-1 fw-600'>{ locale === 'ar' ? "الأسئلة الشائعة" : "FAQs"}</p>
            </Billboard>
            <section className="block bg-default">
                <div className="container columns-4 gap-md formatted">

                    {
                        locale === 'ar'
                        ?
                            <>
                                <article>
                                    <h5>كيف يمكنني الحصول على التطبيق؟</h5>
                                    <ul>
                                        <li>بعد التسجيل، ستصلك رسالة إلكترونية من قمة مستقبل الضيافة عبر noreply@swapcard.com .</li>
                                        <li>تحتوي الرسالة على خيارين: إما رابط &quot;لنبدأ الآن&quot; لتسجيل الدخول مباشرةً أو خيار &quot;تحميل التطبيق على الهاتف المحمول&quot;.</li>
                                        <li>سجل الدخول باستخدام البريد الإلكتروني الذي سجلت به للحدث، ثم اختر كلمة المرور الخاصة بك. يمكنك أيضًا اختيار إرسال رابط سريع إلى بريدك الإلكتروني لإنشاء كلمة المرور.</li>
                                        <li>التطبيق متاح للمشاركين المسجلين فقط.</li>
                                    </ul>
                                </article>

                                <article>
                                    <h5>كيف يمكنني إعادة تعيين كلمة المرور؟</h5>
                                    <ul>
                                        <li>عند تسجيل الدخول، بعد إدخال بريدك الإلكتروني، سيتعين عليك إنشاء كلمة المرور الخاصة بك. اختر &quot;إرسال رابط Magic Link&quot; لتصلك رسالة إلكترونية من قمة مستقبل الضيافة noreply@swapcard.com. اضغط على زر &quot;تسجيل الدخول إلى قمة مستقبل الضيافة&quot; وقم بإنشاء كلمة مرور، حيث سيمكنك ذلك من تغيير/إعادة تعيين كلمة مرورك القديمة إلى واحدة جديدة.</li>
                                        <li>إذا كنت تستخدم الموقع الإلكتروني، يمكنك تغيير كلمة المرور من خلال الضغط على أيقونة الملف الشخصي بالأعلى على اليمين، ثم اختيار &quot;الإعدادات&quot;، والتمرير للأسفل حتى تجد خيار &quot;تغيير كلمة المرور&quot;.</li>
                                    </ul>
                                </article>

                                <article>
                                    <h5>كيف يمكنني تعديل ملفي الشخصي؟</h5>
                                    <ul>
                                        <li>اضغط على أيقونة الملف الشخصي في الأسفل على اليمين، ثم اضغط على بياناتك الشخصية (مثل الاسم والصورة). ستجد خيارات لتعديل تفاصيل مثل: التعريف بي، معلومات/روابط وسائل التواصل الاجتماعي/معلومات الاتصال/الشركة.</li>
                                        <li>على الموقع الإلكتروني، اذهب إلى أيقونة الملف الشخصي في الجزء اليمين من الأعلى، واضغط على &quot;ملفي الشخصي&quot; لإجراء التعديلات المطلوبة.</li>
                                    </ul>
                                </article>

                                <article>
                                    <h5>كيف يمكنني إدارة الاجتماعات؟</h5>
                                    <ul>
                                        <li>بمجرد تسجيلك كمشارك وبدء الحدث، يمكنك استعراض &quot;قائمة الحضور&quot; ومعاينة الأشخاص الذين ترغب في مقابلتهم. يمكنك عقد اجتماع مع أي شخص من خلال الضغط على زر &quot;عقد اجتماع&quot; على ملفه الشخصي.</li>
                                        <li>أو يمكنك قبول طلبات التواصل/طلبات الاجتماعات الواردة من الآخرين وفقًا لاختياراتك.</li>
                                        <li>يمكنك عرض جدول اجتماعاتك من خلال قسم &quot;جدولي&quot; في القائمة الجانبية.</li></ul>
                                </article>
                            </>
                        :
                            <>
                                <article>
                                    <h5>How do I access the app?</h5>
                                    <ul><li>After registration, you get an email from Future Hospitality Summit &lt;noreply@swapcard.com&gt;</li><li>The email has two options: either navigate to &apos;let&apos;s get started&apos; to log in or choose &apos;Get the mobile app/download it&apos;.</li><li>Log in using the same email address used to register for the event and then proceed to create a password. The app gives an option of sending a magic link to your registered email address through which you can create a password.</li><li>However, only registered attendees can access the app.</li></ul>
                                </article>

                                <article>
                                    <h5>How do I reset my password?</h5>
                                    <ul><li>When logging in, after entering your email, the next step asks for a password. Find the option to &apos;Send me a magic link&apos; to receive an email from Future Hospitality Summit &lt;noreply@swapcard.com&gt; containing the magic sign-in link. Click on the &apos;Sign in to Future Hospitality Summit&apos; button and create a password. This would reset/change your old password to the new one.</li><li>If on the website, press the profile icon top right, choose settings, scroll down and you will find a &apos;Change Password&apos; option.</li></ul>
                                </article>

                                <article>
                                    <h5>How do I edit my profile?</h5>
                                    <ul><li>Click on your profile icon bottom right, and click on the top (your details like name and your display picture). You will find options to edit details like: about me/information/social media/contact details/company.</li><li>For the website, navigate to the top tight profile icon, click it, then go to &apos;My Profile&apos; and make edits.</li></ul>
                                </article>

                                <article>
                                    <h5>How do I manage meetings?</h5>
                                    <ul><li>Once you have registered as an attendee and the event is live, go to &apos;Attendee List&apos; to preview who you can set up meetings with. Click on any relevant profile, and set up a meeting with them with the &apos;Set Meeting&apos; button.</li><li>Alternatively, you can accept contact requests/meeting requests from others as per your choice.</li><li>You can then view your meeting schedule by navigating to &apos;My Schedule&apos; on the left.</li></ul>
                                </article>
                            </>
                    }
                    
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