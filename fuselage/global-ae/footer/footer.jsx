import { useContext } from 'react'
import { GlobalsContext } from '../../../pages/_app'

import Link from 'next/link'
import Image from 'next/image'

import { BenchLogo } from '../../components/bench-logo/bench-logo'
import HubspotForm from '../../components/hubspot-form/hubspot-form'
import { ButtonSocial } from  '../../components/button-social/button-social'

import CSS from './footer.module.css'

export const Footer = ({ theme }) => {

    const { globals } = useContext(GlobalsContext)
    // console.log('globals from FOOTER:', globals.me)
    
    // console.log('footer-theme:', theme)

    const hubspotForm = globals.me.hubspotForm[0]
    const contactInfo = globals.me.contactDetails[0].body
    const socialConnections = globals.me.socialConnections

    return (
        <footer className={`footer block ${ theme ? theme.footerBg : 'bg-theme'}`} style={{ position: `relative`}}>
            <div className={`${CSS.container} container formatted`}>

                    {
                        hubspotForm &&
                        <section className={CSS.section}>
                            <h5>Want to stay updated on FHS?</h5>
                            <p>If you haven&apos;t already registered your interest, simply submit your name and email and we&apos;ll make sure to keep you posted on all the exciting announcements we have in store for the event.</p>
                            <HubspotForm portalId={hubspotForm.portalId} formId={hubspotForm.formId} />
                        </section>
                    }
        
                    <section className={`${CSS.section} ${CSS.divider} center`}>
                        <h5>Join the conversation</h5>
                        <p className='fs-3 fw-600'>#FutureHospitalitySummit</p>
                        <p className='flex jc-center flex-wrap gap-xxs'>
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
                            <p><Link href='/contact-us'><a className='uLink'>Contact us</a></Link></p>
                            <p><Link href='https://www.thebench.com/privacy'><a className='uLink' target='_blank'>Privacy Policy</a></Link></p>
                        </div>
                    </section>
        
                    <section className={`${CSS.section} ${CSS.hosts} ${CSS.divider} center`}>
                        <div>
                            <h5>Organisers</h5>
                            <div className="mt-sm flex flex-wrap gap-sm jc-center">
                                <p>
                                    <a className={CSS.partnerLogo} href="https://www.thebench.com" target='_blank' rel='noreferrer' aria-label="Organiser">
                                        <BenchLogo />
                                    </a>
                                </p>
                            </div>
                        </div>

                        {
                            contactInfo &&
                            <div className="mt-sm formatted">
                                <h5>Contact us</h5>
                                <div dangerouslySetInnerHTML={{__html: contactInfo }} />
                            </div>
                        }
                    </section>

                

            </div>
                
            <div className="container c-white center">
                <p><small>
                    © {new Date().getFullYear()} The Bench
                </small></p>
            </div>
        </footer>
    )
}