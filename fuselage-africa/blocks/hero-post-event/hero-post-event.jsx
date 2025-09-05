import Image from 'next/image'

import { Button } from '../../components/button/button'
import { ButtonSocial } from '../../components/button-social/button-social'

import CSS from './hero-post-event.module.css'

export function HeroPostEvent ({ children, theme }) {

    let socialConnections = [
        {
            "__typename": "socialConnections_BlockType",
            "id": "17444",
            "hyperlink": "https://www.linkedin.com/showcase/ahif/",
            "icon": "linkedin",
            "label": "Linkedin"
        },
        {
            "__typename": "socialConnections_BlockType",
            "id": "15834",
            "hyperlink": "https://www.facebook.com/AHIFsocial",
            "icon": "facebook",
            "label": "Facebook"
        },
        {
            "__typename": "socialConnections_BlockType",
            "id": "15835",
            "hyperlink": "https://www.instagram.com/ahifsocial/",
            "icon": "instagram",
            "label": "Instagram"
        },
        {
            "__typename": "socialConnections_BlockType",
            "id": "15829",
            "hyperlink": "https://twitter.com/AHIF_News",
            "icon": "twitter",
            "label": "Twitter"
        }
    ]


    return (
        
        <section className={`${CSS.layout} ${ theme ? theme : `bg-primary`}`} >

            <div className={CSS.brandPattern}>
                <Image src={`/assets/brand/motif-banner.jpg`} layout={`fill`} width={1920} height={1000} alt="" priority />
            </div>

            <div className={`${CSS.panel} block bg-extra-dark`}>
                <p className='fs-0 fw-700 lh-1'>Thank you for making AHIF 2023 a success!</p>
                <p className="fs-2 fw-400 mt-sm">Stay Tuned For AHIF 2024 Namibia!</p>
                <p className='mt-sm'><Button href={`/get-involved-with-ahif-2024`} decal={`fs-4 fw-600`} primary >
                    Register you interest
                </Button></p>
            </div>

            <section className={`${CSS.content} block ${ theme ? theme : `bg-primary`}`}>
                <p className="fs-3">Join The Conversation on Social&nbsp;Media</p>

                <div className='flex my-xs jc-start flex-wrap gap-xxs'>
                    {
                        socialConnections.length ?
                        socialConnections.map( connection => {
                            return (
                                <ButtonSocial 
                                    key={connection.id} 
                                    icon={connection.icon} 
                                    url={connection.hyperlink} 
                                    alt={connection.label}
                                    decal={'bg-extra-dark'}
                                />
                            )
                        })
                        : null
                    }
                </div>
            </section>

        </section>

    )
}