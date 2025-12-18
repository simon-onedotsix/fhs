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
import { PopOverlay } from "../../fuselage/components/popoverlay/popoverlay"


import CSS from '../../fuselage/theme/2025/sa/css/networking.module.css'

import { ARTICLE_DATA, ARTICLE_DATA_AR } from '.'

export default function Page () {

    const { locale } = useRouter()

    return (
        <div dir={ locale === 'ar' ? 'rtl' : 'ltr' }>
            <Header compact />

            {/* INTRO */}

            <div className={CSS.themeWrapper}>

                <div className="bg-primary">
                    <PageHeroImage hero={{ url: 'https://cms.thebench.com/assets/img/site/FHS-SA/MM1_0800.jpg', width: 2000, height: 1334 }} >
                        
                        
                        <div className="container maxw-60 pb-md c-white center">
                            <Reveal>
                                <h1 className='fs-0 maxw-40'>{ locale === 'ar' ? "تجربة التواصل في قمة مستقبل الضيافة" : "The Networking Experience at FHS"}</h1>
                            </Reveal>
                        </div>

                        {/* <div className="container pb-lg">
                            <p className='fs-5 c-accent caps center'>Sponsored by:</p>
                            <Pop>
                                <Image src={'/assets/img/sa/nextgen-forum/baraka-logo.png'} width={1000} height={499} layout='responsive' />
                            </Pop>
                        </div> */}

                        <div className="block">
                            <div className="container columns-2 gap-md ai-center">
                                <Pop>
                                    <div className={CSS.floaterImg}>
                                        <Image src={"https://cms.thebench.com/assets/img/site/FHS-SA/RM200841.jpg"} layout='fill' />
                                    </div>
                                </Pop>

                                <div className="formatted">
                                    <Slide>
                                        <>
                                                    <h2>Create valuable connections with leading investors, owners, operators and developers in the region</h2>
                                            <p>Forge connections with 1000+ delegates from the region&apos;s hospitality ecosystem. Future Hospitality Summit is the leading platform for investors, hotel owners and operators to access lucrative investment opportunities, discuss industry challenges and solutions and impart invaluable knowledge to propel the industry forward.</p>
                                            <p>Seize the opportunity to engage with the most influential and dynamic figures in Saudi Arabia&apos;s hospitality investment.</p>
                                                </>
                                    </Slide>
                                </div>
                            </div>

                            <div className="container columns-2 gap-md ai-center pt-lg">
                                <div className="formatted">
                                    <Slide>
                                        <h2>Curated Networking Opportunities</h2>
                                        <p>Engage in a variety of curated networking opportunities to connect closely in unique environments. Our on-site experiences include brilliant coffee breaks and exciting speed networking sessions to foster lasting connections.</p>
                                        <p>As part of the FHS Networking experience, you can also participate in site tours that offer an immersive experience to connect more deeply with your peers. 96.7% of delegates surveyed in 2025 indicated that FHS met their objective of networking with industry peers and business partners.</p>
                                    </Slide>
                                </div>

                                <Pop>
                                    <div className={CSS.floaterImg}>
                                        <Image src={"https://cms.thebench.com/assets/img/site/FHS-SA/1747115701603.jpg"} layout='fill' />
                                    </div>
                                </Pop>
                            </div>
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
                                ?   "إحصائيات التواصل من قمة مستقبل الضيافة بالمملكة العربية السعودية 2025"
                                :   "Networking Stats from FHS Saudi Arabia 2025"
                            }
                        </p>
                    </Fade>
                    <div className="columns-3 gap-sm maxw-50 mx-auto mt-md">
                        <InvestorImpact prefix={"$"} figure={1.6} unit={"B"} label={locale === 'ar' ? "مليار دولار قيمة الأعمال التجارية" : "in Business"} />
                        <InvestorImpact figure={24} unit={"%"} label={locale === 'ar' ? "نسبة المستثمرين" : "Investors"} />
                        <InvestorImpact figure={11} label={locale === 'ar' ? "صفقة تم توقيعها" : "Deals Signed"} />
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

                {/* <div className="container center">
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
                </div> */}
            </section>


            {/* APP */}
            
            <section className="block bg-primary" style={{ width: '100%', overflow: 'hidden' }}>
                <div className="container columns-2 gap-md ai-center">
                    <Pop>
                        <div className={CSS.floaterImg}>
                            <Image src={"https://cms.thebench.com/assets/img/site/FHS-SA/Screenshot-2025-05-01-131230.png"} layout='fill' />
                        </div>
                    </Pop>

                    <div className="formatted">
                        <Slide>
                            <h2>Network Anytime, Anywhere with the FHS App</h2>
                            <p>Our event app facilitates unlocking the full FHS experience.</p>
                            <p>Delegates can download the app to explore the attendee list and interact to start networking ahead of the event. Use it to organise meetings with key individuals of your choice, explore the agenda and create a schedule based on your preferences.</p>
                            <p>Utilise all that the event has to offer with a few taps.</p>
                    
                            <p><a className="button" href="https://www.linkedin.com/posts/future-hospitality-summit_start-networking-ahead-of-the-event-with-activity-7108474993906229248-heeH?utm_source=share&utm_medium=member_desktop" target="_blank" rel="noreferrer noopener">
                                More about the event app
                            </a><br/></p>
                        </Slide>
                    </div>
                </div>      
                
                <div className="container columns-2 gap-md ai-center">
                    <div className="formatted">
                        <Slide>
                            <h2>Curated Connections</h2>
                            <p>Curated Connections, launched at FHS Saudi Arabia 2025, was designed to help delegates connect more meaningfully. These short, 20-minute informal sessions are grouped by shared interests—making it easier than ever to meet the right people.</p>
                           
                            <p><Link className="button" href="/sa/curated-connections">
                                Learn more
                            </Link><br/></p>
                        </Slide>
                    </div>
                    
                    <Pop>
                        <div className={CSS.floaterImg}>
                            <Image src={"https://cms.thebench.com/assets/img/site/FHS-SA/MM1_1348.jpg"} layout='fill' />
                        </div>
                    </Pop>    
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
                        At FHS Saudi Arabia 2025, industry-shaping deals and partnerships were announced on-site.
                    </p>
                    <p className='mt-md'>
                    </p>
                </div>

                <div className="container columns-2 gap-md maxw-70">
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
                            <p className='fs-4'>قمة مستقبل الضيافة بالمملكة العربية السعودية لا يقتصر على بناء علاقات فحسب - بل يصنع شراكات أعمال طويلة الأمد تدفع مستقبل قطاع الضيافة في المملكة. فبفضل سجله الحافل في بناء روابط فعّالة داخل القطاع، يعدك مؤتمر 2026 بتوفير العلاقات التي ستشكل المرحلة المقبلة من نمو قطاع الضيافة في السعودية.</p>
                        :
                            <p className='fs-4'>FHS Saudi Arabia isn&apos;t just about making contacts—it&apos;s about creating lasting business relationships that drive the future of hospitality in the Kingdom. With a demonstrated track record of facilitating meaningful industry connections, our 2026 event promises to deliver the relationships that will shape the next phase of Saudi Arabia&apos;s hospitality growth.</p>
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