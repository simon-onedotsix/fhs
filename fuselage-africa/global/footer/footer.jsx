import Link from 'next/link'
import Image from 'next/image'

import HubspotForm from '../../components/hubspot-form/hubspot-form'
import { ButtonSocial } from  '../../components/button-social/button-social'

import CSS from './footer.module.css'

export const Footer = ({ socialConnections, contactInfo, hubspotForm }) => {

    // console.log('social:', socialConnections)

    return (
        <footer className={`${CSS.layout} footer`}>

            <div className={`${CSS.content} block bg-extra-dark`}>
                <div className={`${CSS.container} container formatted`}>

                        {
                            hubspotForm &&
                            <section className={CSS.section}>
                                <h5>Want to stay updated on FHS Africa?</h5>
                                <p>If you haven&apos;t already registered your interest, simply submit your name and email and we&apos;ll make sure to keep you posted on all the exciting announcements we have in store for the event.</p>
                                <HubspotForm portalId={hubspotForm.portalId} formId={hubspotForm.formId} />
                            </section>
                        }
            
                        <section className={`${CSS.section} ${CSS.divider} center`}>
                            <h5>Join the conversation</h5>
                            <p className='fs-3 fw-600'>#AHIF</p>
                            <p className='flex jc-center flex-wrap gap-xxs'>
                                {
                                    socialConnections ?
                                    socialConnections.map( connection => {
                                        return (
                                            <ButtonSocial 
                                                key={connection.id} 
                                                icon={connection.icon} 
                                                url={connection.hyperlink} 
                                                alt={connection.label}
                                                decal={'bg-primary'}
                                            />
                                        )
                                    })
                                    : null
                                }
                            </p>

                            <div className='mt-md caps fw-600'>
                                {/* <p><Link href='/contact-us'><a className='uLink'>Contact us</a></Link></p> */}
                                <p><Link href='https://www.thebench.com/privacy'><a className='uLink' target='_blank'>Privacy Policy</a></Link></p>
                                <p><Link href='https://www.thebench.com/code-of-conduct'><a className='uLink' target='_blank'>Code of Conduct</a></Link></p>
                            </div>
                        </section>
            
                        <section className={`${CSS.section} ${CSS.hosts} ${CSS.divider} center`}>
                            <div>
                                <h5>Organisers</h5>
                                <div className="mt-sm flex flex-wrap gap-sm jc-center">
                                    <p>
                                        <a className={CSS.partnerLogo} href="https://www.thebench.com" target='_blank' rel='noreferrer' aria-label="Organiser">
                                            <Image width={221} height={92} src="/assets/site/the-bench-inverse@2x.png" alt="" />
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
                    
                <div className="container center">
                    <p><small>
                        © {new Date().getFullYear()} The Bench
                    </small></p>
                </div>
            </div>
        </footer>
    )
}

export const FooterShim = () => {
    return (
        <div style={{ width: `100%`, aspectRatio: 1680/350 }} />
    )
}