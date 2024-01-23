import { useContext } from 'react'
import { GlobalsContext } from '../../../pages/_app'

import Link from 'next/link'
import Image from 'next/image'

import HubspotForm from '../../components/hubspot-form/hubspot-form'
import { ButtonSocial } from  '../../components/button-social/button-social'

import CSS from './footer.module.css'

export const Footer = ({ background }) => {

    const { globals } = useContext(GlobalsContext)
    console.log('globals from FOOTER:', globals)

    const hubspotForm = globals.global[2].hubspotForm[0]
    const contactInfo = globals.global[2].contactDetails[0].body
    const socialConnections = globals.global[2].socialConnections

    return (
        <footer className="footer block bg-primary" style={{ background: background ? background : `transparent`}}>
            <div className={`${CSS.container} container formatted c-white`}>

                    {
                        hubspotForm &&
                        <section className={CSS.section}>
                            <h5>Want to stay updated on FHS?</h5>
                            <p className='pb-xs'>If you haven&apos;t already registered your interest, simply submit your name and email and we&apos;ll make sure to keep you posted on all the exciting announcements we have in store for the event.</p>
                            <HubspotForm portalId={hubspotForm.portalId} formId={hubspotForm.formId} />
                        </section>
                    }


                    <section className={`${CSS.section}`}>
                        <div>
                            <h5 className='c-accent'>Organisers</h5>
                            <div className="mt-sm maxw-40">
                                <p>
                                    <a className={CSS.partnerLogo} href="https://www.thebench.com" target='_blank' rel='noreferrer' aria-label="Organiser">
                                        <Image width={221} height={92} src="/assets/site/the-bench-inverse@2x.png" alt="" />
                                    </a>
                                </p>
                                <p className='fw-300 mt-sm'>The Bench has established a legacy for delivering world-leading investment forums and conferences in Europe, Africa, the Middle East, and Latin America. These include AHIC, AHIF, GRIF, AHF, IDEEA, AviaDev and RENEW.</p>

                            </div>
                        </div>


                    </section>

        
                    <section className={`${CSS.section}`}>
                        <h5 className='c-accent'>Join the conversation</h5>
                        <p className='fs-3 fw-600'>#FutureHospitalitySummit</p>
                        <p className='flex flex-wrap gap-xxs'>
                            {
                                socialConnections &&
                                socialConnections.map( connection => {
                                    return (
                                        <ButtonSocial 
                                            key={connection.id} 
                                            icon={connection.icon} 
                                            url={connection.hyperlink} 
                                            alt={connection.label}
                                            decal={'bg-secondary'}
                                        />
                                    )
                                })
                            }
                        </p>

                        <div className='mt-md caps fw-600'>
                            {/* <p><Link href='/contact-us'><a className='uLink'>Contact us</a></Link></p> */}
                            {/* <p><Link href='https://www.thebench.com/privacy'><a className='uLink' target='_blank'>Privacy Policy</a></Link></p> */}
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