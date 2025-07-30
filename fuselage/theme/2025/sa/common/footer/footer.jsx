import { useContext } from 'react'
import { GlobalsContext } from '../../../../../../pages/_app'

import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'

import HubspotForm from '../../../../../components/hubspot-form/hubspot-form'
import { ButtonSocial } from  '../../../../../components/button-social/button-social'

import CSS from './footer.module.css'

export const Footer = () => {

    const { locale } = useRouter()

    const { globals } = useContext(GlobalsContext)
    // console.log('globals from FOOTER:', globals)

    const hubspotForm = globals.global[2].hubspotForm[0]
    const contactInfo = globals.global[2].contactDetails[0].body
    const socialConnections = globals.global[2].socialConnections

    return (
        <footer className="block bg-neutral-02 no-print" style={{ position: 'relative', overflow: 'hidden' }}>
            <img className={CSS.deco} src="/assets/theme/sa-2025/gfk-02.svg" alt=""/>

            <div className={`container columns-3 gap-md formatted`}>

                    <section className={`${CSS.section}`}>
                        <p className='fs-1 fw-600 lh-1 c-secondary'>{ locale === 'ar' ? "انضم إلى المحادثة!" : "Join the Conversation" }</p>
                        <p className='fs-5 fw-600 c-accent mt-sm'>#FutureHospitalitySummit</p>
                        <p className='flex flex-wrap gap-xxs mt-sm'>
                            {
                                socialConnections &&
                                socialConnections.map( connection => {
                                    return (
                                        <ButtonSocial 
                                            key={connection.id} 
                                            icon={connection.icon} 
                                            url={connection.hyperlink} 
                                            alt={connection.label}
                                            iconColor={'white'}
                                            decal={'bg-secondary'}
                                        />
                                    )
                                })
                            }
                        </p>

                        <div className='mt-md caps fw-600'>
                            <p><Link href='/ae/contact-us'><a className='uLink'>{ locale === 'ar' ? "تواصل معنا" : "Contact us" }</a></Link></p>
                            <p><Link href='https://www.thebench.com/privacy'><a className='uLink' target='_blank'>{ locale === 'ar' ? "سياسة الخصوصية" : "Privacy Policy" }</a></Link></p>
                            <p><Link href='/code-of-conduct'><a className='uLink' >{ locale === 'ar' ? "مدونة قواعد السلوك" : "Code of Conduct" }</a></Link></p>
                            <p><Link href='/terms-and-conditions'><a className='uLink' >Terms &amp; Conditions</a></Link></p>
                        </div>
                    </section>

                    {
                        hubspotForm &&
                        <section className={CSS.section}>
                            <p className='fs-5 fw-600 c-secondary'>
                                {
                                    locale === 'ar'
                                    ?
                                        "هل ترغب بالاطلاع على آخر أخبار قمة مستقبل الضيافة؟"
                                    :
                                        "Want to stay updated on FHS?"
                                }
                            </p>
                            <p className='pb-xs'>
                                {
                                    locale === "ar"
                                    ?
                                        "إذا لم تسجل بعد، أرسل لنا اسمك وبريدك الإلكتروني، وسنوافيك بآخر المستجدات الحصرية المثيرة حول الحدث!"
                                    :
                                        "If you haven't already registered your interest, simply submit your name and email and we'll make sure to keep you posted on all the exciting announcements we have in store for the event."
                                }
                            </p>
                            <div dir="ltr">
                                <HubspotForm portalId={"14527187"} formId={"68c654b4-dcb0-42c6-adbc-75ef5153d822"} />
                            </div>
                        </section>
                    }

                    <section className={`${CSS.section} ${ locale === 'ar' && CSS.rtl }`}>
                        <div>
                            <p className='fs-5 fw-600 c-secondary'>{ locale === 'ar' ? "الجهات المنظمة" : "Organisers" }</p>
                            <div className="mt-sm maxw-40">
                                <p>
                                    <a className={CSS.partnerLogo} href="https://www.thebench.com" target='_blank' rel='noreferrer' aria-label="Organiser">
                                        <Image width={221} height={92} src="/assets/site/the-bench-black.png" alt="" />
                                    </a>
                                </p>
                                <p className='mt-sm'>
                                    {
                                        locale === 'ar'
                                        ?
                                            "تملك The Bench تاريخًا وخبرة طويلة في تنظيم أهم منتديات الاستثمار والمؤتمرات العالمية في أوروبا وإفريقيا والشرق الأوسط وأمريكا اللاتينية. تنظم الشركة سلسلة فعاليات قمة مستقبل الضيافة التي تشمل قمة مستقبل الضيافة العالمية في دبي، وقمة مستقبل الضيافة بالمملكة العربية السعودية، وقمة مستقبل الضيافة بإفريقيا، إلى جانب مؤتمر AviaDev إفريقيا."
                                        :
                                            "The Bench has established a legacy for delivering world-leading investment forums and conferences in Europe, Africa, the Middle East, and Latin America. The Bench organises the Future Hospitality Summit (FHS) series including FHS World in Dubai, FHS Saudi Arabia and FHS Africa - and the AviaDev Africa conference."
                                    }
                                </p>

                            </div>
                        </div>
                    </section>
            </div>
                
            <div className="container">
                <p><small>
                    © {new Date().getFullYear()} The Bench
                </small></p>
            </div>
        </footer>
    )
}