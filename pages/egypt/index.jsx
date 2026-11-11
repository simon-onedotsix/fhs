import { gql } from "@apollo/client"
import craftApolloClient from "../api/apollo"

import { useState, useRef } from "react"
import _ from 'lodash'

import { LenisScroller } from '../../fuselage/animation/lenis-scroller'
import useCustomMediaQuery from '../../hooks/useCustomMediaQuery'

import Head from "next/head"
import Image from "next/image"


import { Pop, Slide, Fade } from "../../fuselage/theme/2023/ae/layout/animation/animation"

import { EventsBar } from "../../ui/site/eventsbar"
import { Header } from '../../ui/site/header'
import { FHS_EGYPT as header } from '../../fixtures/nav'
import { Footer } from '../../fuselage/theme/egypt/common/footer/footer'


import { ButtonKeyline } from "../../fuselage/theme/egypt/components/button-keyline/button-keyline"
import { SpeakerCard } from "../../fuselage/components/speaker-card/speaker-card"
import { PopupOverlay } from "../../fuselage/components/popup-overlay/popup-overlay"
import { ContentCard } from '../../fuselage/components/content-card/content-card'

import { HeroUnitVideo } from "../../fuselage/theme/2025/world/pages/home/hero-unit-video"
import { ImpactCard } from "../../ui/components/impact-card"
import { VideoSection, Section } from '../../fuselage/theme/2026/sa/blocks/section'
import { ArrowButton } from "../../fuselage/components/arrow-button/arrow-button"
import { LayoutGallery } from "../../fuselage/components/layout-gallery/layout-gallery"
import { PartnerGroup } from "../sa"
import { Quotation } from "../../fuselage/theme/2026/world/components/quotation/quotation"


import CSS from '../../fuselage/theme/egypt/css/homepage.module.css'




