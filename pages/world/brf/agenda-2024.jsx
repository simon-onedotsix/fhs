import { LenisScroller } from '../../../fuselage/animation/lenis-scroller'
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'

import _ from 'lodash'
import { format } from 'date-fns'
import HTMLReactParser from 'html-react-parser'

import { Header } from '../../../fuselage/theme/2024/world/common/header/header'
import { Footer } from '../../../fuselage/theme/2024/world/common/footer/footer'

import { Pop } from "../../../fuselage/theme/2023/ae/layout/animation/animation"
import { StopwatchIcon } from "../../../fuselage/components/icons/icons"
import { AgendaSpeakerCard } from '../../../fuselage/components/agenda-speaker-card/agenda-speaker-card'

import { convertSeconds } from '../../../lib/agenda-utils'


import CSS from '../../../css/app/agenda-world-2024.module.css'
import CSSlite from '../../../css/app/agenda-world-2024-aag.module.css'


const SESSION_DATA_2024 = [
    {
        "id": "UGxhbm5pbmdfMjAzMDE5NA==",
        "titleTranslations": [
            {
                "value": "Welcome to the Branded Residences Forum",
                "language": "en_US"
            }
        ],
        "beginsAt": "2024-10-02 13:30:00",
        "endsAt": "2024-10-02 13:35:00",
        "descriptionTranslations": [
            {
                "value": "<br />",
                "language": "en_US"
            }
        ],
        "format": "PHYSICAL",
        "fields": [
            {
                "id": "RmllbGRWYWx1ZV8xOTEwNTI2NA==",
                "definition": {
                    "isDefault": true,
                    "name": "Location"
                },
                "value": "summit-stage",
                "translations": [
                    {
                        "value": "Summit Stage"
                    }
                ]
            },
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
        ],
        "speakers": [
            {
                "firstName": "Jonathan",
                "id": "U3BlYWtlcihFdmVudF8xNzUxMzUzLEV2ZW50UGVvcGxlXzMyMTE5Mjg0LFVzZXJfMTU3NTczMzYp",
                "jobTitle": "Chairman & CEO",
                "lastName": "Worsley",
                "photoUrl": "https://static.swapcard.com/public/images/65ef700e7da4493ea8d79d2e53ba7532.jpeg",
                "organization": "The Bench",
                "biography": "Jonathan Worsley began his career at Forte and Holiday Inns before moving into hotel advisory roles at PKF and CBRE. In 1997, he co-founded IHIF Berlin, followed by The Bench, which started as a daily benchmarking company for the hotel industry and in 2008 merging with STR to create STR Global.  \n\nThe Bench evolved into a leading organiser of premier hospitality investment conferences and Jonathan continued bringing the hospitality investment community together in various parts of the world through AHIC - now Future Hospitality Summit (FHS), FHS Saudi, FHS Africa and SAHIC in Latin America. Later, he expanded into aviation and F&B with AviaDev and GRIF. \n\nIn 2020, Jonathan led The Bench’s pivot to virtual events, launching Hospitality Tomorrow and FHS for the G20 Saudi Secretariat. He continues to drive industry innovation through initiatives like the Startup Den and Lead the Change while serving on the boards of Fresh on Table, Envi Lodges, and other startups shaping the future of hospitality. \n\nHe is also a trustee of the World Sustainable Hospitality Alliance, Future Talent – a musical charity, a member of Women in Hospitality (WiH) and recently completed a board term with the Ras Al Khaimah Tourism Development Authority.",
                "withEvent": {
                    "eventProfile": {
                        "type": "Moderator",
                        "withEvent": {
                            "speakerOnPlannings": [
                                {
                                    "id": "UGxhbm5pbmdfMTc1MDYwNg==",
                                    "title": "FHS Awards - Winner Announcement",
                                    "beginsAt": "2024-05-01 10:35:00",
                                    "endsAt": "2024-05-01 10:50:00"
                                },
                                {
                                    "id": "UGxhbm5pbmdfMTg5MzkyNA==",
                                    "title": "Closing Remarks",
                                    "beginsAt": "2024-05-01 13:15:00",
                                    "endsAt": "2024-05-01 13:20:00"
                                },
                                {
                                    "id": "UGxhbm5pbmdfMTc1MDU4Nw==",
                                    "title": "TenX Leadership Talks: Global Ambitions - Bridging Cultures and Markets",
                                    "beginsAt": "2024-04-30 15:35:00",
                                    "endsAt": "2024-04-30 15:50:00"
                                },
                                {
                                    "id": "UGxhbm5pbmdfMTc1MDU2OQ==",
                                    "title": "Welcome Remarks",
                                    "beginsAt": "2024-04-29 15:00:00",
                                    "endsAt": "2024-04-29 15:15:00"
                                },
                                {
                                    "id": "UGxhbm5pbmdfMTg5MDk3NA==",
                                    "title": "Let's meet the Future with Desi",
                                    "beginsAt": "2024-04-30 10:30:00",
                                    "endsAt": "2024-04-30 10:40:00"
                                },
                                {
                                    "id": "UGxhbm5pbmdfMTc1MDU4Ng==",
                                    "title": "Start-Up Den",
                                    "beginsAt": "2024-04-30 14:15:00",
                                    "endsAt": "2024-04-30 15:45:00"
                                }
                            ]
                        }
                    }
                }
            }
        ],
        "categories": [
            "Branded Residences Forum"
        ]
    },
    {
        "id": "UGxhbm5pbmdfMjAyNzgxNQ==",
        "titleTranslations": [
            {
                "value": "Setting the Stage - Introduction to the Branded Residences Forum, Industry Overview, Key Insights, Concepts & Trends",
                "language": "en_US"
            }
        ],
        "beginsAt": "2024-10-02 13:35:00",
        "endsAt": "2024-10-02 13:50:00",
        "descriptionTranslations": [
            {
                "value": "<p><a href=\"https://youtu.be/o0Ou2V2E1dE\" target=\"_blank\">Click here to watch online.</a></p>",
                "language": "en_US"
            }
        ],
        "format": "PHYSICAL",
        "fields": [
            {
                "id": "RmllbGRWYWx1ZV8xOTEwNTI2NA==",
                "definition": {
                    "isDefault": true,
                    "name": "Location"
                },
                "value": "summit-stage",
                "translations": [
                    {
                        "value": "Summit Stage"
                    }
                ]
            },
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
        ],
        "speakers": [
            {
                "firstName": "Jeff",
                "id": "U3BlYWtlcihFdmVudF8xNzUxMzUzLEV2ZW50UGVvcGxlXzMxNjkxOTI3LFVzZXJfMTc4MTEwNSk=",
                "jobTitle": "Chief Business Officer",
                "lastName": "Tisdall",
                "photoUrl": "https://static.swapcard.com/public/images/93e21228749a4f0480a74e05cd7f65e4.jpeg",
                "organization": "Accor One Living",
                "biography": "Jeff Tisdall is Chief Business Officer, Accor One Living and Global Head of Mixed-Use. Accor One Living is an industry first mixed-use platform, focused on the development and operation of branded residences. Leveraging Accor’s two decades of residential experience pioneered under iconic brands like Fairmont and Raffles, the Group is now developing trend setting residential solutions across luxury, lifestyle, premium and midscale segments. \n\nPrior to joining Accor in 2013 (via FRHI Hotels and Resorts), Tisdall was the Managing Director of Singapore-based LIFT, where he served as branded residential advisor to FRHI and the Jumeirah Group. Previously, Tisdall worked with Wyndham Worldwide in Dubai, as Managing Director with responsibility for the company’s RCI and Registry Collection brands in the Middle East and North Africa region. He was also Vice President of Real Estate at Kingdom Hotel Investments, where he managed the company’s residential and commercial real estate portfolio. Earlier in his career, Tisdall spent 13 years with Intrawest, leaving as a Senior Vice President at the company’s premium vacation ownership division. \n\nTisdall holds a degree from McGill University in Canada and lives in Dubai with his family.",
                "withEvent": {
                    "eventProfile": {
                        "type": "Speaker",
                        "withEvent": {
                            "speakerOnPlannings": []
                        }
                    }
                }
            }
        ],
        "categories": [
            "Branded Residences Forum"
        ]
    },
    {
        "id": "UGxhbm5pbmdfMjAyNzgxNg==",
        "titleTranslations": [
            {
                "value": "Unpacking the Benefits of Branded Residences for Investors",
                "language": "en_US"
            }
        ],
        "beginsAt": "2024-10-02 13:50:00",
        "endsAt": "2024-10-02 14:25:00",
        "descriptionTranslations": [
            {
                "value": "<p><a href=\"https://youtu.be/Q-pNc5KF8Kk\" target=\"_blank\">Click here to watch online.</a></p>",
                "language": "en_US"
            }
        ],
        "format": "PHYSICAL",
        "fields": [
            {
                "id": "RmllbGRWYWx1ZV8xOTEwNTI2NA==",
                "definition": {
                    "isDefault": true,
                    "name": "Location"
                },
                "value": "summit-stage",
                "translations": [
                    {
                        "value": "Summit Stage"
                    }
                ]
            },
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
        ],
        "speakers": [
            {
                "firstName": "George",
                "id": "U3BlYWtlcihFdmVudF8xNzUxMzUzLEV2ZW50UGVvcGxlXzMyMjE1MzgzLFVzZXJfMjA0OTI4MjUp",
                "jobTitle": "Chairman & CEO",
                "lastName": "Azar",
                "photoUrl": "https://static.swapcard.com/public/images/cf7f682b06ab4e8cb7855d6121a0a3ae.jpeg",
                "organization": "Sotheby's International Realty",
                "biography": "George Azar is the Chairman & CEO of United Kingdom Sotheby's International Realty, Dubai Sotheby's International Realty and Saudi Arabia Sotheby's International Realty. George started his career as a Financial Consultant at Merrill Lynch Pierce Fenner & Smith (Middle East) where he expanded the company's clientele and created numerous opportunities.\n\nIn 1995, he joined the Swiss Bank Corporation as Agent - Middle East and excelled in servicing and advising clients on various investment strategies. In 1998, George was appointed as a General Manager by Banque SCS Alliance Groupe (Beirut) where he systematised the marketing and business development in the Middle East until 2001.\n\nIn September of the same year, Union Bancaire Privée appointed him as Director of its Dubai Representative Office and, following a series of successful initiatives, as Managing Director in 2004. Two years later, George launched UBP Qatar LLC and led the company as its Chief Executive Officer. He furthered his ventures by serving Dubai Sotheby's International Realty as Chairman & CEO since 2013, acquired the Saudi Arabia business in 2015, and the United Kingdom business in 2023.\n\nGeorge strongly believes in the positive side of things. This leadership perspective yields to his success as one of the top-notch entrepreneurs who played a key role in elevating the status of Dubai on the global level.",
                "withEvent": {
                    "eventProfile": {
                        "type": null,
                        "withEvent": null
                    }
                }
            },
            {
                "firstName": "Husni Al",
                "id": "U3BlYWtlcihFdmVudF8xNzUxMzUzLEV2ZW50UGVvcGxlXzMyMjkxNjEwLFVzZXJfMjA1MzM1OTUp",
                "jobTitle": "Chairman & Founder",
                "lastName": "Bayari",
                "photoUrl": "https://static.swapcard.com/public/images/473d1a48df0a4c8dbfc163ac5e82f405.jpeg",
                "organization": "Bayari Investments",
                "biography": "Husni Al Bayari is the visionary Chairman and Founder of Bayari Investments, a leading conglomerate in the UAE. With over 20 years of experience in the UK and MENA real estate markets, Husni has carved a strong presence in the UAE's real estate industry. In 2023, he launched Evolutions, an innovative real estate intelligence hub offering exclusive developments, consultancy, and a global network of experts. Under his leadership, Bayari Investments also includes D&B Properties, Homes & Beyond, and more. Husni is a key shareholder in houza and has received RERA's prestigious 4 Star Real Estate Brokers Award.",
                "withEvent": {
                    "eventProfile": {
                        "type": null,
                        "withEvent": null
                    }
                }
            },
            {
                "firstName": "Louis",
                "id": "U3BlYWtlcihFdmVudF8xNzUxMzUzLEV2ZW50UGVvcGxlXzMxNzQwMzM2LFVzZXJfMTU3NTczMTAp",
                "jobTitle": "Chief Development Officer, Deputy Head MEAT & Global Head F&B Development",
                "lastName": "Abboud",
                "photoUrl": "https://cdn-api.swapcard.com/public/images/fc5fda656ea943b2ac6c1d865715584a.jpeg",
                "organization": "Ennismore",
                "biography": "Louis is the Chief Development Officer and Deputy Head for the Middle East, Africa, India and Turkey at Ennismore, where he oversees all facets of hotel development and operations, from partnership inception, deal-making, owner relations, to property design and pre-opening activities. He also serves as the Global Head of F&B Development, leading Ennismore's investment strategy in its F&B platforms, including Rikas and Paris Society. Louis is focused on accelerating the growth of Ennismore’s hotels, residences, and F&B brands.\nBefore joining Ennismore, Louis held the role of VP of Development, Middle East and Africa at Accor. His career began in hotel operations at Starwood Hotels and Resorts in California, followed by roles in asset management with the Saudi BinLadin Group in Jeddah and Majid Al Futtaim in Dubai. Louis also gained valuable experience in hospitality consultancy with HVS in Dubai, specializing in consulting and valuations",
                "withEvent": {
                    "eventProfile": {
                        "type": "Moderator",
                        "withEvent": {
                            "speakerOnPlannings": [
                                {
                                    "id": "UGxhbm5pbmdfMTgwOTM2NA==",
                                    "title": "How Lifestyle Hotel and F&B Brands are Disrupting the Future of Hospitality in the Kingdom",
                                    "beginsAt": "2024-04-30 16:10:00",
                                    "endsAt": "2024-04-30 16:35:00"
                                }
                            ]
                        }
                    }
                }
            },
            {
                "firstName": "Charlie",
                "id": "U3BlYWtlcihFdmVudF8xNzUxMzUzLEV2ZW50UGVvcGxlXzMyMTY2MjUzLFVzZXJfMjA0NjEzNzAp",
                "jobTitle": "Head of Sales & Marketing",
                "lastName": "Walsh",
                "photoUrl": "https://static.swapcard.com/public/images/a2589b4788664df7bf2c6cf5adcc0de8.jpeg",
                "organization": "The OWO Residences by Raffles",
                "biography": "Having spent 20 years working in Prime London Real Estate, I have been fortunate enough to have worked on some truly landmark developments across the capital and in varying degrees of use classes.\n\nI have spent much of my career overseas, focussing on the Asian markets, but also living and working in the UAE and Saudi Arabia.",
                "withEvent": {
                    "eventProfile": {
                        "type": null,
                        "withEvent": null
                    }
                }
            },
            {
                "firstName": "Sudhin",
                "id": "U3BlYWtlcihFdmVudF8xNzUxMzUzLEV2ZW50UGVvcGxlXzMyMTYwMjcwLFVzZXJfMjA0NTcwODUp",
                "jobTitle": "Chief Asset Management Officer",
                "lastName": "Siva",
                "photoUrl": "https://static.swapcard.com/public/images/e6af2a91ddad4cf9bdec80cb33cf8a3a.jpeg",
                "organization": "Shamal Holding",
                "biography": "Sudhin is an experienced Asset Management & Operations professional brining 20 years of experience in portfolio development, asset management, operations and commercial oversight of diverse portfolios in the real estate, hospitality, food and beverage, leisure, recreation and maritime sectors.\n\nHis core areas of focus are multi-sector asset management, feasibility & investment assessments, strategic planning, portfolio growth, performance and operations management.",
                "withEvent": {
                    "eventProfile": {
                        "type": null,
                        "withEvent": null
                    }
                }
            }
        ],
        "categories": [
            "Branded Residences Forum"
        ]
    },
    {
        "id": "UGxhbm5pbmdfMjE2MDE2OA==",
        "titleTranslations": [
            {
                "value": "From London to Dubai - Perspectives from a Pioneering Developer on the Future of Branded Living in the World's most Dynamic Market for Branded Real Estate",
                "language": "en_US"
            }
        ],
        "beginsAt": "2024-10-02 14:25:00",
        "endsAt": "2024-10-02 14:40:00",
        "descriptionTranslations": [
            {
                "value": "<p><a href=\"https://youtu.be/3t9xN2Y-WBw\" target=\"_blank\">Click here to watch online.</a></p>",
                "language": "en_US"
            }
        ],
        "format": "PHYSICAL",
        "fields": [
            {
                "id": "RmllbGRWYWx1ZV8xOTEwNTI2NA==",
                "definition": {
                    "isDefault": true,
                    "name": "Location"
                },
                "value": "summit-stage",
                "translations": [
                    {
                        "value": "Summit Stage"
                    }
                ]
            },
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
        ],
        "speakers": [
            {
                "firstName": "Nick",
                "id": "U3BlYWtlcihFdmVudF8xNzUxMzUzLEV2ZW50UGVvcGxlXzMzNjE0MjM4LFVzZXJfMjEzNDYyOTYp",
                "jobTitle": "Chief Executive Officer",
                "lastName": "Candy",
                "photoUrl": "https://static.swapcard.com/public/images/cd2f0cf8c3f8428e86d86e922f7b64fb.png",
                "organization": "Candy Capital",
                "biography": "Nick Candy is a British luxury real estate developer and co-founder of world-leading interior design and development management firm Candy & Candy (now Candy London). His groundbreaking project – the globally celebrated One Hyde Park – revolutionised the property market worldwide, breaking industry records and setting unparalleled new standards in luxury design and living. \n\nNick operates a private family office overseeing a diverse group of companies spanning real estate, design, development, and a portfolio of multi-stage investments in tech, digital media, consumer and sports, biotech, sustainability, and natural resources.\n\nWith a long-standing affiliation with the Middle East, Candy is actively engaged in a number of significant real estate and hospitality projects across the region through joint venture partnerships at the highest level.\n\nRecognised as a distinguished figure and innovator within the real estate community, Nick is a regular commentator in the media on industry topics and trends, and his visionary insights have earned him widespread acclaim and recognition.",
                "withEvent": {
                    "eventProfile": {
                        "type": "Speaker",
                        "withEvent": null
                    }
                }
            },
            {
                "firstName": "Stephen",
                "id": "U3BlYWtlcihFdmVudF8xNzUxMzUzLEV2ZW50UGVvcGxlXzMwOTY0MjI4LFVzZXJfMTU3NTcyNzUp",
                "jobTitle": "Former Presenter",
                "lastName": "Sackur",
                "photoUrl": "https://cdn-api.swapcard.com/public/images/03618d250d2f4c30aebff7f3a994a651.jpeg",
                "organization": "HARDTalk",
                "biography": "Stephen Sackur is a former presenter of HARDtalk, the current affairs interview on BBC World and the News Channel. His subjects have included the heads of NATO and OPEC, Shimon Peres, Gore Vidal and Richard Dawkins.\n\nFor HARDtalk he has also interviewed a number of the world’s great names, including Bill Clinton, George W Bush, Mikhail Gorbachev and Hugo Chavez. Distilling his notes for a series of articles, Stephen identiﬁed the ﬁve qualities they all seemed to share: an indestructible will, passion (almost beyond reason), outrageous optimism, a super-sized ego and a ‘rebel yell.’\n\nThese interviews have also given him an insight into how organisations can best bring about innovation: “You need to ﬁnd ways to assess individuals on their merits, and give rewards for innovative thinking rather than play-it-safe mediocrity. You should encourage insiders to get outside and bring back fresh insights. And you shouldn’t confuse seniority with creativity.”\n\nAway from set-piece interviews Stephen has served in Brussels, reporting on day-to-day stories from the major European institutions and across the continent. Before that he was Washington Correspondent, where his coverage and analysis of 9/11 won widespread acclaim.\n\nTen years earlier it was Stephen who broke the story of the mass killing on the Basra road out of Kuwait, marking the end of the Gulf War. He was then posted to Cairo and Jerusalem as Middle East Correspondent, where he reported on the emergence of the Palestinian Authority.",
                "withEvent": {
                    "eventProfile": {
                        "type": "Moderator",
                        "withEvent": null
                    }
                }
            }
        ],
        "categories": [
            "Branded Residences Forum"
        ]
    },
    {
        "id": "UGxhbm5pbmdfMjAyNzgxNw==",
        "titleTranslations": [
            {
                "value": "Operator Perspective - A Look at How Leading Operators of Branded Residences View their Relationship With Development Partners and Homeowner Communities",
                "language": "en_US"
            }
        ],
        "beginsAt": "2024-10-02 14:40:00",
        "endsAt": "2024-10-02 15:15:00",
        "descriptionTranslations": [
            {
                "value": "<p><a href=\"https://youtu.be/urK2RsykC0w\" target=\"_blank\">Click here to watch online.</a></p>",
                "language": "en_US"
            }
        ],
        "format": "PHYSICAL",
        "fields": [
            {
                "id": "RmllbGRWYWx1ZV8xOTEwNTI2NA==",
                "definition": {
                    "isDefault": true,
                    "name": "Location"
                },
                "value": "summit-stage",
                "translations": [
                    {
                        "value": "Summit Stage"
                    }
                ]
            },
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
        ],
        "speakers": [
            {
                "firstName": "Ali",
                "id": "U3BlYWtlcihFdmVudF8xNzUxMzUzLEV2ZW50UGVvcGxlXzMxODQ5MTgzLFVzZXJfMTU3NTczMzUp",
                "jobTitle": "Senior Director Head of Hospitality, Hotels & Tourism",
                "lastName": "Manzoor",
                "photoUrl": "https://cdn-api.swapcard.com/public/images/ee75f5da2004484ebe7a16782b1cd54b.jpeg",
                "organization": "CBRE MENA",
                "biography": "Ali is Head of Hotels & Tourism at CBRE in the Middle East, dedicated to providing creative, hands-on hospitality expertise across the region.\n \nHaving been in the industry for over 15 years, Ali is a well-established hospitality specialist with experience in hotel advisory, valuations and operations. During his time in the Middle East, Ali has worked with developers, Attendeess and governmental institutions on feasibility studies, hotel valuations, pricing strategies, asset reviews and optimum site use for both large-scale multi-use projects and stand-alone assets. He has also led several owner-operator Hotel Management Agreement negotiations across a number of jurisdictions.",
                "withEvent": {
                    "eventProfile": {
                        "type": "Moderator",
                        "withEvent": {
                            "speakerOnPlannings": [
                                {
                                    "id": "UGxhbm5pbmdfMTgyMDAxNA==",
                                    "title": "Travelling for Good: Innovations in Luxury Travel for Responsible Tourism Development",
                                    "beginsAt": "2024-04-30 14:55:00",
                                    "endsAt": "2024-04-30 15:35:00"
                                }
                            ]
                        }
                    }
                }
            },
            {
                "firstName": "Daniel von",
                "id": "U3BlYWtlcihFdmVudF8xNzUxMzUzLEV2ZW50UGVvcGxlXzMxNjc4NjM2LFVzZXJfOTc0MTM4OSk=",
                "jobTitle": "Senior Vice President, Global Mixed-Use Development",
                "lastName": "Barloewen",
                "photoUrl": "https://cdn-api.swapcard.com/public/images/5cf473e2ddec40608d2edc80e017428d.jpeg",
                "organization": "Accor",
                "biography": "Daniel von Barloewen is the Regional Vice President of Accor One Living and Head of Mixed-Use for Accor for Europe, Middle East, Africa and India. His remit covers development, brand advisory & marketing support for development partners, as well as operations for branded residences, golf, private members’ clubs, and co-working.\n\nBoasting 42 brands, over 6,500 open and pipeline hotels with c.1,000,000 rooms, Accor is the world's 2nd largest branded residential operator (with over 150 open and pipeline residence projects, approximately 25,000 Residences, with more than USD $15bn of value of real estate licensed under 25 of its brands in the Accor and Ennismore portfolio). In 2023 more than $2.2Bn of residential real estate was sold under Accor brands.\n\nAccor offers world class residential expertise, bringing iconic brands and legendary hospitality service to private home ownership. Located in prime urban locations and the sought after resort destinations, our residential properties are a natural extensions of our iconic hotel brands. Providing development partners with a tremendous value creation opportunity, our branded private residences offer the potential to generate significant brand premiums and enhanced hotel economics as a result of co-location strategy, which help drive supplementary revenue (F&B, Spa) to the hotel.\n\nPrior to joining Accor, Daniel von Barloewen founded a real estate consultancy business, Strategic Development Advisors Ltd, which provided a range of development advisory services as well as hotel operator searches and contract negotiation to both institutional and private Attendeess. Before that, he was head of Mixed-Use Development Europe at Marriott International, and previously spent 11 years at Savills where he created and ran the Global Residential Development Consultancy department.\n\nOriginally a development surveyor, Daniel brings an over 18-year track record on the advisory side and hotel operator side of residential, mixed-use and integrated resort development projects, in over 40 countries, with particular expertise on branded residences and co-located hotel and residential development. He is skilled at working with a wide range of Attendees and developer profiles, with the ability to focus strategically on opportunity analysis, value generation, risk reduction, exit strategy, ROI and development strategy evaluation.\n\nDaniel speaks 4 languages, is also a Major in the British Army Reserves, and has served with distinction in Afghanistan. He holds a Bachelors Degree from the University of Durham, a Masters Degree from CASS Business School and is a Member of the Chartered Management Institute.",
                "withEvent": {
                    "eventProfile": {
                        "type": "Speaker",
                        "withEvent": {
                            "speakerOnPlannings": [
                                {
                                    "id": "UGxhbm5pbmdfMTgwOTM2Ng==",
                                    "title": "The Future of Hospitality Investments in Branded Residences, Co-Living, and Serviced Apartments in the Kingdom",
                                    "beginsAt": "2024-04-30 15:35:00",
                                    "endsAt": "2024-04-30 16:15:00"
                                }
                            ]
                        }
                    }
                }
            },
            {
                "firstName": "Jonathan",
                "id": "U3BlYWtlcihFdmVudF8xNzUxMzUzLEV2ZW50UGVvcGxlXzMzMTkwMDA4LFVzZXJfMTQxMDA0ODQp",
                "jobTitle": "Global Head and SVP Private Homes and Branded Residential",
                "lastName": "Tomlinson",
                "photoUrl": "https://static.swapcard.com/public/images/db51b6ba212e49cdac8b72619b33cee5.jpeg",
                "organization": "Kerzner International",
                "biography": "Jonathan Tomlinson is the Global Head and Senior Vice President of Branded Residential and Private Homes at Kerzner International, responsible for the operational and strategic development of the entirety of Kerzner's residential offering and leads the curation of the ultimate homeowner experience. He spearheads the promotion, development, and management of Kerzner International’s residential component globally, including business development, real estate sales and marketing strategy, design planning assistance, and executive management of all residential projects including Atlantis, The Royal Residences, One&Only Private Homes, SIRO Residences and Rare Finds.\n\nPrior to joining Kerzner International in 2021, Jonathan held leadership roles with Four Seasons as Vice President Residential based in Singapore, IMG, and leading real estate developer Indochina Capital as Managing Director of the hospitality portfolio which included Branded Residential developments with Hyatt, Six Senses, GHM and independent serviced apartments, mixed use developments and golf properties.\n\nJonathan holds an MBA from RMIT University Melbourne, Australia and a CPM from the Institute of Real Estate Management and resides in Dubai with his family.",
                "withEvent": {
                    "eventProfile": {
                        "type": "Speaker",
                        "withEvent": null
                    }
                }
            },
            {
                "firstName": "Adelina",
                "id": "U3BlYWtlcihFdmVudF8xNzUxMzUzLEV2ZW50UGVvcGxlXzMzMzM1NTk4LFVzZXJfMTk3MjQyNDIp",
                "jobTitle": "Global Head of Residential Marketing",
                "lastName": "Wong Ettelson",
                "photoUrl": "https://static.swapcard.com/public/images/d99bf302a81248ae953388076d11e2a9.jpeg",
                "organization": "Mandarin Oriental Hotel Group",
                "biography": "Adelina Wong Ettelson leads the marketing division for The Residences at Mandarin Oriental. She has been pivotal in establishing the legendary hospitality brand as a global leader in branded residences, launching properties in diverse locales such as London, Bodrum, and Bangkok. As a sought after thought leader on branded residences, she employs her diverse background in luxury fashion, retail, real estate, and hospitality to connect and engage with audiences and stakeholders across domestic and international markets. Prior to joining Mandarin Oriental, she was the Executive Vice President of Marketing at Corcoran Sunshine Marketing Group.",
                "withEvent": {
                    "eventProfile": {
                        "type": "Speaker",
                        "withEvent": null
                    }
                }
            },
            {
                "firstName": "Barry",
                "id": "U3BlYWtlcihFdmVudF8xNzUxMzUzLEV2ZW50UGVvcGxlXzMzNjY2MzU0LFVzZXJfMTI0MTE1ODIp",
                "jobTitle": "Principal",
                "lastName": "Landsberg",
                "photoUrl": "https://static.swapcard.com/public/images/d0d199ba071a4362b915e94abef4d0b8.jpeg",
                "organization": "Landsberg Residential Consulting Inc.",
                "biography": "Barry Landsberg is a senior leader with over 25 years of global experience in the development of luxury and lifestyle branded residences and real estate. He brings key expertise in providing end-to-end development support and consulting services to mixed-use and residential projects.\n \nLandsberg built his career working for Fairmont-Raffles/FRHI/Accor on a broad portfolio of projects around the world further establishing his credentials as Vice President at Four Seasons Hotels & Resorts, where he led the residential development marketing and sales effort for urban and resort projects in the Americas. He then founded his own consultancy. With his firm Landsberg Residential Consulting, Barry works with developers in the establishment of brand partnerships, the development of branded stand-alone residential real estate, and repurposing existing real-estate assets and guides brands in the conceptualization and development of the tools, resources, and infrastructure required to create and support a branded residential offering.\n\n• Senior luxury development leadership working in collaboration with developers’ internal team and external development resources to deliver top performing luxury residential projects.\n• Extensive global experience in-house and as a consultant – including Canada, Unites States, Mexico, Caribbean, Colombia, UK, Turkey, Morocco, Egypt. UAE, Saudi Arabia, Indonesia, Philippines, and China – working with pure play best-in-class luxury hospitality brands including Four Seasons, Fairmont, Raffles, and Sofitel.\n• An invaluable resource for developers and brands in fast tracking the pre-development phase of luxury residential projects.\n• Leading and/or consulting on operator selection, legal agreements, project design and positioning conceived to resonate with the targeted consumer audience -product, services, amenities, rental strategy and operating model, and marketing and sales strategy.\n• Guiding hospitality and consumer brands in the development of their branded residential strategy.\n ",
                "withEvent": {
                    "eventProfile": {
                        "type": null,
                        "withEvent": null
                    }
                }
            }
        ],
        "categories": [
            "Branded Residences Forum"
        ]
    },
    {
        "id": "UGxhbm5pbmdfMjAyNzgxOA==",
        "titleTranslations": [
            {
                "value": "Coffee Break",
                "language": "en_US"
            }
        ],
        "beginsAt": "2024-10-02 15:10:00",
        "endsAt": "2024-10-02 15:15:00",
        "descriptionTranslations": [],
        "format": "PHYSICAL",
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
            }
        ],
        "speakers": [],
        "categories": [
            "Branded Residences Forum"
        ]
    },
    {
        "id": "UGxhbm5pbmdfMjAyNzgxOQ==",
        "titleTranslations": [
            {
                "value": "Marketing Case Studies - Short Presentations by Leading Marketing Professionals Who Have Helped Drive the Success of Branded Residence Projects",
                "language": "en_US"
            }
        ],
        "beginsAt": "2024-10-02 15:15:00",
        "endsAt": "2024-10-02 16:00:00",
        "descriptionTranslations": [
            {
                "value": "<p><a href=\"https://youtu.be/G7A6UUSh6bY\" target=\"_blank\">Click here to watch online.</a></p>",
                "language": "en_US"
            }
        ],
        "format": "PHYSICAL",
        "fields": [
            {
                "id": "RmllbGRWYWx1ZV8xOTEwNTI2NA==",
                "definition": {
                    "isDefault": true,
                    "name": "Location"
                },
                "value": "summit-stage",
                "translations": [
                    {
                        "value": "Summit Stage"
                    }
                ]
            },
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
        ],
        "speakers": [
            {
                "firstName": "Adrian",
                "id": "U3BlYWtlcihFdmVudF8xNzUxMzUzLEV2ZW50UGVvcGxlXzMxODQ5MDAzLFVzZXJfMjAyNTIzMDEp",
                "jobTitle": "Chief Executive Officer",
                "lastName": "Strittmatter",
                "photoUrl": "https://static.swapcard.com/public/images/e85beecfcc9645db9b251cb36856562f.png",
                "organization": "Saentys",
                "biography": "Adrian Strittmatter is the CEO and founder of Saentys Communication Ltd., the international creative consultancy specializing in the real estate and hospitality sectors since 2008. Under Adrian’s leadership Saentys has grown to over 50 employees, 6 studios and active in over 35 countries. \n\n Adrian is a passionate entrepreneur, leader and public speaker who has in depth and long-standing expertise in the fields of business development, brand strategy, branding, real estate sales and marketing. \n\nHe holds Masters in both Political Science and Media and Communications.",
                "withEvent": {
                    "eventProfile": {
                        "type": null,
                        "withEvent": null
                    }
                }
            },
            {
                "firstName": "Sudhin",
                "id": "U3BlYWtlcihFdmVudF8xNzUxMzUzLEV2ZW50UGVvcGxlXzMyMTYwMjcwLFVzZXJfMjA0NTcwODUp",
                "jobTitle": "Chief Asset Management Officer",
                "lastName": "Siva",
                "photoUrl": "https://static.swapcard.com/public/images/e6af2a91ddad4cf9bdec80cb33cf8a3a.jpeg",
                "organization": "Shamal Holding",
                "biography": "Sudhin is an experienced Asset Management & Operations professional brining 20 years of experience in portfolio development, asset management, operations and commercial oversight of diverse portfolios in the real estate, hospitality, food and beverage, leisure, recreation and maritime sectors.\n\nHis core areas of focus are multi-sector asset management, feasibility & investment assessments, strategic planning, portfolio growth, performance and operations management.",
                "withEvent": {
                    "eventProfile": {
                        "type": null,
                        "withEvent": null
                    }
                }
            },
            {
                "firstName": "Richard",
                "id": "U3BlYWtlcihFdmVudF8xNzUxMzUzLEV2ZW50UGVvcGxlXzMyMTY1Mjk2LFVzZXJfMjA0NjA1NzAp",
                "jobTitle": "Group CEO",
                "lastName": "Stevens",
                "photoUrl": "https://static.swapcard.com/public/images/b9975db8f5b840c89803ea7a02ec590c.jpeg",
                "organization": "Sectorlight",
                "biography": "Richard Stevens is the Group CEO of Sectorlight. Under Richard’s leadership, Sectorlight has become a creative force in luxury real estate branding - crafting powerful narratives and lifestyle-led campaigns for some of the world’s most iconic branded residences, including Hyde Dubai Hills, SLS The Red Sea Residences, Raffles Residences, and Portonovi.",
                "withEvent": {
                    "eventProfile": {
                        "type": "Moderator",
                        "withEvent": null
                    }
                }
            },
            {
                "firstName": "Sally",
                "id": "U3BlYWtlcihFdmVudF8xNzUxMzUzLEV2ZW50UGVvcGxlXzMyNzMyNzE4LFVzZXJfMjA4MDk1MTMp",
                "jobTitle": "Founder and Managing Director",
                "lastName": "Maier-Yip",
                "photoUrl": "https://static.swapcard.com/public/images/e167271ea40e48a09196616faa91965f.jpeg",
                "organization": "11K Consulting",
                "biography": "Sally is a trusted cross-cultural communications advisor with a simple mission to help ambitious companies to grow in the complex China market, domestically and abroad.\n\nOver the past two decades, Sally has built a successful career on delivering award-winning multi-stakeholder communications strategies for multi-national and local companies.\n\nIn 2015, Sally founded 11K Consulting - a London-based China-specialist communications consultancy that unlocks the market potential of Chinese high-net-worth-individuals and investors through sharing unique insights, tailored communications strategies and providing unparalleled access. \n\nWith teams in London and Shanghai and affiliate networks in Singapore, Hong Kong, UAE, the USA, and globally, 11K are a team of modern, multi-lingual trusted advisors who are culturally astute, connected and who understand your business priorities as well as the needs and aspirations of these valuable customer groups.",
                "withEvent": {
                    "eventProfile": {
                        "type": "Speaker",
                        "withEvent": null
                    }
                }
            },
            {
                "firstName": "Curtis",
                "id": "U3BlYWtlcihFdmVudF8xNzUxMzUzLEV2ZW50UGVvcGxlXzMyOTg1NzAyLFVzZXJfMjA5NjMyMzQp",
                "jobTitle": "CEO & Founder",
                "lastName": "Tischler",
                "photoUrl": "https://static.swapcard.com/public/images/c197a76203a843a897a4353f3abe442e.png",
                "organization": "SagePoint Real Estate Company, INC.",
                "biography": "Curtis L. Tischler is a seasoned leader in resort and urban real estate development with over 20 years of experience specializing in sales, marketing, and consulting for branded hospitality properties and luxury estates. As the CEO and Corporate Broker of SagePoint Real Estate Company, Curtis oversees a boutique firm renowned for its strategic, high-touch approach to both urban and resort markets across the United States and internationally.\n\nCurtis’s career spans a variety of roles across real estate development, private equity, and financial services, driving hundreds of millions in sales revenue. His expertise encompasses pre-development planning, brand strategy, go-to-market execution, multi-channel marketing, brokerage management, DRE compliance, and sales team leadership.\n\nBefore entering real estate, Curtis was an accomplished athlete, spending eight years on the United States and World Championship Ski Team. He holds a Bachelor of Science in Business Management and Finance from the University of Nevada, Reno, and is a licensed broker in California, Nevada, Utah, and Arizona. Curtis’s diverse background and results-driven approach make him a premier authority in the luxury real estate market, adept at fostering connections and driving business growth.",
                "withEvent": {
                    "eventProfile": {
                        "type": "Moderator",
                        "withEvent": null
                    }
                }
            },
            {
                "firstName": "Adelina",
                "id": "U3BlYWtlcihFdmVudF8xNzUxMzUzLEV2ZW50UGVvcGxlXzMzMzM1NTk4LFVzZXJfMTk3MjQyNDIp",
                "jobTitle": "Global Head of Residential Marketing",
                "lastName": "Wong Ettelson",
                "photoUrl": "https://static.swapcard.com/public/images/d99bf302a81248ae953388076d11e2a9.jpeg",
                "organization": "Mandarin Oriental Hotel Group",
                "biography": "Adelina Wong Ettelson leads the marketing division for The Residences at Mandarin Oriental. She has been pivotal in establishing the legendary hospitality brand as a global leader in branded residences, launching properties in diverse locales such as London, Bodrum, and Bangkok. As a sought after thought leader on branded residences, she employs her diverse background in luxury fashion, retail, real estate, and hospitality to connect and engage with audiences and stakeholders across domestic and international markets. Prior to joining Mandarin Oriental, she was the Executive Vice President of Marketing at Corcoran Sunshine Marketing Group.",
                "withEvent": {
                    "eventProfile": {
                        "type": "Speaker",
                        "withEvent": null
                    }
                }
            }
        ],
        "categories": [
            "Branded Residences Forum"
        ]
    },
    {
        "id": "UGxhbm5pbmdfMjAyNzgyNA==",
        "titleTranslations": [
            {
                "value": "Legal Structures: Protecting Interests of Investors, Purchasers & Brands",
                "language": "en_US"
            }
        ],
        "beginsAt": "2024-10-02 15:15:00",
        "endsAt": "2024-10-02 15:45:00",
        "descriptionTranslations": [
            {
                "value": "<p><a href=\"https://youtu.be/JfGmMXli3Xw\" target=\"_blank\">Click here to watch online.</a></p>",
                "language": "en_US"
            }
        ],
        "format": "PHYSICAL",
        "fields": [
            {
                "id": "RmllbGRWYWx1ZV8xOTEwNTI2NQ==",
                "definition": {
                    "isDefault": true,
                    "name": "Location"
                },
                "value": "future-stage",
                "translations": [
                    {
                        "value": "Future Stage"
                    }
                ]
            },
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
        ],
        "speakers": [
            {
                "firstName": "Lara",
                "id": "U3BlYWtlcihFdmVudF8xNzUxMzUzLEV2ZW50UGVvcGxlXzMxODU3MjM4LFVzZXJfMTQxMDA0NjYp",
                "jobTitle": "Senior Vice President Legal - Luxury & Lifestyle, Special Projects & Global Legal Lead for Accor One Living",
                "lastName": "Barett",
                "photoUrl": "https://static.swapcard.com/public/images/620ae55a06b64822af6ba7d9b8dc5a7e.jpeg",
                "organization": "Accor",
                "biography": "Lara Barrett has extensive experience in real estate and hospitality transactions, having worked over 25 years for top tier international law firms and hospitality companies. She is responsible for the oversight of the legal transactional and operational issues for hotel and mixed-use properties for Accor and the legal transactional aspects of the M&A special projects for Accor's Luxury & Lifestyle division.",
                "withEvent": {
                    "eventProfile": {
                        "type": "Moderator",
                        "withEvent": null
                    }
                }
            },
            {
                "firstName": "Scott",
                "id": "U3BlYWtlcihFdmVudF8xNzUxMzUzLEV2ZW50UGVvcGxlXzMxODU4OTU2LFVzZXJfMjMzNjI1MSk=",
                "jobTitle": "Founder",
                "lastName": "Antel",
                "photoUrl": "https://static.swapcard.com/public/images/f8adc05652d6499bb38ba9f43560f107.png",
                "organization": "Scott's Fz",
                "biography": "Scott Antel is a highly respected emerging markets hotels & hospitality lawyer with 25+ years’ experience advising both owners/developers and, less frequently, international operators in the Middle East, Russia/CIS, Africa, Turkey, Eastern Europe and the Caribbean on hotel & resort, branded residential and mixed-use developments.\n\nA former senior partner in DLA Piper and BCLP, Scott regularly advises clients on all aspects of hotel & resort, branded residence and mixed-use development as well as on related operational matters, including litigation.\n\nHe has acted on hundreds of hotel projects including numerous landmark projects such as Sochi 2014, Blue Amber Zanzibar Resort in Zanzibar, Grand Hotel Europe and Astoria Hotel in St Petersburg, the Ritz Carlton and Mandarin Oriental in Moscow, Four Seasons, Mandarin Oriental and Chedi hotels in Oman, JW Marriott and W Yas Island in the UAE, Sofitel and Hyatt in Cyprus and many others projects in numerous locations, including Moscow, St Petersburg, Sochi, Almaty, Istanbul, Bodrum, London, Muscat, Zanzibar, Dubai, Abu Dhabi, Jeddah, Makkah, Riyadh, Tehran, Muscat, Limassol, Crete, Montenegro, Vietnam and ten African countries.\n\nHe also works in the franchise sector advising hotels, restaurants and retail clients and on the structuring and set up of inbound franchise investment in numerous other sectors.\n\nScott is recommended as a \"Leading Adviser\" and \"go to\" hospitality lawyer by Chambers Europe and Legal 500 legal directories and listed in Best Lawyers. He serves on the Advisory Board of the Russian Hotel Investment Forum and is a regular speaker at the event, as well the Berlin IHIF, UAE AHIC and ALIS (US) hotel conferences. Scott is a regularly published thought leader and frequently quoted on hospitality related legal and commercial topics and a regular speaker at industry events and conferences.\n\nScott was recipient of the Russia/CIS Hotel Investment Forum's 2012 “Lifetime Achievement Award” for his contribution in developing the hotel industry in emerging markets, the only lawyer or consultant to ever receive this prestigious award. In 2011 he was elected a member of the International Society of Hospitality Consultants (ISHC).",
                "withEvent": {
                    "eventProfile": {
                        "type": "Moderator",
                        "withEvent": {
                            "speakerOnPlannings": [
                                {
                                    "id": "UGxhbm5pbmdfMTgwOTM2Ng==",
                                    "title": "The Future of Hospitality Investments in Branded Residences, Co-Living, and Serviced Apartments in the Kingdom",
                                    "beginsAt": "2024-04-30 15:35:00",
                                    "endsAt": "2024-04-30 16:15:00"
                                }
                            ]
                        }
                    }
                }
            },
            {
                "firstName": "Richard",
                "id": "U3BlYWtlcihFdmVudF8xNzUxMzUzLEV2ZW50UGVvcGxlXzMyMTU1NjgyLFVzZXJfMTc4MTAyMyk=",
                "jobTitle": "Partner",
                "lastName": "Bursby",
                "photoUrl": "https://static.swapcard.com/public/images/be8666ef6d5f4b7f9e05a941090c5aae.png",
                "organization": "Taylor Wessing LLP",
                "biography": "Richard is a partner at Taylor Wessing and leads the Hotels & Hospitality Group.  He has over 20 years' experience of advising Owners, Investors, Developers, Funders and Operators on numerous hotel related projects around the world.  Richard is a recognized expert in Hotel Management and Franchise Agreements and Branded Residences. \n\nHe is top ranked in Chambers and Legal 500 which stated \"Richard Bursby is one of the top experts in our industry and instantly commands respect from other firms we are up against in our contract negotiations. I find this adds huge value to our position from the off.\"",
                "withEvent": {
                    "eventProfile": {
                        "type": null,
                        "withEvent": null
                    }
                }
            },
            {
                "firstName": "Moustafa",
                "id": "U3BlYWtlcihFdmVudF8xNzUxMzUzLEV2ZW50UGVvcGxlXzMyMTUyMjY0LFVzZXJfMTYwOTUzNzIp",
                "jobTitle": "Founder & Partner",
                "lastName": "Said",
                "photoUrl": "https://static.swapcard.com/public/images/18bdf4b7d36e46a4909308223311f493.jpeg",
                "organization": "Wisefields",
                "biography": "Moustafa is a founding partner specialising in real estate, hotels, and tourism. He has extensive experience in real estate, particularly in hotel and branded residence developments. \n\nWith considerable experience in the United Arab Emirates, Saudi Arabia, and other jurisdictions in the region, Moustafa represent numerous prominent master developers, sub-developers, and hotel owners and operators in the region, earning recognition for his sophisticated development practice. \n\nHe has been recognised as a leading real estate lawyer by Chambers Global from 2014 through 2022, and by Legal 500 EMEA for 2014, 2016 through to 2023.",
                "withEvent": {
                    "eventProfile": {
                        "type": "Speaker",
                        "withEvent": {
                            "speakerOnPlannings": [
                                {
                                    "id": "UGxhbm5pbmdfMTgzMDQzMA==",
                                    "title": "Navigating Regulatory Shifts: Legal Dynamics Reshaping Hospitality Real Estate in the Region and their Impact on Tourism Offerings",
                                    "beginsAt": "2024-05-01 10:20:00",
                                    "endsAt": "2024-05-01 10:45:00"
                                }
                            ]
                        }
                    }
                }
            },
            {
                "firstName": "Khaled A.",
                "id": "U3BlYWtlcihFdmVudF8xNzUxMzUzLEV2ZW50UGVvcGxlXzMyNjkzNTIyLFVzZXJfODIwMzA5OCk=",
                "jobTitle": "Chief Executive Officer",
                "lastName": "Kaawar",
                "photoUrl": "https://static.swapcard.com/public/images/2eda337d8e8b4cbbb2ffada160125b4d.jpeg",
                "organization": "Strata Global Holdings",
                "biography": "Khaled Kaawar, an MBA graduate, assumes the role of Chief Executive Officer at Strata Global Holdings. Boasting an illustrious career spanning 31 years in Hotel Management across the UAE and USA, Khaled has garnered extensive experience in various capacities within branded and boutique projects in San Diego, San Francisco, and Los Angeles, establishing himself as a consummate hotelier.\n\nHis visionary leadership has been instrumental in seamlessly integrating hospitality elements into our managed portfolio, elevating the standards of service and quality across all sectors. Khaled leads a team of seasoned professionals, comprising of community managers, customer happiness executives, facility management experts, and procurement specialists, ensuring the delivery of exceptional results and unparalleled client satisfaction.",
                "withEvent": {
                    "eventProfile": {
                        "type": "Speaker",
                        "withEvent": null
                    }
                }
            }
        ],
        "categories": [
            "Branded Residences Forum"
        ]
    },
    {
        "id": "UGxhbm5pbmdfMjAyNzk1NQ==",
        "titleTranslations": [
            {
                "value": "The Leading Edge of Global Residential Markets - Examining The Role of Innovation, Architecture and Design in Branded Residence Projects",
                "language": "en_US"
            }
        ],
        "beginsAt": "2024-10-02 15:15:00",
        "endsAt": "2024-10-02 15:45:00",
        "descriptionTranslations": [
            {
                "value": "<p><a href=\"https://youtu.be/a6u43Fq7RBw\" target=\"_blank\">Click here to watch online.</a></p>",
                "language": "en_US"
            }
        ],
        "format": "PHYSICAL",
        "fields": [
            {
                "id": "RmllbGRWYWx1ZV8xOTgzMTg2Nw==",
                "definition": {
                    "isDefault": true,
                    "name": "Location"
                },
                "value": "inspiration-workshop-room",
                "translations": [
                    {
                        "value": "Workshops (Murjaan)"
                    }
                ]
            },
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
        ],
        "speakers": [
            {
                "firstName": "Mark",
                "id": "U3BlYWtlcihFdmVudF8xNzUxMzUzLEV2ZW50UGVvcGxlXzMyNDAyNTIzLFVzZXJfMjA1OTk3ODcp",
                "jobTitle": "Global VP Design",
                "lastName": "Eacott",
                "photoUrl": "https://static.swapcard.com/public/images/054c0fb6144a4ce5b7674e82c4f827b1.jpeg",
                "organization": "Ennismore",
                "biography": "Mark joined Ennismore in 2018 from Los Angeles as part of the Accor acquisition of the SBE Lifestyle Brands. Bringing with it his in-depth knowledge of the SLS, Mondrian, HYDE, and Delano legacy brands, Mark was part of a small team based out of Singapore, instrumental in the growth of Ennismore in Asia-Pacific.",
                "withEvent": {
                    "eventProfile": {
                        "type": null,
                        "withEvent": null
                    }
                }
            },
            {
                "firstName": "Andy",
                "id": "U3BlYWtlcihFdmVudF8xNzUxMzUzLEV2ZW50UGVvcGxlXzMyNTQ5MzEwLFVzZXJfMTA4NDE4Mzkp",
                "jobTitle": "Head of Global Residential Development Sales",
                "lastName": "Hawkins",
                "photoUrl": "https://static.swapcard.com/public/images/bd01a52490254818a0aeb8a2ffc5954a.jpeg",
                "organization": "Savills",
                "biography": "Andy is responsible for teams specialising in the global sale of residential development projects for Savills UK.  He has been in the industry for over 15 years and has worked a number of high profile projects in the UK, Europe, the US and Middle East.\n\nAndy has in depth experience of advising on and delivering strategic campaigns for branded residences both in the UK and around the World, as well as large scale multi-phase projects.",
                "withEvent": {
                    "eventProfile": {
                        "type": "Moderator",
                        "withEvent": null
                    }
                }
            },
            {
                "firstName": "Philip S.",
                "id": "U3BlYWtlcihFdmVudF8xNzUxMzUzLEV2ZW50UGVvcGxlXzMyNzI3NTkxLFVzZXJfMjA4MDc2NDcp",
                "jobTitle": "Managing Director",
                "lastName": "Gillard",
                "photoUrl": "https://static.swapcard.com/public/images/c6f0306a44ed40459dd68e4ac2a00115.jpeg",
                "organization": "Arquitectonica",
                "biography": "Since commencing his career in the Middle East in 2001, Philip S. Gillard has dedicated over two decades to transforming the regional landscape. He currently spearheads the newest office of the global architectural powerhouse, Arquitectonica, marking its 11th worldwide. The firm’s reach extends across more than 50 countries, where the team develops ultra-luxury branded designs across various sectors, including residential, mixed-use, hospitality, and more. With each project in their portfolio, characterised by efficient plans wrapped in a series of cutting-edge and environmentally stringent designs, they are every corner of the globe.",
                "withEvent": {
                    "eventProfile": {
                        "type": null,
                        "withEvent": null
                    }
                }
            },
            {
                "firstName": "Federica",
                "id": "U3BlYWtlcihFdmVudF8xNzUxMzUzLEV2ZW50UGVvcGxlXzMyNzYzNjY2LFVzZXJfMTMwMDc4ODUp",
                "jobTitle": "Associate",
                "lastName": "Grignolo",
                "photoUrl": "https://static.swapcard.com/public/images/db9d44432901412dba410405c5020750.jpeg",
                "organization": "Studio Carter",
                "biography": "Italian-French nationality, born in Turin (Italy).\nGraduated in Architecture at the Polytechnic University in Turin (Italy) and ETSAM - Polytechnic University in Madrid (Spain).\n2013-2018: Worked in high end residential interior architecture projects at Tomèf Design (London - UK) as interior designer and local architect for prestigious French interior decorators. Projects for private Clients spanning across London's boroughs of Mayfair, Knightsbridge, South Kensington, Chelsea, Westminster.\n2018-2022: Moved to hospitality projects at Rockwell Group Madrid (Spain). Working with brands such as JW Marriott, The Edition, Ritz-Carlton, W, Hard Rock, Royal Caribbean and Norwegian Cruise Line. Interior Design, project managing and overviewing materials and FF&E specifications. \n2022-ongoing: joined Studio Carter as Senior Designer then Associate, deepening and elevating the knowledge in the hospitality sector. Brands and projects to date include SLS, Six Senses, One&Only, resorts in Red Sea (KSA), residential developments in Dubai.",
                "withEvent": {
                    "eventProfile": {
                        "type": null,
                        "withEvent": null
                    }
                }
            },
            {
                "firstName": "Wissal",
                "id": "U3BlYWtlcihFdmVudF8xNzUxMzUzLEV2ZW50UGVvcGxlXzMzNTQ3MTI4LFVzZXJfMjEzMDM4NTIp",
                "jobTitle": "Interior Designer",
                "lastName": "Jarjour",
                "photoUrl": "https://static.swapcard.com/public/images/148774464bc143e5a399abe7639af512.jpeg",
                "organization": "Dubai Holding Investments",
                "biography": "Wissal is an accomplished interior architect with over 22 years of experience in the fields of hospitality, residential, and commercial projects. She began her career in FF&E (Furniture, Fixtures, and Equipment) design and gradually transitioned into a role as a client representative. Throughout her career, Wissal has developed a deep passion for design space planning and has honed her skills in creating detailed and meticulous designs.\nWith her experience and expertise, Wissal has been entrusted with leadership roles where she oversees and coordinates with various consultants to ensure successful project execution. She excels in identifying and addressing site-specific challenges and is adept at finding innovative solutions. Wissal's meticulous attention to detail allows her to effectively manage complex design projects while maintaining a high standard of quality.\nIn her role as an interior architect, Wissal has worked on a diverse range of projects, such as hotels, resorts, luxury residences, office spaces, retail stores, and more. Her comprehensive knowledge of different sectors within the industry enables her to adapt her skills and design approach to suit the specific requirements of each project.\nOverall, Wissal's experience, passion for design, and strong mindfulness make her a valuable asset in the field of interior architecture, allowing her to deliver exceptional project.",
                "withEvent": {
                    "eventProfile": {
                        "type": "Speaker",
                        "withEvent": null
                    }
                }
            }
        ],
        "categories": [
            "Branded Residences Forum"
        ]
    },
    {
        "id": "UGxhbm5pbmdfMjAyNzgyMw==",
        "titleTranslations": [
            {
                "value": "Structuring Rentals Programs to Appeal to Buyers, While Protecting the Interests of Hotel Owners & Developers",
                "language": "en_US"
            }
        ],
        "beginsAt": "2024-10-02 15:45:00",
        "endsAt": "2024-10-02 16:15:00",
        "descriptionTranslations": [],
        "format": "PHYSICAL",
        "fields": [
            {
                "id": "RmllbGRWYWx1ZV8xOTEwNTI2NA==",
                "definition": {
                    "isDefault": true,
                    "name": "Location"
                },
                "value": "summit-stage",
                "translations": [
                    {
                        "value": "Summit Stage"
                    }
                ]
            },
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
        ],
        "speakers": [
            {
                "firstName": "Rico",
                "id": "U3BlYWtlcihFdmVudF8xNzUxMzUzLEV2ZW50UGVvcGxlXzMxODUwMjkyLFVzZXJfMTU3MTMyNDkp",
                "jobTitle": "Head of Global Residential Development Consultancy",
                "lastName": "Picenoni",
                "photoUrl": "https://static.swapcard.com/public/images/b0a1c9d0c3b24b52b91cb27bd540cb8c.jpeg",
                "organization": "Savills",
                "biography": "Rico is head of global residential development consultancy with Savills UK, with a background in hotel and branded residential strategy including programming, mixed-use integration & standalone branding models, as well as best practices in legal & contractual structuring within the greater hospitality context.\n\nRico works in international markets including North America, Europe, the Middle East and APAC. His experience involves project feasibility, contract negotiations & commercial structuring, as well as operational structuring and mixed-use integration.",
                "withEvent": {
                    "eventProfile": {
                        "type": "Moderator",
                        "withEvent": null
                    }
                }
            },
            {
                "firstName": "Daniel von",
                "id": "U3BlYWtlcihFdmVudF8xNzUxMzUzLEV2ZW50UGVvcGxlXzMxNjc4NjM2LFVzZXJfOTc0MTM4OSk=",
                "jobTitle": "Senior Vice President, Global Mixed-Use Development",
                "lastName": "Barloewen",
                "photoUrl": "https://cdn-api.swapcard.com/public/images/5cf473e2ddec40608d2edc80e017428d.jpeg",
                "organization": "Accor",
                "biography": "Daniel von Barloewen is the Regional Vice President of Accor One Living and Head of Mixed-Use for Accor for Europe, Middle East, Africa and India. His remit covers development, brand advisory & marketing support for development partners, as well as operations for branded residences, golf, private members’ clubs, and co-working.\n\nBoasting 42 brands, over 6,500 open and pipeline hotels with c.1,000,000 rooms, Accor is the world's 2nd largest branded residential operator (with over 150 open and pipeline residence projects, approximately 25,000 Residences, with more than USD $15bn of value of real estate licensed under 25 of its brands in the Accor and Ennismore portfolio). In 2023 more than $2.2Bn of residential real estate was sold under Accor brands.\n\nAccor offers world class residential expertise, bringing iconic brands and legendary hospitality service to private home ownership. Located in prime urban locations and the sought after resort destinations, our residential properties are a natural extensions of our iconic hotel brands. Providing development partners with a tremendous value creation opportunity, our branded private residences offer the potential to generate significant brand premiums and enhanced hotel economics as a result of co-location strategy, which help drive supplementary revenue (F&B, Spa) to the hotel.\n\nPrior to joining Accor, Daniel von Barloewen founded a real estate consultancy business, Strategic Development Advisors Ltd, which provided a range of development advisory services as well as hotel operator searches and contract negotiation to both institutional and private Attendeess. Before that, he was head of Mixed-Use Development Europe at Marriott International, and previously spent 11 years at Savills where he created and ran the Global Residential Development Consultancy department.\n\nOriginally a development surveyor, Daniel brings an over 18-year track record on the advisory side and hotel operator side of residential, mixed-use and integrated resort development projects, in over 40 countries, with particular expertise on branded residences and co-located hotel and residential development. He is skilled at working with a wide range of Attendees and developer profiles, with the ability to focus strategically on opportunity analysis, value generation, risk reduction, exit strategy, ROI and development strategy evaluation.\n\nDaniel speaks 4 languages, is also a Major in the British Army Reserves, and has served with distinction in Afghanistan. He holds a Bachelors Degree from the University of Durham, a Masters Degree from CASS Business School and is a Member of the Chartered Management Institute.",
                "withEvent": {
                    "eventProfile": {
                        "type": "Speaker",
                        "withEvent": {
                            "speakerOnPlannings": [
                                {
                                    "id": "UGxhbm5pbmdfMTgwOTM2Ng==",
                                    "title": "The Future of Hospitality Investments in Branded Residences, Co-Living, and Serviced Apartments in the Kingdom",
                                    "beginsAt": "2024-04-30 15:35:00",
                                    "endsAt": "2024-04-30 16:15:00"
                                }
                            ]
                        }
                    }
                }
            },
            {
                "firstName": "Carlos",
                "id": "U3BlYWtlcihFdmVudF8xNzUxMzUzLEV2ZW50UGVvcGxlXzMzMzIwMjcyLFVzZXJfNDQxNzA3MCk=",
                "jobTitle": "Executive Chairman & Board Member",
                "lastName": "Leal",
                "photoUrl": null,
                "organization": "United Hospitality Management (UHM)",
                "biography": "Carlos Leal serves as both the CEO at United Investments Portugal (UIP) and the Executive Chairman at United Hospitality Management (UHM). Under his strategic leadership, he has propelled the company to attain a prominent market position in Portugal's development, construction, and management of mixed-use tourist development projects. Additionally, Carlos holds the position of Head of Asset Management at IFA Hotels & Resorts (Kuwait) and is a member of the Advisory Committee at the Fund FCR C2 R&D Growth IV (Portugal).",
                "withEvent": {
                    "eventProfile": {
                        "type": "Speaker",
                        "withEvent": null
                    }
                }
            },
            {
                "firstName": "Barry",
                "id": "U3BlYWtlcihFdmVudF8xNzUxMzUzLEV2ZW50UGVvcGxlXzMzNjY2MzU0LFVzZXJfMTI0MTE1ODIp",
                "jobTitle": "Principal",
                "lastName": "Landsberg",
                "photoUrl": "https://static.swapcard.com/public/images/d0d199ba071a4362b915e94abef4d0b8.jpeg",
                "organization": "Landsberg Residential Consulting Inc.",
                "biography": "Barry Landsberg is a senior leader with over 25 years of global experience in the development of luxury and lifestyle branded residences and real estate. He brings key expertise in providing end-to-end development support and consulting services to mixed-use and residential projects.\n \nLandsberg built his career working for Fairmont-Raffles/FRHI/Accor on a broad portfolio of projects around the world further establishing his credentials as Vice President at Four Seasons Hotels & Resorts, where he led the residential development marketing and sales effort for urban and resort projects in the Americas. He then founded his own consultancy. With his firm Landsberg Residential Consulting, Barry works with developers in the establishment of brand partnerships, the development of branded stand-alone residential real estate, and repurposing existing real-estate assets and guides brands in the conceptualization and development of the tools, resources, and infrastructure required to create and support a branded residential offering.\n\n• Senior luxury development leadership working in collaboration with developers’ internal team and external development resources to deliver top performing luxury residential projects.\n• Extensive global experience in-house and as a consultant – including Canada, Unites States, Mexico, Caribbean, Colombia, UK, Turkey, Morocco, Egypt. UAE, Saudi Arabia, Indonesia, Philippines, and China – working with pure play best-in-class luxury hospitality brands including Four Seasons, Fairmont, Raffles, and Sofitel.\n• An invaluable resource for developers and brands in fast tracking the pre-development phase of luxury residential projects.\n• Leading and/or consulting on operator selection, legal agreements, project design and positioning conceived to resonate with the targeted consumer audience -product, services, amenities, rental strategy and operating model, and marketing and sales strategy.\n• Guiding hospitality and consumer brands in the development of their branded residential strategy.\n ",
                "withEvent": {
                    "eventProfile": {
                        "type": null,
                        "withEvent": null
                    }
                }
            }
        ],
        "categories": [
            "Branded Residences Forum"
        ]
    },
    {
        "id": "UGxhbm5pbmdfMjAyNzk1Ng==",
        "titleTranslations": [
            {
                "value": "Strategies to Drive the Development and Operation of Sustainable Homeowner Communities that Deliver on Health and Wellbeing Objectives",
                "language": "en_US"
            }
        ],
        "beginsAt": "2024-10-02 15:45:00",
        "endsAt": "2024-10-02 16:15:00",
        "descriptionTranslations": [
            {
                "value": "<p><a href=\"https://youtu.be/uN06G-C_myY\" target=\"_blank\">Click here to watch online.</a></p>",
                "language": "en_US"
            }
        ],
        "format": "PHYSICAL",
        "fields": [
            {
                "id": "RmllbGRWYWx1ZV8xOTgzMTg2Nw==",
                "definition": {
                    "isDefault": true,
                    "name": "Location"
                },
                "value": "inspiration-workshop-room",
                "translations": [
                    {
                        "value": "Workshops (Murjaan)"
                    }
                ]
            },
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
        ],
        "speakers": [
            {
                "firstName": "Paul",
                "id": "U3BlYWtlcihFdmVudF8xNzUxMzUzLEV2ZW50UGVvcGxlXzMxODUwNTQ0LFVzZXJfMjAyNTMxMTYp",
                "jobTitle": "Managing Director",
                "lastName": "Rands",
                "photoUrl": "https://static.swapcard.com/public/images/7cefd223526446a39cd9fc92d3c167c2.jpeg",
                "organization": "Future of Hospitality Institute",
                "biography": "Paul leads the Future of Hospitality Institute, PKF hospitality group's think tank for the hotel and  living sectors. Future Living is its principal research project, now in its second two year phase, which brings together a community of industry stakeholders, cooperating alongside research institutions and universities to identify major changes and innovations for the future of the serviced living sector.\n\nPrior to joining Future of Hospitality Institute in 2022, Paul led international development and asset management for serviced apartment operator BridgeStreet, and previously held development roles with various operators in the hospitality sector.\n\nHe resides in the UK and is a Chartered Member of the Royal Institution of Chartered Surveyors (RICS).",
                "withEvent": {
                    "eventProfile": {
                        "type": "Moderator",
                        "withEvent": null
                    }
                }
            },
            {
                "firstName": "Emlyn",
                "id": "U3BlYWtlcihFdmVudF8xNzUxMzUzLEV2ZW50UGVvcGxlXzMyMTcyMjY3LFVzZXJfMTYzNTM5NDAp",
                "jobTitle": "Senior Vice President - Well-Being",
                "lastName": "Brown",
                "photoUrl": "https://cdn-api.swapcard.com/public/images/8d523bcf11cf4589bfebfdfc3c2f5251.jpeg",
                "organization": "Accor",
                "biography": "Emlyn throughout his 22-year career, he has occupied various pivotal leadership roles in Wellness, traversing the globe from Europe to the Middle East, Asia and China helming group operations for a number of luxury spa and fitness companies\n\nPrior to joining Accor, he was a senior lead at Resense Spas as Global Design Director and MD of Asia, accountable for the growth of the Resense portfolio in China and Southeast Asia.\n\nEmlyn was also wellness director at award-winning consultancy, GOCO Hospitality and has held senior positions at Six Senses Resorts & Spas where he was the regional director for Europe and later operations director for Asia.\n\nToday he is responsible for driving the strategic development and design strategy for wellness at Accor, seamlessly integrating the ethos of wellbeing into every facet of the customer journey.",
                "withEvent": {
                    "eventProfile": {
                        "type": "Speaker",
                        "withEvent": null
                    }
                }
            },
            {
                "firstName": "Ricardo",
                "id": "U3BlYWtlcihFdmVudF8xNzUxMzUzLEV2ZW50UGVvcGxlXzMyMjIxMzIyLFVzZXJfMzc3NTY2OSk=",
                "jobTitle": "Managing Director",
                "lastName": "Moreira",
                "photoUrl": "https://static.swapcard.com/public/images/6e8b77a231714caa8c090a646b664940.jpeg",
                "organization": "XCO2",
                "biography": "A leading expert in sustainability in the hospitality industry for nearly 20 years, Ricardo Moreira is founder and managing director of XCO2, a Sustainability and Engineering consultancy based in London and Singapore. He is responsible for the company’s overall management and leads some of its key decarbonisation projects around the world, supporting owners, investors and operators in achieving their sustainability ambitions. \n\nWith both architectural and engineering backgrounds, he brings a technical focus to discussions, and a design integration approach to deliver robust sustainability solutions. The company is currently involved in hospitality projects in Europe, Americas, Middle East and Asia.",
                "withEvent": {
                    "eventProfile": {
                        "type": null,
                        "withEvent": null
                    }
                }
            },
            {
                "firstName": "Ashley",
                "id": "U3BlYWtlcihFdmVudF8xNzUxMzUzLEV2ZW50UGVvcGxlXzMyMjg5NDI2LFVzZXJfMTE2NDE3NjMp",
                "jobTitle": "Global Practice Principal, Planning + Landscape",
                "lastName": "Scott",
                "photoUrl": "https://static.swapcard.com/public/images/3f4fe06196d24fd18ff32bbcf1c7f193.jpeg",
                "organization": "WATG",
                "biography": "Ashley Scott is a Master Planner and Landscape Architect with more than twenty-five years of experience in design management and thought leadership. His portfolio of work represents a wide range of resort project types and scales, and spans Europe, the Middle East, Asia and Latin America.\n\nPrior to joining WATG in late 2019, Ashley was the Global Lead for the Resort Master Planning and Landscape Architecture sector of AECOM, where he managed a cohesive and experienced team of over seventy-five Master Planners and Landscape Architects in London and across the UK.",
                "withEvent": {
                    "eventProfile": {
                        "type": null,
                        "withEvent": null
                    }
                }
            },
            {
                "firstName": "Nicolas",
                "id": "U3BlYWtlcihFdmVudF8xNzUxMzUzLEV2ZW50UGVvcGxlXzMzNTQ1MjkwLFVzZXJfMjEzMDI2NTQp",
                "jobTitle": "Founder and CEO",
                "lastName": "Roux",
                "photoUrl": "https://static.swapcard.com/public/images/b2857ac9a89e433cb44417ed8e864e1c.png",
                "organization": "Rive Gauche London",
                "biography": "Founder and CEO Nicolas Roux brings over 20 years’ international experience with globally renowned studios, including Candy & Candy and Terence Conran. \n\nHis experience covers a broad range, from luxury private residences and residential developments, to fashion retailers and boutique hotel. Past projects include: One Hyde Park, London, a €90M residence in Monaco, The Four Seasons Residences in Astana, a high-rise luxury development in Kuala Lumpur and the Marc Jacobs retail store in London. \n\nIn 2024 Nicolas owns and is the CEO of Rive Gauche London - an established, multi-award winning, world-class team of designers, architects and technical specialists who cover the end-to-end range of skills needed to deliver exceptional design and build projects.",
                "withEvent": {
                    "eventProfile": {
                        "type": "Speaker",
                        "withEvent": null
                    }
                }
            }
        ],
        "categories": [
            "Branded Residences Forum"
        ]
    },
    {
        "id": "UGxhbm5pbmdfMjAyNzk1Nw==",
        "titleTranslations": [
            {
                "value": "Making Standalones Work - Bringing the Brand to Life in the Absence of a Co-Located Hotel",
                "language": "en_US"
            }
        ],
        "beginsAt": "2024-10-02 15:45:00",
        "endsAt": "2024-10-02 16:15:00",
        "descriptionTranslations": [
            {
                "value": "<p><a href=\"https://youtu.be/zgaR-wkwvYE\" target=\"_blank\">Click here to watch online.</a></p>",
                "language": "en_US"
            }
        ],
        "format": "PHYSICAL",
        "fields": [
            {
                "id": "RmllbGRWYWx1ZV8xOTEwNTI2NQ==",
                "definition": {
                    "isDefault": true,
                    "name": "Location"
                },
                "value": "future-stage",
                "translations": [
                    {
                        "value": "Future Stage"
                    }
                ]
            },
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
        ],
        "speakers": [
            {
                "firstName": "Mitra",
                "id": "U3BlYWtlcihFdmVudF8xNzUxMzUzLEV2ZW50UGVvcGxlXzMyMTcyMTk5LFVzZXJfMzI2NTUxNSk=",
                "jobTitle": "Chief Executive Officer",
                "lastName": "Ghamsari",
                "photoUrl": "https://static.swapcard.com/public/images/1283699d1ef040a1a1ed098536a7b2eb.jpeg",
                "organization": "Persepolis Investments",
                "biography": "Coming from the United States, Mitra came to Spain in 2014 to start Persepolis Investments. Mitra has 15+ years of experience in investments and real estate. Coming from a Wall Street background, she has worked as a Portfolio Manager in hedge funds such as Laurion Capital and Autonomy Capital. She has a Master’s Degree in Computer Science & Management from Stanford University.",
                "withEvent": {
                    "eventProfile": {
                        "type": null,
                        "withEvent": null
                    }
                }
            },
            {
                "firstName": "Jean-Baptiste",
                "id": "U3BlYWtlcihFdmVudF8xNzUxMzUzLEV2ZW50UGVvcGxlXzMyMDI5MTYyLFVzZXJfMTQ2ODI3OCk=",
                "jobTitle": "Chief Development Officer Luxury Brands Middle East, Africa and Turkiye",
                "lastName": "Recher",
                "photoUrl": "https://static.swapcard.com/public/images/e4e91957b92b4d7cbdea54bebe71e99d.jpeg",
                "organization": "Accor",
                "biography": "As Chief Development Officer Luxury Brands MEAT, Jean-Baptiste oversees the development  activities of the Accor Group in over 75 countries for Accor luxury and ultra luxury brands including Orient Express, Raffles, Fairmont, Sofitel, Emblems and MGallery. He has been instrumental in driving the Group’s organic growth over the last ten years and in particular in Egypt, Saudi Arabia and the UAE. \nJean-Baptiste’s wealth of experience spans over a decade within leading companies \nincluding Marriott and JLL. His senior leadership roles covered several disciplines from real estate advisory, feasibility studies to asset management and operation across France, the United Kingdom and the Middle East and Africa region.\nIn his previous role, Jean-Baptiste worked for JLL, a leading real estate advisory firm. In this key leadership role, he was responsible for conducting market research, financial modeling, feasibility studies, asset valuation and operator selection. \nJean-Baptiste has an MBA in International Hospitality Management from ESSEC Business School, Paris, France as well as a Masters of Hotel and Tourism Management from Hong Kong Polytechnic University, Hong Kong.",
                "withEvent": {
                    "eventProfile": {
                        "type": "Speaker",
                        "withEvent": {
                            "speakerOnPlannings": []
                        }
                    }
                }
            },
            {
                "firstName": "Peter",
                "id": "U3BlYWtlcihFdmVudF8xNzUxMzUzLEV2ZW50UGVvcGxlXzMyMjkyMDY1LFVzZXJfMjA1MzM4NzMp",
                "jobTitle": "Principal and Managing Director",
                "lastName": "Bazeli",
                "photoUrl": "https://static.swapcard.com/public/images/d0bb1f67dd6444ebb02e890ec1dd96d1.jpeg",
                "organization": "Weitzman",
                "biography": "Peter Bazeli is a Principal and Managing Director of Weitzman, a development advisory firm based in New York City.  Peter’s core expertise is the conceptualization, planning and execution support for luxury residential and mixed-use developments in both urban and resort markets. As the leading branded residential development advisor in North America, Peter has consulted on several hundred branded residential development opportunities, often performing a critical ongoing role in a property’s successful development and sales program.",
                "withEvent": {
                    "eventProfile": {
                        "type": "Moderator",
                        "withEvent": null
                    }
                }
            },
            {
                "firstName": "Rosa",
                "id": "U3BlYWtlcihFdmVudF8xNzUxMzUzLEV2ZW50UGVvcGxlXzMyNDM2OTEwLFVzZXJfODE1NTUzNSk=",
                "jobTitle": "Senior Business Development Director",
                "lastName": "Piro",
                "photoUrl": "https://static.swapcard.com/public/images/08f9fc81218941db8921678dc03d98ca.jpeg",
                "organization": "Arada",
                "biography": "Rosa Piro’s wide portfolio of responsibilities includes the expansion of Arada’s interests via new projects, as well as evaluating investments in new business segments. She also oversees and maintains all commercial and institutional partnerships in healthcare, education, hospitality, and branded residences, adjusting the anchor strategy for each based on the needs of Arada’s communities. Rosa proposed and established the collaboration with Armani Group for Arada’s luxury residential project Armani Beach Residences at Palm Jumeirah, and she is currently working on establishing an ESG vertical to help the company work towards achieving sustainability goals.",
                "withEvent": {
                    "eventProfile": {
                        "type": null,
                        "withEvent": null
                    }
                }
            }
        ],
        "categories": [
            "Branded Residences Forum"
        ]
    },
    {
        "id": "UGxhbm5pbmdfMjE0NjM4NA==",
        "titleTranslations": [
            {
                "value": "Shared Ownership in Dubai and Across Region. Is the Promise of Vacation Ownership, Fractional and Private Residence Clubs about to be Realized?",
                "language": "en_US"
            }
        ],
        "beginsAt": "2024-10-02 16:30:00",
        "endsAt": "2024-10-02 16:45:00",
        "descriptionTranslations": [
            {
                "value": "<p><a href=\"https://youtu.be/MIZ5t1dysM0\" target=\"_blank\">Click here to watch online.</a></p>",
                "language": "en_US"
            }
        ],
        "format": "PHYSICAL",
        "fields": [
            {
                "id": "RmllbGRWYWx1ZV8xOTEwNTI2NA==",
                "definition": {
                    "isDefault": true,
                    "name": "Location"
                },
                "value": "summit-stage",
                "translations": [
                    {
                        "value": "Summit Stage"
                    }
                ]
            },
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
        ],
        "speakers": [
            {
                "firstName": "Jeff",
                "id": "U3BlYWtlcihFdmVudF8xNzUxMzUzLEV2ZW50UGVvcGxlXzMxNjkxOTI3LFVzZXJfMTc4MTEwNSk=",
                "jobTitle": "Chief Business Officer",
                "lastName": "Tisdall",
                "photoUrl": "https://static.swapcard.com/public/images/93e21228749a4f0480a74e05cd7f65e4.jpeg",
                "organization": "Accor One Living",
                "biography": "Jeff Tisdall is Chief Business Officer, Accor One Living and Global Head of Mixed-Use. Accor One Living is an industry first mixed-use platform, focused on the development and operation of branded residences. Leveraging Accor’s two decades of residential experience pioneered under iconic brands like Fairmont and Raffles, the Group is now developing trend setting residential solutions across luxury, lifestyle, premium and midscale segments. \n\nPrior to joining Accor in 2013 (via FRHI Hotels and Resorts), Tisdall was the Managing Director of Singapore-based LIFT, where he served as branded residential advisor to FRHI and the Jumeirah Group. Previously, Tisdall worked with Wyndham Worldwide in Dubai, as Managing Director with responsibility for the company’s RCI and Registry Collection brands in the Middle East and North Africa region. He was also Vice President of Real Estate at Kingdom Hotel Investments, where he managed the company’s residential and commercial real estate portfolio. Earlier in his career, Tisdall spent 13 years with Intrawest, leaving as a Senior Vice President at the company’s premium vacation ownership division. \n\nTisdall holds a degree from McGill University in Canada and lives in Dubai with his family.",
                "withEvent": {
                    "eventProfile": {
                        "type": "Speaker",
                        "withEvent": {
                            "speakerOnPlannings": []
                        }
                    }
                }
            },
            {
                "firstName": "Barry",
                "id": "U3BlYWtlcihFdmVudF8xNzUxMzUzLEV2ZW50UGVvcGxlXzMyOTYyMDE5LFVzZXJfMjEzNTY5Njkp",
                "jobTitle": "President and Managing Director International Operations",
                "lastName": "Robinson",
                "photoUrl": "https://static.swapcard.com/public/images/390b7dc3654344f89acb74e89d46febd.jpeg",
                "organization": "Travel and Leisure Co",
                "biography": "President and Managing Director, International Operations for Travel + Leisure Co. He is a member of the Travel + Leisure Co. global Executive Committee. Robinson is based in the Asia Pacific region, in Singapore, and oversees markets including Australia, New Zealand, Fiji, Indonesia, China, Japan, Thailand, Singapore, Philippines, South Korea, Middle East and Europe.\n \nRobinson leads the international growth strategy for the largest timeshare operation outside of North America and oversees three vacation clubs: Accor Vacation Club, Club Wyndham South Pacific, and Club Wyndham Asia – catering to a collective membership exceeding 100,000 members. The business is also a mixed-use manager and hotel management development agent in the Asia Pacific region. Under Robinson’s stewardship, the company has solidified its position as a leader in resort development, construction and asset management, with a consumer finance portfolio valued at over US$218 million.\n \nSince joining the business in 2003, Robinson has grown the Asia Pacific operation to a club asset portfolio in excess of US$1 billion with some 89 hotel and vacation club properties either open or under development. Previously, he drove immense growth in the Wyndham Hotel Group presence in Asia Pacific as President and Managing Director for the region, entering new markets including South Korea, Japan, Thailand, Indonesia, Vietnam, Vanuatu and Guam.\n \nFor more than 28 years, Robinson has driven growth for international hospitality brands in Asia, overseeing the acquisitions for Accor Vacation Club in Australia and Resort Frontier (manger of Sundance Resort Club) in Japan for Travel + Leisure Co. He also forged a partnership between Greens Company Ltd and Choice Hotels in 2000 that enabled the hotel giant to enter and expand its portfolio in Japan.\n \nRobinson’s contributions to the hospitality industry in Asia Pacific were recognized in 2022 when he was named Asia Pacific Hotelier of the Year at the 2022 HM Awards and Entrepreneur of the Year at the GNEX Industry Awards. He was also inducted into the Hall of Fame at the Australian Timeshare and Holiday Ownership Council (ATHOC) awards in 2017. A committed philanthropist, Robinson has been a Director of the Facioscapulohumeral Muscular Dystrophy (FSHD) Global Research Foundation Board since 2007.\n \nWith more than 30 years of hospitality experience, Robinson has served in leading industry roles covering management, operations, development, branding and franchising. He has held senior leadership positions for some of the world’s largest hospitality companies, including Swiss-Belhotel International, Swissôtel Worldwide Partner Hotels, and Choice Hotels International, in markets including Australia, New Zealand, Indonesia, China and Singapore.\n \nIn the Asia Pacific region, he is also President of the Asia Pacific Resort Development Organisation (APRDO), the industry body for vacation ownership in Asia, and Deputy President of the Australian Timeshare and Holiday Ownership Council (ATHOC), the industry body for vacation ownership in Australia.\n \nRobinson has completed several post-graduate programs including the Global Leaders Program with the Wharton School through the University of Pennsylvania, an Executive Education Program at Harvard Business School, and the WPO Harvard President’s Program – where he has retained his affiliation as a member of the Young Presidents’ Organization.\n \nTravel + Leisure Co. is the world’s leading membership and leisure travel company, providing more than six million vacations to travelers every year.",
                "withEvent": {
                    "eventProfile": {
                        "type": null,
                        "withEvent": null
                    }
                }
            }
        ],
        "categories": [
            "Branded Residences Forum"
        ]
    },
    {
        "id": "UGxhbm5pbmdfMjAyNzgyMg==",
        "titleTranslations": [
            {
                "value": "Future Telling – What Shapes and Forms will Branded Residences Take in Coming Years",
                "language": "en_US"
            }
        ],
        "beginsAt": "2024-10-02 16:45:00",
        "endsAt": "2024-10-02 17:30:00",
        "descriptionTranslations": [
            {
                "value": "<p><a href=\"https://youtu.be/ml1Hzx_TTqc\" target=\"_blank\">Click here to watch online.</a></p>",
                "language": "en_US"
            }
        ],
        "format": "PHYSICAL",
        "fields": [
            {
                "id": "RmllbGRWYWx1ZV8xOTEwNTI2NA==",
                "definition": {
                    "isDefault": true,
                    "name": "Location"
                },
                "value": "summit-stage",
                "translations": [
                    {
                        "value": "Summit Stage"
                    }
                ]
            },
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
        ],
        "speakers": [
            {
                "firstName": "Imran A",
                "id": "U3BlYWtlcihFdmVudF8xNzUxMzUzLEV2ZW50UGVvcGxlXzMyNDIyOTA0LFVzZXJfMTQ1MzY3NzMp",
                "jobTitle": "Executive Director Hospitality Development",
                "lastName": "Changezi",
                "photoUrl": "https://cdn-api.swapcard.com/public/images/965736d924cf4f0983b4237033eacf72.jpeg",
                "organization": "Diriyah Company",
                "biography": "Imran is a seasoned hospitality professional operator who has worked in Sales & Marketing, Revenue Management and Rooms Operations, subsequently rising through General Management & leadership positions in a number of international luxury hotel brands across 5 different continents covering countries including UAE, UK, USA, Azerbaijan, Egypt, Australia, and Zambia. \n\nIn his hospitality career spanning over 30 years, Imran spent 16 years with Jumeirah Hotels & Resorts where he led Sales & Marketing functions at property, cluster & at corporate level before growing in operational and executive management roles at iconic hotels such as Jumeirah Beach Hotel, Jumeirah Emirates Towers and Burj Al Arab. Imran then continued to build upon his professional credentials further by working in leadership roles with the Four Seasons, Accor, Anantara and The Aga Khan Foundation. \n\nImran joined Diriyah Company in 2020 to manage its business development function for the hospitality assets. He has since then enjoyed consistent growth & recognition whilst contributing to the organization’s hospitality asset development strategy, positioning, selection of hotel & branded residence operators and leading Hotel & Branded Residences Management Agreement negotiations. \n\nIn 2023, Imran was given additional responsibilities in Diriyah and appointed as ‘Centre of Expertise’ (COE) for Hospitality Asset Class in Diriyah Company. He currently leads the Hospitality Development practice as Executive Director and is responsible for strategic guidance and leadership across a diverse portfolio of 40 hotels & resorts and 18 Luxury Branded Residence projects currently under development across 5 masterplans. \n\nImran holds an MBA degree from the prestigious London Business School, UK and earned his General Managers Program (GMP) certification from Cornell University, USA.",
                "withEvent": {
                    "eventProfile": {
                        "type": "Speaker",
                        "withEvent": null
                    }
                }
            },
            {
                "firstName": "Pier Paolo",
                "id": "U3BlYWtlcihFdmVudF8xNzUxMzUzLEV2ZW50UGVvcGxlXzMxODQ5OTM4LFVzZXJfMjAyNTI3Nzcp",
                "jobTitle": "CEO & President",
                "lastName": "Righi",
                "photoUrl": "https://static.swapcard.com/public/images/79c118f294c24c3b90c2504e9ba9b93b.jpeg",
                "organization": "Karl Lagerfeld",
                "biography": "Pier Paolo Righi, CEO & President of KARL LAGERFELD, is half-Italian and half-German, and has over 30 years of experience in the international fashion, sports and lifestyle industries.\n\nSince joining KARL LAGERFELD in 2011, Righi spearheaded the launch of the KARL LAGERFELD brand and helped grow its consumer sales to more than $1.5 billion to date. For many years, he worked in tandem and close collaboration with the late design icon Karl Lagerfeld, the former creative director of his namesake House, as well as Chanel and Fendi.\n\nUnder Righi’s leadership, the House has expanded globally and successfully ventured into new categories beyond fashion, including residential projects and hospitality. This includes the first KARL LAGERFELD branded luxury hotel in Macau, plus luxury residential developments in Spain, Portugal, the UAE and Southeast Asia.\n\nPrior to joining KARL LAGERFELD, Righi worked for nearly a decade at Nike, including seven years as General Manager CEMEA. He has also held various senior management positions within international groups including Tommy Hilfiger and Pentland Brands Limited. Righi has lived in Amsterdam, Frankfurt, Munich, Milan and Paris. He currently serves in several non-executive boards across various industries.",
                "withEvent": {
                    "eventProfile": {
                        "type": "Speaker",
                        "withEvent": null
                    }
                }
            },
            {
                "firstName": "Riyan",
                "id": "U3BlYWtlcihFdmVudF8xNzUxMzUzLEV2ZW50UGVvcGxlXzMxODQ1MTA0LFVzZXJfMTU0MTIzMzEp",
                "jobTitle": "Director & Founder",
                "lastName": "Itani",
                "photoUrl": "https://static.swapcard.com/public/images/0a8fedf8c19444388ccf07bf5208b2c7.jpeg",
                "organization": "Global Branded Residences",
                "biography": "For over 20 years, Riyan Itani has specialised in providing branded and luxury residential development consultancy in the global urban and resort sectors. His experience covers brand /operator selection and contract negotiation, strategic development advice, feasibility studies, and brand premium studies. Considered a global market-leader in branded residential advisory, Riyan is a multi-award-winning consultant and has worked on over 130 branded residential schemes across the globe.\n\nGlobal Branded Residences (GBR) is a specialist development consultancy firm that provides market & data-driven advisory services for branded residential developments around the world, delivered by a team of renowned industry leaders. GBR’s services range from brand / operator selection and negotiation to product & pricing definition, as well as feasibility studies and brand premium studies.",
                "withEvent": {
                    "eventProfile": {
                        "type": "Speaker",
                        "withEvent": null
                    }
                }
            },
            {
                "firstName": "Peter",
                "id": "U3BlYWtlcihFdmVudF8xNzUxMzUzLEV2ZW50UGVvcGxlXzMyOTEwOTg1LFVzZXJfMTkyNzE0MTAp",
                "jobTitle": "Futurist and Founder of AI & Communications agency",
                "lastName": "Heneghan",
                "photoUrl": "https://static.swapcard.com/public/images/536c882dc333446f810758bd092173ef.webp",
                "organization": "The Future Communicator",
                "biography": "Peter Heneghan, Founder of The Future Communicator, is an award-winning AI and communications expert with experience at BBC News, Channel 4, BuzzFeed, and 10 Downing Street. As the UK Government's Chief Digital Communicator, he modernized its strategy. His agency delivers AI-driven strategies for high-end clients, including the UN, Arts Council England, a Formula One team, and luxury brands. Peter helps luxury businesses stay ahead of trends, enhancing customer experiences and efficiency. With expertise in AI adoption, he ensures smooth integration of both technology and staff. He’s a Cannes Lions Grand Prix winner and guest lecturer at London Business School.",
                "withEvent": {
                    "eventProfile": {
                        "type": "Speaker",
                        "withEvent": null
                    }
                }
            },
            {
                "firstName": "Bernardo",
                "id": "U3BlYWtlcihFdmVudF8xNzUxMzUzLEV2ZW50UGVvcGxlXzMzMTM1Mjc4LFVzZXJfMjEwNTAzMTgp",
                "jobTitle": "Founder & Principal",
                "lastName": "Fort-Brescia",
                "photoUrl": "https://static.swapcard.com/public/images/bbcbb3e0ceee4d2aa8ef13e91b65fdff.jpeg",
                "organization": "Arquitectonica",
                "biography": "Bernardo Fort-Brescia is a founding principal of Arquitectonica. A native of Lima, he did his early studies in Peru and Europe where he learned multiple languages which would later prove useful for his international career. He studied architecture and urban planning at Princeton University and received a Master of Architecture from Harvard University, where he later taught. He moved to Florida in 1975 to teach at the University of Miami. In 1977 he founded Arquitectonica with a group of young architects and set up a studio in Coconut Grove. Bernardo led the charge of expanding the firm across the country and abroad. The firm is known as one of the pioneers of globalization in the architecture profession. With over 50 branded residential projects, attendees will gain valuable insights from a leading figure whose work continues to shape the sector across the globe.",
                "withEvent": {
                    "eventProfile": {
                        "type": "Speaker",
                        "withEvent": null
                    }
                }
            }
        ],
        "categories": [
            "Branded Residences Forum"
        ]
    }
]



