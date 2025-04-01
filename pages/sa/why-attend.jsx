import Head from "next/head"
import Image from "next/image"

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
                        <Card imageUrl={'/assets/img/sa/why-attend/why-attend-delegate.jpg'}>
                            <p className="fs-2 c-secondary lh-1">{ locale === 'ar' ? "الحضور كمشارك" : "Attend as a Delegate" }</p>
                            <div className="formatted mt-sm">
                                {
                                    locale === 'ar' 
                                    ?
                                        <>
                                            <p className="fw-600">احصل على فرصة الوصول إلى قادة قطاع الضيافة في المنطقة تحت سقفٍ واحد، واطلع على أحدث الاتجاهات والرؤى المستقبلية!
                                            </p>
                                            <p>توفر القمة فرص فريدة للتواصل والتعارف، مما يمكنك من بناء العلاقات مع جمهورنا المتميز من مالكي ومشغلي الفنادق، وممثلي الحكومات، وشركاء الأعمال المحتملين، والمستثمرين. كما تركز ورش العمل والندوات التي تُقام خلال فعاليات القمة على تعزيز النمو المهني والابتكار، حيث يأتي كل ذلك ضمن إطار رؤية السعودية 2030 الطموحة.</p>
                                        </>
                                    :
                                        <>
                                            <p className="fw-600">Gain access to the region&apos;s leading industry leaders under one roof and access the latest trends and future directions in hospitality.</p>
                                            <p>The summit provides unmatched networking opportunities, enabling delegates to connect with our premium audience of hotel owners and operators, government representatives, potential business partners, and investors. Workshops and seminars at the event focus on fostering professional growth and innovation, all within the context of Saudi Arabia&apos;s Vision 2030.</p>
                                        </>
                                }
                                
                            </div>
                        </Card>
                    </Pop>
                </div>

                <div className="container maxw-70" id="sponsor">
                    <Pop>
                        <Card imageUrl={'/assets/img/sa/why-attend/why-attend-sponsor.jpg'}>
                            <p className="fs-2 c-secondary lh-1">{ locale === 'ar' ? "كن أحد رعاة قمة مستقبل الضيافة بالمملكة العربية السعودية" : "Sponsor FHS Saudi Arabia" }</p>
                            <div className="formatted mt-sm">
                                {
                                    locale === 'ar' 
                                    ?
                                        <>
                                            <p className="fw-600">استثمر في زيادة ظهور علامتك التجارية بين صُنّاع القرار المؤثرين في قطاع الاستثمار في الضيافة في المنطقة.
                                            </p>
                                            <p>تتيح لك باقات الرعاية المُصمَّمة خصيصًا فرص التفاعل المباشر مع الجمهور المستهدف من خلال الوصول إلى فرص التحدث ومساحات العرض. من خلال وضع علامتك التجارية بصفتك أحد قادة الفكر، يمكنك مشاركة خبراتك وترسيخ مكانتك في السوق، والاستفادة من المنصة لتتماشى مع الأهداف الطموحة للمنطقة.</p>
                                        </>
                                    :
                                        <>
                                            <p className="fw-600">Invest in increased brand visibility among influential decision-makers in the hospitality investment industry of the region.</p>
                                            <p>Tailored sponsorship packages can provide direct engagement with the target audience through speaking opportunities and exhibition spaces. By positioning the brand as thought leaders, share your expertise and reinforce your authority in the market, leveraging the platform to align with the region&apos;s ambitious goals.</p>
                                        </>
                                }
                                
                            </div>
                        </Card>
                    </Pop>
                </div>

                <div className="container maxw-70" id="investor">
                    <Pop>
                        <Card imageUrl={'/assets/img/sa/why-attend/why-attend-investor.jpg'}>
                            <p className="fs-2 c-secondary lh-1">{ locale === 'ar' ? "شارك كمستثمر أو مالك" : "Attend as an Investor or Owner" }</p>
                            <div className="formatted mt-sm">
                                {
                                    locale === 'ar'
                                    ?
                                        <>
                                            <p className="fw-600">يحصل المستثمرون في قمة مستقبل الضيافة بالمملكة العربية السعودية على فرص مربحة في قطاع الضيافة في المنطقة، من خلال التفاعل مع الشركات الناشئة المبتكرة، ومالكي ومشغلي الفنادق البارزة، والوصول إلى مشاريع ضخمة ومتميزة في المنطقة.
                                            </p>
                                            <p>توفر الجلسات الحصرية للمستثمرين رؤى استراتيجية حول اتجاهات السوق واستراتيجيات الاستثمار للاستفادة إلى أقصى حد من العائد على الاستثمار. كما تسهل القمة إقامة شراكات استراتيجية مع الأطراف المعنية الرئيسية في القطاع، مما يعزز النمو ويفتح آفاق تعاون قيّمة، لا سيما في السوق السعودي المزدهر.</p>
                                        </>
                                    :
                                        <>
                                            <p className="fw-600">Investors at FHS Saudi Arabia access lucrative opportunities within the regional hospitality sector, engaging with innovative start-ups and renowned hotel owners and operators and accessing vetted giga and mega projects in the region.</p>
                                            <p>Exclusive investor sessions offer strategic insights into market trends and investment strategies to leverage current market trends for higher ROI. FHS Saudi Arabia also facilitates strategic partnerships with key industry stakeholders, driving growth and fostering valuable collaborations, particularly within the burgeoning Saudi market.</p>
                                        </>
                                }
                                
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