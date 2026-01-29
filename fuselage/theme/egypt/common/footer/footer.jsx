import { useContext } from 'react'
import { GlobalsContext } from '../../../../../pages/_app'

import Link from 'next/link'
import Image from 'next/image'

import HubspotForm from '../../../../components/hubspot-form/hubspot-form'
import { ButtonSocial } from  '../../../../components/button-social/button-social'

import CSS from './footer.module.css'

export const Footer = () => {

    const { globals } = useContext(GlobalsContext)
    // console.log('globals from FOOTER:', globals)

    const localGlobals = globals['me']
    // console.log(localGlobals)

    const hubspotForm = localGlobals[2].hubspotForm[0]
    const contactInfo = localGlobals[2].contactDetails[0].body
    const socialConnections = localGlobals[2].socialConnections

    return (
        <footer className={`${CSS.footer} block`}>
            <div className={`container columns-3 gap-md formatted`}>

                    <section className={`${CSS.section}`}>
                        <p className='fs-1 fw-600 lh-1'>Join the Conversation</p>
                        <p className='fs-5 fw-600 c-secondary mt-sm'>#FutureHospitalitySummit</p>
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
                                            decal={'bg-light'}
                                        />
                                    )
                                })
                            }
                        </p>

                        <div className='mt-md caps fw-600'>
                            <p><Link href='/ae/contact-us'><a className='uLink'>Contact us</a></Link></p>
                            <p><Link href='https://www.thebench.com/privacy'><a className='uLink' target='_blank'>Privacy Policy</a></Link></p>
                            <p><Link href='/code-of-conduct'><a className='uLink' >Code of Conduct</a></Link></p>
                            <p><Link href='/terms-and-conditions'><a className='uLink' >Terms &amp; Conditions</a></Link></p>
                        </div>
                    </section>

                    {
                        hubspotForm &&
                        <section className={CSS.section}>
                            <p className='fs-5 fw-600 '>Want to stay updated on FHS?</p>
                            <p className='pb-xs'>If you haven&apos;t already registered your interest, simply submit your name and email and we&apos;ll make sure to keep you posted on all the exciting announcements we have in store for the event.</p>
                            <HubspotForm portalId={"14527187"} formId={"dbc045cb-8189-4570-89ac-cf4ee592abbf"} />
                        </section>
                    }

                    <section className={`${CSS.section}`}>
                        <div>
                            <p className='fs-5 fw-600'>Organisers</p>
                            <div className="mt-sm maxw-40">
                                <p>
                                    <a className={CSS.partnerLogo} href="https://www.thebench.com" target='_blank' rel='noreferrer' aria-label="Organiser">
                                        <Image width={221} height={92} src="/assets/site/the-bench-inverse@2x.png" alt="" />
                                    </a>
                                </p>
                                <p className='fw-300 mt-sm'>The Bench has established a legacy for delivering world-leading investment forums and conferences in Europe, Africa, the Middle East, and Latin America. The Bench organises the Future Hospitality Summit (FHS) series including FHS World in Dubai, FHS Saudi Arabia and FHS Africa - and the AviaDev Africa conference.</p>

                            </div>
                        </div>
                    </section>
            </div>
                
            <div className="container c-white">
                <p><small>
                    © {new Date().getFullYear()} The Bench
                </small></p>
            </div>
        </footer>
    )
}