export default function Page () {

    const lenis = useLenis()




    const sortSpeakers = ( speakerData ) => {

		if ( !speakerData ) return

		let moderators = []
        let speakers = []

		_.orderBy(speakerData, 'lastName').forEach( speaker => {
			speaker.withEvent.eventProfile.type === 'Moderator' ? moderators.push( speaker ) : speakers.push( speaker )
		})


		if ( moderators.length && speakers.length ) return (
			<>
				{
					moderators.length ?
						<div>
							<p className="c-secondary pb-xs">{moderators.length > 1 ? 'Moderators' : 'Moderator' }</p>
							<div className={CSS.sessionSpeakerGrid}>
								{ moderators.map( moderator => <AgendaSpeakerCard key={moderator.id} color={'white'} speaker={moderator}/> ) }
							</div>
							{
								speakers.length ?
									<p style={{ color: `var(--secondary)`, padding: `10px 0 0 0`}}>In conversation with</p>
								: null
							}
						</div>
					: null
				}
				<div className={CSS.sessionSpeakerGrid}>
					{ speakers.map( speaker => <AgendaSpeakerCard key={speaker.id} color={'white'} speaker={speaker}/> ) }
				</div>
			</>
		)

		return (
			<div className={CSS.sessionSpeakerGrid}>
				{ speakerData.map( speaker => <AgendaSpeakerCard key={speaker.id} color={'white'} speaker={speaker}/> ) }
			</div>
		)
	}



    return (
        <>
            <Header />
            
            <section className="block bg-default pt-0">
                <div className="container maxw-70 center">
                    <p className='fs-1 fw-600 c-secondary'>2024 Branded Residences Forum Agenda</p>
                </div>
            </section>

            <section className="block bg-default">
                <div className="container maxw-50 columns-1 gap-xs">
                    
                    {
                        SESSION_DATA_2024 &&
                        SESSION_DATA_2024.map( session => (

                            <Pop key={session.id}>
                                <div className={CSS.sessionsWrapper}>
                                    <div className={`${CSSlite.session} ${session.id === 'UGxhbm5pbmdfMjAyNzgxOA==' && `bg-primary-2 caps`} `}>

                                        <div className={`${CSSlite.sessionHeader} fw-300 c-white`}>
                                            {
                                                session.beginsAt && session.endsAt ?
                                                    <>
                                                        {format( new Date(session.beginsAt), "HH:mm" )} - { format( new Date(session.endsAt), "HH:mm" )}
                                                        <p className='mt-xxs'>
                                                            <StopwatchIcon fill={'var(--secondary)'}/>
                                                            <span className='fs-sm fw-500 c-secondary'> { convertSeconds(parseInt(new Date(session.endsAt).getTime() - new Date(session.beginsAt).getTime())/1000) }</span>
                                                        </p>                                                    
                                                    </>
                                                : null
                                            }
                                        </div>

                                        <div className={`${CSSlite.sessionContent} | columns-1 gap-xs`}>

                                            {/* <small style={{ color: 'orange'}}>{session.id}</small> */}
                                            
                                            <p className={`fs-5 fw-4500 c-white`}>
                                                { session.titleTranslations[0].value }
                                            </p>

                                            {
                                                session.descriptionTranslations.length ?
                                                    HTMLReactParser( session.descriptionTranslations[0].value )
                                                : null
                                            }
                                            
                                            { sortSpeakers(session.speakers) }
                                        </div>

                                        </div>
                                </div>
                            </Pop>
                        ))
                    }

                </div>
            </section>


            <Footer />
            <LenisScroller />
        </>
    )
}

Page.theme = 'world-2024'