// temporary hard-code data
export const ARTICLE_DATA = [
    {
        heroUrl: 'https://cms.thebench.com/assets/content-library/img/FHS-Egypt/20221104-dsc_4371-hdr-edit.jpg',
        title: 'MAD Signs MoU with Brassbell Hospitality Group to Elevate Hospitality Landmark at the Heart of History in Front of the Grand Egyptian Museum',
        url: '/egypt/content-library/mad-signs-mou-with-brassbell-hospitality-group-to-elevate-hospitality-landmark-at-the-heart-of-history-in-front-of-the-grand-egyptian-museum',
    },
    
	{
        heroUrl: 'https://cms.thebench.com/assets/content-library/img/WhatsApp-Image-2026-11-10-at-4.32.50-PM.jpeg',
        title: 'PARAGON | ADEER and Hilton Sign Cairo’s First Canopy at SumouBlvd',
        url: '/egypt/content-library/paragon-adeer-and-hilton-sign-cairos-first-canopy-at-sumoublvd',
    },
    
	{
        heroUrl: 'https://cms.thebench.com/assets/content-library/img/FHS-Egypt/WhatsApp-Image-2026-11-10-at-6.11.47-PM.jpeg',
        title: 'Radisson Hotel Group targets 30 properties in Egypt by 2030 with expansion across Greater Cairo, the North Coast and the Red Sea',
        url: '/egypt/content-library/radisson-hotel-group-targets-30-properties-in-egypt-by-2030-with-expansion-across-greater-cairo-the-north-coast-and-the-red-sea',
    },
    
	{
        heroUrl: 'https://cms.thebench.com/assets/content-library/img/FHS-Egypt/IMG_1755.JPG.jpeg',
        title: `Collaboration Between 'Accor', 'El Borolossy Real Estate Development', and 'BANN Holding' via 'iBrand' Business Consultancy to Launch the First Five-Star Mövenpick Hotel in New Mansoura City`,
        url: '/egypt/content-library/collaboration-between-accor-el-borolossy-real-estate-development-and-bann-holding-via-ibrand-business-consultancy-to-launch-the-first-five-star-mövenpick-hotel-in-new-mansoura-city',
    },
    
    

]
const SPEAKERS = [
    {
        "id": "RXZlbnRQZW9wbGVfNDc3MjUyNzA=",
        "type": null,
        "firstName": "Eng․ Tarek",
        "lastName": "Shoukry",
        "jobTitle": "Chairman of the Board of Directors, Real Estate Development Chamber, Federation of Egyptian Industries",
        "organization": "Arabia Holding",
        "photoUrl": "https://static.swapcard.com/public/images/73e89e7c31424fca892be5f0072b1d44.jpeg",
        "speakerOnPlannings": [
            {
                "id": "UGxhbm5pbmdfNDY2OTc0Mw==",
                "title": "From Vision to Destination: Unlocking Egypt’s Next Wave of Growth",
                "categories": [],
                "fields": [
                    {}
                ]
            }
        ],
        "withEvent": {
            "fields": [
                {
                    "translations": [
                        {
                            "value": "Construction",
                            "language": "en_US"
                        }
                    ],
                    "definition": {
                        "id": "RmllbGREZWZpbml0aW9uXzg5NTQ5OQ==",
                        "translations": [
                            {
                                "name": "Business Type",
                                "language": "en_US"
                            }
                        ]
                    }
                },
                {},
                {},
                {},
                {},
                {},
                {},
                {}
            ]
        }
    },
    {
        "id": "RXZlbnRQZW9wbGVfNDc1NjAzNDE=",
        "type": null,
        "firstName": "Maged",
        "lastName": "Salah El-Din",
        "jobTitle": "Chief Executive Officer",
        "organization": "Misr Abu Dhabi for Real Estate Investments",
        "photoUrl": "https://static.swapcard.com/public/images/fa643fd4a1c043e9980dd07e64bf8e87.jpeg",
        "speakerOnPlannings": [
            {
                "id": "UGxhbm5pbmdfNDQzNTU4NA==",
                "title": "From Global Shifts to Local Opportunity: What It Means for Hospitality Investment in Egypt",
                "categories": [],
                "fields": [
                    {}
                ]
            }
        ],
        "withEvent": {
            "fields": []
        }
    },
    {
        "id": "RXZlbnRQZW9wbGVfNDg2NTIwNTU=",
        "type": null,
        "firstName": "Mohamed",
        "lastName": "Amer",
        "jobTitle": null,
        "organization": "CEO of El Gouna & Managing Director at Orascom Development Egypt",
        "photoUrl": "https://static.swapcard.com/public/images/636cd02601f74bec870cd89b0b3698b5.jpeg",
        "speakerOnPlannings": [
            {
                "id": "UGxhbm5pbmdfNDU2MzIxMw==",
                "title": "From Sun-and-Sea to Integrated Destinations: The Next Chapter for the Red Sea",
                "categories": [],
                "fields": [
                    {}
                ]
            }
        ],
        "withEvent": {
            "fields": [
                {
                    "translations": [
                        {
                            "value": "Branded Residences / Extended Stays / Serviced Apartments",
                            "language": "en_US"
                        }
                    ],
                    "definition": {
                        "id": "RmllbGREZWZpbml0aW9uXzg5NTQ5OQ==",
                        "translations": [
                            {
                                "name": "Business Type",
                                "language": "en_US"
                            }
                        ]
                    }
                },
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {}
            ]
        }
    },
    {
        "id": "RXZlbnRQZW9wbGVfNDc5NTk1NTE=",
        "type": null,
        "firstName": "Nabil",
        "lastName": "Amasha",
        "jobTitle": "Co-founder & CEO",
        "organization": "People and Places",
        "photoUrl": "https://static.swapcard.com/public/images/45fe59d7390245d590e5bd37ef9c097c.jpeg",
        "speakerOnPlannings": [
            {
                "id": "UGxhbm5pbmdfNDU5NzQ5Mg==",
                "title": "Building Destinations: The Role of Hospitality in Egypt’s Mixed-Use Developments",
                "categories": [],
                "fields": [
                    {}
                ]
            }
        ],
        "withEvent": {
            "fields": [
                {
                    "translations": [
                        {
                            "value": "Branded Residences / Extended Stays / Serviced Apartments",
                            "language": "en_US"
                        }
                    ],
                    "definition": {
                        "id": "RmllbGREZWZpbml0aW9uXzg5NTQ5OQ==",
                        "translations": [
                            {
                                "name": "Business Type",
                                "language": "en_US"
                            }
                        ]
                    }
                },
                {}
            ]
        }
    },
    {
        "id": "RXZlbnRQZW9wbGVfNDgwNzM2NTc=",
        "type": null,
        "firstName": "Ahmed A.",
        "lastName": "El Wassief",
        "jobTitle": "Chairman & CEO",
        "organization": "Wings for Tourism Investment (WTI)",
        "photoUrl": "https://static.swapcard.com/public/images/20c705e4f39e4239a1d417f9f32311b0.jpeg",
        "speakerOnPlannings": [
            {
                "id": "UGxhbm5pbmdfNDQzNTU5OA==",
                "title": "The Golden Route: Crafting a Luxury Tourism Experience from Cairo to the Nile",
                "categories": [],
                "fields": [
                    {}
                ]
            }
        ],
        "withEvent": {
            "fields": [
                {
                    "translations": [
                        {
                            "value": "Hotel Operator / Management",
                            "language": "en_US"
                        }
                    ],
                    "definition": {
                        "id": "RmllbGREZWZpbml0aW9uXzg5NTQ5OQ==",
                        "translations": [
                            {
                                "name": "Business Type",
                                "language": "en_US"
                            }
                        ]
                    }
                },
                {}
            ]
        }
    },
    {
        "id": "RXZlbnRQZW9wbGVfNDc1NjIwNzQ=",
        "type": null,
        "firstName": "HE Ghada",
        "lastName": "Shalaby",
        "jobTitle": "Former Vice Minister, Ministry of Tourism and Antiquities",
        "organization": "The Arab Republic of Egypt",
        "photoUrl": "https://static.swapcard.com/public/images/1ecd0d3243fd4d5ea187c48a310f60c9.jpeg",
        "speakerOnPlannings": [
            {
                "id": "UGxhbm5pbmdfNDUxNjIwOQ==",
                "title": "Egypt: The Next Big Bet? Navigating Opportunity, Capital & Risk",
                "categories": [
                    "Investment and Real Estate"
                ],
                "fields": [
                    {
                        "id": "RmllbGRWYWx1ZV8yODMwNTgzMg==",
                        "definition": {
                            "isDefault": true,
                            "name": "Topics"
                        },
                        "value": "investment-and-real-estate",
                        "translations": [
                            {
                                "value": "Investment and Real Estate "
                            }
                        ]
                    },
                    {}
                ]
            },
            {
                "id": "UGxhbm5pbmdfNDY2OTc0Mw==",
                "title": "From Vision to Destination: Unlocking Egypt’s Next Wave of Growth",
                "categories": [],
                "fields": [
                    {}
                ]
            },
            {
                "id": "UGxhbm5pbmdfNDQzNTU5Nw==",
                "title": "Beyond the Monuments: Connecting Heritage, Communities and Places into a New Tourism Experience",
                "categories": [],
                "fields": [
                    {}
                ]
            }
        ],
        "withEvent": {
            "fields": [
                {
                    "translations": [
                        {
                            "value": "Government / Tourism Official",
                            "language": "en_US"
                        }
                    ],
                    "definition": {
                        "id": "RmllbGREZWZpbml0aW9uXzg5NTQ5OQ==",
                        "translations": [
                            {
                                "name": "Business Type",
                                "language": "en_US"
                            }
                        ]
                    }
                },
                {}
            ]
        }
    },
    {
        "id": "RXZlbnRQZW9wbGVfNDk3Njg0Njk=",
        "type": null,
        "firstName": "Elie",
        "lastName": "Younes",
        "jobTitle": "Global Chief Development Officer",
        "organization": "Radisson Hotel Group",
        "photoUrl": "https://static.swapcard.com/public/images/f227dbf17e4d4d29b4b9356884540bf6.jpeg",
        "speakerOnPlannings": [
            {
                "id": "UGxhbm5pbmdfMjExOTk5Mg==",
                "title": "TenX Leadership Talk: Leading with Purpose for Sustainable Success",
                "categories": [],
                "fields": [
                    {}
                ]
            },
            {
                "id": "UGxhbm5pbmdfNDQ3NTEyNg==",
                "title": "The Deal Engine: Driving Performance Through Smart Partnerships & Portfolio Strategy",
                "categories": [],
                "fields": [
                    {}
                ]
            },
            {
                "id": "UGxhbm5pbmdfNDY5MjA0OA==",
                "title": "Is the Industry Ready for Its Next Hospitality Boom?",
                "categories": [],
                "fields": [
                    {}
                ]
            }
        ],
        "withEvent": {
            "fields": [
                {
                    "translations": [
                        {
                            "value": "Hotel Operator / Management",
                            "language": "en_US"
                        }
                    ],
                    "definition": {
                        "id": "RmllbGREZWZpbml0aW9uXzg5NTQ5OQ==",
                        "translations": [
                            {
                                "name": "Business Type",
                                "language": "en_US"
                            }
                        ]
                    }
                },
                {},
                {}
            ]
        }
    },
    {
        "id": "RXZlbnRQZW9wbGVfNDcyMTA0Njg=",
        "type": null,
        "firstName": "Hala",
        "lastName": "Matar Choufany",
        "jobTitle": "President",
        "organization": "HVS Middle East, Africa and South Asia",
        "photoUrl": "https://static.swapcard.com/public/images/bb2123fc526246acb53b05cb6d2d7627.png",
        "speakerOnPlannings": [
            {
                "id": "UGxhbm5pbmdfOTM3MDc=",
                "title": "Arab women driving leadership",
                "categories": [],
                "fields": []
            },
            {
                "id": "UGxhbm5pbmdfMTUzMjk4OQ==",
                "title": "Building Hotels in a Challenging Environment: Navigating Rising Construction Costs, Funding Delays, and Higher Interest Rates for Hotel Development Projects",
                "categories": [],
                "fields": [
                    {}
                ]
            },
            {
                "id": "UGxhbm5pbmdfMTg2OTMyMw==",
                "title": "Brand Dilemma: Navigating the Pros and Cons of Launching New Brands – An unbiased Perspective",
                "categories": [
                    "Brand & Destination"
                ],
                "fields": [
                    {},
                    {
                        "id": "RmllbGRWYWx1ZV8yMzI1MzEyNw==",
                        "definition": {
                            "isDefault": true,
                            "name": "Topics"
                        },
                        "value": "brand-development",
                        "translations": [
                            {
                                "value": "Brand & Destination"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "UGxhbm5pbmdfMjAyNzcxNw==",
                "title": "Trailblazing Careers in Hospitality: Leading the Way",
                "categories": [
                    "Talks"
                ],
                "fields": [
                    {},
                    {
                        "id": "RmllbGRWYWx1ZV8yMzI1MzEyOA==",
                        "definition": {
                            "isDefault": true,
                            "name": "Topics"
                        },
                        "value": "data-and-digital-talks",
                        "translations": [
                            {
                                "value": "Talks"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "UGxhbm5pbmdfMjAyNzg4Ng==",
                "title": "EAHM Leadership Series: CEO for the Day",
                "categories": [],
                "fields": [
                    {}
                ]
            },
            {
                "id": "UGxhbm5pbmdfMjY3OTkyNA==",
                "title": "FHS Africa Excellence Award",
                "categories": [],
                "fields": [
                    {},
                    {}
                ]
            },
            {
                "id": "UGxhbm5pbmdfMjcyMjk5NA==",
                "title": "FHS Africa Excellence Award",
                "categories": [
                    "Awards"
                ],
                "fields": [
                    {},
                    {},
                    {
                        "id": "RmllbGRWYWx1ZV8yODY2Mjc2Mg==",
                        "definition": {
                            "isDefault": true,
                            "name": "Topics"
                        },
                        "value": "awards",
                        "translations": [
                            {
                                "value": "Awards"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "UGxhbm5pbmdfNDQ0NTg4NA==",
                "title": "From Data to Decisions: Turning Hotel Performance into Investment Insight",
                "categories": [
                    "Global Outlook"
                ],
                "fields": [
                    {},
                    {
                        "id": "RmllbGRWYWx1ZV8yODMwNTE0Mg==",
                        "definition": {
                            "isDefault": true,
                            "name": "Topics"
                        },
                        "value": "global-outlook",
                        "translations": [
                            {
                                "value": "Global Outlook"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "UGxhbm5pbmdfNDUxNjIwOQ==",
                "title": "Egypt: The Next Big Bet? Navigating Opportunity, Capital & Risk",
                "categories": [
                    "Investment and Real Estate"
                ],
                "fields": [
                    {
                        "id": "RmllbGRWYWx1ZV8yODMwNTgzMg==",
                        "definition": {
                            "isDefault": true,
                            "name": "Topics"
                        },
                        "value": "investment-and-real-estate",
                        "translations": [
                            {
                                "value": "Investment and Real Estate "
                            }
                        ]
                    },
                    {}
                ]
            },
            {
                "id": "UGxhbm5pbmdfNDQzNTU4NQ==",
                "title": "From Regulation to Results: Making Policy Work for Investors",
                "categories": [],
                "fields": [
                    {}
                ]
            },
            {
                "id": "UGxhbm5pbmdfNDcxODU0MQ==",
                "title": "Unpacking HVS Egypt Hospitality Investment & Market Sentiment Survey 2026",
                "categories": [],
                "fields": [
                    {}
                ]
            }
        ],
        "withEvent": {
            "fields": []
        }
    },
    {
        "id": "RXZlbnRQZW9wbGVfNDcyODc5NzY=",
        "type": null,
        "firstName": "Trevor",
        "lastName": "Ward",
        "jobTitle": "Managing Director",
        "organization": "W Hospitality Group",
        "photoUrl": "https://static.swapcard.com/public/images/136d76e425474e319018d787ca327ebc.jpeg",
        "speakerOnPlannings": [
            {
                "id": "UGxhbm5pbmdfOTI2MTg=",
                "title": "Regional Focus - Anglophone West Africa",
                "categories": [],
                "fields": []
            },
            {
                "id": "UGxhbm5pbmdfMTc4MzQzOA==",
                "title": "In the Pipeline",
                "categories": [],
                "fields": [
                    {},
                    {}
                ]
            },
            {
                "id": "UGxhbm5pbmdfMjAyNzczMw==",
                "title": "Shaping Tomorrow: What’s in the Pipeline for Africa's Booming Hospitality Market",
                "categories": [
                    "Focus on Africa"
                ],
                "fields": [
                    {},
                    {
                        "id": "RmllbGRWYWx1ZV8yNDM0OTA1NA==",
                        "definition": {
                            "isDefault": true,
                            "name": "Topics"
                        },
                        "value": "focus-on-africa",
                        "translations": [
                            {
                                "value": "Focus on Africa"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "UGxhbm5pbmdfMjAyNzczOA==",
                "title": "Guests' Quest for Unique Experiences: The African Approach to Authentic Leisure",
                "categories": [
                    "Focus on Africa"
                ],
                "fields": [
                    {},
                    {
                        "id": "RmllbGRWYWx1ZV8yNDM0OTA1NA==",
                        "definition": {
                            "isDefault": true,
                            "name": "Topics"
                        },
                        "value": "focus-on-africa",
                        "translations": [
                            {
                                "value": "Focus on Africa"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "UGxhbm5pbmdfMjU1NjkxOQ==",
                "title": "Tracking Africa's Hotel Openings in 2024",
                "categories": [],
                "fields": []
            },
            {
                "id": "UGxhbm5pbmdfMjU2ODE1OA==",
                "title": "Pipeline Watch: Investment Hotspots & the Future of Hospitality Expansion in Africa",
                "categories": [],
                "fields": [
                    {}
                ]
            },
            {
                "id": "UGxhbm5pbmdfMjk3MzgzMw==",
                "title": "From Paper to Progress: Pipeline Insights",
                "categories": [],
                "fields": [
                    {},
                    {}
                ]
            },
            {
                "id": "UGxhbm5pbmdfMjk3MzgyMQ==",
                "title": "Charting Franchise Growth: A Franchise Development Workshop for Africa",
                "categories": [],
                "fields": [
                    {},
                    {}
                ]
            },
            {
                "id": "UGxhbm5pbmdfNDQzNTYwMw==",
                "title": "Egypt’s Hotel Pipeline & What’s Next",
                "categories": [],
                "fields": [
                    {}
                ]
            },
            {
                "id": "UGxhbm5pbmdfNDUxODczMg==",
                "title": "The Franchise Blueprint: Driving Egypt's Hospitality Expansion",
                "categories": [],
                "fields": [
                    {}
                ]
            }
        ],
        "withEvent": {
            "fields": [
                {
                    "translations": [
                        {
                            "value": "Consulting / Advisor",
                            "language": "en_US"
                        }
                    ],
                    "definition": {
                        "id": "RmllbGREZWZpbml0aW9uXzg5NTQ5OQ==",
                        "translations": [
                            {
                                "name": "Business Type",
                                "language": "en_US"
                            }
                        ]
                    }
                },
                {},
                {},
                {},
                {}
            ]
        }
    },
    {
        "id": "RXZlbnRQZW9wbGVfNDcyMTAyNDk=",
        "type": null,
        "firstName": "Amr",
        "lastName": "El Nady",
        "jobTitle": "Head of Hotels & Hospitality MEA and Managing Director, Global Hotel Desk",
        "organization": "JLL",
        "photoUrl": "https://static.swapcard.com/public/images/982df6695622462cb476e3a7cc2650db.jpeg",
        "speakerOnPlannings": [
            {
                "id": "UGxhbm5pbmdfMTUzMzAxNQ==",
                "title": "Hotel Transactions: Insights for 2023",
                "categories": [],
                "fields": [
                    {}
                ]
            },
            {
                "id": "UGxhbm5pbmdfMTg0MjgwMg==",
                "title": "Diversifying the Economy: Strategies for Attracting Foreign Direct Investment and Achieving Vision 2030 Objectives through Innovative Funding Mechanisms",
                "categories": [
                    "Investment & Development"
                ],
                "fields": [
                    {},
                    {
                        "id": "RmllbGRWYWx1ZV8yMzI1MzEzNQ==",
                        "definition": {
                            "isDefault": true,
                            "name": "Topics"
                        },
                        "value": "investment",
                        "translations": [
                            {
                                "value": "Investment & Development"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "UGxhbm5pbmdfMjAyNzY0Nw==",
                "title": "Emergence of Real Estate Investment Trusts in the Middle East",
                "categories": [
                    "Global Investments"
                ],
                "fields": [
                    {},
                    {
                        "id": "RmllbGRWYWx1ZV8yNDU3Mjg5Mg==",
                        "definition": {
                            "isDefault": true,
                            "name": "Topics"
                        },
                        "value": "global-investments",
                        "translations": [
                            {
                                "value": "Global Investments"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "UGxhbm5pbmdfMjc0NDM5Ng==",
                "title": "The Middle East Playbook: How to Enter and Succeed in Hospitality Investment",
                "categories": [
                    "Investment and Real Estate"
                ],
                "fields": [
                    {},
                    {
                        "id": "RmllbGRWYWx1ZV8yODMwNTgzMg==",
                        "definition": {
                            "isDefault": true,
                            "name": "Topics"
                        },
                        "value": "investment-and-real-estate",
                        "translations": [
                            {
                                "value": "Investment and Real Estate "
                            }
                        ]
                    }
                ]
            },
            {
                "id": "UGxhbm5pbmdfMjYyODg3NQ==",
                "title": "Mapping the Money: Tracking Smart Capital in a Changing Hospitality Landscape",
                "categories": [
                    "Investment and Real Estate"
                ],
                "fields": [
                    {},
                    {
                        "id": "RmllbGRWYWx1ZV8yODMwNTgzMg==",
                        "definition": {
                            "isDefault": true,
                            "name": "Topics"
                        },
                        "value": "investment-and-real-estate",
                        "translations": [
                            {
                                "value": "Investment and Real Estate "
                            }
                        ]
                    },
                    {}
                ]
            },
            {
                "id": "UGxhbm5pbmdfNDQzNTU4NA==",
                "title": "From Global Shifts to Local Opportunity: What It Means for Hospitality Investment in Egypt",
                "categories": [],
                "fields": [
                    {}
                ]
            }
        ],
        "withEvent": {
            "fields": [
                {
                    "translations": [
                        {
                            "value": "Consulting / Advisor",
                            "language": "en_US"
                        }
                    ],
                    "definition": {
                        "id": "RmllbGREZWZpbml0aW9uXzg5NTQ5OQ==",
                        "translations": [
                            {
                                "name": "Business Type",
                                "language": "en_US"
                            }
                        ]
                    }
                },
                {},
                {},
                {},
                {},
                {}
            ]
        }
    },
    {
        "id": "RXZlbnRQZW9wbGVfNDcyMTAyMzY=",
        "type": null,
        "firstName": "Richard",
        "lastName": "Stevens",
        "jobTitle": "Group CEO",
        "organization": "Sectorlight",
        "photoUrl": "https://static.swapcard.com/public/images/b9975db8f5b840c89803ea7a02ec590c.jpeg",
        "speakerOnPlannings": [
            {
                "id": "UGxhbm5pbmdfMjAyNzgxOQ==",
                "title": "Marketing Case Studies - Short Presentations by Leading Marketing Professionals Who Have Helped Drive the Success of Branded Residence Projects",
                "categories": [
                    "Branded Residences Forum"
                ],
                "fields": [
                    {},
                    {
                        "id": "RmllbGRWYWx1ZV8yNDIzOTQ1MA==",
                        "definition": {
                            "isDefault": true,
                            "name": "Topics"
                        },
                        "value": "branded-residences-forum",
                        "translations": [
                            {
                                "value": "Branded Residences Forum"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "UGxhbm5pbmdfMjYxMDAxOQ==",
                "title": "Cognitive Marketing and the Power of Brand Magnetism",
                "categories": [],
                "fields": [
                    {}
                ]
            },
            {
                "id": "UGxhbm5pbmdfNDQ0NTk0MQ==",
                "title": "From Concept to Value Creation: The Branded Residences Playbook",
                "categories": [
                    "FHS Living"
                ],
                "fields": [
                    {},
                    {
                        "id": "RmllbGRWYWx1ZV8zMTQ4ODg1OA==",
                        "definition": {
                            "isDefault": true,
                            "name": "Topics"
                        },
                        "value": "fhs-living",
                        "translations": [
                            {
                                "value": "FHS Living"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "UGxhbm5pbmdfNDY0NjE4MQ==",
                "title": "The Branded Living Opportunity: Market Growth, Buyer Demand & What Comes Next",
                "categories": [
                    "FHS Living"
                ],
                "fields": [
                    {},
                    {
                        "id": "RmllbGRWYWx1ZV8zMTQ4ODg1OA==",
                        "definition": {
                            "isDefault": true,
                            "name": "Topics"
                        },
                        "value": "fhs-living",
                        "translations": [
                            {
                                "value": "FHS Living"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "UGxhbm5pbmdfNDY5MjA1MA==",
                "title": "The Power of the Brand: Marketing Branded Residences in a Competitive Holiday Home Market",
                "categories": [
                    "FHS Living"
                ],
                "fields": [
                    {},
                    {
                        "id": "RmllbGRWYWx1ZV8zMTQ4ODg1OA==",
                        "definition": {
                            "isDefault": true,
                            "name": "Topics"
                        },
                        "value": "fhs-living",
                        "translations": [
                            {
                                "value": "FHS Living"
                            }
                        ]
                    }
                ]
            }
        ],
        "withEvent": {
            "fields": [
                {
                    "translations": [
                        {
                            "value": "Branded Residences / Extended Stays / Serviced Apartments",
                            "language": "en_US"
                        }
                    ],
                    "definition": {
                        "id": "RmllbGREZWZpbml0aW9uXzg5NTQ5OQ==",
                        "translations": [
                            {
                                "name": "Business Type",
                                "language": "en_US"
                            }
                        ]
                    }
                },
                {},
                {},
                {},
                {},
                {}
            ]
        }
    },
    {
        "id": "RXZlbnRQZW9wbGVfNDc5MTIyMjE=",
        "type": null,
        "firstName": "Mohamed",
        "lastName": "Zaghloul",
        "jobTitle": "Board Member & VP of International Expansion & Hospitality Developments",
        "organization": "Egyptian Engineers Group (Zaghloul Holdings)",
        "photoUrl": "https://static.swapcard.com/public/images/c57c31dcff3c44289eb48058683894db.png",
        "speakerOnPlannings": [
            {
                "id": "UGxhbm5pbmdfNDQzNTU5Nw==",
                "title": "Beyond the Monuments: Connecting Heritage, Communities and Places into a New Tourism Experience",
                "categories": [],
                "fields": [
                    {}
                ]
            }
        ],
        "withEvent": {
            "fields": [
                {
                    "translations": [
                        {
                            "value": "Hotel Owner",
                            "language": "en_US"
                        }
                    ],
                    "definition": {
                        "id": "RmllbGREZWZpbml0aW9uXzg5NTQ5OQ==",
                        "translations": [
                            {
                                "name": "Business Type",
                                "language": "en_US"
                            }
                        ]
                    }
                },
                {},
                {},
                {}
            ]
        }
    },
    {
        "id": "RXZlbnRQZW9wbGVfNDk1OTYzODk=",
        "type": null,
        "firstName": "Daniel",
        "lastName": "von Barloewen",
        "jobTitle": "Senior Vice President, Global Mixed-Use Development",
        "organization": "Accor One Living, Accor",
        "photoUrl": "https://cdn-api.swapcard.com/public/images/5cf473e2ddec40608d2edc80e017428d.jpeg",
        "speakerOnPlannings": [
            {
                "id": "UGxhbm5pbmdfMTUzMzAyNA==",
                "title": "Branded Residential is Booming: Upfront Planning for Making Your Project a Success",
                "categories": [],
                "fields": [
                    {}
                ]
            },
            {
                "id": "UGxhbm5pbmdfMTgwOTM2Ng==",
                "title": "The Future of Hospitality Investments in Branded Residences, Co-Living, and Serviced Apartments in the Kingdom",
                "categories": [
                    "Investment & Development",
                    "Brand & Destination"
                ],
                "fields": [
                    {},
                    {
                        "id": "RmllbGRWYWx1ZV8yMzI1MzEyNw==",
                        "definition": {
                            "isDefault": true,
                            "name": "Topics"
                        },
                        "value": "brand-development",
                        "translations": [
                            {
                                "value": "Brand & Destination"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yMzI1MzEzNQ==",
                        "definition": {
                            "isDefault": true,
                            "name": "Topics"
                        },
                        "value": "investment",
                        "translations": [
                            {
                                "value": "Investment & Development"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "UGxhbm5pbmdfMjAyNzgxNw==",
                "title": "Operator Perspective - A Look at How Leading Operators of Branded Residences View their Relationship With Development Partners and Homeowner Communities",
                "categories": [
                    "Branded Residences Forum"
                ],
                "fields": [
                    {},
                    {
                        "id": "RmllbGRWYWx1ZV8yNDIzOTQ1MA==",
                        "definition": {
                            "isDefault": true,
                            "name": "Topics"
                        },
                        "value": "branded-residences-forum",
                        "translations": [
                            {
                                "value": "Branded Residences Forum"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "UGxhbm5pbmdfMjAyNzgyMw==",
                "title": "Structuring Rentals Programs to Appeal to Buyers, While Protecting the Interests of Hotel Owners & Developers",
                "categories": [
                    "Branded Residences Forum"
                ],
                "fields": [
                    {},
                    {
                        "id": "RmllbGRWYWx1ZV8yNDIzOTQ1MA==",
                        "definition": {
                            "isDefault": true,
                            "name": "Topics"
                        },
                        "value": "branded-residences-forum",
                        "translations": [
                            {
                                "value": "Branded Residences Forum"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "UGxhbm5pbmdfMjUzMzkxNQ==",
                "title": "Unveiling Market Trends: Insights into Branded Residences in the Kingdom",
                "categories": [
                    "Branded Residences"
                ],
                "fields": [
                    {},
                    {
                        "id": "RmllbGRWYWx1ZV8yNDU2NzA5MQ==",
                        "definition": {
                            "isDefault": true,
                            "name": "Topics"
                        },
                        "value": "branded-residences",
                        "translations": [
                            {
                                "value": "Branded Residences"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "UGxhbm5pbmdfMjU4NDQ5Nw==",
                "title": "Stakeholder perspectives – How do branded residences create value for investors, homeowners and brands",
                "categories": [
                    "Branded Residences"
                ],
                "fields": [
                    {},
                    {
                        "id": "RmllbGRWYWx1ZV8yNDU2NzA5MQ==",
                        "definition": {
                            "isDefault": true,
                            "name": "Topics"
                        },
                        "value": "branded-residences",
                        "translations": [
                            {
                                "value": "Branded Residences"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "UGxhbm5pbmdfMjcyMjc0Mw==",
                "title": "Maximizing Returns, Minimizing Risk: How to Optimize and Protect Value for Investors",
                "categories": [
                    "Branded Residences Forum"
                ],
                "fields": [
                    {},
                    {
                        "id": "RmllbGRWYWx1ZV8yNDIzOTQ1MA==",
                        "definition": {
                            "isDefault": true,
                            "name": "Topics"
                        },
                        "value": "branded-residences-forum",
                        "translations": [
                            {
                                "value": "Branded Residences Forum"
                            }
                        ]
                    },
                    {}
                ]
            },
            {
                "id": "UGxhbm5pbmdfNDQwNTUzOQ==",
                "title": "Branded Residences 2026: From Global Trends to Saudi Opportunity",
                "categories": [
                    "Branded Residences Forum"
                ],
                "fields": [
                    {},
                    {
                        "id": "RmllbGRWYWx1ZV8yNDIzOTQ1MA==",
                        "definition": {
                            "isDefault": true,
                            "name": "Topics"
                        },
                        "value": "branded-residences-forum",
                        "translations": [
                            {
                                "value": "Branded Residences Forum"
                            }
                        ]
                    },
                    {}
                ]
            },
            {
                "id": "UGxhbm5pbmdfNDQ3NzAyNQ==",
                "title": "The Cost of the Dream: Service Charges, Amenities & Ownership Economics in Branded Residences",
                "categories": [
                    "Branded Residences Forum"
                ],
                "fields": [
                    {
                        "id": "RmllbGRWYWx1ZV8yNDIzOTQ1MA==",
                        "definition": {
                            "isDefault": true,
                            "name": "Topics"
                        },
                        "value": "branded-residences-forum",
                        "translations": [
                            {
                                "value": "Branded Residences Forum"
                            }
                        ]
                    },
                    {}
                ]
            },
            {
                "id": "UGxhbm5pbmdfNDQ0NTk0MQ==",
                "title": "From Concept to Value Creation: The Branded Residences Playbook",
                "categories": [
                    "FHS Living"
                ],
                "fields": [
                    {},
                    {
                        "id": "RmllbGRWYWx1ZV8zMTQ4ODg1OA==",
                        "definition": {
                            "isDefault": true,
                            "name": "Topics"
                        },
                        "value": "fhs-living",
                        "translations": [
                            {
                                "value": "FHS Living"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "UGxhbm5pbmdfNDY5MjA0OQ==",
                "title": "Branded Residences Explained: Understanding the Concept and Its Global Rise",
                "categories": [
                    "FHS Living"
                ],
                "fields": [
                    {},
                    {
                        "id": "RmllbGRWYWx1ZV8zMTQ4ODg1OA==",
                        "definition": {
                            "isDefault": true,
                            "name": "Topics"
                        },
                        "value": "fhs-living",
                        "translations": [
                            {
                                "value": "FHS Living"
                            }
                        ]
                    }
                ]
            }
        ],
        "withEvent": {
            "fields": [
                {
                    "translations": [
                        {
                            "value": "Hotel Operator / Management",
                            "language": "en_US"
                        }
                    ],
                    "definition": {
                        "id": "RmllbGREZWZpbml0aW9uXzg5NTQ5OQ==",
                        "translations": [
                            {
                                "name": "Business Type",
                                "language": "en_US"
                            }
                        ]
                    }
                },
                {},
                {},
                {},
                {}
            ]
        }
    },
    {
        "id": "RXZlbnRQZW9wbGVfNDk4MTI0MDU=",
        "type": null,
        "firstName": "Maya",
        "lastName": "Ziade",
        "jobTitle": "Chief Development Officer PME MEAT",
        "organization": "Accor",
        "photoUrl": "https://static.swapcard.com/public/images/e6002ebef3da48d58056b6d73e6d695d.jpeg",
        "speakerOnPlannings": [
            {
                "id": "UGxhbm5pbmdfMTc1MDYwMA==",
                "title": "Breaking Barriers, Shaping the Future: Women in Tourism & Hospitality Leadership",
                "categories": [
                    "ESG & Human Capital"
                ],
                "fields": [
                    {},
                    {
                        "id": "RmllbGRWYWx1ZV8yMzI1MzEzMQ==",
                        "definition": {
                            "isDefault": true,
                            "name": "Topics"
                        },
                        "value": "esg",
                        "translations": [
                            {
                                "value": "ESG & Human Capital"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "UGxhbm5pbmdfMjcyMjcxMQ==",
                "title": "FHS Awards",
                "categories": [
                    "Awards"
                ],
                "fields": [
                    {},
                    {},
                    {
                        "id": "RmllbGRWYWx1ZV8yODY2Mjc2Mg==",
                        "definition": {
                            "isDefault": true,
                            "name": "Topics"
                        },
                        "value": "awards",
                        "translations": [
                            {
                                "value": "Awards"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "UGxhbm5pbmdfMjcyMzAwMw==",
                "title": "Affordable, Scalable, In Demand: The Midscale Hotel Evolution",
                "categories": [
                    "Investment and Real Estate"
                ],
                "fields": [
                    {},
                    {
                        "id": "RmllbGRWYWx1ZV8yODMwNTgzMg==",
                        "definition": {
                            "isDefault": true,
                            "name": "Topics"
                        },
                        "value": "investment-and-real-estate",
                        "translations": [
                            {
                                "value": "Investment and Real Estate "
                            }
                        ]
                    },
                    {}
                ]
            },
            {
                "id": "UGxhbm5pbmdfNDUxNjIwNQ==",
                "title": "From Pipeline to Partnership: What Owners Really Need from Brands",
                "categories": [
                    "Operations and Performance"
                ],
                "fields": [
                    {},
                    {
                        "id": "RmllbGRWYWx1ZV8zMTQ1MjY4Ng==",
                        "definition": {
                            "isDefault": true,
                            "name": "Topics"
                        },
                        "value": "operations-and-performance",
                        "translations": [
                            {
                                "value": "Operations and Performance"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "UGxhbm5pbmdfNDQzNTU4NQ==",
                "title": "From Regulation to Results: Making Policy Work for Investors",
                "categories": [],
                "fields": [
                    {}
                ]
            }
        ],
        "withEvent": {
            "fields": [
                {
                    "translations": [
                        {
                            "value": "Hotel Operator / Management",
                            "language": "en_US"
                        }
                    ],
                    "definition": {
                        "id": "RmllbGREZWZpbml0aW9uXzg5NTQ5OQ==",
                        "translations": [
                            {
                                "name": "Business Type",
                                "language": "en_US"
                            }
                        ]
                    }
                },
                {},
                {},
                {},
                {},
                {}
            ]
        }
    },
    {
        "id": "RXZlbnRQZW9wbGVfNTAwOTYyODE=",
        "type": null,
        "firstName": "Carlos",
        "lastName": "Khneisser",
        "jobTitle": "Chief Development Officer Middle East & Africa",
        "organization": "Hilton",
        "photoUrl": "https://cdn-api.swapcard.com/public/images/fd2d5fa65f704f1896360c6fd505e0ab.jpeg",
        "speakerOnPlannings": [
            {
                "id": "UGxhbm5pbmdfMTUzMjk4Ng==",
                "title": "Building Sustainable Hospitality: Setting the Scene for Hotel Development in the Middle East",
                "categories": [],
                "fields": [
                    {}
                ]
            },
            {
                "id": "UGxhbm5pbmdfMTgyMDAxOA==",
                "title": "Domestic Tourism in Secondary Cities: How Major Hotel Groups can help to Unlock New Opportunities?",
                "categories": [
                    "Investment & Development"
                ],
                "fields": [
                    {},
                    {
                        "id": "RmllbGRWYWx1ZV8yMzI1MzEzNQ==",
                        "definition": {
                            "isDefault": true,
                            "name": "Topics"
                        },
                        "value": "investment",
                        "translations": [
                            {
                                "value": "Investment & Development"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "UGxhbm5pbmdfMjAyNzU1MQ==",
                "title": "Emerging Lifestyle Brands: Bridging Luxury and Midscale Markets with Locally Inspired Experiences in New and Established Destinations",
                "categories": [
                    "Projects & Destinations",
                    "Branding Strategies"
                ],
                "fields": [
                    {},
                    {
                        "id": "RmllbGRWYWx1ZV8yNDIzNzQxMQ==",
                        "definition": {
                            "isDefault": true,
                            "name": "Topics"
                        },
                        "value": "destination-and-urban-development",
                        "translations": [
                            {
                                "value": "Projects & Destinations"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNDU3MzE3Mw==",
                        "definition": {
                            "isDefault": true,
                            "name": "Topics"
                        },
                        "value": "branding-strategies",
                        "translations": [
                            {
                                "value": "Branding Strategies"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "UGxhbm5pbmdfNDcxMzQxOQ==",
                "title": "Behind The Deal: Bringing Lifestyle Hospitality to Cairo",
                "categories": [],
                "fields": [
                    {}
                ]
            }
        ],
        "withEvent": {
            "fields": [
                {
                    "translations": [
                        {
                            "value": "Hotel Operator / Management",
                            "language": "en_US"
                        }
                    ],
                    "definition": {
                        "id": "RmllbGREZWZpbml0aW9uXzg5NTQ5OQ==",
                        "translations": [
                            {
                                "name": "Business Type",
                                "language": "en_US"
                            }
                        ]
                    }
                },
                {},
                {},
                {},
                {},
                {}
            ]
        }
    },
    {
        "id": "RXZlbnRQZW9wbGVfNDcyMTA0ODE=",
        "type": null,
        "firstName": "Michael",
        "lastName": "Aldridge",
        "jobTitle": "CEO & Founder",
        "organization": "KOFISI",
        "photoUrl": "https://static.swapcard.com/public/images/f0dd65faca8448f494c8d15cec73640a.jpeg",
        "speakerOnPlannings": [
            {
                "id": "UGxhbm5pbmdfMTc4MzQ1Nw==",
                "title": "Hotelification of the Workplace: Introducing a new asset class for hospitality investors on the continent",
                "categories": [],
                "fields": [
                    {},
                    {}
                ]
            },
            {
                "id": "UGxhbm5pbmdfMTk0MTUyOQ==",
                "title": "Redefining the Workplace: The Future of Hospitality-Driven Office Spaces",
                "categories": [],
                "fields": [
                    {},
                    {}
                ]
            },
            {
                "id": "UGxhbm5pbmdfNDQ2NDM2Ng==",
                "title": "The Rise of Hospitality-Driven Workspaces: Why the Best Offices Now Feel Like Hotels",
                "categories": [],
                "fields": [
                    {},
                    {}
                ]
            },
            {
                "id": "UGxhbm5pbmdfNDQ0NTkwMg==",
                "title": "The New Hospitality Map: Defining the Hospitality Asset Classes",
                "categories": [
                    "FHS Living"
                ],
                "fields": [
                    {},
                    {
                        "id": "RmllbGRWYWx1ZV8zMTQ4ODg1OA==",
                        "definition": {
                            "isDefault": true,
                            "name": "Topics"
                        },
                        "value": "fhs-living",
                        "translations": [
                            {
                                "value": "FHS Living"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "UGxhbm5pbmdfNDQ0NTkyMA==",
                "title": "The Rise of Hospitality-Driven Workspaces: Why the Best Offices Now Feel Like Hotels",
                "categories": [
                    "FHS Living"
                ],
                "fields": [
                    {},
                    {
                        "id": "RmllbGRWYWx1ZV8zMTQ4ODg1OA==",
                        "definition": {
                            "isDefault": true,
                            "name": "Topics"
                        },
                        "value": "fhs-living",
                        "translations": [
                            {
                                "value": "FHS Living"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "UGxhbm5pbmdfNDU2MzIxMg==",
                "title": "The Rise of Hospitality-Driven Workspaces: Why the Best Offices Now Feel Like Hotels",
                "categories": [],
                "fields": [
                    {}
                ]
            },
            {
                "id": "UGxhbm5pbmdfNDcxMTg1Nw==",
                "title": "The New Hospitality Economy: Where Real Estate Meets Experience",
                "categories": [],
                "fields": [
                    {}
                ]
            }
        ],
        "withEvent": {
            "fields": [
                {
                    "translations": [
                        {
                            "value": "Hotel Operator / Management",
                            "language": "en_US"
                        }
                    ],
                    "definition": {
                        "id": "RmllbGREZWZpbml0aW9uXzg5NTQ5OQ==",
                        "translations": [
                            {
                                "name": "Business Type",
                                "language": "en_US"
                            }
                        ]
                    }
                },
                {}
            ]
        }
    },
    {
        "id": "RXZlbnRQZW9wbGVfNTAyMTk3NDI=",
        "type": null,
        "firstName": "Olivier",
        "lastName": "Badard",
        "jobTitle": "Chief Executive Officer",
        "organization": "Millennium Hotels & Resorts MEA",
        "photoUrl": "https://static.swapcard.com/public/images/04b062f7ada8401aa05c5491f7a97d2a.jpeg",
        "speakerOnPlannings": [
            {
                "id": "UGxhbm5pbmdfNDY5MjA1MA==",
                "title": "The Power of the Brand: Marketing Branded Residences in a Competitive Holiday Home Market",
                "categories": [
                    "FHS Living"
                ],
                "fields": [
                    {},
                    {
                        "id": "RmllbGRWYWx1ZV8zMTQ4ODg1OA==",
                        "definition": {
                            "isDefault": true,
                            "name": "Topics"
                        },
                        "value": "fhs-living",
                        "translations": [
                            {
                                "value": "FHS Living"
                            }
                        ]
                    }
                ]
            }
        ],
        "withEvent": {
            "fields": [
                {
                    "translations": [
                        {
                            "value": "Hotel Operator / Management",
                            "language": "en_US"
                        }
                    ],
                    "definition": {
                        "id": "RmllbGREZWZpbml0aW9uXzg5NTQ5OQ==",
                        "translations": [
                            {
                                "name": "Business Type",
                                "language": "en_US"
                            }
                        ]
                    }
                },
                {},
                {},
                {},
                {},
                {},
                {}
            ]
        }
    },
    {
        "id": "RXZlbnRQZW9wbGVfNDg1Njk4Mjk=",
        "type": null,
        "firstName": "Samer",
        "lastName": "Alkharashi",
        "jobTitle": "Director of UN Tourism Regional Office for the Middle East",
        "organization": "UN Tourism",
        "photoUrl": "https://static.swapcard.com/public/images/e4147fbc5dfc4f3ebcbe09f2a400285e.jpeg",
        "speakerOnPlannings": [
            {
                "id": "UGxhbm5pbmdfNDUxOTEzNg==",
                "title": "The Global Travel Reset: Geopolitics, Feeder Markets and Egypt’s Tourism Opportunity",
                "categories": [],
                "fields": [
                    {}
                ]
            }
        ],
        "withEvent": {
            "fields": [
                {
                    "translations": [
                        {
                            "value": "Government / Tourism Official",
                            "language": "en_US"
                        }
                    ],
                    "definition": {
                        "id": "RmllbGREZWZpbml0aW9uXzg5NTQ5OQ==",
                        "translations": [
                            {
                                "name": "Business Type",
                                "language": "en_US"
                            }
                        ]
                    }
                },
                {},
                {},
                {},
                {},
                {},
                {},
                {}
            ]
        }
    },
    {
        "id": "RXZlbnRQZW9wbGVfNDkxNzM3MjI=",
        "type": null,
        "firstName": "Antony",
        "lastName": "Doucet",
        "jobTitle": "Chief Experience Officer",
        "organization": "Kerten Hospitality",
        "photoUrl": "https://static.swapcard.com/public/images/60bdecb61caa46cebf0fadd1decd310e.jpeg",
        "speakerOnPlannings": [
            {
                "id": "UGxhbm5pbmdfMjU4NDUwMw==",
                "title": "The Brand Advantage: How Branding Enhances Sales & Marketing in Residential Real Estate",
                "categories": [
                    "Branded Residences"
                ],
                "fields": [
                    {},
                    {
                        "id": "RmllbGRWYWx1ZV8yNDU2NzA5MQ==",
                        "definition": {
                            "isDefault": true,
                            "name": "Topics"
                        },
                        "value": "branded-residences",
                        "translations": [
                            {
                                "value": "Branded Residences"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "UGxhbm5pbmdfNDUzNTk0OA==",
                "title": "Stakeholder Perspectives: Creating Value Through Branded Residences",
                "categories": [
                    "FHS Living"
                ],
                "fields": [
                    {},
                    {
                        "id": "RmllbGRWYWx1ZV8zMTQ4ODg1OA==",
                        "definition": {
                            "isDefault": true,
                            "name": "Topics"
                        },
                        "value": "fhs-living",
                        "translations": [
                            {
                                "value": "FHS Living"
                            }
                        ]
                    }
                ]
            }
        ],
        "withEvent": {
            "fields": [
                {
                    "translations": [
                        {
                            "value": "Hotel Operator / Management",
                            "language": "en_US"
                        }
                    ],
                    "definition": {
                        "id": "RmllbGREZWZpbml0aW9uXzg5NTQ5OQ==",
                        "translations": [
                            {
                                "name": "Business Type",
                                "language": "en_US"
                            }
                        ]
                    }
                },
                {},
                {},
                {},
                {},
                {}
            ]
        }
    },
    {
        "id": "RXZlbnRQZW9wbGVfNDk5MDMyMTk=",
        "type": null,
        "firstName": "Merette",
        "lastName": "Elsayed",
        "jobTitle": "Chief Executive Officer, Legacy Development and Management",
        "organization": "Chief Commercial Officer, Hassan Allam Holding",
        "photoUrl": "https://static.swapcard.com/public/images/930906388b004e178ff5032270d142b3.jpeg",
        "speakerOnPlannings": [
            {
                "id": "UGxhbm5pbmdfNDQzNTU4NQ==",
                "title": "From Regulation to Results: Making Policy Work for Investors",
                "categories": [],
                "fields": [
                    {}
                ]
            }
        ],
        "withEvent": {
            "fields": [
                {
                    "translations": [
                        {
                            "value": "Government / Tourism Official",
                            "language": "en_US"
                        }
                    ],
                    "definition": {
                        "id": "RmllbGREZWZpbml0aW9uXzg5NTQ5OQ==",
                        "translations": [
                            {
                                "name": "Business Type",
                                "language": "en_US"
                            }
                        ]
                    }
                },
                {}
            ]
        }
    },
    {
        "id": "RXZlbnRQZW9wbGVfNTAxMDAyNzY=",
        "type": null,
        "firstName": "Stefan",
        "lastName": "Dubbeling",
        "jobTitle": "Managing Director Development EMEA",
        "organization": "WorldHotels",
        "photoUrl": "https://static.swapcard.com/public/images/35b739b84268424bbf02b9628cbf979e.jpeg",
        "speakerOnPlannings": [
            {
                "id": "UGxhbm5pbmdfNDQwNTgwNw==",
                "title": "New Cities, New Guests: Capturing Demand with Midscale Hotels in Saudi Arabia",
                "categories": [],
                "fields": [
                    {}
                ]
            },
            {
                "id": "UGxhbm5pbmdfNDUxNjIwMA==",
                "title": "Skin in the Game: The Future of Hospitality Operating Models",
                "categories": [
                    "Operations and Performance"
                ],
                "fields": [
                    {},
                    {
                        "id": "RmllbGRWYWx1ZV8zMTQ1MjY4Ng==",
                        "definition": {
                            "isDefault": true,
                            "name": "Topics"
                        },
                        "value": "operations-and-performance",
                        "translations": [
                            {
                                "value": "Operations and Performance"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "UGxhbm5pbmdfNDQzNTYwNA==",
                "title": "The Egypt Playbook: Lessons from the World's Leading Hotel Operators",
                "categories": [],
                "fields": [
                    {}
                ]
            }
        ],
        "withEvent": {
            "fields": [
                {
                    "translations": [
                        {
                            "value": "Hotel Developer",
                            "language": "en_US"
                        }
                    ],
                    "definition": {
                        "id": "RmllbGREZWZpbml0aW9uXzg5NTQ5OQ==",
                        "translations": [
                            {
                                "name": "Business Type",
                                "language": "en_US"
                            }
                        ]
                    }
                },
                {},
                {},
                {}
            ]
        }
    },
    {
        "id": "RXZlbnRQZW9wbGVfNDgwMDc5NTQ=",
        "type": null,
        "firstName": "Ihab",
        "lastName": "Gohar",
        "jobTitle": "Chairman & Co-founder",
        "organization": "Mediahub MENA",
        "photoUrl": "https://static.swapcard.com/public/images/3fc582fc8ac7467d9c8deb2ef22c71da.jpeg",
        "speakerOnPlannings": [
            {
                "id": "UGxhbm5pbmdfNDQzNTU5Nw==",
                "title": "Beyond the Monuments: Connecting Heritage, Communities and Places into a New Tourism Experience",
                "categories": [],
                "fields": [
                    {}
                ]
            }
        ],
        "withEvent": {
            "fields": [
                {
                    "translations": [
                        {
                            "value": "Media & PR",
                            "language": "en_US"
                        }
                    ],
                    "definition": {
                        "id": "RmllbGREZWZpbml0aW9uXzg5NTQ5OQ==",
                        "translations": [
                            {
                                "name": "Business Type",
                                "language": "en_US"
                            }
                        ]
                    }
                },
                {}
            ]
        }
    },
    {
        "id": "RXZlbnRQZW9wbGVfNDg1Njk3MDU=",
        "type": null,
        "firstName": "Mohamad",
        "lastName": "Haj Hassan",
        "jobTitle": "Managing Director - MEA",
        "organization": "Wyndham Hotels and Resorts",
        "photoUrl": "https://static.swapcard.com/public/images/3c064eb4ff4541f7a037a0f37495608f.jpeg",
        "speakerOnPlannings": [
            {
                "id": "UGxhbm5pbmdfNDQwNTgwNw==",
                "title": "New Cities, New Guests: Capturing Demand with Midscale Hotels in Saudi Arabia",
                "categories": [],
                "fields": [
                    {}
                ]
            },
            {
                "id": "UGxhbm5pbmdfNDQzNTYwNA==",
                "title": "The Egypt Playbook: Lessons from the World's Leading Hotel Operators",
                "categories": [],
                "fields": [
                    {}
                ]
            }
        ],
        "withEvent": {
            "fields": [
                {
                    "translations": [
                        {
                            "value": "Hotel Operator / Management",
                            "language": "en_US"
                        }
                    ],
                    "definition": {
                        "id": "RmllbGREZWZpbml0aW9uXzg5NTQ5OQ==",
                        "translations": [
                            {
                                "name": "Business Type",
                                "language": "en_US"
                            }
                        ]
                    }
                },
                {},
                {},
                {},
                {},
                {}
            ]
        }
    },
    {
        "id": "RXZlbnRQZW9wbGVfNTAxNDE0NzE=",
        "type": null,
        "firstName": "Prof. Hossam",
        "lastName": "Abdel Ghaffar",
        "jobTitle": "Assistant for Institutional Reform, Political Communication, Parliamentary Affairs and Media Official Spokesperson",
        "organization": "Ministry of Health and Population Arab Republic of Egypt",
        "photoUrl": "https://static.swapcard.com/public/images/89cac132c4e54aa7a596918fde5bc0fa.jpeg",
        "speakerOnPlannings": [
            {
                "id": "UGxhbm5pbmdfNDcxMDQ2Mg==",
                "title": "From Healthcare to Hospitality: Investing in Egypt’s Health Tourism Economy",
                "categories": [],
                "fields": [
                    {}
                ]
            }
        ],
        "withEvent": {
            "fields": [
                {
                    "translations": [
                        {
                            "value": "Government / Tourism Official",
                            "language": "en_US"
                        }
                    ],
                    "definition": {
                        "id": "RmllbGREZWZpbml0aW9uXzg5NTQ5OQ==",
                        "translations": [
                            {
                                "name": "Business Type",
                                "language": "en_US"
                            }
                        ]
                    }
                },
                {}
            ]
        }
    },
    {
        "id": "RXZlbnRQZW9wbGVfNDk2MzM5MDM=",
        "type": null,
        "firstName": "Maha",
        "lastName": "Abdel Razek",
        "jobTitle": "Chief Executive Officer",
        "organization": "Misr Real Estate Assets Management",
        "photoUrl": "https://static.swapcard.com/public/images/35c61b01e2504d79b0c43db509140cc2.webp",
        "speakerOnPlannings": [
            {
                "id": "UGxhbm5pbmdfNDQzNTU4NQ==",
                "title": "From Regulation to Results: Making Policy Work for Investors",
                "categories": [],
                "fields": [
                    {}
                ]
            }
        ],
        "withEvent": {
            "fields": [
                {
                    "translations": [
                        {
                            "value": "Asset Manager",
                            "language": "en_US"
                        }
                    ],
                    "definition": {
                        "id": "RmllbGREZWZpbml0aW9uXzg5NTQ5OQ==",
                        "translations": [
                            {
                                "name": "Business Type",
                                "language": "en_US"
                            }
                        ]
                    }
                },
                {}
            ]
        }
    },
    {
        "id": "RXZlbnRQZW9wbGVfNTAwOTYyMzI=",
        "type": null,
        "firstName": "Ziad",
        "lastName": "Abi Raad",
        "jobTitle": "Senior Director of Development for the Middle East & Africa",
        "organization": "IHG Hotels & Resorts",
        "photoUrl": "https://static.swapcard.com/public/images/5b39d2c2faaf4c919db1cac4642ed8dc.jpeg",
        "speakerOnPlannings": [
            {
                "id": "UGxhbm5pbmdfNDUxODczMg==",
                "title": "The Franchise Blueprint: Driving Egypt's Hospitality Expansion",
                "categories": [],
                "fields": [
                    {}
                ]
            }
        ],
        "withEvent": {
            "fields": [
                {
                    "translations": [
                        {
                            "value": "Hotel Operator / Management",
                            "language": "en_US"
                        }
                    ],
                    "definition": {
                        "id": "RmllbGREZWZpbml0aW9uXzg5NTQ5OQ==",
                        "translations": [
                            {
                                "name": "Business Type",
                                "language": "en_US"
                            }
                        ]
                    }
                },
                {},
                {},
                {},
                {},
                {}
            ]
        }
    },
    {
        "id": "RXZlbnRQZW9wbGVfNDk4MzA0NTk=",
        "type": null,
        "firstName": "Victor",
        "lastName": "Abou-Ghanem",
        "jobTitle": "Chief Executive Officer",
        "organization": "Story Hospitality",
        "photoUrl": "https://static.swapcard.com/public/images/c2e9a27561804eb6acac9ed27c5c6f98.jpeg",
        "speakerOnPlannings": [
            {
                "id": "UGxhbm5pbmdfMjQ3NjQ5MA==",
                "title": "From White Label Operators, Franchising to Traditional Management Agreements  - What is the Future?",
                "categories": [
                    "Investment & Development"
                ],
                "fields": [
                    {},
                    {
                        "id": "RmllbGRWYWx1ZV8yMzI1MzEzNQ==",
                        "definition": {
                            "isDefault": true,
                            "name": "Topics"
                        },
                        "value": "investment",
                        "translations": [
                            {
                                "value": "Investment & Development"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "UGxhbm5pbmdfNDQzNTYwNA==",
                "title": "The Egypt Playbook: Lessons from the World's Leading Hotel Operators",
                "categories": [],
                "fields": [
                    {}
                ]
            }
        ],
        "withEvent": {
            "fields": [
                {
                    "translations": [
                        {
                            "value": "Hotel Operator / Management",
                            "language": "en_US"
                        }
                    ],
                    "definition": {
                        "id": "RmllbGREZWZpbml0aW9uXzg5NTQ5OQ==",
                        "translations": [
                            {
                                "name": "Business Type",
                                "language": "en_US"
                            }
                        ]
                    }
                },
                {},
                {},
                {},
                {},
                {},
                {}
            ]
        }
    },
    {
        "id": "RXZlbnRQZW9wbGVfNTA0ODA4MTk=",
        "type": null,
        "firstName": "Eng․ Mohamed Mahmoud",
        "lastName": "Aboutaleb",
        "jobTitle": "Chief Executive Officer",
        "organization": "Modon Misr for Asset and Facility Management",
        "photoUrl": "https://static.swapcard.com/public/images/e5a04f8e2c1f4823983adbed0441bc79.jpeg",
        "speakerOnPlannings": [
            {
                "id": "UGxhbm5pbmdfNDY2OTc0Mw==",
                "title": "From Vision to Destination: Unlocking Egypt’s Next Wave of Growth",
                "categories": [],
                "fields": [
                    {}
                ]
            }
        ],
        "withEvent": {
            "fields": [
                {
                    "translations": [
                        {
                            "value": "Asset Manager",
                            "language": "en_US"
                        }
                    ],
                    "definition": {
                        "id": "RmllbGREZWZpbml0aW9uXzg5NTQ5OQ==",
                        "translations": [
                            {
                                "name": "Business Type",
                                "language": "en_US"
                            }
                        ]
                    }
                },
                {}
            ]
        }
    },
    {
        "id": "RXZlbnRQZW9wbGVfNDgzNTgxMTE=",
        "type": null,
        "firstName": "Prof. Dr. Ola",
        "lastName": "Adel Abdelgawad",
        "jobTitle": "Vice President for International Affairs",
        "organization": "King Salman International University",
        "photoUrl": "https://static.swapcard.com/public/images/e8b1d61e80ae478b8630300864875fc7.png",
        "speakerOnPlannings": [
            {
                "id": "UGxhbm5pbmdfNDU3MjYxMw==",
                "title": "People Power: Building the Talent Behind Egypt’s Hospitality Pipeline",
                "categories": [],
                "fields": [
                    {}
                ]
            }
        ],
        "withEvent": {
            "fields": [
                {
                    "translations": [
                        {
                            "value": "Education",
                            "language": "en_US"
                        }
                    ],
                    "definition": {
                        "id": "RmllbGREZWZpbml0aW9uXzg5NTQ5OQ==",
                        "translations": [
                            {
                                "name": "Business Type",
                                "language": "en_US"
                            }
                        ]
                    }
                },
                {}
            ]
        }
    },
    {
        "id": "RXZlbnRQZW9wbGVfNDgwODc4NjU=",
        "type": null,
        "firstName": "Scott",
        "lastName": "Antel",
        "jobTitle": "Founder & Owner",
        "organization": "Scott's FZ LLE",
        "photoUrl": "https://static.swapcard.com/public/images/f8adc05652d6499bb38ba9f43560f107.png",
        "speakerOnPlannings": [
            {
                "id": "UGxhbm5pbmdfMTUzMjk5Mw==",
                "title": "Turning the Tables: Hard Talk of Stephen Sackur on his view of Global Journalism in a Changing World",
                "categories": [],
                "fields": [
                    {}
                ]
            },
            {
                "id": "UGxhbm5pbmdfMTUzMzAyNA==",
                "title": "Branded Residential is Booming: Upfront Planning for Making Your Project a Success",
                "categories": [],
                "fields": [
                    {}
                ]
            },
            {
                "id": "UGxhbm5pbmdfMTgwOTM2Ng==",
                "title": "The Future of Hospitality Investments in Branded Residences, Co-Living, and Serviced Apartments in the Kingdom",
                "categories": [
                    "Investment & Development",
                    "Brand & Destination"
                ],
                "fields": [
                    {},
                    {
                        "id": "RmllbGRWYWx1ZV8yMzI1MzEyNw==",
                        "definition": {
                            "isDefault": true,
                            "name": "Topics"
                        },
                        "value": "brand-development",
                        "translations": [
                            {
                                "value": "Brand & Destination"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yMzI1MzEzNQ==",
                        "definition": {
                            "isDefault": true,
                            "name": "Topics"
                        },
                        "value": "investment",
                        "translations": [
                            {
                                "value": "Investment & Development"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "UGxhbm5pbmdfMTkwMjE5NQ==",
                "title": "Management Agreements and Franchise Models as Viable Strategies in Emerging Markets?",
                "categories": [],
                "fields": [
                    {},
                    {}
                ]
            },
            {
                "id": "UGxhbm5pbmdfMjAyNzgyNA==",
                "title": "Legal Structures: Protecting Interests of Investors, Purchasers & Brands",
                "categories": [
                    "Branded Residences Forum"
                ],
                "fields": [
                    {},
                    {
                        "id": "RmllbGRWYWx1ZV8yNDIzOTQ1MA==",
                        "definition": {
                            "isDefault": true,
                            "name": "Topics"
                        },
                        "value": "branded-residences-forum",
                        "translations": [
                            {
                                "value": "Branded Residences Forum"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "UGxhbm5pbmdfMjQ3NjQ5MA==",
                "title": "From White Label Operators, Franchising to Traditional Management Agreements  - What is the Future?",
                "categories": [
                    "Investment & Development"
                ],
                "fields": [
                    {},
                    {
                        "id": "RmllbGRWYWx1ZV8yMzI1MzEzNQ==",
                        "definition": {
                            "isDefault": true,
                            "name": "Topics"
                        },
                        "value": "investment",
                        "translations": [
                            {
                                "value": "Investment & Development"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "UGxhbm5pbmdfMjU3NDg1OA==",
                "title": "Top 10 things to know about investing in Hospitality in Africa",
                "categories": [],
                "fields": [
                    {},
                    {}
                ]
            },
            {
                "id": "UGxhbm5pbmdfMjU3NDg2MA==",
                "title": "Ownership Strategies Decoded: Franchise vs. Management Agreements Explained",
                "categories": [],
                "fields": [
                    {},
                    {}
                ]
            },
            {
                "id": "UGxhbm5pbmdfMjYxNjAwNQ==",
                "title": "Loyalty Beyond Stays: Creating Lifetime Value for Branded Residence Owners",
                "categories": [],
                "fields": [
                    {}
                ]
            },
            {
                "id": "UGxhbm5pbmdfMjcyMjczNg==",
                "title": "Negotiating with Operators: Mastering Contract Structures for Maximizing Returns",
                "categories": [
                    "Investment and Real Estate"
                ],
                "fields": [
                    {},
                    {
                        "id": "RmllbGRWYWx1ZV8yODMwNTgzMg==",
                        "definition": {
                            "isDefault": true,
                            "name": "Topics"
                        },
                        "value": "investment-and-real-estate",
                        "translations": [
                            {
                                "value": "Investment and Real Estate "
                            }
                        ]
                    }
                ]
            },
            {
                "id": "UGxhbm5pbmdfNDM0MzM1NQ==",
                "title": "How do Africa and the GCC fit into the current global turmoil?",
                "categories": [],
                "fields": []
            },
            {
                "id": "UGxhbm5pbmdfMjk3MzgyMQ==",
                "title": "Charting Franchise Growth: A Franchise Development Workshop for Africa",
                "categories": [],
                "fields": [
                    {},
                    {}
                ]
            },
            {
                "id": "UGxhbm5pbmdfMjk3MzgzOQ==",
                "title": "The Branded Residence Masterclass",
                "categories": [],
                "fields": [
                    {},
                    {}
                ]
            },
            {
                "id": "UGxhbm5pbmdfNDQwNTU0MA==",
                "title": "Who’s in Charge? Developing Branded Residences for Long-Term Gain",
                "categories": [
                    "Branded Residences Forum"
                ],
                "fields": [
                    {
                        "id": "RmllbGRWYWx1ZV8yNDIzOTQ1MA==",
                        "definition": {
                            "isDefault": true,
                            "name": "Topics"
                        },
                        "value": "branded-residences-forum",
                        "translations": [
                            {
                                "value": "Branded Residences Forum"
                            }
                        ]
                    },
                    {}
                ]
            },
            {
                "id": "UGxhbm5pbmdfNDQ3NzAyNQ==",
                "title": "The Cost of the Dream: Service Charges, Amenities & Ownership Economics in Branded Residences",
                "categories": [
                    "Branded Residences Forum"
                ],
                "fields": [
                    {
                        "id": "RmllbGRWYWx1ZV8yNDIzOTQ1MA==",
                        "definition": {
                            "isDefault": true,
                            "name": "Topics"
                        },
                        "value": "branded-residences-forum",
                        "translations": [
                            {
                                "value": "Branded Residences Forum"
                            }
                        ]
                    },
                    {}
                ]
            },
            {
                "id": "UGxhbm5pbmdfNDQ0NTkzMA==",
                "title": "USALI 2026: New Rules, New Insights, Better Owner Decisions",
                "categories": [
                    "Operations and Performance"
                ],
                "fields": [
                    {},
                    {
                        "id": "RmllbGRWYWx1ZV8zMTQ1MjY4Ng==",
                        "definition": {
                            "isDefault": true,
                            "name": "Topics"
                        },
                        "value": "operations-and-performance",
                        "translations": [
                            {
                                "value": "Operations and Performance"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "UGxhbm5pbmdfNDUxODczMg==",
                "title": "The Franchise Blueprint: Driving Egypt's Hospitality Expansion",
                "categories": [],
                "fields": [
                    {}
                ]
            }
        ],
        "withEvent": {
            "fields": [
                {
                    "translations": [
                        {
                            "value": "Lawyer",
                            "language": "en_US"
                        }
                    ],
                    "definition": {
                        "id": "RmllbGREZWZpbml0aW9uXzg5NTQ5OQ==",
                        "translations": [
                            {
                                "name": "Business Type",
                                "language": "en_US"
                            }
                        ]
                    }
                },
                {},
                {},
                {}
            ]
        }
    },
    {
        "id": "RXZlbnRQZW9wbGVfNDk5NzYxMzk=",
        "type": null,
        "firstName": "Ewan",
        "lastName": "Cameron",
        "jobTitle": "Director Africa",
        "organization": "Westmont Hospitality Group",
        "photoUrl": "https://static.swapcard.com/public/images/9e83a74b2080463db4b5e7dcbca10c28.jpeg",
        "speakerOnPlannings": [
            {
                "id": "UGxhbm5pbmdfNDMyMjQ1Mg==",
                "title": "Global Geopolitics, Local Impact: What Today’s Shifts Mean for Hospitality Investment in Africa",
                "categories": [],
                "fields": [
                    {},
                    {}
                ]
            },
            {
                "id": "UGxhbm5pbmdfNDQzNTU4NA==",
                "title": "From Global Shifts to Local Opportunity: What It Means for Hospitality Investment in Egypt",
                "categories": [],
                "fields": [
                    {}
                ]
            }
        ],
        "withEvent": {
            "fields": [
                {
                    "translations": [
                        {
                            "value": "Hotel Owner",
                            "language": "en_US"
                        }
                    ],
                    "definition": {
                        "id": "RmllbGREZWZpbml0aW9uXzg5NTQ5OQ==",
                        "translations": [
                            {
                                "name": "Business Type",
                                "language": "en_US"
                            }
                        ]
                    }
                },
                {}
            ]
        }
    },
    {
        "id": "RXZlbnRQZW9wbGVfNDk3OTk1MzI=",
        "type": null,
        "firstName": "Jack",
        "lastName": "Cloke",
        "jobTitle": "Development Manager",
        "organization": "Accor One Living",
        "photoUrl": "https://static.swapcard.com/public/images/f4e30c70fba349dca9708e55f125e268.jpeg",
        "speakerOnPlannings": [
            {
                "id": "UGxhbm5pbmdfNDUzNTk0OA==",
                "title": "Stakeholder Perspectives: Creating Value Through Branded Residences",
                "categories": [
                    "FHS Living"
                ],
                "fields": [
                    {},
                    {
                        "id": "RmllbGRWYWx1ZV8zMTQ4ODg1OA==",
                        "definition": {
                            "isDefault": true,
                            "name": "Topics"
                        },
                        "value": "fhs-living",
                        "translations": [
                            {
                                "value": "FHS Living"
                            }
                        ]
                    }
                ]
            }
        ],
        "withEvent": {
            "fields": [
                {
                    "translations": [
                        {
                            "value": "Branded Residences / Extended Stays / Serviced Apartments",
                            "language": "en_US"
                        }
                    ],
                    "definition": {
                        "id": "RmllbGREZWZpbml0aW9uXzg5NTQ5OQ==",
                        "translations": [
                            {
                                "name": "Business Type",
                                "language": "en_US"
                            }
                        ]
                    }
                },
                {}
            ]
        }
    },
    {
        "id": "RXZlbnRQZW9wbGVfNDk5NTg0ODY=",
        "type": null,
        "firstName": "Fiona",
        "lastName": "Craw",
        "jobTitle": "VP Development - Africa",
        "organization": "Westmont Hospitality Group",
        "photoUrl": "https://static.swapcard.com/public/images/ff20c262a64e418b8c727a848ba0ea13.png",
        "speakerOnPlannings": [
            {
                "id": "UGxhbm5pbmdfNDMyOTQxMg==",
                "title": "From Signing to Opening: The Only Metric That Matters in Development",
                "categories": [],
                "fields": [
                    {},
                    {}
                ]
            },
            {
                "id": "UGxhbm5pbmdfNDQzNTU5OQ==",
                "title": "From Coast to Coast: Rethinking the Year-Round Destination Equation",
                "categories": [],
                "fields": [
                    {}
                ]
            }
        ],
        "withEvent": {
            "fields": [
                {
                    "translations": [
                        {
                            "value": "Hotel Owner",
                            "language": "en_US"
                        }
                    ],
                    "definition": {
                        "id": "RmllbGREZWZpbml0aW9uXzg5NTQ5OQ==",
                        "translations": [
                            {
                                "name": "Business Type",
                                "language": "en_US"
                            }
                        ]
                    }
                },
                {},
                {},
                {}
            ]
        }
    },
    {
        "id": "RXZlbnRQZW9wbGVfNDc3MjY2NzQ=",
        "type": null,
        "firstName": "Fritz",
        "lastName": "Dickamp",
        "jobTitle": "Managing Director",
        "organization": "Studio 49",
        "photoUrl": "https://static.swapcard.com/public/images/bec5d4872ae247eda6413599ffdce247.jpeg",
        "speakerOnPlannings": [
            {
                "id": "UGxhbm5pbmdfMTUzMzA0Mg==",
                "title": "How will you 'Lead The Change'?",
                "categories": [],
                "fields": [
                    {}
                ]
            },
            {
                "id": "UGxhbm5pbmdfMTUzMjk5MQ==",
                "title": "Embracing the Era of the Digital Traveler: Transforming Hotel Operations for the Future",
                "categories": [],
                "fields": [
                    {}
                ]
            },
            {
                "id": "UGxhbm5pbmdfMTU3NjUxNw==",
                "title": "EAHM Leadership Series - Creating Harmony: Aligning People, Planet, and Future Growth in Hospitality",
                "categories": [],
                "fields": [
                    {}
                ]
            },
            {
                "id": "UGxhbm5pbmdfMTc5MjI0NA==",
                "title": "Welcome to the Data Talks",
                "categories": [
                    "Talks"
                ],
                "fields": [
                    {},
                    {
                        "id": "RmllbGRWYWx1ZV8yMzI1MzEyOA==",
                        "definition": {
                            "isDefault": true,
                            "name": "Topics"
                        },
                        "value": "data-and-digital-talks",
                        "translations": [
                            {
                                "value": "Talks"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "UGxhbm5pbmdfMTg5MDk1Nw==",
                "title": "Welcome to the Digital Talks",
                "categories": [
                    "Talks",
                    "Technology & Innovation"
                ],
                "fields": [
                    {},
                    {
                        "id": "RmllbGRWYWx1ZV8yMzI1MzEyOA==",
                        "definition": {
                            "isDefault": true,
                            "name": "Topics"
                        },
                        "value": "data-and-digital-talks",
                        "translations": [
                            {
                                "value": "Talks"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yMzI1MzEzOQ==",
                        "definition": {
                            "isDefault": true,
                            "name": "Topics"
                        },
                        "value": "technology-and-innovation",
                        "translations": [
                            {
                                "value": "Technology & Innovation"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "UGxhbm5pbmdfMjAyNzgwNw==",
                "title": "Back to Basics: Addressing Key Bottlenecks in Hospitality Innovation Before Advancing to Advanced Technologies",
                "categories": [
                    "Technology & Innovation"
                ],
                "fields": [
                    {},
                    {
                        "id": "RmllbGRWYWx1ZV8yMzI1MzEzOQ==",
                        "definition": {
                            "isDefault": true,
                            "name": "Topics"
                        },
                        "value": "technology-and-innovation",
                        "translations": [
                            {
                                "value": "Technology & Innovation"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "UGxhbm5pbmdfMjA0OTQxOA==",
                "title": "Cyber Resilience in Hospitality: Future-proofing your Data",
                "categories": [
                    "Technology & Innovation"
                ],
                "fields": [
                    {},
                    {
                        "id": "RmllbGRWYWx1ZV8yMzI1MzEzOQ==",
                        "definition": {
                            "isDefault": true,
                            "name": "Topics"
                        },
                        "value": "technology-and-innovation",
                        "translations": [
                            {
                                "value": "Technology & Innovation"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "UGxhbm5pbmdfMjYyODg5OQ==",
                "title": "TenX Leadership Talk: Driving Change Across a Continent",
                "categories": [
                    "Global Outlook"
                ],
                "fields": [
                    {},
                    {
                        "id": "RmllbGRWYWx1ZV8yODMwNTE0Mg==",
                        "definition": {
                            "isDefault": true,
                            "name": "Topics"
                        },
                        "value": "global-outlook",
                        "translations": [
                            {
                                "value": "Global Outlook"
                            }
                        ]
                    },
                    {}
                ]
            },
            {
                "id": "UGxhbm5pbmdfMjYyODkyMw==",
                "title": "From Neighbourhood Gems to Five-Star Plates: How Local Concepts Are Transforming Hotel Dining",
                "categories": [
                    "F&B Experience"
                ],
                "fields": [
                    {},
                    {
                        "id": "RmllbGRWYWx1ZV8yODMwNTgzMw==",
                        "definition": {
                            "isDefault": true,
                            "name": "Topics"
                        },
                        "value": "f-and-b-experience",
                        "translations": [
                            {
                                "value": "F&B Experience"
                            }
                        ]
                    },
                    {}
                ]
            },
            {
                "id": "UGxhbm5pbmdfNDUxNjIyOQ==",
                "title": "Educating Tomorrow's Hospitality Leaders: Rethinking Tourism Education for a Changing World",
                "categories": [
                    "NextGen Talent & Hospitality Education"
                ],
                "fields": [
                    {
                        "id": "RmllbGRWYWx1ZV8yNjYzMzYxMQ==",
                        "definition": {
                            "isDefault": true,
                            "name": "Topics"
                        },
                        "value": "nextgen-talent-and-hospitality-education",
                        "translations": [
                            {
                                "value": "NextGen Talent & Hospitality Education"
                            }
                        ]
                    },
                    {}
                ]
            },
            {
                "id": "UGxhbm5pbmdfNDU4NTg2Ng==",
                "title": "When You’ve Seen It All: What Does It Take to Impress the World’s Most Traveled People?",
                "categories": [
                    "FHS Living"
                ],
                "fields": [
                    {},
                    {
                        "id": "RmllbGRWYWx1ZV8zMTQ4ODg1OA==",
                        "definition": {
                            "isDefault": true,
                            "name": "Topics"
                        },
                        "value": "fhs-living",
                        "translations": [
                            {
                                "value": "FHS Living"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "UGxhbm5pbmdfNDcxMzQxOQ==",
                "title": "Behind The Deal: Bringing Lifestyle Hospitality to Cairo",
                "categories": [],
                "fields": [
                    {}
                ]
            },
            {
                "id": "UGxhbm5pbmdfNDU3MjYxMw==",
                "title": "People Power: Building the Talent Behind Egypt’s Hospitality Pipeline",
                "categories": [],
                "fields": [
                    {}
                ]
            },
            {
                "id": "UGxhbm5pbmdfNDcxMTg1Nw==",
                "title": "The New Hospitality Economy: Where Real Estate Meets Experience",
                "categories": [],
                "fields": [
                    {}
                ]
            }
        ],
        "withEvent": {
            "fields": [
                {
                    "translations": [
                        {
                            "value": "Media & PR",
                            "language": "en_US"
                        }
                    ],
                    "definition": {
                        "id": "RmllbGREZWZpbml0aW9uXzg5NTQ5OQ==",
                        "translations": [
                            {
                                "name": "Business Type",
                                "language": "en_US"
                            }
                        ]
                    }
                },
                {},
                {},
                {},
                {}
            ]
        }
    },
    {
        "id": "RXZlbnRQZW9wbGVfNDcyMTAyNjU=",
        "type": null,
        "firstName": "Heba",
        "lastName": "El Dessouky",
        "jobTitle": "Hospitality Innovations Director",
        "organization": "Mountain View Developments",
        "photoUrl": "https://static.swapcard.com/public/images/f55037c4cafe431e850d9dea73c86571.jpeg",
        "speakerOnPlannings": [
            {
                "id": "UGxhbm5pbmdfNDcxODU0MQ==",
                "title": "Unpacking HVS Egypt Hospitality Investment & Market Sentiment Survey 2026",
                "categories": [],
                "fields": [
                    {}
                ]
            },
            {
                "id": "UGxhbm5pbmdfNDU5NzQ5Mg==",
                "title": "Building Destinations: The Role of Hospitality in Egypt’s Mixed-Use Developments",
                "categories": [],
                "fields": [
                    {}
                ]
            }
        ],
        "withEvent": {
            "fields": [
                {
                    "translations": [
                        {
                            "value": "Hotel Developer",
                            "language": "en_US"
                        }
                    ],
                    "definition": {
                        "id": "RmllbGREZWZpbml0aW9uXzg5NTQ5OQ==",
                        "translations": [
                            {
                                "name": "Business Type",
                                "language": "en_US"
                            }
                        ]
                    }
                },
                {}
            ]
        }
    },
    {
        "id": "RXZlbnRQZW9wbGVfNTA3NTA3ODE=",
        "type": null,
        "firstName": "Adel",
        "lastName": "El Gendy",
        "jobTitle": "Assistant Secretary General",
        "organization": "Prime Minister's Officer - National Council for Health Tourism",
        "photoUrl": "https://static.swapcard.com/public/images/0899ab73c7134ccc82c3dc27bb395509.jpeg",
        "speakerOnPlannings": [
            {
                "id": "UGxhbm5pbmdfNDcxMDQ2Mg==",
                "title": "From Healthcare to Hospitality: Investing in Egypt’s Health Tourism Economy",
                "categories": [],
                "fields": [
                    {}
                ]
            }
        ],
        "withEvent": {
            "fields": []
        }
    },
    {
        "id": "RXZlbnRQZW9wbGVfNDk2ODg3NDY=",
        "type": null,
        "firstName": "Shadi",
        "lastName": "El Ghoneimi",
        "jobTitle": "Managing Partner, Design Principal",
        "organization": "EL GHONEIMI International",
        "photoUrl": "https://static.swapcard.com/public/images/2a70fc81d6634b9db382a80037b7e38c.jpeg",
        "speakerOnPlannings": [
            {
                "id": "UGxhbm5pbmdfNDQzNTU5OA==",
                "title": "The Golden Route: Crafting a Luxury Tourism Experience from Cairo to the Nile",
                "categories": [],
                "fields": [
                    {}
                ]
            }
        ],
        "withEvent": {
            "fields": [
                {
                    "translations": [
                        {
                            "value": "Architecture & Design",
                            "language": "en_US"
                        }
                    ],
                    "definition": {
                        "id": "RmllbGREZWZpbml0aW9uXzg5NTQ5OQ==",
                        "translations": [
                            {
                                "name": "Business Type",
                                "language": "en_US"
                            }
                        ]
                    }
                },
                {},
                {},
                {},
                {},
                {}
            ]
        }
    },
    {
        "id": "RXZlbnRQZW9wbGVfNDg2MDY2OTQ=",
        "type": null,
        "firstName": "Mo",
        "lastName": "El Hadi",
        "jobTitle": "Associate Account Director, Middle East & Africa",
        "organization": "STR, a CoStar Group Company",
        "photoUrl": "https://static.swapcard.com/public/images/139c2b3168f147a0b45ee506e5ded538.jpeg",
        "speakerOnPlannings": [
            {
                "id": "UGxhbm5pbmdfNDQzNTU4Nw==",
                "title": "Setting the Scene for Hotel Performance and Development in Egypt",
                "categories": [],
                "fields": [
                    {}
                ]
            }
        ],
        "withEvent": {
            "fields": [
                {
                    "translations": [
                        {
                            "value": "Consulting / Advisor",
                            "language": "en_US"
                        }
                    ],
                    "definition": {
                        "id": "RmllbGREZWZpbml0aW9uXzg5NTQ5OQ==",
                        "translations": [
                            {
                                "name": "Business Type",
                                "language": "en_US"
                            }
                        ]
                    }
                },
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {}
            ]
        }
    },
    {
        "id": "RXZlbnRQZW9wbGVfNTAyMDY0Njk=",
        "type": null,
        "firstName": "Ibrahim",
        "lastName": "El Missiri",
        "jobTitle": "Group CEO",
        "organization": "Somabay",
        "photoUrl": "https://static.swapcard.com/public/images/c834ba13f35f4529b7296ecb67b3d93d.jpeg",
        "speakerOnPlannings": [
            {
                "id": "UGxhbm5pbmdfNDUzNTk0OA==",
                "title": "Stakeholder Perspectives: Creating Value Through Branded Residences",
                "categories": [
                    "FHS Living"
                ],
                "fields": [
                    {},
                    {
                        "id": "RmllbGRWYWx1ZV8zMTQ4ODg1OA==",
                        "definition": {
                            "isDefault": true,
                            "name": "Topics"
                        },
                        "value": "fhs-living",
                        "translations": [
                            {
                                "value": "FHS Living"
                            }
                        ]
                    }
                ]
            }
        ],
        "withEvent": {
            "fields": [
                {
                    "translations": [
                        {
                            "value": "Hotel Developer",
                            "language": "en_US"
                        }
                    ],
                    "definition": {
                        "id": "RmllbGREZWZpbml0aW9uXzg5NTQ5OQ==",
                        "translations": [
                            {
                                "name": "Business Type",
                                "language": "en_US"
                            }
                        ]
                    }
                },
                {},
                {},
                {},
                {}
            ]
        }
    },
    {
        "id": "RXZlbnRQZW9wbGVfNDg5MTMyODY=",
        "type": null,
        "firstName": "Jessy",
        "lastName": "El Murr",
        "jobTitle": "Jessy El Murr,  Former BBC Journalist | Managing Director & Founder",
        "organization": "Motahadith L․L.C",
        "photoUrl": "https://static.swapcard.com/public/images/04471469685a4bc5bdda3ee7c22b0a33.jpeg",
        "speakerOnPlannings": [
            {
                "id": "UGxhbm5pbmdfMjQ3NjM4OA==",
                "title": "Welcome to FHS Saudi Arabia 2025",
                "categories": [],
                "fields": [
                    {}
                ]
            },
            {
                "id": "UGxhbm5pbmdfMjUzNTg4NQ==",
                "title": "How Is Saudi Arabia Preparing for a Tourism Transformation to Connect Travelers Locally and Globally?",
                "categories": [
                    "Focus on Saudi Arabia"
                ],
                "fields": [
                    {},
                    {
                        "id": "RmllbGRWYWx1ZV8yNDU2NzE4OQ==",
                        "definition": {
                            "isDefault": true,
                            "name": "Topics"
                        },
                        "value": "focus-on-saudi-arabia",
                        "translations": [
                            {
                                "value": "Focus on Saudi Arabia"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "UGxhbm5pbmdfMjU2MDQ4OA==",
                "title": "TenX Leadership Talk: The Future of Mid-Scale & Upscale Hospitality in Saudi Arabia’s Transforming Tourism Sector",
                "categories": [
                    "Investment, Finance & Real Estate",
                    "Focus on Saudi Arabia"
                ],
                "fields": [
                    {},
                    {
                        "id": "RmllbGRWYWx1ZV8yNDU2NzE4OQ==",
                        "definition": {
                            "isDefault": true,
                            "name": "Topics"
                        },
                        "value": "focus-on-saudi-arabia",
                        "translations": [
                            {
                                "value": "Focus on Saudi Arabia"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNjYzMzY3Mw==",
                        "definition": {
                            "isDefault": true,
                            "name": "Topics"
                        },
                        "value": "investment-finance-and-real-estate",
                        "translations": [
                            {
                                "value": "Investment, Finance & Real Estate "
                            }
                        ]
                    }
                ]
            },
            {
                "id": "UGxhbm5pbmdfMjQ3NjQwMQ==",
                "title": "Welcome Back",
                "categories": [],
                "fields": [
                    {}
                ]
            },
            {
                "id": "UGxhbm5pbmdfMjU4NDQ5MA==",
                "title": "How to Make a Brand Last?",
                "categories": [],
                "fields": [
                    {}
                ]
            },
            {
                "id": "UGxhbm5pbmdfNDQwNTU1Mg==",
                "title": "Welcome to FHS Saudi Arabia 2026",
                "categories": [],
                "fields": [
                    {}
                ]
            },
            {
                "id": "UGxhbm5pbmdfNDQ3ODEzOQ==",
                "title": "Against the Odds: Why Development Isn’t Slowing Down",
                "categories": [],
                "fields": [
                    {}
                ]
            },
            {
                "id": "UGxhbm5pbmdfNDQ3NTEyNg==",
                "title": "The Deal Engine: Driving Performance Through Smart Partnerships & Portfolio Strategy",
                "categories": [],
                "fields": [
                    {}
                ]
            },
            {
                "id": "UGxhbm5pbmdfNDQyMDY3Mw==",
                "title": "Welcome Back",
                "categories": [],
                "fields": [
                    {}
                ]
            },
            {
                "id": "UGxhbm5pbmdfNDQwNjYzMg==",
                "title": "Reinventing All-Inclusive: How Resorts Are Meeting the New Demand for Premium, Personalised Control",
                "categories": [],
                "fields": [
                    {}
                ]
            },
            {
                "id": "UGxhbm5pbmdfNDQzNTU4Mg==",
                "title": "Welcome to FHS Egypt 2026",
                "categories": [],
                "fields": [
                    {}
                ]
            },
            {
                "id": "UGxhbm5pbmdfNDY0NjE2Mg==",
                "title": "The Economic Outlook: Global Forces, Egypt’s Growth Story & Hospitality Investment",
                "categories": [],
                "fields": [
                    {}
                ]
            },
            {
                "id": "UGxhbm5pbmdfNDY5MjA0OA==",
                "title": "Is the Industry Ready for Its Next Hospitality Boom?",
                "categories": [],
                "fields": [
                    {}
                ]
            },
            {
                "id": "UGxhbm5pbmdfNDU5NzQ5MQ==",
                "title": "Beyond the Space: Designing Destinations and Delivering the Experience",
                "categories": [],
                "fields": [
                    {}
                ]
            },
            {
                "id": "UGxhbm5pbmdfNDU2MzIxMw==",
                "title": "From Sun-and-Sea to Integrated Destinations: The Next Chapter for the Red Sea",
                "categories": [],
                "fields": [
                    {}
                ]
            }
        ],
        "withEvent": {
            "fields": [
                {
                    "translations": [
                        {
                            "value": "Education",
                            "language": "en_US"
                        }
                    ],
                    "definition": {
                        "id": "RmllbGREZWZpbml0aW9uXzg5NTQ5OQ==",
                        "translations": [
                            {
                                "name": "Business Type",
                                "language": "en_US"
                            }
                        ]
                    }
                },
                {},
                {},
                {},
                {}
            ]
        }
    },
    {
        "id": "RXZlbnRQZW9wbGVfNTA2MTg0MDA=",
        "type": null,
        "firstName": "Mostafa",
        "lastName": "El Nahawy",
        "jobTitle": "CEO & Co-Founder",
        "organization": "Birdnest",
        "photoUrl": "https://static.swapcard.com/public/images/3f3c6561d01b42bf953fa5ae4f7744a1.jpeg",
        "speakerOnPlannings": [
            {
                "id": "UGxhbm5pbmdfNDQzNTU5OQ==",
                "title": "From Coast to Coast: Rethinking the Year-Round Destination Equation",
                "categories": [],
                "fields": [
                    {}
                ]
            }
        ],
        "withEvent": {
            "fields": [
                {
                    "translations": [
                        {
                            "value": "Branded Residences / Extended Stays / Serviced Apartments",
                            "language": "en_US"
                        }
                    ],
                    "definition": {
                        "id": "RmllbGREZWZpbml0aW9uXzg5NTQ5OQ==",
                        "translations": [
                            {
                                "name": "Business Type",
                                "language": "en_US"
                            }
                        ]
                    }
                },
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {}
            ]
        }
    },
    {
        "id": "RXZlbnRQZW9wbGVfNDcyOTM2MjU=",
        "type": null,
        "firstName": "Makram",
        "lastName": "El Zyr",
        "jobTitle": "Corporate Vice President, Development",
        "organization": "Rotana",
        "photoUrl": "https://static.swapcard.com/public/images/279894cd04ef4ef58263e17dc958e5f1.jpeg",
        "speakerOnPlannings": [
            {
                "id": "UGxhbm5pbmdfMTc1MDU4NA==",
                "title": "Brand Dilemma: Navigating the Pros and Cons of Launching New Brands – A Strategic Exploration for Hospitality Decision-Makers",
                "categories": [
                    "Brand & Destination"
                ],
                "fields": [
                    {},
                    {
                        "id": "RmllbGRWYWx1ZV8yMzI1MzEyNw==",
                        "definition": {
                            "isDefault": true,
                            "name": "Topics"
                        },
                        "value": "brand-development",
                        "translations": [
                            {
                                "value": "Brand & Destination"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "UGxhbm5pbmdfNDQwNTc3Mg==",
                "title": "From Ambition to Execution: The Playbook for Growth in Saudi Hospitality",
                "categories": [],
                "fields": [
                    {}
                ]
            },
            {
                "id": "UGxhbm5pbmdfNDQzNTYwNA==",
                "title": "The Egypt Playbook: Lessons from the World's Leading Hotel Operators",
                "categories": [],
                "fields": [
                    {}
                ]
            }
        ],
        "withEvent": {
            "fields": [
                {
                    "translations": [
                        {
                            "value": "Hotel Operator / Management",
                            "language": "en_US"
                        }
                    ],
                    "definition": {
                        "id": "RmllbGREZWZpbml0aW9uXzg5NTQ5OQ==",
                        "translations": [
                            {
                                "name": "Business Type",
                                "language": "en_US"
                            }
                        ]
                    }
                },
                {},
                {},
                {}
            ]
        }
    },
    {
        "id": "RXZlbnRQZW9wbGVfNDk2MzU4Mjc=",
        "type": null,
        "firstName": "Hala",
        "lastName": "El-Khatib",
        "jobTitle": "Executive Director",
        "organization": "Egyptian Tourism Federation",
        "photoUrl": "https://static.swapcard.com/public/images/de14a80d9e2b4ba0896fca5e484a4c3f.jpeg",
        "speakerOnPlannings": [
            {
                "id": "UGxhbm5pbmdfNDU3MjYxMw==",
                "title": "People Power: Building the Talent Behind Egypt’s Hospitality Pipeline",
                "categories": [],
                "fields": [
                    {}
                ]
            }
        ],
        "withEvent": {
            "fields": [
                {
                    "translations": [
                        {
                            "value": "Government / Tourism Official",
                            "language": "en_US"
                        }
                    ],
                    "definition": {
                        "id": "RmllbGREZWZpbml0aW9uXzg5NTQ5OQ==",
                        "translations": [
                            {
                                "name": "Business Type",
                                "language": "en_US"
                            }
                        ]
                    }
                },
                {},
                {},
                {}
            ]
        }
    },
    {
        "id": "RXZlbnRQZW9wbGVfNTAzODU4Nzk=",
        "type": "Moderator;Speaker",
        "firstName": "Adham",
        "lastName": "Elbedewy",
        "jobTitle": "Vice President",
        "organization": "Brassbell Hospitality Group",
        "photoUrl": "https://static.swapcard.com/public/images/ca16cdc536274ddba3e1de5ae19e49dc.jpeg",
        "speakerOnPlannings": [
            {
                "id": "UGxhbm5pbmdfNDQzNTU5OQ==",
                "title": "From Coast to Coast: Rethinking the Year-Round Destination Equation",
                "categories": [],
                "fields": [
                    {}
                ]
            }
        ],
        "withEvent": {
            "fields": [
                {
                    "translations": [
                        {
                            "value": "Moderator;Speaker",
                            "language": "en_US"
                        }
                    ],
                    "definition": {
                        "id": "RmllbGREZWZpbml0aW9uXzMxMzIwOQ==",
                        "translations": [
                            {
                                "name": "Type",
                                "language": "en_US"
                            }
                        ]
                    }
                },
                {
                    "translations": [
                        {
                            "value": "Hotel Developer",
                            "language": "en_US"
                        }
                    ],
                    "definition": {
                        "id": "RmllbGREZWZpbml0aW9uXzg5NTQ5OQ==",
                        "translations": [
                            {
                                "name": "Business Type",
                                "language": "en_US"
                            }
                        ]
                    }
                },
                {},
                {},
                {},
                {},
                {},
                {}
            ]
        }
    },
    {
        "id": "RXZlbnRQZW9wbGVfNDg1NzAyOTI=",
        "type": null,
        "firstName": "Sherif",
        "lastName": "Erian",
        "jobTitle": "Chief Executive Officer",
        "organization": "Aga Khan Cultural Services - Egypt",
        "photoUrl": "https://static.swapcard.com/public/images/44621a3c27614b879f41dd5945a2badd.jpeg",
        "speakerOnPlannings": [
            {
                "id": "UGxhbm5pbmdfNDQzNTU5Nw==",
                "title": "Beyond the Monuments: Connecting Heritage, Communities and Places into a New Tourism Experience",
                "categories": [],
                "fields": [
                    {}
                ]
            }
        ],
        "withEvent": {
            "fields": [
                {
                    "translations": [
                        {
                            "value": "Government / Tourism Official",
                            "language": "en_US"
                        }
                    ],
                    "definition": {
                        "id": "RmllbGREZWZpbml0aW9uXzg5NTQ5OQ==",
                        "translations": [
                            {
                                "name": "Business Type",
                                "language": "en_US"
                            }
                        ]
                    }
                },
                {},
                {},
                {},
                {}
            ]
        }
    },
    {
        "id": "RXZlbnRQZW9wbGVfNDcyMTA1MDE=",
        "type": null,
        "firstName": "Ayman",
        "lastName": "Ezzeddine",
        "jobTitle": "Senior Director Development",
        "organization": "Radisson Hotel Group",
        "photoUrl": "https://static.swapcard.com/public/images/cd660435b9de4ef9b27bd1a0d3a6821a.jpeg",
        "speakerOnPlannings": [
            {
                "id": "UGxhbm5pbmdfMjQ3NjQxOA==",
                "title": "Balancing Growth: Unlocking the Potential of Mid-Market Hospitality in Saudi Arabia's Luxury Landscape",
                "categories": [
                    "Investment & Development",
                    "Focus on Saudi Arabia"
                ],
                "fields": [
                    {},
                    {
                        "id": "RmllbGRWYWx1ZV8yMzI1MzEzNQ==",
                        "definition": {
                            "isDefault": true,
                            "name": "Topics"
                        },
                        "value": "investment",
                        "translations": [
                            {
                                "value": "Investment & Development"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNDU2NzE4OQ==",
                        "definition": {
                            "isDefault": true,
                            "name": "Topics"
                        },
                        "value": "focus-on-saudi-arabia",
                        "translations": [
                            {
                                "value": "Focus on Saudi Arabia"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "UGxhbm5pbmdfMjYyODkwOA==",
                "title": "Investing in Mixed-Use Real Estate: Strategies for Maximizing Value in Modern Developments",
                "categories": [
                    "Investment and Real Estate"
                ],
                "fields": [
                    {},
                    {
                        "id": "RmllbGRWYWx1ZV8yODMwNTgzMg==",
                        "definition": {
                            "isDefault": true,
                            "name": "Topics"
                        },
                        "value": "investment-and-real-estate",
                        "translations": [
                            {
                                "value": "Investment and Real Estate "
                            }
                        ]
                    },
                    {}
                ]
            },
            {
                "id": "UGxhbm5pbmdfNDU5NzQ5Mg==",
                "title": "Building Destinations: The Role of Hospitality in Egypt’s Mixed-Use Developments",
                "categories": [],
                "fields": [
                    {}
                ]
            }
        ],
        "withEvent": {
            "fields": [
                {
                    "translations": [
                        {
                            "value": "Hotel Operator / Management",
                            "language": "en_US"
                        }
                    ],
                    "definition": {
                        "id": "RmllbGREZWZpbml0aW9uXzg5NTQ5OQ==",
                        "translations": [
                            {
                                "name": "Business Type",
                                "language": "en_US"
                            }
                        ]
                    }
                },
                {},
                {},
                {},
                {},
                {}
            ]
        }
    },
    {
        "id": "RXZlbnRQZW9wbGVfNDg4NzM0Nzc=",
        "type": null,
        "firstName": "Lars",
        "lastName": "Geweyer",
        "jobTitle": "Chief Executive Officer",
        "organization": "ADD Properties - Hospitality Division",
        "photoUrl": "https://static.swapcard.com/public/images/a743faa22604446c8f07a7b65323867d.jpeg",
        "speakerOnPlannings": [
            {
                "id": "UGxhbm5pbmdfNDU5NzQ5Mg==",
                "title": "Building Destinations: The Role of Hospitality in Egypt’s Mixed-Use Developments",
                "categories": [],
                "fields": [
                    {}
                ]
            }
        ],
        "withEvent": {
            "fields": [
                {
                    "translations": [
                        {
                            "value": "Hotel Operator / Management",
                            "language": "en_US"
                        }
                    ],
                    "definition": {
                        "id": "RmllbGREZWZpbml0aW9uXzg5NTQ5OQ==",
                        "translations": [
                            {
                                "name": "Business Type",
                                "language": "en_US"
                            }
                        ]
                    }
                },
                {},
                {},
                {},
                {},
                {}
            ]
        }
    },
    {
        "id": "RXZlbnRQZW9wbGVfNDc2OTA1NTU=",
        "type": null,
        "firstName": "Ahmed",
        "lastName": "Ghoneim",
        "jobTitle": "Chief Executive Officer",
        "organization": "Grand Egyptian Musuem",
        "photoUrl": "https://static.swapcard.com/public/images/e1b4aeda27fb43609353ea8f4cd72e1d.png",
        "speakerOnPlannings": [],
        "withEvent": {
            "fields": [
                {
                    "translations": [
                        {
                            "value": "Government / Tourism Official",
                            "language": "en_US"
                        }
                    ],
                    "definition": {
                        "id": "RmllbGREZWZpbml0aW9uXzg5NTQ5OQ==",
                        "translations": [
                            {
                                "name": "Business Type",
                                "language": "en_US"
                            }
                        ]
                    }
                },
                {}
            ]
        }
    },
    {
        "id": "RXZlbnRQZW9wbGVfNDcyMTAyMzE=",
        "type": null,
        "firstName": "Gary",
        "lastName": "Greene",
        "jobTitle": "Principal",
        "organization": "Gary Greene Design",
        "photoUrl": "https://static.swapcard.com/public/images/87d9968a24524ab298b74dc49bab160b.png",
        "speakerOnPlannings": [
            {
                "id": "UGxhbm5pbmdfNDMyMjQ1Ng==",
                "title": "Coastal Reset: Redefining Coastal Development for the Long Term",
                "categories": [],
                "fields": [
                    {},
                    {}
                ]
            },
            {
                "id": "UGxhbm5pbmdfNDU2NDgxMg==",
                "title": "From Wellness to Living: Building the Middle East’s Next Generation of Healthy Communities",
                "categories": [
                    "Lifestyle and Wellness"
                ],
                "fields": [
                    {},
                    {
                        "id": "RmllbGRWYWx1ZV8yODMwNTgzMQ==",
                        "definition": {
                            "isDefault": true,
                            "name": "Topics"
                        },
                        "value": "lifestyle-and-wellness",
                        "translations": [
                            {
                                "value": "Lifestyle and Wellness "
                            }
                        ]
                    }
                ]
            },
            {
                "id": "UGxhbm5pbmdfNDU5NzQ5Mg==",
                "title": "Building Destinations: The Role of Hospitality in Egypt’s Mixed-Use Developments",
                "categories": [],
                "fields": [
                    {}
                ]
            }
        ],
        "withEvent": {
            "fields": [
                {
                    "translations": [
                        {
                            "value": "Architecture & Design",
                            "language": "en_US"
                        }
                    ],
                    "definition": {
                        "id": "RmllbGREZWZpbml0aW9uXzg5NTQ5OQ==",
                        "translations": [
                            {
                                "name": "Business Type",
                                "language": "en_US"
                            }
                        ]
                    }
                },
                {},
                {},
                {}
            ]
        }
    },
    {
        "id": "RXZlbnRQZW9wbGVfNTAxMjQyMzM=",
        "type": null,
        "firstName": "Gauthier",
        "lastName": "Guillaume",
        "jobTitle": "Founder & Chief Visionary Officer",
        "organization": "GG&Grace International",
        "photoUrl": "https://static.swapcard.com/public/images/7538faa1452442f8b1e882229ae4c9fd.jpeg",
        "speakerOnPlannings": [
            {
                "id": "UGxhbm5pbmdfNDQzNTU5OA==",
                "title": "The Golden Route: Crafting a Luxury Tourism Experience from Cairo to the Nile",
                "categories": [],
                "fields": [
                    {}
                ]
            }
        ],
        "withEvent": {
            "fields": [
                {
                    "translations": [
                        {
                            "value": "Architecture & Design",
                            "language": "en_US"
                        }
                    ],
                    "definition": {
                        "id": "RmllbGREZWZpbml0aW9uXzg5NTQ5OQ==",
                        "translations": [
                            {
                                "name": "Business Type",
                                "language": "en_US"
                            }
                        ]
                    }
                },
                {},
                {},
                {}
            ]
        }
    },
    {
        "id": "RXZlbnRQZW9wbGVfNDkxNzM2MTM=",
        "type": null,
        "firstName": "James",
        "lastName": "Hacon",
        "jobTitle": "Managing Partner",
        "organization": "Think Hospitality",
        "photoUrl": "https://static.swapcard.com/public/images/5f902e01d44d4aceb498353d95ba2308.jpeg",
        "speakerOnPlannings": [
            {
                "id": "UGxhbm5pbmdfMTUzMjk4Mg==",
                "title": "The Impact of Third-Party Outlets on Hotel Revenue and Real Estate Value – What are the Keys to Choosing the Right Operator, Concept and Agreement?",
                "categories": [],
                "fields": [
                    {}
                ]
            },
            {
                "id": "UGxhbm5pbmdfMTg1MDk1OQ==",
                "title": "Utilising Independent F&B Operators to Revitalise a Hotel Asset",
                "categories": [
                    "Restaurant Investment"
                ],
                "fields": [
                    {},
                    {
                        "id": "RmllbGRWYWx1ZV8yMzI1MzEzNw==",
                        "definition": {
                            "isDefault": true,
                            "name": "Topics"
                        },
                        "value": "restaurant-invest-grif",
                        "translations": [
                            {
                                "value": "Restaurant Investment"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "UGxhbm5pbmdfMTg5NDIzNA==",
                "title": "Four Levers of Revenue Optimisation for Restaurants and Hotel F&B, with Practical Advice on Maximising Sales and Profitability",
                "categories": [
                    "Talks",
                    "Restaurant Investment"
                ],
                "fields": [
                    {},
                    {
                        "id": "RmllbGRWYWx1ZV8yMzI1MzEyOA==",
                        "definition": {
                            "isDefault": true,
                            "name": "Topics"
                        },
                        "value": "data-and-digital-talks",
                        "translations": [
                            {
                                "value": "Talks"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yMzI1MzEzNw==",
                        "definition": {
                            "isDefault": true,
                            "name": "Topics"
                        },
                        "value": "restaurant-invest-grif",
                        "translations": [
                            {
                                "value": "Restaurant Investment"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "UGxhbm5pbmdfMTg5NDQ4OQ==",
                "title": "Founder Chat: In conversation with  Ashish Tulsian on understanding how to leverage  AI & Power of data for your restaurant business",
                "categories": [
                    "Talks",
                    "Restaurant Investment"
                ],
                "fields": [
                    {},
                    {
                        "id": "RmllbGRWYWx1ZV8yMzI1MzEyOA==",
                        "definition": {
                            "isDefault": true,
                            "name": "Topics"
                        },
                        "value": "data-and-digital-talks",
                        "translations": [
                            {
                                "value": "Talks"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yMzI1MzEzNw==",
                        "definition": {
                            "isDefault": true,
                            "name": "Topics"
                        },
                        "value": "restaurant-invest-grif",
                        "translations": [
                            {
                                "value": "Restaurant Investment"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "UGxhbm5pbmdfMTg5NDI0Ng==",
                "title": "The future of investment into Saudi F&B – what are the emerging vehicles and opportunities to bring investment into the market?",
                "categories": [
                    "Restaurant Investment"
                ],
                "fields": [
                    {},
                    {
                        "id": "RmllbGRWYWx1ZV8yMzI1MzEzNw==",
                        "definition": {
                            "isDefault": true,
                            "name": "Topics"
                        },
                        "value": "restaurant-invest-grif",
                        "translations": [
                            {
                                "value": "Restaurant Investment"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "UGxhbm5pbmdfMTg5NDI0MQ==",
                "title": "Lessons learned from tough times – opening in challenging markets and what tactics you can employ to overcome the hurdles",
                "categories": [
                    "Talks",
                    "Restaurant Investment"
                ],
                "fields": [
                    {},
                    {
                        "id": "RmllbGRWYWx1ZV8yMzI1MzEyOA==",
                        "definition": {
                            "isDefault": true,
                            "name": "Topics"
                        },
                        "value": "data-and-digital-talks",
                        "translations": [
                            {
                                "value": "Talks"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yMzI1MzEzNw==",
                        "definition": {
                            "isDefault": true,
                            "name": "Topics"
                        },
                        "value": "restaurant-invest-grif",
                        "translations": [
                            {
                                "value": "Restaurant Investment"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "UGxhbm5pbmdfMjAyNzU1OQ==",
                "title": "The World's First AI-Created Restaurant",
                "categories": [
                    "Technology & Innovation",
                    "Restaurant Investment"
                ],
                "fields": [
                    {},
                    {
                        "id": "RmllbGRWYWx1ZV8yMzI1MzEzNw==",
                        "definition": {
                            "isDefault": true,
                            "name": "Topics"
                        },
                        "value": "restaurant-invest-grif",
                        "translations": [
                            {
                                "value": "Restaurant Investment"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yMzI1MzEzOQ==",
                        "definition": {
                            "isDefault": true,
                            "name": "Topics"
                        },
                        "value": "technology-and-innovation",
                        "translations": [
                            {
                                "value": "Technology & Innovation"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "UGxhbm5pbmdfMjE0NzcxNg==",
                "title": "The World's First AI-Created Restaurant In Action",
                "categories": [
                    "Restaurant Investment"
                ],
                "fields": [
                    {},
                    {
                        "id": "RmllbGRWYWx1ZV8yMzI1MzEzNw==",
                        "definition": {
                            "isDefault": true,
                            "name": "Topics"
                        },
                        "value": "restaurant-invest-grif",
                        "translations": [
                            {
                                "value": "Restaurant Investment"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "UGxhbm5pbmdfMjAyNzg4Mg==",
                "title": "The World's First AI-Created Restaurant Revealed",
                "categories": [
                    "Restaurant Investment"
                ],
                "fields": [
                    {},
                    {
                        "id": "RmllbGRWYWx1ZV8yMzI1MzEzNw==",
                        "definition": {
                            "isDefault": true,
                            "name": "Topics"
                        },
                        "value": "restaurant-invest-grif",
                        "translations": [
                            {
                                "value": "Restaurant Investment"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "UGxhbm5pbmdfMjAyNzg4MA==",
                "title": "Hoteliers Are From Mars, Restauranters Are From Venus: Why Hoteliers Can’t Run Restaurants?",
                "categories": [
                    "Restaurant Investment"
                ],
                "fields": [
                    {},
                    {
                        "id": "RmllbGRWYWx1ZV8yMzI1MzEzNw==",
                        "definition": {
                            "isDefault": true,
                            "name": "Topics"
                        },
                        "value": "restaurant-invest-grif",
                        "translations": [
                            {
                                "value": "Restaurant Investment"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "UGxhbm5pbmdfMjYyODkxMA==",
                "title": "Welcome to Restaurant Investment Trends Transforming Hotels",
                "categories": [
                    "F&B Experience"
                ],
                "fields": [
                    {},
                    {
                        "id": "RmllbGRWYWx1ZV8yODMwNTgzMw==",
                        "definition": {
                            "isDefault": true,
                            "name": "Topics"
                        },
                        "value": "f-and-b-experience",
                        "translations": [
                            {
                                "value": "F&B Experience"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "UGxhbm5pbmdfMzQyNzIxNw==",
                "title": "Deal Dynamics: Finding the Sweet Spot Between Ownership Vision and Investor Value",
                "categories": [
                    "Investment and Real Estate"
                ],
                "fields": [
                    {},
                    {
                        "id": "RmllbGRWYWx1ZV8yODMwNTgzMg==",
                        "definition": {
                            "isDefault": true,
                            "name": "Topics"
                        },
                        "value": "investment-and-real-estate",
                        "translations": [
                            {
                                "value": "Investment and Real Estate "
                            }
                        ]
                    },
                    {}
                ]
            },
            {
                "id": "UGxhbm5pbmdfNDU1MzM3NQ==",
                "title": "The View from 2030: Forces Reshaping Hotel F&B",
                "categories": [
                    "F&B Experience"
                ],
                "fields": [
                    {
                        "id": "RmllbGRWYWx1ZV8yODMwNTgzMw==",
                        "definition": {
                            "isDefault": true,
                            "name": "Topics"
                        },
                        "value": "f-and-b-experience",
                        "translations": [
                            {
                                "value": "F&B Experience"
                            }
                        ]
                    },
                    {}
                ]
            },
            {
                "id": "UGxhbm5pbmdfNDUxNjIyNg==",
                "title": "The Revolution in All-Day Dining: Beyond the Buffet",
                "categories": [
                    "F&B Experience"
                ],
                "fields": [
                    {
                        "id": "RmllbGRWYWx1ZV8yODMwNTgzMw==",
                        "definition": {
                            "isDefault": true,
                            "name": "Topics"
                        },
                        "value": "f-and-b-experience",
                        "translations": [
                            {
                                "value": "F&B Experience"
                            }
                        ]
                    },
                    {}
                ]
            },
            {
                "id": "UGxhbm5pbmdfNDQzNTYwMQ==",
                "title": "The Next Course: The Evolution of Resort Dining",
                "categories": [],
                "fields": [
                    {}
                ]
            }
        ],
        "withEvent": {
            "fields": [
                {
                    "translations": [
                        {
                            "value": "Consulting / Advisor",
                            "language": "en_US"
                        }
                    ],
                    "definition": {
                        "id": "RmllbGREZWZpbml0aW9uXzg5NTQ5OQ==",
                        "translations": [
                            {
                                "name": "Business Type",
                                "language": "en_US"
                            }
                        ]
                    }
                },
                {}
            ]
        }
    },
    {
        "id": "RXZlbnRQZW9wbGVfNDcyMTA0NTU=",
        "type": null,
        "firstName": "Bani",
        "lastName": "Haddad",
        "jobTitle": "Founder & Co-CEO",
        "organization": "Aleph Hospitality",
        "photoUrl": "https://static.swapcard.com/public/images/fbfab4a15cf74a07b9742e0c0b601c64.jpeg",
        "speakerOnPlannings": [
            {
                "id": "UGxhbm5pbmdfMTgyOTY4MA==",
                "title": "Assessing the Significance and Economic Viability of International Brands in African Destinations",
                "categories": [],
                "fields": [
                    {},
                    {}
                ]
            },
            {
                "id": "UGxhbm5pbmdfMjAyNzc0MQ==",
                "title": "The Future of Hospitality Management: From White Label Operators, Franchising, to Traditional Management Agreements",
                "categories": [
                    "Hotelisation of Traditional Assets",
                    "Global Investments"
                ],
                "fields": [
                    {},
                    {
                        "id": "RmllbGRWYWx1ZV8yNDM0OTA0Mw==",
                        "definition": {
                            "isDefault": true,
                            "name": "Topics"
                        },
                        "value": "hotelisation-of-traditional-assets",
                        "translations": [
                            {
                                "value": "Hotelisation of Traditional Assets"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNDU3Mjg5Mg==",
                        "definition": {
                            "isDefault": true,
                            "name": "Topics"
                        },
                        "value": "global-investments",
                        "translations": [
                            {
                                "value": "Global Investments"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "UGxhbm5pbmdfMjAyNzg4Ng==",
                "title": "EAHM Leadership Series: CEO for the Day",
                "categories": [],
                "fields": [
                    {}
                ]
            },
            {
                "id": "UGxhbm5pbmdfMjU5MjYwNQ==",
                "title": "Africa's Hospitality Boom: Is the Sector Growing Fast Enough to Meet Rising Demand?",
                "categories": [],
                "fields": [
                    {}
                ]
            },
            {
                "id": "UGxhbm5pbmdfMjYyODg5NA==",
                "title": "Franchise Models: A Barrier to Sustainable Hospitality—or a Catalyst for Change?",
                "categories": [
                    "Investment and Real Estate"
                ],
                "fields": [
                    {},
                    {
                        "id": "RmllbGRWYWx1ZV8yODMwNTgzMg==",
                        "definition": {
                            "isDefault": true,
                            "name": "Topics"
                        },
                        "value": "investment-and-real-estate",
                        "translations": [
                            {
                                "value": "Investment and Real Estate "
                            }
                        ]
                    },
                    {}
                ]
            },
            {
                "id": "UGxhbm5pbmdfMjk3MzgwMQ==",
                "title": "Show, Don't Tell: Real Strategies, Real Challenges, Real Returns",
                "categories": [],
                "fields": [
                    {},
                    {}
                ]
            },
            {
                "id": "UGxhbm5pbmdfNDUxODczMg==",
                "title": "The Franchise Blueprint: Driving Egypt's Hospitality Expansion",
                "categories": [],
                "fields": [
                    {}
                ]
            }
        ],
        "withEvent": {
            "fields": [
                {
                    "translations": [
                        {
                            "value": "Hotel Operator / Management",
                            "language": "en_US"
                        }
                    ],
                    "definition": {
                        "id": "RmllbGREZWZpbml0aW9uXzg5NTQ5OQ==",
                        "translations": [
                            {
                                "name": "Business Type",
                                "language": "en_US"
                            }
                        ]
                    }
                },
                {},
                {},
                {}
            ]
        }
    },
    {
        "id": "RXZlbnRQZW9wbGVfNDk3NzA3NTk=",
        "type": null,
        "firstName": "Mohamed",
        "lastName": "Hanafi",
        "jobTitle": "Managing Director",
        "organization": "LYNX Strategic Business Advisors",
        "photoUrl": "https://static.swapcard.com/public/images/1026c51417224ecfad16088d9175236e.jpeg",
        "speakerOnPlannings": [
            {
                "id": "UGxhbm5pbmdfNDQzNTU4NQ==",
                "title": "From Regulation to Results: Making Policy Work for Investors",
                "categories": [],
                "fields": [
                    {}
                ]
            }
        ],
        "withEvent": {
            "fields": [
                {
                    "translations": [
                        {
                            "value": "Consulting / Advisor",
                            "language": "en_US"
                        }
                    ],
                    "definition": {
                        "id": "RmllbGREZWZpbml0aW9uXzg5NTQ5OQ==",
                        "translations": [
                            {
                                "name": "Business Type",
                                "language": "en_US"
                            }
                        ]
                    }
                },
                {},
                {},
                {},
                {},
                {}
            ]
        }
    },
    {
        "id": "RXZlbnRQZW9wbGVfNTAzMzA4NzU=",
        "type": null,
        "firstName": "Elias",
        "lastName": "Hayek",
        "jobTitle": "Shareholder & Co-Chair of the Middle East and European Hospitality Group",
        "organization": "Greenberg Traurig",
        "photoUrl": "https://static.swapcard.com/public/images/30a56f7a355a4656954a24ce2c673c22.jpeg",
        "speakerOnPlannings": [
            {
                "id": "UGxhbm5pbmdfNDUzNTk0OQ==",
                "title": "Navigating the Legal and Regulatory Landscape in Egypt",
                "categories": [
                    "FHS Living"
                ],
                "fields": [
                    {},
                    {
                        "id": "RmllbGRWYWx1ZV8zMTQ4ODg1OA==",
                        "definition": {
                            "isDefault": true,
                            "name": "Topics"
                        },
                        "value": "fhs-living",
                        "translations": [
                            {
                                "value": "FHS Living"
                            }
                        ]
                    }
                ]
            }
        ],
        "withEvent": {
            "fields": [
                {
                    "translations": [
                        {
                            "value": "Lawyer",
                            "language": "en_US"
                        }
                    ],
                    "definition": {
                        "id": "RmllbGREZWZpbml0aW9uXzg5NTQ5OQ==",
                        "translations": [
                            {
                                "name": "Business Type",
                                "language": "en_US"
                            }
                        ]
                    }
                },
                {},
                {},
                {},
                {}
            ]
        }
    },
    {
        "id": "RXZlbnRQZW9wbGVfNTAxNDE4MTg=",
        "type": null,
        "firstName": "Eng. Salah",
        "lastName": "Hetata",
        "jobTitle": "Chairman",
        "organization": "Holool Software Company",
        "photoUrl": "https://static.swapcard.com/public/images/0f53dc0b28634e1ebe0a8482e58e2e10.jpeg",
        "speakerOnPlannings": [
            {
                "id": "UGxhbm5pbmdfNDcxMDQ2Mg==",
                "title": "From Healthcare to Hospitality: Investing in Egypt’s Health Tourism Economy",
                "categories": [],
                "fields": [
                    {}
                ]
            }
        ],
        "withEvent": {
            "fields": [
                {
                    "translations": [
                        {
                            "value": "Technology",
                            "language": "en_US"
                        }
                    ],
                    "definition": {
                        "id": "RmllbGREZWZpbml0aW9uXzg5NTQ5OQ==",
                        "translations": [
                            {
                                "name": "Business Type",
                                "language": "en_US"
                            }
                        ]
                    }
                },
                {},
                {},
                {},
                {}
            ]
        }
    },
    {
        "id": "RXZlbnRQZW9wbGVfNTA2NTg2OTU=",
        "type": null,
        "firstName": "Abdelkhalek",
        "lastName": "Ibrahim",
        "jobTitle": "Chief Executive Officer,",
        "organization": "Nevera Egypt",
        "photoUrl": "https://static.swapcard.com/public/images/7080ad7771cc43dd94d3ec3cbe5c8a4b.jpeg",
        "speakerOnPlannings": [
            {
                "id": "UGxhbm5pbmdfNDQzNTU5Nw==",
                "title": "Beyond the Monuments: Connecting Heritage, Communities and Places into a New Tourism Experience",
                "categories": [],
                "fields": [
                    {}
                ]
            }
        ],
        "withEvent": {
            "fields": []
        }
    },
    {
        "id": "RXZlbnRQZW9wbGVfNTA1NTc0MDU=",
        "type": null,
        "firstName": "Dr. Eng. Ahmed",
        "lastName": "Ismail Gabr",
        "jobTitle": "Vice Chairman for Planning & Projects",
        "organization": "New Urban Communities Authority (NUCA)",
        "photoUrl": "https://static.swapcard.com/public/images/39637f70b5434438a53035c1a1b31699.jpeg",
        "speakerOnPlannings": [
            {
                "id": "UGxhbm5pbmdfNDcyMTU3NA==",
                "title": "Egypt’s New Cities: A Promising Investment Destination",
                "categories": [],
                "fields": [
                    {}
                ]
            }
        ],
        "withEvent": {
            "fields": []
        }
    },
    {
        "id": "RXZlbnRQZW9wbGVfNTAyMTk4Mzk=",
        "type": null,
        "firstName": "Katharina",
        "lastName": "Jaeger",
        "jobTitle": "Chief Executive Officer",
        "organization": "The Code",
        "photoUrl": "https://static.swapcard.com/public/images/fe8364cb5c9e40e7b0cc92703aeabb96.jpeg",
        "speakerOnPlannings": [
            {
                "id": "UGxhbm5pbmdfNDcxMzQxOQ==",
                "title": "Behind The Deal: Bringing Lifestyle Hospitality to Cairo",
                "categories": [],
                "fields": [
                    {}
                ]
            }
        ],
        "withEvent": {
            "fields": [
                {
                    "translations": [
                        {
                            "value": "Consulting / Advisor",
                            "language": "en_US"
                        }
                    ],
                    "definition": {
                        "id": "RmllbGREZWZpbml0aW9uXzg5NTQ5OQ==",
                        "translations": [
                            {
                                "name": "Business Type",
                                "language": "en_US"
                            }
                        ]
                    }
                },
                {},
                {},
                {},
                {}
            ]
        }
    },
    {
        "id": "RXZlbnRQZW9wbGVfNDcyMTAzMjI=",
        "type": null,
        "firstName": "David",
        "lastName": "Keen",
        "jobTitle": "Founder & CEO",
        "organization": "QUO",
        "photoUrl": "https://static.swapcard.com/public/images/47031a8adbc64fe7bc6c65e797f89119.jpeg",
        "speakerOnPlannings": [
            {
                "id": "UGxhbm5pbmdfMTUzMzA0Mg==",
                "title": "How will you 'Lead The Change'?",
                "categories": [],
                "fields": [
                    {}
                ]
            },
            {
                "id": "UGxhbm5pbmdfMTc1MDU4NA==",
                "title": "Brand Dilemma: Navigating the Pros and Cons of Launching New Brands – A Strategic Exploration for Hospitality Decision-Makers",
                "categories": [
                    "Brand & Destination"
                ],
                "fields": [
                    {},
                    {
                        "id": "RmllbGRWYWx1ZV8yMzI1MzEyNw==",
                        "definition": {
                            "isDefault": true,
                            "name": "Topics"
                        },
                        "value": "brand-development",
                        "translations": [
                            {
                                "value": "Brand & Destination"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "UGxhbm5pbmdfMjA0OTQwMQ==",
                "title": "Saudi Vision 2030: Reimagining Hospitality",
                "categories": [
                    "Projects & Destinations",
                    "Sustainability & Innovation",
                    "Focus on Saudi Arabia"
                ],
                "fields": [
                    {},
                    {
                        "id": "RmllbGRWYWx1ZV8yNDIzNzQxMQ==",
                        "definition": {
                            "isDefault": true,
                            "name": "Topics"
                        },
                        "value": "destination-and-urban-development",
                        "translations": [
                            {
                                "value": "Projects & Destinations"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNDU2NzE4OQ==",
                        "definition": {
                            "isDefault": true,
                            "name": "Topics"
                        },
                        "value": "focus-on-saudi-arabia",
                        "translations": [
                            {
                                "value": "Focus on Saudi Arabia"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNDU3Mjg5MQ==",
                        "definition": {
                            "isDefault": true,
                            "name": "Topics"
                        },
                        "value": "sustainability-and-innovation",
                        "translations": [
                            {
                                "value": "Sustainability & Innovation"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "UGxhbm5pbmdfMjAyOTk0Mw==",
                "title": "Forming Culture to Build Brands",
                "categories": [
                    "Workshop"
                ],
                "fields": [
                    {},
                    {
                        "id": "RmllbGRWYWx1ZV8yNDM2MDM0OA==",
                        "definition": {
                            "isDefault": true,
                            "name": "Topics"
                        },
                        "value": "workshop",
                        "translations": [
                            {
                                "value": "Workshop"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "UGxhbm5pbmdfMjAyNzg4Ng==",
                "title": "EAHM Leadership Series: CEO for the Day",
                "categories": [],
                "fields": [
                    {}
                ]
            },
            {
                "id": "UGxhbm5pbmdfMjQ3NjM5MQ==",
                "title": "Where Vision Shapes Opportunity",
                "categories": [
                    "Focus on Saudi Arabia"
                ],
                "fields": [
                    {},
                    {
                        "id": "RmllbGRWYWx1ZV8yNDU2NzE4OQ==",
                        "definition": {
                            "isDefault": true,
                            "name": "Topics"
                        },
                        "value": "focus-on-saudi-arabia",
                        "translations": [
                            {
                                "value": "Focus on Saudi Arabia"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "UGxhbm5pbmdfMzI1OTYwMw==",
                "title": "Shaping Tomorrow’s Icons: The Power of Storytelling in Mega-Developments",
                "categories": [
                    "Investment and Real Estate"
                ],
                "fields": [
                    {},
                    {
                        "id": "RmllbGRWYWx1ZV8yODMwNTgzMg==",
                        "definition": {
                            "isDefault": true,
                            "name": "Topics"
                        },
                        "value": "investment-and-real-estate",
                        "translations": [
                            {
                                "value": "Investment and Real Estate "
                            }
                        ]
                    },
                    {}
                ]
            },
            {
                "id": "UGxhbm5pbmdfMzMwMjkzNA==",
                "title": "Driving New Experiences: The Evolution of an Automotive Luxury Brand into Hospitality",
                "categories": [],
                "fields": [
                    {},
                    {}
                ]
            },
            {
                "id": "UGxhbm5pbmdfNDMyOTQxMw==",
                "title": "From Perception to Capital: How Nation Branding Drives Investment",
                "categories": [],
                "fields": [
                    {},
                    {}
                ]
            },
            {
                "id": "UGxhbm5pbmdfNDQwNTc2OA==",
                "title": "Ultra-Luxury or Smart Luxury? Capital Allocation in a Changing Saudi Market",
                "categories": [],
                "fields": [
                    {}
                ]
            },
            {
                "id": "UGxhbm5pbmdfNDQwNTc4NQ==",
                "title": "Building Beyond Boundaries: Creating World-Class Tourism Destinations",
                "categories": [],
                "fields": [
                    {}
                ]
            },
            {
                "id": "UGxhbm5pbmdfNDU5NzA0NA==",
                "title": "Winning the Owner: The New Rules of Global Development",
                "categories": [],
                "fields": [
                    {}
                ]
            },
            {
                "id": "UGxhbm5pbmdfNDUxNjIxNw==",
                "title": "Culture Creates Value: How Leadership and Engagement Drive ROI, Brand Strength and Asset Performance",
                "categories": [
                    "NextGen Talent & Hospitality Education"
                ],
                "fields": [
                    {},
                    {
                        "id": "RmllbGRWYWx1ZV8yNjYzMzYxMQ==",
                        "definition": {
                            "isDefault": true,
                            "name": "Topics"
                        },
                        "value": "nextgen-talent-and-hospitality-education",
                        "translations": [
                            {
                                "value": "NextGen Talent & Hospitality Education"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "UGxhbm5pbmdfNDQzNTU5OA==",
                "title": "The Golden Route: Crafting a Luxury Tourism Experience from Cairo to the Nile",
                "categories": [],
                "fields": [
                    {}
                ]
            }
        ],
        "withEvent": {
            "fields": [
                {
                    "translations": [
                        {
                            "value": "Architecture & Design",
                            "language": "en_US"
                        }
                    ],
                    "definition": {
                        "id": "RmllbGREZWZpbml0aW9uXzg5NTQ5OQ==",
                        "translations": [
                            {
                                "name": "Business Type",
                                "language": "en_US"
                            }
                        ]
                    }
                },
                {},
                {},
                {},
                {},
                {}
            ]
        }
    },
    {
        "id": "RXZlbnRQZW9wbGVfNDc1NzkyMjk=",
        "type": null,
        "firstName": "George",
        "lastName": "Maltezos",
        "jobTitle": "Associate Director, Regional Head SEMED, Real Estate",
        "organization": "European Bank for Reconstruction and Development (EBRD)",
        "photoUrl": "https://static.swapcard.com/public/images/62337be567794368b7c0985f54a5e901.jpeg",
        "speakerOnPlannings": [
            {
                "id": "UGxhbm5pbmdfNDY5MjA1MQ==",
                "title": "The Business Case for Sustainable Hospitality and Destination Investment in Egypt",
                "categories": [],
                "fields": [
                    {}
                ]
            }
        ],
        "withEvent": {
            "fields": [
                {
                    "translations": [
                        {
                            "value": "Financial Services / Banks",
                            "language": "en_US"
                        }
                    ],
                    "definition": {
                        "id": "RmllbGREZWZpbml0aW9uXzg5NTQ5OQ==",
                        "translations": [
                            {
                                "name": "Business Type",
                                "language": "en_US"
                            }
                        ]
                    }
                },
                {},
                {},
                {},
                {},
                {}
            ]
        }
    },
    {
        "id": "RXZlbnRQZW9wbGVfNTAwOTYyNzQ=",
        "type": null,
        "firstName": "Islam",
        "lastName": "Mazhar",
        "jobTitle": "Head of Marketing",
        "organization": "ACT",
        "photoUrl": "https://static.swapcard.com/public/images/66777a3f27e546c9a62c12ebcd66d169.png",
        "speakerOnPlannings": [
            {
                "id": "UGxhbm5pbmdfNDcyNTIzMQ==",
                "title": "The Technology Reality Check: What Hotel Operators Need to Get Right",
                "categories": [],
                "fields": [
                    {}
                ]
            }
        ],
        "withEvent": {
            "fields": [
                {
                    "translations": [
                        {
                            "value": "Technology",
                            "language": "en_US"
                        }
                    ],
                    "definition": {
                        "id": "RmllbGREZWZpbml0aW9uXzg5NTQ5OQ==",
                        "translations": [
                            {
                                "name": "Business Type",
                                "language": "en_US"
                            }
                        ]
                    }
                },
                {},
                {},
                {},
                {},
                {},
                {}
            ]
        }
    },
    {
        "id": "RXZlbnRQZW9wbGVfNDcyMTAzOTM=",
        "type": null,
        "firstName": "Elie",
        "lastName": "Milky",
        "jobTitle": "Chief Development Officer for the Middle East, Northeast Africa, Greece, and Cyprus",
        "organization": "Radisson Hotel Group",
        "photoUrl": "https://static.swapcard.com/public/images/651d88045d184b34a984f5007f20415a.jpeg",
        "speakerOnPlannings": [
            {
                "id": "UGxhbm5pbmdfMTUzMjk4Ng==",
                "title": "Building Sustainable Hospitality: Setting the Scene for Hotel Development in the Middle East",
                "categories": [],
                "fields": [
                    {}
                ]
            },
            {
                "id": "UGxhbm5pbmdfMTgyMDAxOA==",
                "title": "Domestic Tourism in Secondary Cities: How Major Hotel Groups can help to Unlock New Opportunities?",
                "categories": [
                    "Investment & Development"
                ],
                "fields": [
                    {},
                    {
                        "id": "RmllbGRWYWx1ZV8yMzI1MzEzNQ==",
                        "definition": {
                            "isDefault": true,
                            "name": "Topics"
                        },
                        "value": "investment",
                        "translations": [
                            {
                                "value": "Investment & Development"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "UGxhbm5pbmdfMTgzMDQzMA==",
                "title": "Navigating Regulatory Shifts: Legal Dynamics Reshaping Hospitality Real Estate in the Region and their Impact on Tourism Offerings",
                "categories": [
                    "Investment & Development"
                ],
                "fields": [
                    {},
                    {
                        "id": "RmllbGRWYWx1ZV8yMzI1MzEzNQ==",
                        "definition": {
                            "isDefault": true,
                            "name": "Topics"
                        },
                        "value": "investment",
                        "translations": [
                            {
                                "value": "Investment & Development"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "UGxhbm5pbmdfMjAyNzU1MQ==",
                "title": "Emerging Lifestyle Brands: Bridging Luxury and Midscale Markets with Locally Inspired Experiences in New and Established Destinations",
                "categories": [
                    "Projects & Destinations",
                    "Branding Strategies"
                ],
                "fields": [
                    {},
                    {
                        "id": "RmllbGRWYWx1ZV8yNDIzNzQxMQ==",
                        "definition": {
                            "isDefault": true,
                            "name": "Topics"
                        },
                        "value": "destination-and-urban-development",
                        "translations": [
                            {
                                "value": "Projects & Destinations"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNDU3MzE3Mw==",
                        "definition": {
                            "isDefault": true,
                            "name": "Topics"
                        },
                        "value": "branding-strategies",
                        "translations": [
                            {
                                "value": "Branding Strategies"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "UGxhbm5pbmdfMjQ3NjQwNg==",
                "title": "Saudi Arabia Tourism Outlook: Shaping the Future from 2025 to 2040",
                "categories": [
                    "Religious Tourism",
                    "Investment & Development"
                ],
                "fields": [
                    {},
                    {
                        "id": "RmllbGRWYWx1ZV8yMzI1MzEzNQ==",
                        "definition": {
                            "isDefault": true,
                            "name": "Topics"
                        },
                        "value": "investment",
                        "translations": [
                            {
                                "value": "Investment & Development"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNjYzMzYxNQ==",
                        "definition": {
                            "isDefault": true,
                            "name": "Topics"
                        },
                        "value": "religious-tourism",
                        "translations": [
                            {
                                "value": "Religious Tourism"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "UGxhbm5pbmdfMjc2MjE3Mw==",
                "title": "Capital, Coastlines & Control: The Eastern Mediterranean Investment Map for Owners",
                "categories": [
                    "Investment and Real Estate"
                ],
                "fields": [
                    {},
                    {
                        "id": "RmllbGRWYWx1ZV8yODMwNTgzMg==",
                        "definition": {
                            "isDefault": true,
                            "name": "Topics"
                        },
                        "value": "investment-and-real-estate",
                        "translations": [
                            {
                                "value": "Investment and Real Estate "
                            }
                        ]
                    },
                    {}
                ]
            },
            {
                "id": "UGxhbm5pbmdfNDQwNTc2OA==",
                "title": "Ultra-Luxury or Smart Luxury? Capital Allocation in a Changing Saudi Market",
                "categories": [],
                "fields": [
                    {}
                ]
            },
            {
                "id": "UGxhbm5pbmdfNDQ0NTkwMg==",
                "title": "The New Hospitality Map: Defining the Hospitality Asset Classes",
                "categories": [
                    "FHS Living"
                ],
                "fields": [
                    {},
                    {
                        "id": "RmllbGRWYWx1ZV8zMTQ4ODg1OA==",
                        "definition": {
                            "isDefault": true,
                            "name": "Topics"
                        },
                        "value": "fhs-living",
                        "translations": [
                            {
                                "value": "FHS Living"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "UGxhbm5pbmdfNDQzNTYwNA==",
                "title": "The Egypt Playbook: Lessons from the World's Leading Hotel Operators",
                "categories": [],
                "fields": [
                    {}
                ]
            }
        ],
        "withEvent": {
            "fields": [
                {
                    "translations": [
                        {
                            "value": "Hotel Operator / Management",
                            "language": "en_US"
                        }
                    ],
                    "definition": {
                        "id": "RmllbGREZWZpbml0aW9uXzg5NTQ5OQ==",
                        "translations": [
                            {
                                "name": "Business Type",
                                "language": "en_US"
                            }
                        ]
                    }
                },
                {},
                {},
                {},
                {}
            ]
        }
    },
    {
        "id": "RXZlbnRQZW9wbGVfNDk4MzkxMzI=",
        "type": null,
        "firstName": "Govind",
        "lastName": "Mundra",
        "jobTitle": "Head of Development Middle East & Africa",
        "organization": "Wyndham Hotels & Resorts",
        "photoUrl": "https://static.swapcard.com/public/images/1cec4215232f4481b23d36feadda6352.jpeg",
        "speakerOnPlannings": [
            {
                "id": "UGxhbm5pbmdfMjQ3NjQwNA==",
                "title": "Branding Saudi: Forming an Authentic Identity in a Global Market",
                "categories": [
                    "Focus on Saudi Arabia",
                    "Branding & Culture"
                ],
                "fields": [
                    {},
                    {
                        "id": "RmllbGRWYWx1ZV8yNDM0OTA1OQ==",
                        "definition": {
                            "isDefault": true,
                            "name": "Topics"
                        },
                        "value": "branding-and-culture",
                        "translations": [
                            {
                                "value": "Branding & Culture"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNDU2NzE4OQ==",
                        "definition": {
                            "isDefault": true,
                            "name": "Topics"
                        },
                        "value": "focus-on-saudi-arabia",
                        "translations": [
                            {
                                "value": "Focus on Saudi Arabia"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "UGxhbm5pbmdfMjc4MjU5MQ==",
                "title": "The Misconception Myth: Why Branded Residences Aren’t Just Hotels with Keys",
                "categories": [],
                "fields": [
                    {},
                    {}
                ]
            },
            {
                "id": "UGxhbm5pbmdfNDQ3NzAyNQ==",
                "title": "The Cost of the Dream: Service Charges, Amenities & Ownership Economics in Branded Residences",
                "categories": [
                    "Branded Residences Forum"
                ],
                "fields": [
                    {
                        "id": "RmllbGRWYWx1ZV8yNDIzOTQ1MA==",
                        "definition": {
                            "isDefault": true,
                            "name": "Topics"
                        },
                        "value": "branded-residences-forum",
                        "translations": [
                            {
                                "value": "Branded Residences Forum"
                            }
                        ]
                    },
                    {}
                ]
            },
            {
                "id": "UGxhbm5pbmdfNDQ0NTkzOQ==",
                "title": "Terms, Tensions & Trade-Offs: Getting the Branded Residence Deal Done",
                "categories": [
                    "FHS Living"
                ],
                "fields": [
                    {},
                    {
                        "id": "RmllbGRWYWx1ZV8zMTQ4ODg1OA==",
                        "definition": {
                            "isDefault": true,
                            "name": "Topics"
                        },
                        "value": "fhs-living",
                        "translations": [
                            {
                                "value": "FHS Living"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "UGxhbm5pbmdfNDY5MjA1MA==",
                "title": "The Power of the Brand: Marketing Branded Residences in a Competitive Holiday Home Market",
                "categories": [
                    "FHS Living"
                ],
                "fields": [
                    {},
                    {
                        "id": "RmllbGRWYWx1ZV8zMTQ4ODg1OA==",
                        "definition": {
                            "isDefault": true,
                            "name": "Topics"
                        },
                        "value": "fhs-living",
                        "translations": [
                            {
                                "value": "FHS Living"
                            }
                        ]
                    }
                ]
            }
        ],
        "withEvent": {
            "fields": [
                {
                    "translations": [
                        {
                            "value": "Hotel Operator / Management",
                            "language": "en_US"
                        }
                    ],
                    "definition": {
                        "id": "RmllbGREZWZpbml0aW9uXzg5NTQ5OQ==",
                        "translations": [
                            {
                                "name": "Business Type",
                                "language": "en_US"
                            }
                        ]
                    }
                },
                {},
                {},
                {},
                {}
            ]
        }
    },
    {
        "id": "RXZlbnRQZW9wbGVfNDk5NTc3MzU=",
        "type": null,
        "firstName": "Kareem",
        "lastName": "Nabil",
        "jobTitle": "CEO & Co-Founder",
        "organization": "GNK Hospitality Group",
        "photoUrl": "https://static.swapcard.com/public/images/1f3daef1616a4872867d9f6bc584f297.jpeg",
        "speakerOnPlannings": [
            {
                "id": "UGxhbm5pbmdfNDU5NzQ5MQ==",
                "title": "Beyond the Space: Designing Destinations and Delivering the Experience",
                "categories": [],
                "fields": [
                    {}
                ]
            }
        ],
        "withEvent": {
            "fields": [
                {
                    "translations": [
                        {
                            "value": "Hotel Operator / Management",
                            "language": "en_US"
                        }
                    ],
                    "definition": {
                        "id": "RmllbGREZWZpbml0aW9uXzg5NTQ5OQ==",
                        "translations": [
                            {
                                "name": "Business Type",
                                "language": "en_US"
                            }
                        ]
                    }
                },
                {},
                {},
                {},
                {}
            ]
        }
    },
    {
        "id": "RXZlbnRQZW9wbGVfNTA1NDc0Njg=",
        "type": null,
        "firstName": "Naglaa",
        "lastName": "Nosseir",
        "jobTitle": "CSR, Sustainability & Education Advisor. Member of Cultural Investment Committee, Supreme Council of Culture",
        "organization": "Telecom Egypt, WE",
        "photoUrl": "https://static.swapcard.com/public/images/6cfc2515996748da9796cba160c72f0e.jpeg",
        "speakerOnPlannings": [
            {
                "id": "UGxhbm5pbmdfNDcxMDQ2Mg==",
                "title": "From Healthcare to Hospitality: Investing in Egypt’s Health Tourism Economy",
                "categories": [],
                "fields": [
                    {}
                ]
            }
        ],
        "withEvent": {
            "fields": [
                {
                    "translations": [
                        {
                            "value": "Technology",
                            "language": "en_US"
                        }
                    ],
                    "definition": {
                        "id": "RmllbGREZWZpbml0aW9uXzg5NTQ5OQ==",
                        "translations": [
                            {
                                "name": "Business Type",
                                "language": "en_US"
                            }
                        ]
                    }
                },
                {},
                {},
                {}
            ]
        }
    },
    {
        "id": "RXZlbnRQZW9wbGVfNDgwNDEzNjE=",
        "type": null,
        "firstName": "Dr. Adla",
        "lastName": "Ragab",
        "jobTitle": "Professor of Economics - Member of Parliament",
        "organization": "Cairo University",
        "photoUrl": "https://static.swapcard.com/public/images/3e6bc390b7e14b0987c45b130803815a.jpeg",
        "speakerOnPlannings": [
            {
                "id": "UGxhbm5pbmdfNDY0NjE2Mg==",
                "title": "The Economic Outlook: Global Forces, Egypt’s Growth Story & Hospitality Investment",
                "categories": [],
                "fields": [
                    {}
                ]
            }
        ],
        "withEvent": {
            "fields": [
                {
                    "translations": [
                        {
                            "value": "Education",
                            "language": "en_US"
                        }
                    ],
                    "definition": {
                        "id": "RmllbGREZWZpbml0aW9uXzg5NTQ5OQ==",
                        "translations": [
                            {
                                "name": "Business Type",
                                "language": "en_US"
                            }
                        ]
                    }
                },
                {}
            ]
        }
    },
    {
        "id": "RXZlbnRQZW9wbGVfNTAyMjI2Njg=",
        "type": null,
        "firstName": "Bedeir",
        "lastName": "Rizk",
        "jobTitle": "Chief Executive Officer",
        "organization": "PARAGON | ADEER",
        "photoUrl": "https://static.swapcard.com/public/images/5bbfb92fc0a242b194ece8114bb33028.jpeg",
        "speakerOnPlannings": [
            {
                "id": "UGxhbm5pbmdfNDcxMzQxOQ==",
                "title": "Behind The Deal: Bringing Lifestyle Hospitality to Cairo",
                "categories": [],
                "fields": [
                    {}
                ]
            }
        ],
        "withEvent": {
            "fields": []
        }
    },
    {
        "id": "RXZlbnRQZW9wbGVfNTAxNDE4NjI=",
        "type": null,
        "firstName": "Amr",
        "lastName": "Rostom",
        "jobTitle": "Founder & Managing Director",
        "organization": "Brandinc",
        "photoUrl": "https://static.swapcard.com/public/images/e6ab17cdb1874de1b2b795d0f64cdb41.png",
        "speakerOnPlannings": [
            {
                "id": "UGxhbm5pbmdfNDY5MjA1MA==",
                "title": "The Power of the Brand: Marketing Branded Residences in a Competitive Holiday Home Market",
                "categories": [
                    "FHS Living"
                ],
                "fields": [
                    {},
                    {
                        "id": "RmllbGRWYWx1ZV8zMTQ4ODg1OA==",
                        "definition": {
                            "isDefault": true,
                            "name": "Topics"
                        },
                        "value": "fhs-living",
                        "translations": [
                            {
                                "value": "FHS Living"
                            }
                        ]
                    }
                ]
            }
        ],
        "withEvent": {
            "fields": [
                {
                    "translations": [
                        {
                            "value": "Consulting / Advisor",
                            "language": "en_US"
                        }
                    ],
                    "definition": {
                        "id": "RmllbGREZWZpbml0aW9uXzg5NTQ5OQ==",
                        "translations": [
                            {
                                "name": "Business Type",
                                "language": "en_US"
                            }
                        ]
                    }
                },
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {}
            ]
        }
    },
    {
        "id": "RXZlbnRQZW9wbGVfNDk3OTkzNTE=",
        "type": null,
        "firstName": "Mohamed",
        "lastName": "Samy",
        "jobTitle": "Founder & CEO",
        "organization": "Tayf Egypt",
        "photoUrl": "https://static.swapcard.com/public/images/5d3a427235644c31afbf4e758e5108af.jpeg",
        "speakerOnPlannings": [
            {
                "id": "UGxhbm5pbmdfNDcxMTg1Nw==",
                "title": "The New Hospitality Economy: Where Real Estate Meets Experience",
                "categories": [],
                "fields": [
                    {}
                ]
            }
        ],
        "withEvent": {
            "fields": [
                {
                    "translations": [
                        {
                            "value": "Investor",
                            "language": "en_US"
                        }
                    ],
                    "definition": {
                        "id": "RmllbGREZWZpbml0aW9uXzg5NTQ5OQ==",
                        "translations": [
                            {
                                "name": "Business Type",
                                "language": "en_US"
                            }
                        ]
                    }
                },
                {},
                {},
                {},
                {},
                {}
            ]
        }
    },
    {
        "id": "RXZlbnRQZW9wbGVfNDk2MTI2OTE=",
        "type": null,
        "firstName": "Karim",
        "lastName": "Shafei",
        "jobTitle": "Chairman & CEO",
        "organization": "Al Ismaelia for Real Estate Investment",
        "photoUrl": "https://static.swapcard.com/public/images/5ab5845fd004477eae7c3d31db8b5bb8.jpeg",
        "speakerOnPlannings": [
            {
                "id": "UGxhbm5pbmdfNDU5NzQ5MQ==",
                "title": "Beyond the Space: Designing Destinations and Delivering the Experience",
                "categories": [],
                "fields": [
                    {}
                ]
            }
        ],
        "withEvent": {
            "fields": [
                {
                    "translations": [
                        {
                            "value": "Asset Manager",
                            "language": "en_US"
                        }
                    ],
                    "definition": {
                        "id": "RmllbGREZWZpbml0aW9uXzg5NTQ5OQ==",
                        "translations": [
                            {
                                "name": "Business Type",
                                "language": "en_US"
                            }
                        ]
                    }
                },
                {}
            ]
        }
    },
    {
        "id": "RXZlbnRQZW9wbGVfNDk2ODI2OTA=",
        "type": null,
        "firstName": "Yasmine I.",
        "lastName": "Shihata",
        "jobTitle": "Founder & CEO",
        "organization": "Enigma Magazine & Venus PR",
        "photoUrl": "https://static.swapcard.com/public/images/9679196f14054dc3a2d27af010097fb7.jpeg",
        "speakerOnPlannings": [
            {
                "id": "UGxhbm5pbmdfNDUzNTk0OA==",
                "title": "Stakeholder Perspectives: Creating Value Through Branded Residences",
                "categories": [
                    "FHS Living"
                ],
                "fields": [
                    {},
                    {
                        "id": "RmllbGRWYWx1ZV8zMTQ4ODg1OA==",
                        "definition": {
                            "isDefault": true,
                            "name": "Topics"
                        },
                        "value": "fhs-living",
                        "translations": [
                            {
                                "value": "FHS Living"
                            }
                        ]
                    }
                ]
            }
        ],
        "withEvent": {
            "fields": [
                {
                    "translations": [
                        {
                            "value": "Media & PR",
                            "language": "en_US"
                        }
                    ],
                    "definition": {
                        "id": "RmllbGREZWZpbml0aW9uXzg5NTQ5OQ==",
                        "translations": [
                            {
                                "name": "Business Type",
                                "language": "en_US"
                            }
                        ]
                    }
                },
                {},
                {},
                {},
                {},
                {},
                {}
            ]
        }
    },
    {
        "id": "RXZlbnRQZW9wbGVfNTAxNTk1Nzg=",
        "type": null,
        "firstName": "Tom G․",
        "lastName": "Stevens",
        "jobTitle": "Chief Operating Officer - Hotel Operations",
        "organization": "The First Group Hospitality",
        "photoUrl": "https://static.swapcard.com/public/images/36e29da0af9f4068bb3ece21a0537f89.jpeg",
        "speakerOnPlannings": [
            {
                "id": "UGxhbm5pbmdfNDY5MjA1MQ==",
                "title": "The Business Case for Sustainable Hospitality and Destination Investment in Egypt",
                "categories": [],
                "fields": [
                    {}
                ]
            }
        ],
        "withEvent": {
            "fields": [
                {
                    "translations": [
                        {
                            "value": "Hotel Operator / Management",
                            "language": "en_US"
                        }
                    ],
                    "definition": {
                        "id": "RmllbGREZWZpbml0aW9uXzg5NTQ5OQ==",
                        "translations": [
                            {
                                "name": "Business Type",
                                "language": "en_US"
                            }
                        ]
                    }
                },
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {}
            ]
        }
    },
    {
        "id": "RXZlbnRQZW9wbGVfNDk4MzQ3MjA=",
        "type": null,
        "firstName": "Dr․ Rania",
        "lastName": "Taha",
        "jobTitle": "Senior Advisor iVolution X",
        "organization": "Founder and Chair GenImpact Foundation",
        "photoUrl": "https://static.swapcard.com/public/images/b8c2e24e5ff5458f86afa0c2c8e0324c.jpeg",
        "speakerOnPlannings": [
            {
                "id": "UGxhbm5pbmdfNDY5MjA1MQ==",
                "title": "The Business Case for Sustainable Hospitality and Destination Investment in Egypt",
                "categories": [],
                "fields": [
                    {}
                ]
            }
        ],
        "withEvent": {
            "fields": [
                {
                    "translations": [
                        {
                            "value": "Technology",
                            "language": "en_US"
                        }
                    ],
                    "definition": {
                        "id": "RmllbGREZWZpbml0aW9uXzg5NTQ5OQ==",
                        "translations": [
                            {
                                "name": "Business Type",
                                "language": "en_US"
                            }
                        ]
                    }
                },
                {},
                {},
                {}
            ]
        }
    },
    {
        "id": "RXZlbnRQZW9wbGVfNDkwMzgzODc=",
        "type": null,
        "firstName": "Matthew",
        "lastName": "Weihs",
        "jobTitle": "Chief Development Officer",
        "organization": "The Bench",
        "photoUrl": "https://static.swapcard.com/public/images/f103fe042a93419faeabb573b1c31bf0.png",
        "speakerOnPlannings": [
            {
                "id": "UGxhbm5pbmdfMTk0MTY4NA==",
                "title": "Unlocking Africa - Hotel Investment Trends & Outlook",
                "categories": [],
                "fields": []
            },
            {
                "id": "UGxhbm5pbmdfMTgyOTY2Mg==",
                "title": "Newcomers Welcome",
                "categories": [],
                "fields": [
                    {},
                    {}
                ]
            },
            {
                "id": "UGxhbm5pbmdfMTc4MzQyNg==",
                "title": "Welcome",
                "categories": [],
                "fields": [
                    {},
                    {}
                ]
            },
            {
                "id": "UGxhbm5pbmdfMTc4MzQ1Mw==",
                "title": "FHS Africa Awards",
                "categories": [],
                "fields": [
                    {},
                    {}
                ]
            },
            {
                "id": "UGxhbm5pbmdfMTc4NDkyNQ==",
                "title": "Closing Remarks",
                "categories": [],
                "fields": [
                    {},
                    {}
                ]
            },
            {
                "id": "UGxhbm5pbmdfMjA0OTQyNQ==",
                "title": "Welcome Remarks",
                "categories": [
                    "Focus on Africa"
                ],
                "fields": [
                    {},
                    {
                        "id": "RmllbGRWYWx1ZV8yNDM0OTA1NA==",
                        "definition": {
                            "isDefault": true,
                            "name": "Topics"
                        },
                        "value": "focus-on-africa",
                        "translations": [
                            {
                                "value": "Focus on Africa"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "UGxhbm5pbmdfMjU1NjkxOQ==",
                "title": "Tracking Africa's Hotel Openings in 2024",
                "categories": [],
                "fields": []
            },
            {
                "id": "UGxhbm5pbmdfMjY1MzcxOQ==",
                "title": "Unlocking STR Hotel Benchmarking: Insights You Can't Ignore",
                "categories": [],
                "fields": []
            },
            {
                "id": "UGxhbm5pbmdfMjY5NDk0Nw==",
                "title": "Newcomers Welcome",
                "categories": [],
                "fields": [
                    {}
                ]
            },
            {
                "id": "UGxhbm5pbmdfMjQ5NTc2NA==",
                "title": "Welcome to FHS Africa 2025",
                "categories": [],
                "fields": [
                    {}
                ]
            },
            {
                "id": "UGxhbm5pbmdfMjY4Mjk2NA==",
                "title": "Official Welcome",
                "categories": [],
                "fields": [
                    {}
                ]
            },
            {
                "id": "UGxhbm5pbmdfMjQ5NTE2NQ==",
                "title": "FHS Africa Outstanding Contribution to Hospitality Award",
                "categories": [],
                "fields": [
                    {},
                    {}
                ]
            },
            {
                "id": "UGxhbm5pbmdfMjgxMzcyMA==",
                "title": "Speed Networking (Sponsored by FSK & Partners)",
                "categories": [
                    "Networking"
                ],
                "fields": [
                    {
                        "id": "RmllbGRWYWx1ZV8yMzI1MzEzNg==",
                        "definition": {
                            "isDefault": true,
                            "name": "Topics"
                        },
                        "value": "networking",
                        "translations": [
                            {
                                "value": "Networking"
                            }
                        ]
                    },
                    {},
                    {}
                ]
            },
            {
                "id": "UGxhbm5pbmdfMjk3Mzc5OA==",
                "title": "Welcome",
                "categories": [],
                "fields": [
                    {}
                ]
            },
            {
                "id": "UGxhbm5pbmdfNDQ0NTg3NQ==",
                "title": "Newcomers Session: How to Navigate FHS & Maximise ROI",
                "categories": [
                    "Networking"
                ],
                "fields": [
                    {
                        "id": "RmllbGRWYWx1ZV8yMzI1MzEzNg==",
                        "definition": {
                            "isDefault": true,
                            "name": "Topics"
                        },
                        "value": "networking",
                        "translations": [
                            {
                                "value": "Networking"
                            }
                        ]
                    },
                    {}
                ]
            },
            {
                "id": "UGxhbm5pbmdfNDQzNTU4Mg==",
                "title": "Welcome to FHS Egypt 2026",
                "categories": [],
                "fields": [
                    {}
                ]
            },
            {
                "id": "UGxhbm5pbmdfNDY0NjE4MA==",
                "title": "Until We Meet Again: Closing Remarks",
                "categories": [],
                "fields": [
                    {}
                ]
            }
        ],
        "withEvent": {
            "fields": []
        }
    },
    {
        "id": "RXZlbnRQZW9wbGVfNDk4NTAxMDY=",
        "type": null,
        "firstName": "Shoroke",
        "lastName": "Zedan",
        "jobTitle": "CEO & Managing Director",
        "organization": "Ta‘heal For VET Skills Excellence",
        "photoUrl": "https://static.swapcard.com/public/images/e5e2ab4412e846eeb9b53984fc306287.jpeg",
        "speakerOnPlannings": [
            {
                "id": "UGxhbm5pbmdfNDU3MjYxMw==",
                "title": "People Power: Building the Talent Behind Egypt’s Hospitality Pipeline",
                "categories": [],
                "fields": [
                    {}
                ]
            }
        ],
        "withEvent": {
            "fields": [
                {
                    "translations": [
                        {
                            "value": "Education",
                            "language": "en_US"
                        }
                    ],
                    "definition": {
                        "id": "RmllbGREZWZpbml0aW9uXzg5NTQ5OQ==",
                        "translations": [
                            {
                                "name": "Business Type",
                                "language": "en_US"
                            }
                        ]
                    }
                },
                {}
            ]
        }
    }
]
const photos = [
    {
        "id": "13864",
        "hero": [
            {
                "id": "50183",
                "url": "/assets/img/egypt/homepage/fhs-egypt-2026-01.jpeg",
                "width": 1000,
                "height": 650
            }
        ]
    },
    {
        "id": "13865",
        "hero": [
            {
                "id": "50184",
                "url": "/assets/img/egypt/homepage/fhs-egypt-2026-02.jpeg",
                "width": 1000,
                "height": 650
            }
        ]
    },
    {
        "id": "13867",
        "hero": [
            {
                "id": "50186",
                "url": "/assets/img/egypt/homepage/fhs-egypt-2026-03.jpeg",
                "width": 1000,
                "height": 650
            }
        ]
    },
    {
        "id": "13868",
        "hero": [
            {
                "id": "50187",
                "url": "/assets/img/egypt/homepage/fhs-egypt-2026-04.jpeg",
                "width": 1000,
                "height": 650
            }
        ]
    },
    {
        "id": "50207",
        "hero": [
            {
                "id": "50193",
                "url": "/assets/img/egypt/homepage/fhs-egypt-2026-05.jpeg",
                "width": 1000,
                "height": 650
            }
        ]
    },
    {
        "id": "50206",
        "hero": [
            {
                "id": "50189",
                "url": "/assets/img/egypt/homepage/fhs-egypt-2026-06.jpeg",
                "width": 1000,
                "height": 650
            }
        ]
    },
    {
        "id": "50207",
        "hero": [
            {
                "id": "50193",
                "url": "/assets/img/egypt/homepage/fhs-egypt-2026-07.jpeg",
                "width": 1000,
                "height": 650
            }
        ]
    },
    {
        "id": "13868",
        "hero": [
            {
                "id": "50187",
                "url": "/assets/img/egypt/homepage/fhs-egypt-2026-08.jpeg",
                "width": 1000,
                "height": 650
            }
        ]
    },
    {
        "id": "50206",
        "hero": [
            {
                "id": "50189",
                "url": "/assets/img/egypt/homepage/fhs-egypt-2026-09.jpeg",
                "width": 1000,
                "height": 650
            }
        ]
    },
    
]
const QUOTES_DATA = [
    {
        avatarUrl: 'https://static.swapcard.com/public/images/c2e9a27561804eb6acac9ed27c5c6f98.jpeg',
        quote: "Egypt has won the war in volume. Now it needs to start winning in value.",
        fullName: "Victor Abou-Ghanem",
        title: "Chief Executive Officer, Story Hospitality"
    },
    
    {
        avatarUrl: 'https://static.swapcard.com/public/images/e4147fbc5dfc4f3ebcbe09f2a400285e.jpeg',
        quote: "Pipelines measure ambition. Delivery creates value.",
        fullName: "Samer Alkharashi",
        title: "Director of UN Tourism Regional Office for the Middle East, UN Tourism"
    },
    
    {
        avatarUrl: 'https://static.swapcard.com/public/images/bb2123fc526246acb53b05cb6d2d7627.png',
        quote: "Every day of delay, whether it is because of licensing or because of development, that’s a lot of cash being burnt.",
        fullName: "Hala Matar Choufany",
        title: "President, HVS Middle East, Africa and South Asia"
    },
    
    {
        avatarUrl: 'https://static.swapcard.com/public/images/636cd02601f74bec870cd89b0b3698b5.jpeg',
        quote: "You can build buildings in months or years. But if you wanna develop communities, that will take decades.",
        fullName: "Mohamed Amer",
        title: "CEO of El Gouna & Managing Director at Orascom Development Egypt"
    },
    
    {
        avatarUrl: 'https://static.swapcard.com/public/images/20c705e4f39e4239a1d417f9f32311b0.jpeg',
        quote: "Numbers don’t necessarily kill luxury. What kills it is unmanaged numbers.",
        fullName: "Ahmed A. El Wassief",
        title: "Chairman & CEO, Wings for Tourism Investment (WTI)"
    },
    
    {
        avatarUrl: 'https://static.swapcard.com/public/images/f227dbf17e4d4d29b4b9356884540bf6.jpeg',
        quote: "You can probably have a good result with the right partner even if you have the wrong project.",
        fullName: "Elie Younes",
        title: "Global Chief Development Officer, Radisson Hotel Group"
    },
    
    {
        avatarUrl: 'https://static.swapcard.com/public/images/f0dd65faca8448f494c8d15cec73640a.jpeg',
        quote: "The one thing that good design and bad design have in common is that they both cost the same amount of money.",
        fullName: "Michael Aldridge",
        title: "CEO & Founder, KOFISI"
    },
    
    {
        avatarUrl: 'https://static.swapcard.com/public/images/139c2b3168f147a0b45ee506e5ded538.jpeg',
        quote: "Reality isn’t written in the headline. It’s actually lived on the ground.",
        fullName: "Mo El Hadi",
        title: "Associate Account Director, Middle East & Africa, STR, a CoStar Group Company"
    },
    
]

export default function Home ({ data, content, partners, speakers }) {

    const [ showModal, setShowModal ] = useState(false)
    const [ modalContent, setModalContent ] = useState()
    

    const partnersOnly = partners.filter(partner => partner.fields.some(field => field.value !== 'media-partner'))
    const mediaPartnersOnly = partners.filter(partner => partner.fields.some(field => field.value === 'media-partner'))
    
    
    // console.log(content)
    // console.log('parterData:', partners)
    // console.log('parters:', partners.length)
    // console.log('partnersOnly:', partnersOnly)
    // console.log('mediaPartnersOnly:', mediaPartnersOnly)
    // console.log('speakers:', speakers)

    const isDesktop = useCustomMediaQuery('(min-width: 600px)');

    return (
        <>
            <Head>
                <link rel="icon" type="image/png" href="/assets/favicons/egypt/favicon-16x16.png" sizes="16x16" />
            </Head>
        
            
            <EventsBar site={'/egypt'} />
            <Header
                site={`/egypt`}
                handle={`Egypt`}
                event={header.data.event}
                mainMenu={header.data.mainMenu}
                ctas={header.data.event.headerCtas}
            />


            <HeroUnitVideo
                video={'https://cms.thebench.com/assets/video/fhs-2026-egypt-opt.mp4'}
                poster={'https://cms.thebench.com/assets/video/fhs-2026-egypt-opt-poster.jpg'}
			>
				<div style={{ position: `relative`, zIndex: 5, display: `flex`, flexDirection: `column`, alignItems: `center`, justifyContent: `center` }}>
					<Fade>
						<p className="fs-0 fw-600 lh-1 center balance">THANK YOU FOR JOINING FHS EGYPT</p>
						<p className="fs-2 center mt-xs">See you in 2027!</p>
					</Fade>

					<div className={ isDesktop ? `mt-sm button-grid` : `py-md button-grid`}>
						<Pop inline>
							<ButtonKeyline decal={`fs-5`} href={`/egypt/register-interest-for-2027`}>
								Register Interest for 2027
							</ButtonKeyline>
						</Pop>
						<Pop inline>
							<ButtonKeyline decal={`fs-5`} href={`/egypt/post-event-resources`} >
								Access Post Event Resources
							</ButtonKeyline>
						</Pop>
						<Pop inline>
							<ButtonKeyline decal={`fs-5`} href={`/egypt/2026-attendee-list-download`} >
								View 2026 Attendee List
							</ButtonKeyline>
						</Pop>
					</div>
				</div>

				<div style={{
					display: `flex`,
					flexDirection: `column`,
					justifyContent: `center`,
					background: `white`,
					padding: `1rem`,
					maxWidth: `30rem`,
					borderRadius: `1rem`,
					marginTop: `5rem`
				}}>
					<p className="fs-5 fw-600 lh-1 center pb-xs c-accent">Under the Patronage of</p>
					<Pop delay={.1}>
						<img src={"https://cms.thebench.com/assets/img/logos/ministry-of-housing-utilities-and-urban-communities.png"} width={`100%`} style={{ maxWidth: `26rem`, display: `block`, margin: `0 auto` }} alt="" />
					</Pop>
				</div>
 
            </HeroUnitVideo>


            
			{/* 2026 IN NUMBERS */}
			<section className="block bg-primary-2-dark">
				<div className="container center">
					<p className="fs-1 fw-400 c-white">FHS Egypt 2026 in Numbers</p>
				</div>

				<div className="container columns-4 gap-sm mt-md">
					<ImpactCard figure={400} unit={`+`} label={"Delegates"} />
					<ImpactCard figure={21} unit={"+"} label={"Countries"} />
					<ImpactCard figure={27} unit={`%`} label={"Investors"} />
					<ImpactCard figure={748} prefix={"$"} unit={"bn"} label={"in AUM"} />
				</div>

			</section>


			
			{/* SIGNINGS & ANNOUNCEMENTS */}
			<Section backgroundClass={`bg-primary`}>

				<div className="container center">
					<Fade>
						<p className="fs-1 fw-400 c-white">2026 Signings &amp; Announcements</p>
					</Fade>
				</div>

				<div className={`container columns-4 gap-xs`}>
					{
						ARTICLE_DATA.map((article, index) => (
							<ContentCard
								key={index}
								heroUrl={article.heroUrl}
								heading={article.title}
								excerpt={article.excerpt}
								url={article.url}
							/>
						))
					}
				</div>

				<div className="container center">
					<Pop>
						<ArrowButton 
							href={ '/egypt/content-library/category/press-room' } 
							theme={{ arrow: `white`, border: `white`, label: `white` }}
							target={`_blank`}
						>
							Latest News &amp; Updates
						</ArrowButton>
					</Pop>
				</div>
			</Section>


			
			{/* SPEAKER HIGHLIGHTS */}
			{
				SPEAKERS &&
				<section className="block bg-secondary pb-0">

					<div className="container center">
						<p className="fs-1 fw-600 c-primary caps">2026 Speakers</p>
					</div>
						
					<div className="container columns-5 gap-sm">
						{
							SPEAKERS.slice(0,15).map((profile, index) => (
								<Pop key={index}>
									<SpeakerCard
										url={`world/speakers/${profile.id}`}
										photoUrl={profile.photoUrl ? profile.photoUrl : null }
										fullName={`${profile.firstName} ${profile.lastName}`}
										jobTitle={profile.jobTitle}
										company={profile.organization}
										specialField={profile.id === "247717" && "Award Winner – Lifetime Achievement Award"}
										color={`white`}
									/>
								</Pop>
							))
						}
					</div>
					

					<div className="block bg-secondary">
						<div className='container center'>
							<div className="button-grid">
								<ArrowButton href={`/egypt/speakers`} theme={{ arrow: "c-primary", border: "c-primary", label: "c-primary"}} >View All Speakers</ArrowButton>
							</div>
						</div>
					</div>
				</section>
				
			}

			

			{/* PARTNERS */}
			<section className="block bg-white">
				<div className="container center">
					<Pop><p className="fs-2 fw-600 c-primary balance">Thank You to Our 2026 Partners</p></Pop>
				</div>

				<div className="container mt-lg">
					<LayoutGallery>
						<PartnerGroup partnerData={partners} start={0} end={17} />
						<PartnerGroup partnerData={partners} start={18} end={35} />
						<PartnerGroup partnerData={partners} start={36} end={52} />
					</LayoutGallery>
				</div>
			</section>



            {/* 2026 PHOTO HIGHLIGHTS */}
            <section className="block bg-secondary o-hidden" style={{ position: `relative`, overflow: 'hidden' }}>
                <div className={`${CSS.photoGrid} container`}>
                    <Fade><p className='fs-1 fw-400 lh-1 center'>2026 in Photos</p></Fade>
                    
                    <div className="columns-3 gap-xs mt-md">
                        {
                            photos.map( (photo, index) => (
                                <Pop key={index}>
                                    <div  key={index} style={{ position: `relative`}}>
                                        <Image src={photo.hero[0].url} width={photo.hero[0].width} height={photo.hero[0].height} layout={`responsive`} alt="" style={{ borderRadius: '.5rem'}} />
                                    </div>
                                </Pop>
                            ))
                        }
                        {/* <p className="mt-xs">
                            <ArrowButton href={`https://www.flickr.com/photos/benchevents/albums/`} target='_blank' theme={{ arrow: `var(--secondary)`, border: `var(--secondary)`, label: `var(--secondary)`}}>View all photos</ArrowButton>
                        </p> */}
                    </div>

                </div>

            </section>

			

			{/* 2026 QUOTES */}
			<section className="block bg-primary">
				<div className="container">
					<Fade><p className='fs-1 fw-400 lh-1 center'>2026 in Quotes</p></Fade>
				</div>
					
				<div className={`container columns-4 gap-sm`}>
					{
						QUOTES_DATA.map((quote, index) => (
							<Quotation
								key={index}
								avatarUrl={quote.avatarUrl}
								quote={quote.quote}
								fullName={quote.fullName}
								title={quote.title}
							/>
						))
					}
				</div>
			</section>

			




            <Footer />
            <LenisScroller />


            <PopupOverlay onClose={() => setShowModal(false)} show={showModal}>
                { modalContent } 
            </PopupOverlay>

        </>
    )
}
Home.theme = 'egypt'






export async function getStaticProps() {

    const { data } = await craftApolloClient().query({
        query: gql`
            query LandingPage {
                entry(site: "${process.env.SITE_HANDLE}", id: "77020") {
                    ... on ${process.env.SITE_HANDLE}Homepage_${process.env.SITE_HANDLE}Homepage_Entry {
                        id
                        title
                        theme
                        events {
                            ... on events_BlockType {
                                id
                                heading
                                startDate
                                endDate
                                dateOverride
                                venue
                                theme
                                streams {
                                    ... on streams_stream_BlockType {
                                        id
                                        logo {
                                            id
                                            url
                                            width
                                            height
                                        }
                                        heading
                                        purchasePassLink
                                        websiteLink
                                    }
                                }
                            }
                        }
                    }
                }
                podcasts: entries(
                    section: "contentLibrary"
                    site: ["${process.env.SITE_HANDLE}", "${process.env.SITE_HANDLE_AE}", "${process.env.SITE_HANDLE_SA}", "${process.env.SITE_HANDLE_EGYPT}"]
                    limit: 3
                    contentTypes: "7701"
                ){
                    ... on contentLibrary_article_Entry {
                        id
                        slug
                        title
                        postDate
                        excerpt
                        contentLibraryHero {
                            id
                            url
                            width
                            height
                        }
                        contentTypes {
                            ... on contentLibrary_Category {
                                id
                                title
                                slug
                            }
                        }
                    }
                }
                
            }
          
        `
    })

    const swapcardPartners = await fetch(
		"https://developer.swapcard.com/event-admin/graphql",
		{
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"Authorization": process.env.SWAPCARD_AUTH_KEY
			},
			body: JSON.stringify({
				query: `
					query {
						exhibitors(eventId: "${process.env.SWAPCARD_EVENT_ID_EGYPT_2026}", page:1, pageSize: 200) {
							id
							name
							logoUrl
							fields {
								... on SelectField {
									id
									value
									definition {
										id
										name
									}
									translations {
										value
									}
								}
							}
						}
					}
				`,
				variables: {
					"eventId": process.env.SWAPCARD_EVENT_ID_EGYPT_2026,
					"page": 1
				}
			})
		}
	)
	console.log(swapcardPartners)	
    const partnerData = await swapcardPartners.json()
    

    const swapcardSpeakers = await fetch(
		"https://developer.swapcard.com/event-admin/graphql",
		{
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"Authorization": process.env.SWAPCARD_AUTH_KEY
			},
			body: JSON.stringify({
				query: `
					query eventPerson(
						$eventId: ID!
						$cursor: CursorPaginationInput
						$filters: [EventPersonFilter!]
					){
						eventPerson(eventId: $eventId, cursor: $cursor, filters: $filters) {
							nodes {
								id
								type
								firstName
								lastName
								jobTitle
								organization
								photoUrl

								speakerOnPlannings {
									id
									title
									categories
									fields {
									... on MultipleSelectField {
										id
										definition {
											isDefault
											name
										}
										value
										translations {
											value
										}
									}
									}
								}

								withEvent(eventId: $eventId) {
									fields {
										... on SelectField {
											translations {
												value
												language
											}
											definition {
												id
												translations {
													name
													language
												}
											}
										}
										... on TextField {
											definition {
												name
												translations {
													name
												}
												id
											}
											locale
											value
											id
										}
									}
								}
								}
							}
						}
					`,
					variables: {
						"eventId": process.env.SWAPCARD_EVENT_ID_EGYPT_2026,
						"cursor": {
							"first": 300
						},
						"filters": {
							"shouldBeInGroups": "RXZlbnRHcm91cF82NjExMzE="
						}
					}
			}
			)
		}
	)

	// console.log(swapcardSpeakers)
	
    const speakerData = await swapcardSpeakers.json()
    

    return {
        props: {
            data: data.entry,
            content: data.podcasts,
            partners: partnerData.data.exhibitors,
            speakers: speakerData.data.eventPerson.nodes
        },
    }
}