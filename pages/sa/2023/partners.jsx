import { Header } from '../../../fuselage/theme/2023/sa/global/header/header'
import { Footer } from '../../../fuselage/global-sa/footer/footer'

import { GetLegacyBizzaboPartners } from "../../../lib/bizzabo-partners"


const LEGACY_PARTNERS = [
    {
        "description": "Al Khozama Investment (AK) is a pioneering developer and manager of premium commercial properties in the Kingdom of Saudi Arabia. Established in 1995, the company follows a progressive and diversified business model that covers the ownership, investment, and management of properties in the hospitality, retail, commercial,  F&B, and residential sectors.   \n\nWith numerous international awards garnered by the company over the past 25 years, in 2019 AK Investment was named Saudi Arabia's leading luxury hospitality company by the World Travel Awards. In addition to presently managed five hotels including Al Faisaliah Hotel and Al Faisaliah Suites, Riyadh; Bay La Sun Hotel & Marina and Views Hotel & Residences, King Abdullah Economic City and Al Bustan Residences, Riyadh,  ",
        "level": 1,
        "website": "https://alkhozama.com/",
        "linkedin": "https://www.linkedin.com/company/alkhozama-",
        "eventId": 437114,
        "created": "2022-11-17T03:53:12.000+0000",
        "visible": true,
        "logo": "https://res.cloudinary.com/bizzaboprod/image/upload/q_auto,f_auto,c_scale,c_crop,g_custom/v1668657239/yfyxv7ajoob82dz7gctf",
        "name": "Al Khozama",
        "id": 428220,
        "type": "SPONSOR"
    },
    {
        "level": 1,
        "website": "https://www.mandarinoriental.com/en/riyadh/olaya",
        "customButtons": [
            {
                "name": "Instagram",
                "url": "https://www.instagram.com/alfaisaliahhotel/"
            }
        ],
        "eventId": 437114,
        "created": "2022-11-16T15:11:58.000+0000",
        "visible": true,
        "facebook": "https://www.facebook.com/alfaisaliahhotelriyadh",
        "logo": "https://res.cloudinary.com/bizzaboprod/image/upload/q_auto,f_auto,c_scale,c_crop,g_custom/v1668611338/vxftca7bcgoc4m6uolgg",
        "name": "Al Faisaliah Hotel ",
        "id": 428040,
        "type": "SPONSOR"
    },
    {
        "level": 11,
        "website": "https://www.tdf.gov.sa/content/TDF/TDF/en/Home.html",
        "twitter": "tdf_sa",
        "linkedin": "https://www.linkedin.com/company/tdf-sa/",
        "eventId": 437114,
        "created": "2023-01-13T14:32:43.000+0000",
        "visible": true,
        "logo": "https://res.cloudinary.com/bizzaboprod/image/upload/q_auto,f_auto,c_scale,c_crop,g_custom/v1679930428/b2mzvk7kekjt6fntlhj8",
        "name": "Tourism Development Fund",
        "id": 434033,
        "type": "SPONSOR"
    },
    {
        "description": "Accor is a world leading hospitality group consisting of 5,300 properties and 10,000 food and beverage venues throughout 110 countries. The group has one of the industry’s most diverse and fully-integrated hospitality ecosystems encompassing more than 40 luxury, premium, midscale and economy hotel brands, entertainment and nightlife venues, restaurants and bars, branded private residences, shared accommodation properties, concierge services, co-working spaces and more.\n",
        "level": 3,
        "website": "https://group.accor.com/en",
        "twitter": "accor",
        "linkedin": "https://fr.linkedin.com/company/accor",
        "eventId": 437114,
        "created": "2022-06-09T12:51:24.000+0000",
        "visible": true,
        "facebook": "https://www.facebook.com/accor",
        "logo": "https://res.cloudinary.com/bizzaboprod/image/upload/q_auto:best,c_crop,g_custom/v1654779030/cyhgvapxueywqx8xpio6.png",
        "name": "Accor",
        "id": 396913,
        "type": "SPONSOR"
    },
    {
        "description": "Boutique Group, a hospitality company, develops and operates historical & cultural palaces into ultra-luxury boutique hotels; to enrich the luxury hospitality experience in the Kingdom. Boutique Group promotes Saudi Arabian rich heritage and culture by redefining the Saudi legacy, delivering captivating and unique experiences for global and local tourists, and preserving its heritage for future generations.\n \n",
        "level": 3,
        "website": "https://boutiquegroup.com/",
        "twitter": "boutiquegroupsa",
        "linkedin": "https://www.linkedin.com/company/boutiquegroupsa/about/?viewAsMember=true",
        "eventId": 437114,
        "created": "2023-01-10T07:53:30.000+0000",
        "visible": true,
        "logo": "https://res.cloudinary.com/bizzaboprod/image/upload/q_auto,f_auto,c_scale,c_crop,g_custom/v1673338912/fkjaroq61byivlyvoy7c",
        "name": "Boutique Group ",
        "id": 433664,
        "type": "SPONSOR"
    },
    {
        "description": "Dur Hospitality is a leading publicly listed Saudi hospitality company recognized for its track record in developing, managing, and operating hotels and residential compounds across Saudi Arabia since 1976. Dur now has a portfolio of 32 existing properties with over 5,450 keys and 15 projects in the pipeline.",
        "level": 3,
        "website": "https://www.dur.sa/en",
        "twitter": "DurHospitality",
        "linkedin": "https://www.linkedin.com/company/dur-hospitality/mycompany/",
        "eventId": 437114,
        "created": "2023-04-03T08:13:49.000+0000",
        "visible": true,
        "logo": "https://res.cloudinary.com/bizzaboprod/image/upload/q_auto,f_auto,c_scale,c_crop,g_custom/v1680509579/ao7irhjpucbtdrzbrgee",
        "name": "Dur Hospitality Company",
        "id": 448138,
        "type": "SPONSOR"
    },
    {
        "description": "NEOM is The New Frontier. One of the last places on Earth waiting to be explored.\n\nRoam spaces unchartered, tread paths undiscovered, climb mountains uncovered and swim in seas unspoilt, all brought to life and enjoyed in the most surprising of ways. Each tourism site of NEOM is a marvel of nature, a force of extraordinary beauty.\n\nInterwoven with nature, advanced by technology, NEOM is pioneering a new way of living and new ways to travel and stay.",
        "level": 3,
        "website": "https://www.neom.com/en-us",
        "twitter": "NEOM",
        "linkedin": "https://www.linkedin.com/company/discoverneom/",
        "eventId": 437114,
        "created": "2022-12-02T11:33:20.000+0000",
        "visible": true,
        "facebook": "https://www.facebook.com/discoverneom/",
        "logo": "https://res.cloudinary.com/bizzaboprod/image/upload/q_auto,f_auto,c_scale,c_crop,g_custom/v1669980757/l2jbmvynofugroz1hexz",
        "name": "NEOM",
        "id": 430658,
        "type": "SPONSOR"
    },
    {
        "description": "Radisson Hotel Group is one of the world's largest hotel groups with nine distinctive hotel brands, and more than 1,700 hotels in operation and under development in 120 countries. The Group’s overarching brand promise is Every Moment Matters with a signature Yes I Can! service ethos. The Radisson Hotel Group portfolio includes Radisson Collection, Radisson Blu, Radisson, Radisson RED, Radisson Individuals, Park Plaza, Park Inn by Radisson, Country Inn & Suites by Radisson, and prizeotel brought together under one commercial umbrella brand Radisson Hotels.",
        "level": 3,
        "website": "https://www.radissonhotelgroup.com/",
        "twitter": "radissonhotels",
        "linkedin": "https://www.linkedin.com/company/radisson-hotel-group/",
        "eventId": 437114,
        "created": "2022-11-30T16:02:14.000+0000",
        "visible": true,
        "facebook": "https://www.facebook.com/RadissonHotels/",
        "logo": "https://res.cloudinary.com/bizzaboprod/image/upload/q_auto,f_auto,c_scale,c_crop,g_custom/v1669824099/jf5qhdc1brlhzt03mntc",
        "name": "Radisson Hotel Group",
        "id": 430197,
        "type": "SPONSOR"
    },
    {
        "description": "About Rua Al Madinah Holding\n\nA wholly-owned subsidiary of Saudi Arabia’s Public Investment Fund, Rua Al Madinah Holding undertakes holistic development projects that feature modern urban planning to elevate the experience of residents and visitors of Madinah, the home to countless Islamic monuments that tell the story of the Prophet (PBUH) and his revered companions. The company aims to elevate Madinah as a modern Islamic and cultural destination. With a capital of SAR3.918 billion, Rua Al Madinah Holding aims to develop a comprehensive hospitality and retail ecosystem that further enhances the inclusive and communal nature of Madinah. Through diverse development projects and an ultramodern infrastructure that enrich the experience of both residents and visitors, the company’s driving vision is to improve the quality of infrastructure and services according to the highest international standards.\n\nRua Al Madinah Holding’s strategy is fully aligned with the Public Investment Fund’s efforts to develop and enable promising sectors and help accomplish the Vision 2030 objective of bringing 30 million Hajj and Umrah pilgrims to the Kingdom by the year 2030.",
        "level": 3,
        "website": "https://ruaalmadinah.com/",
        "twitter": "ruaalmadinah",
        "linkedin": "https://www.linkedin.com/company/ruaalmadinah/",
        "eventId": 437114,
        "created": "2023-02-15T11:28:07.000+0000",
        "visible": true,
        "logo": "https://res.cloudinary.com/bizzaboprod/image/upload/q_auto,f_auto,c_scale,c_crop,g_custom/v1681217217/dulrz5yyjpkssyl7kecq",
        "name": "Rua Al Madinah Holding",
        "id": 440130,
        "type": "SPONSOR"
    },
    {
        "description": "SRG is an investment holding group with more than 18 subsidiaries operating in various sectors: Human Resources, Energy, Manufacturing, Facility Management, Travel & Tourism, Engineering, Medical & Pharmaceuticals Industry, Real Estate, Information & Communication Technology.  Through our services and strategic partnerships with local and international stakeholders, we serve these key industries to build sustainable businesses and sustainable mega projects that power Saudi Vision 2030 and shape a brighter future for our people.\n \nThe group’s subsidiaries have become major players and contributors to economic growth in the Kingdom of Saudi Arabia. We provide outstanding, valuable, and high-quality services, which enabled us to collaborate and work with national and international companies.\n \nThe group is looking to expand into the hospitality industry as a next step due to its successful encounters of other sectors in line with Saudi vision 2030. \n",
        "level": 3,
        "website": "https://srg.com.sa/",
        "eventId": 437114,
        "created": "2023-03-07T09:53:52.000+0000",
        "visible": true,
        "logo": "https://res.cloudinary.com/bizzaboprod/image/upload/q_auto,f_auto,c_scale,c_crop,g_custom/v1678963190/vi6pbvejtqcyejbswdj0",
        "name": "Saeed Raddad Group",
        "id": 443361,
        "type": "SPONSOR"
    },
    {
        "level": 14,
        "website": "https://mt.gov.sa/",
        "eventId": 437114,
        "created": "2023-05-05T09:38:18.000+0000",
        "visible": true,
        "logo": "https://res.cloudinary.com/bizzaboprod/image/upload/q_auto,f_auto,c_scale,c_crop,g_custom/v1683277035/m3whd6juj1olwcufqidm",
        "name": "Ministry of Tourism",
        "id": 454320,
        "type": "SPONSOR"
    },
    {
        "description": "Through our three key sectors: Tourism, Culture and National Library, we work extensively to regulate, support, develop and market Abu Dhabi’s tourism industry through a range of activities aimed at promoting and preserving the emirate’s distinctive heritage and culture.",
        "level": 2,
        "website": "https://visitabudhabi.ae/en/abu-dhabi-convention-and-exhibition-bureau",
        "twitter": "visitabudhabi",
        "eventId": 437114,
        "created": "2023-01-13T14:29:00.000+0000",
        "visible": true,
        "logo": "https://res.cloudinary.com/bizzaboprod/image/upload/q_auto,f_auto,c_scale,c_crop,g_custom/v1678285683/t4mh1gm3bzg5cokbbntt",
        "name": "Department of Culture and Tourism Abu Dhabi and Miral",
        "id": 434032,
        "type": "SPONSOR"
    },
    {
        "description": "Diriyah is the birthplace of the Kingdom of Saudi Arabia and its foremost historical, cultural and lifestyle destination. A Public Investment Fund company, Diriyah Company's mission is to develop the unique Diriyah Project and re-establish its position as a globally significant destination and one of the world's greatest gathering places. The project is anchored on At-Turaif, the UNESCO World Heritage Site and the birthplace of modern-day Saudi Arabia. The cultural and historical legacy of Diriyah positions the project as an unrivaled destination of global significance where the authenticity of Saudi culture and heritage is preserved and celebrated. Visitors and tourists will be able to explore and learn about Saudi Arabia’s history, culture and heritage by exploring the destination's museums and cultural attractions, shopping at more than 400 of the world's finest luxury and lifestyle brands and eating at the more than 150 fine-dining restaurants and cafes.",
        "level": 2,
        "website": "https://www.diriyah.sa",
        "twitter": "visitdiriyah",
        "linkedin": "https://www.linkedin.com/company/dgda-sa/",
        "eventId": 437114,
        "created": "2023-03-26T11:06:58.000+0000",
        "visible": true,
        "logo": "https://res.cloudinary.com/bizzaboprod/image/upload/q_auto,f_auto,c_scale,c_crop,g_custom/v1679939996/m1uapdn7sm74cv4j2k70",
        "name": "Diriyah Company",
        "id": 446811,
        "type": "SPONSOR"
    },
    {
        "description": "IHG Hotels & Resorts is one of the world’s leading hospitality companies with 6,000+ open hotels in over 100 countries and a purpose to provide True Hospitality for Good.\n\nThe company offers a portfolio of 18 diverse and well-loved brands across Luxury & Lifestyle, Premium, Essentials, Suites and Exclusive Partners, and IHG One Rewards, one of the world's largest hotel loyalty programmes.",
        "level": 2,
        "website": "https://www.ihg.com",
        "twitter": "IHGhotels",
        "eventId": 437114,
        "created": "2023-02-22T14:35:12.000+0000",
        "visible": true,
        "facebook": "https://www.facebook.com/ihghotels",
        "logo": "https://res.cloudinary.com/bizzaboprod/image/upload/q_auto,f_auto,c_scale,c_crop,g_custom/v1678088525/wpnngwabzvzlxsxhfvvq",
        "name": "IHG Hotels & Resorts",
        "id": 441055,
        "type": "SPONSOR"
    },
    {
        "description": "KAFD is an iconic business and lifestyle destination with state-of-the-art physical and digital infrastructure. An architectural marvel designed by more than 25 world-leading architectural firms, KAFD currently has 95 towers that are reshaping the skyline of Riyadh. KAFD is spread over an area of 1.6 sq km and offers a competitive business ecosystem and vibrant lifestyle experiences. KAFD is the largest development globally to achieve LEED Platinum certification, the highest accreditation from USGBC (U.S. Green Building Council), which recognizes KAFD as a global leader in sustainability.",
        "level": 2,
        "website": "https://www.kafd.sa/",
        "twitter": "KAFDSA",
        "linkedin": "https://www.linkedin.com/company/kafd",
        "eventId": 437114,
        "created": "2023-04-13T13:58:27.000+0000",
        "visible": true,
        "facebook": "https://www.facebook.com/KAFDSA/",
        "logo": "https://res.cloudinary.com/bizzaboprod/image/upload/q_auto,f_auto,c_scale,c_crop,g_custom/v1681394231/ijlingnvrflkcy2e1frs",
        "name": "KAFD",
        "id": 450028,
        "type": "SPONSOR"
    },
    {
        "description": "(NASDAQ: MAR) is based in Bethesda, Maryland, USA, and encompasses a portfolio of nearly 8,000 properties under 30 leading brands spanning 139 countries and territories. Marriott operates and franchises hotels and licenses vacation ownership resorts all around the world. The company offers Marriott Bonvoy®, its highly-awarded travel program.  For more information, please visit our website at www.marriott.com, and for the latest company news, visit www.marriottnewscenter.com. In addition, connect with us on Facebook and @MarriottIntl on Twitter and Instagram. ",
        "level": 2,
        "website": "https://www.marriott.com/default.mi",
        "eventId": 437114,
        "created": "2023-01-24T11:49:15.000+0000",
        "visible": true,
        "logo": "https://res.cloudinary.com/bizzaboprod/image/upload/q_auto,f_auto,c_scale,c_crop,g_custom/v1674560715/xsi9tdesdzhvuz7hvlid",
        "name": "Marriott",
        "id": 435439,
        "type": "SPONSOR"
    },
    {
        "description": "Millennium Hotels & Resorts, Middle East & Africa currently operates over 50 hotels and 15,000 keys, in addition to 32 hotels in the development pipeline across the region. From a single property in Abu Dhabi, MHR Middle East & Africa has expanded into various neighbouring destinations, cultivating partnerships with reputable owners, and is now recognized as one of the fastest-growing hotel management companies in the region.",
        "level": 2,
        "website": "https://www.millenniumhotels.com/",
        "eventId": 437114,
        "created": "2023-03-01T11:14:05.000+0000",
        "visible": true,
        "logo": "https://res.cloudinary.com/bizzaboprod/image/upload/q_auto,f_auto,c_scale,c_crop,g_custom/v1682518893/ggbwxmgoabmqbwovfur1",
        "name": "Millennium Hotels & Resorts",
        "id": 442179,
        "type": "SPONSOR"
    },
    {
        "description": "Rotana currently manages a portfolio of over 100 properties throughout the Middle East, Africa, Eastern Europe, and Turkey, with an aggressive expansion plan in place. Rotana brands include, Rotana Hotels & Resorts, Centro Hotels by Rotana, Rayhaan Hotels & Resorts by Rotana, Arjaan Hotel Apartments by Rotana, The Residences by Rotana and the newly launched Edge by Rotana. Treasured Time. The Rotana promise to you. rotana.com",
        "level": 2,
        "website": "https://www.rotana.com/",
        "eventId": 437114,
        "created": "2023-01-27T11:59:54.000+0000",
        "visible": true,
        "logo": "https://res.cloudinary.com/bizzaboprod/image/upload/q_auto,f_auto,c_scale,c_crop,g_custom/v1674820717/trpnnemabq8kfxxswub5",
        "name": "Rotana",
        "id": 436321,
        "type": "SPONSOR"
    },
    {
        "description": "Taiba Investment Company is a public joint-stock company listed on the Saudi Stock Exchange “Tadawul”. Established in 1988, Taiba manages a portfolio of diversified investments and has a distinguished history of investing in and developing iconic real estate projects, known for its commercial and hotel projects.",
        "level": 2,
        "website": "https://www.taiba.com.sa/",
        "eventId": 437114,
        "created": "2023-03-01T11:08:40.000+0000",
        "visible": true,
        "logo": "https://res.cloudinary.com/bizzaboprod/image/upload/q_auto,f_auto,c_scale,c_crop,g_custom/v1677668889/jofexwnvme3srus62nld",
        "name": "Taiba Investments",
        "id": 442178,
        "type": "SPONSOR"
    },
    {
        "description": "Born and based in Dubai, Aleph Hospitality is a dynamic hotel management company, working for owners to maximise the value of their assets in the Middle East and Africa. The regional specialist’s customised, results-driven alternative to traditional hotel management models includes third party and white label operations.\n\nAleph Hospitality manages hotels directly for owners and facilitates franchising partnerships with leading global brands. With in-depth market knowledge, several decades’ experience working with the world’s largest hotel companies, and a company culture based on trust, responsiveness and flexibility, Aleph Hospitality delivers superior results for hotel owners, an\nexceptional hospitality experience for its guests and a professional environment for its workforce.\n\nAleph has twelve operating hotels in its portfolio and has earmarked a pipeline of 50 hotels in the Middle East and Africa by 2026. To find out more, visit alephhospitality.com.\n\nLinkedIn: https://www.linkedin.com/company/aleph-hospitality",
        "level": 4,
        "website": "https://www.alephhospitality.com/",
        "twitter": "Aleph_Hosp",
        "eventId": 437114,
        "created": "2022-10-21T08:25:06.000+0000",
        "visible": true,
        "logo": "https://res.cloudinary.com/bizzaboprod/image/upload/q_auto:best,c_crop,g_custom/v1654780752/jqatkoxvlmw6megwjjhx.jpg",
        "name": "Aleph Hospitality",
        "id": 423657,
        "type": "SPONSOR"
    },
    {
        "description": "Global placemakers, BLINK, are interior designers and architects for the world of luxury hospitality. A collective of bold thinkers, they are committed to translating their clients’ visions into spaces inspired by travel experiences and cultural encounters.\n\nSince their inception in 2006 in Bangkok, they have expanded their global presence, building an impressive portfolio and receiving industry recognition and acclaim along the way. \n\nEvery space is a shared journey, made by people and place.\n\nTo discover more about BLINK, visit: www.blinkdg.com\n",
        "level": 4,
        "website": "https://www.blinkdg.com/",
        "eventId": 437114,
        "created": "2023-03-14T10:15:13.000+0000",
        "visible": true,
        "logo": "https://res.cloudinary.com/bizzaboprod/image/upload/q_auto,f_auto,c_scale,c_crop,g_custom/v1678788828/dzxm3da033o8jflqbg2j",
        "name": "BLINK DESIGN",
        "id": 444422,
        "type": "SPONSOR"
    },
    {
        "description": "CBRE is the world’s largest commercial real estate services and investment firm and has been serving clients in the Middle East for nearly twenty years.\nThe company has more than 115,000 employees globally and over 1,300 professionals* in the Middle East operating out of 9 offices in 6 countries in the region. With services, insights and data that span every dimension of the industry, we create solutions for clients of every size and in every sector. \nOur specialists provide a fully-integrated suite of services across the region, including facilities, transaction and project management; cost management; property management; investment management; appraisal and valuation; property leasing; strategic consulting; property sales; mortgage services and development service.\n",
        "level": 4,
        "website": "https://cbre.sa",
        "eventId": 437114,
        "created": "2023-02-23T12:41:49.000+0000",
        "visible": true,
        "logo": "https://res.cloudinary.com/bizzaboprod/image/upload/q_auto,f_auto,c_scale,c_crop,g_custom/v1679297087/mtqlix0ryiaejldt8tgk",
        "name": "CBRE",
        "id": 441240,
        "type": "SPONSOR"
    },
    {
        "description": "Colliers is a leading diversified professional services and investment management company. With operations in 65 countries, our 18,000 enterprising professionals work collaboratively to provide expert real estate and investment advice to clients. For more than 28 years, our experienced leadership with significant inside ownership has delivered compound annual investment returns of approximately 20% for shareholders. The hospitality & tourism division boasts a global network of specialist consultants in hotel, resort, serviced apartments, branded residences, marina, golf, leisure and spa sectors. Colliers is dedicated to providing strategic advisory services to investors, developers and institutions to extract the best value and potential from our client’s projects and assets.  With annual revenues of $4.5 billion and $98 billion of assets under management, Colliers maximizes the potential of property and real assets to accelerate the success of our clients, our investors, and our people. Learn more at corporate.colliers.com, Twitter @Colliers or LinkedIn.\n \n\nWith annual revenues of $4.5 billion and $81 billion of assets under management, Colliers maximizes the potential of the property and real assets to accelerate the success of our clients, investors, and people. Learn more at corporate.colliers.com, Twitter @Colliers, or LinkedIn. ",
        "level": 4,
        "website": "https://www.colliers.com/en",
        "eventId": 437114,
        "created": "2022-11-25T19:47:07.000+0000",
        "visible": true,
        "logo": "https://res.cloudinary.com/bizzaboprod/image/upload/q_auto,f_auto,c_scale,c_crop,g_custom/v1669405602/pjkcedohde7iwmhnsztn",
        "name": "Colliers",
        "id": 429552,
        "type": "SPONSOR"
    },
    {
        "description": "Compass, a multi-award-winning project development solutions provider, offers fully tailored services with regional coverage to ensure a seamless journey for clients from initial concept to construction completion and handover.  The highly skilled team intelligently navigates project challenges with core services that include Development Management, Programme Management, Project Management, Procurement Management, Commercial Services, and Construction Management.  This comprehensive approach has garnered appreciation from clients across all sectors, with a specific speciality within hospitality, mixed-use, leisure and entertainment capital projects.\n",
        "level": 4,
        "website": "https://compass-pc.com/",
        "eventId": 437114,
        "created": "2023-02-19T21:01:38.000+0000",
        "visible": true,
        "logo": "https://res.cloudinary.com/bizzaboprod/image/upload/q_auto,f_auto,c_scale,c_crop,g_custom/v1676840430/pkahecwu5saknrv4dgx2",
        "name": "Compass Project Consulting ",
        "id": 440752,
        "type": "SPONSOR"
    },
    {
        "description": "Crossover Lodge is a product registered by Creative Structures. Creative Structures has over\n13 years of experience producing and distributing luxury tent structures for the high-end\nevent, hospitality, and recreation industries. The Crossover Lodges are based on the\n'Crossover,' one of Creative Structures' existing structures. The solid structure is made out of\nhigh-quality aluminium tubes, strong galvanised steel connectors, stainless steel cables and\nPVC cover to ensure extra strength and rigidity. The structures, and therefore the Crossover\nLodges, are TÜV certified and offer protection against the most extreme weather conditions.\nThey are resistant to temperatures from -20/-300C to +700C and up to wind force 80/100\nkm/h.",
        "level": 4,
        "website": "https://crossoverlodge.com/",
        "eventId": 437114,
        "created": "2023-03-06T08:07:05.000+0000",
        "visible": true,
        "logo": "https://res.cloudinary.com/bizzaboprod/image/upload/q_auto,f_auto,c_scale,c_crop,g_custom/v1678089763/madt6jeyp9vmnklu84gw",
        "name": "Crossover Lodge ",
        "id": 443181,
        "type": "SPONSOR"
    },
    {
        "description": "DAR is globally recognized for providing innovative Design and Engineering solutions that transform landscapes and create a positive impact on human lives and communities. Our client-focused approach, unwavering commitment to quality, and ability to be agile makes us the preferred partner on projects. \n\nWe have presence across Saudi Arabia and fetch strategic support and acceleration from our back offices in India, Egypt, Pakistan, United Kingdom and Portugal. Our passionate and dedicated team of over 1000 engineers, architects, and design professionals fortify and lead our efforts. \n\nOur differentiation is derived from pivoting around a comprehensive range of integrated services including Architectural & Engineering Design, Project Management, Construction Supervision Services, and Specialized Studies across Infrastructure, Building, Healthcare, Energy and Power sectors. \n\nOur services can be availed at every stage of the project lifecycle from initiation to project handover. We have extensive experience in working with the Government on various strategic projects in KSA and our private clients include some of the leading names in Middle East, Central Asia and Africa. \n\nDAR is an ISO 9001:2015, ISO 45001;2018, and ISO 14001;2015 certified company implementing general safety rules while executing projects in compliance with our accredited Quality Management System. \n\nWe work on the principle that each project is unique and can create a positive enduring change. By combining technology, proprietary data, and subject matter expertise we ensure quicker and more impactful solutions for our clients. \n",
        "level": 4,
        "website": "https://www.dar-engineering.com/",
        "eventId": 437114,
        "created": "2023-02-08T08:58:31.000+0000",
        "visible": true,
        "logo": "https://res.cloudinary.com/bizzaboprod/image/upload/q_auto,f_auto,c_scale,c_crop,g_custom/v1675846642/ma8dbbwwuofgbvoooho8",
        "name": "DAR Engineering",
        "id": 438298,
        "type": "SPONSOR"
    },
    {
        "description": "Domus Managed Housing develops purpose-built corporate housing accommodation across the employment spectrum. With more than a decade of sector experience, we manage and deliver innovative turnkey housing solutions for the happiness of more than 4,000 hospitality and service industry tenants. At Domus, we understand that excellent staff requires excellent accommodation. ",
        "level": 4,
        "website": "https://www.domus-housing.com/",
        "eventId": 437114,
        "created": "2023-03-31T14:53:02.000+0000",
        "visible": true,
        "logo": "https://res.cloudinary.com/bizzaboprod/image/upload/q_auto,f_auto,c_scale,c_crop,g_custom/v1680274315/ohz750ajdl8me5vtxhwp",
        "name": "Domus Managed Housing",
        "id": 448038,
        "type": "SPONSOR"
    },
    {
        "description": "As Asia’s fastest growing hotel group, Dorsett Hospitality International is invested in positive impacts and driven by a commitment to best in class service. Dorsett Hospitality International creates memorable guest experiences across its 53 properties in 23 major cities worldwide alongside its strategic partners TWH and Agora Hospitality Group. Dorsett Hospitality International’s 4 core brands: Dorsett Hotels, Dao by Dorsett, d.Collection, and Silka, each have their own distinct identity and offerings to cater to diverse travel needs. Since the group’s establishment in Hong Kong in January 2007, we have expanded our footprint across China, Malaysia, Singapore, Japan, Australia, the United Kingdom, and Continental Europe; more properties are planned in the development pipeline. For more information on Dorsett Hospitality International, visit: www.dorsett.com. ",
        "level": 4,
        "website": "http://www.dorsett.com",
        "eventId": 437114,
        "created": "2023-03-23T17:45:04.000+0000",
        "visible": true,
        "logo": "https://res.cloudinary.com/bizzaboprod/image/upload/q_auto,f_auto,c_scale,c_crop,g_custom/v1679657469/ds8lioc8vsbuz5p1sku0",
        "name": "Dorsett Hospitality International",
        "id": 446430,
        "type": "SPONSOR"
    },
    {
        "description": "Elaf Group is a long-established leader in travel, tourism and hospitality. At home in Saudi Arabia, we are renowned for our range of award-winning hotels as well as our retail and corporate travel agency services. Internationally – across the Islamic nations – Elaf’s name is widely trusted as a leading operator of Hajj and Umrah services.",
        "level": 4,
        "website": "https://elafgroup.com/",
        "eventId": 437114,
        "created": "2022-11-30T16:32:46.000+0000",
        "visible": true,
        "logo": "https://res.cloudinary.com/bizzaboprod/image/upload/q_auto,f_auto,c_scale,c_crop,g_custom/v1681411066/stqygvwhuyzr7fspmjkg",
        "name": "Elaf",
        "id": 430200,
        "type": "SPONSOR"
    },
    {
        "description": "Established in 1965, Hirsch Bedner Associates (HBA) is renowned as the leading global hospitality design firm, delivering integrated design solutions from architecture and landscaping, interior design to branding and product design to specialist lighting. HBA creates signature looks for today's luxury and upscale brands, unveiling the world's most anticipated hotels and resorts, casinos, spas, restaurants, cruise ships, and private residences. As a recipient of multiple prestigious design awards HBA remains finely attuned to the pulse of changing design trends, creating unique lifestyle experiences for clients around the world. ",
        "level": 4,
        "website": "https://www.hba.com/",
        "eventId": 437114,
        "created": "2023-02-22T16:20:49.000+0000",
        "visible": true,
        "logo": "https://res.cloudinary.com/bizzaboprod/image/upload/q_auto,f_auto,c_scale,c_crop,g_custom/v1677082838/c3xltmmmzqawez9fg8bw",
        "name": "HBA",
        "id": 441074,
        "type": "SPONSOR"
    },
    {
        "description": "The Indian Hotels Company Limited (IHCL) and its subsidiaries bring together a group of brands and businesses that offer a fusion of warm Indian hospitality and world-class service. These include Taj – the iconic brand for the most discerning travellers and the World’s Strongest Hotel Brand and India’s Strongest Hospitality Brand as per Brand Finance 2021, SeleQtions, a named collection of hotels, Vivanta, sophisticated upscale hotels and Ginger, which is revolutionising the lean luxe segment.\n\nIncorporated by the founder of the Tata Group, Jamsetji Tata, the Company opened its first hotel - The Taj Mahal Palace, in Bombay in 1903. IHCL has a portfolio of 236 hotels including 60 under development globally across 4 continents, 11 countries and in over 100 locations. The Indian Hotels Company Limited (IHCL) is India’s largest hospitality company by market capitalization. It is primarily listed on the BSE and NSE.\nPlease visit: www.ihcltata.com; www.tajhotels.com; www.seleqtionshotels.com;  www.vivantahotels.com; www.gingerhotels.com ",
        "level": 4,
        "website": "https://www.ihcltata.com/",
        "eventId": 437114,
        "created": "2023-02-10T13:49:13.000+0000",
        "visible": true,
        "logo": "https://res.cloudinary.com/bizzaboprod/image/upload/q_auto,f_auto,c_scale,c_crop,g_custom/v1676036872/by3upgglw8pbrtdppvu1",
        "name": "IHCL",
        "id": 439454,
        "type": "SPONSOR"
    },
    {
        "description": "Insignia Worldwide is powered by human ingenuity.\nFrom new economic mega-zones, real estate projects, hospitality or cultural venues to country pavilions and even corporate identities. We mine deep insights, decode cultures, shape trends, and pilot the headwinds of change to create places, spaces and experiences that enlighten and enrich the human spirit.\nWith over 20 years partnering with governments, sovereign funds, tourism boards and global brands in hospitality, Insignia Worldwide is the region's leading design, development, and experience company.\nWe go beyond all practical limitations to deliver breakthrough strategic and design solutions and achieve what is impossibly human.",
        "level": 4,
        "website": "https://www.insigniaworldwide.com/",
        "eventId": 437114,
        "created": "2022-11-16T15:21:58.000+0000",
        "visible": true,
        "logo": "https://res.cloudinary.com/bizzaboprod/image/upload/q_auto,f_auto,c_scale,c_crop,g_custom/v1668612051/wwtyxi8jm0bpkwtetamd",
        "name": "Insignia",
        "id": 428043,
        "type": "SPONSOR"
    },
    {
        "description": "About JLL\nJLL (NYSE: JLL) is a leading professional services firm that specialises in real estate and investment management. JLL shapes the future of real estate for a better world by using the most advanced technology to create rewarding opportunities, amazing spaces, and sustainable real estate solutions for our clients, our people, and our communities. JLL is a Fortune 500 company with annual revenue of $19.4 billion, operations in over 80 countries, and a global workforce of more than 102,000 as of June 30, 2022. JLL is the brand name, and a registered trademark, of Jones Lang LaSalle Incorporated. For further information, visit jll.com.\n\nAbout JLL MEA\nAcross the Middle East and Africa (MEA), JLL is a leading player in the real estate and hospitality services markets. The firm has worked in 35 countries across the region. It employs over 1,450 internationally qualified professionals across its offices in Dubai, Abu Dhabi, Riyadh, Jeddah, Al Khobar, Cairo, Casablanca, Johannesburg, and Nairobi. For further information, visit jll-mena.com.\n",
        "level": 4,
        "website": "https://www.jll-mena.com/",
        "eventId": 437114,
        "created": "2023-01-17T12:07:35.000+0000",
        "visible": true,
        "logo": "https://res.cloudinary.com/bizzaboprod/image/upload/q_auto,f_auto,c_scale,c_crop,g_custom/v1673957209/pdka5dk9lth2zmdrpluk",
        "name": "JLL",
        "id": 434522,
        "type": "SPONSOR"
    },
    {
        "level": 4,
        "website": "https://kertenhospitality.com/",
        "eventId": 437114,
        "created": "2022-11-25T05:45:31.000+0000",
        "visible": true,
        "logo": "https://res.cloudinary.com/bizzaboprod/image/upload/q_auto,f_auto,c_scale,c_crop,g_custom/v1669355104/lsodeb94lzm9gks6fuvr",
        "name": "Kerten Hospitality ",
        "id": 429504,
        "type": "SPONSOR"
    },
    {
        "description": "Knight Frank delivers full scale Hospitality, Leisure and Tourism Advisory Services across the Middle East, with a proven track record regionally of hundreds of successful hospitality and tourism projects over the past 25 years. We specialise in every aspect of the hospitality, leisure and tourism sector, and offer a complete portfolio of advisory services.",
        "level": 4,
        "website": "https://www.knightfrank.ae/",
        "eventId": 437114,
        "created": "2023-03-02T14:40:35.000+0000",
        "visible": true,
        "logo": "https://res.cloudinary.com/bizzaboprod/image/upload/q_auto,f_auto,c_scale,c_crop,g_custom/v1677768020/uzqgzvx2l2noqa0dncyl",
        "name": "Knight Frank",
        "id": 442750,
        "type": "SPONSOR"
    },
    {
        "description": "Legal Advisors, Abdulaziz I. Alajlan & Partners in association with Baker McKenzie is a Saudi Arabian law firm established in July 1998. The firm has offices in Riyadh and Jeddah and provides expert advice to clients on a wide range of legal matters. \n\nThe real estate practice in the Gulf provides leading hotel and real estate law services to clients in Saudi Arabia, and global clients investing in Saudi Arabia. Our lawyers are particularly known for hotel expertise, having acted on over 130 hotel transactions in Saudi Arabia, and continue to be regularly engaged by developers to act on their behalf in hotel negotiations. Globally the Firms Real Estate Group is made up of more than 330 lawyers enabling us to be a one-stop shop for real estate legal services across key markets; we develop world-class transactional strategies, provide corporate real estate services, and advise on global data centre real estate development and management. \n\nThe Legal Advisors' long-standing association with the leading international law firm Baker McKenzie enables us to provide a full-service offering that supports all types of cross-border transactions, allowing our international clients access to the right guidance and support to navigate the Saudi Arabian legal system. Baker McKenzie's client solutions provide seamless advice, underpinned by deep practice and sector expertise, as well as first-rate local market knowledge. Across more than 70 offices globally, Baker McKenzie works alongside our clients to deliver solutions for a connected world.\n",
        "level": 4,
        "website": "https://www.bakermckenzie.com/en/locations/emea/saudi-arabia",
        "eventId": 437114,
        "created": "2023-03-21T16:06:03.000+0000",
        "visible": true,
        "logo": "https://res.cloudinary.com/bizzaboprod/image/upload/q_auto,f_auto,c_scale,c_crop,g_custom/v1679414724/fznwnebrm80ghfiz5iym",
        "name": "Legal Advisors Abdulaziz Alajlan & Partners in association with Baker & McKenzie Limited ",
        "id": 445946,
        "type": "SPONSOR"
    },
    {
        "description": "Louvre Hotel Group / Golden Tulip – MENA, region is successfully operating it is more than 55 mid & upscale hotels/resorts in the Middle East region and Georgia. Currently, operating brands are Golden Tulip, Royal Tulip, Tulip Inn, and Campanile, and looking forward to opening 18 to 20 new hotels shortly in the region within 2022/2023 while introducing two new brands Tulip Residences and Kyriad.\n\nOur hotels and resorts are serving their guests from all segments and exceeding the guest expectations and the staff to ensure satisfactory and desired results for stakeholders. \n\nLouvre Hotels Group is considered one of the largest hotel groups in Europe and a top 5 global operator supported by its shareholder’s strength and size in the hotel industry. Under Jin Jiang’s ownership, Louvre Hotels Group is part of a platform, which includes more than 7,000 hotels and over 680,000 guest rooms in over 300 destinations.\n",
        "level": 4,
        "website": "https://www.louvrehotels.com/en",
        "twitter": "LouvreHotels",
        "eventId": 437114,
        "created": "2022-10-21T08:25:06.000+0000",
        "visible": true,
        "logo": "https://res.cloudinary.com/bizzaboprod/image/upload/q_auto:best,c_crop,g_custom/v1654782537/sunapukcrbedfmlzqzut.png",
        "name": "Louvre Hotels Group",
        "id": 423659,
        "type": "SPONSOR"
    },
    {
        "description": "MAPAL Group is the home of best-in-class hospitality solutions created exclusively for professional and multi-site businesses. We’ve combined seven companies to build a hospitality management suite with a single sign-on for all your back of house software, reducing the number of solutions, improving productivity, saving time and simplifying operations for your team.",
        "level": 4,
        "website": "https://mapal-os.com/en/",
        "eventId": 437114,
        "created": "2023-03-30T16:23:18.000+0000",
        "visible": true,
        "logo": "https://res.cloudinary.com/bizzaboprod/image/upload/q_auto,f_auto,c_scale,c_crop,g_custom/v1680193360/gxtvslt8x7qd2angfyhg",
        "name": "Mapal",
        "id": 447524,
        "type": "SPONSOR"
    },
    {
        "description": "Minor Hotels is an international hotel owner, operator and investor currently with more than 530 hotels in operation. Minor Hotels passionately explores new possibilities in hospitality with a diverse portfolio of properties designed intelligently to appeal to different kinds of travellers, serving new passions as well as personal needs. Through our Anantara, Avani, Oaks, Tivoli, M Collection, NH Collection, NH, nhow, Elewana, Marriott, Four Seasons, St. Regis, Radisson Blu and Minor International properties, Minor Hotels operates in 56 countries across Asia Pacific, the Middle East, Africa, the Indian Ocean, Europe, South America and North America.\n\n",
        "level": 4,
        "website": "https://www.minorhotels.com/en",
        "eventId": 437114,
        "created": "2022-10-21T08:25:06.000+0000",
        "visible": true,
        "facebook": "https://www.facebook.com/minorhotels",
        "logo": "https://res.cloudinary.com/bizzaboprod/image/upload/q_auto:best,c_crop,g_custom/v1654782589/t0shpdi75s3n3awwd3k5.png",
        "name": "Minor Hotels",
        "id": 423660,
        "type": "SPONSOR"
    },
    {
        "description": "OBM International (OBMI) is a leading global master planning, architecture, and interior design firm that is widely celebrated for designing luxury resorts and hotels, bespoke private residences, and engaging urban areas. Since 1936, our approach has carefully distilled the essence of each place to create an authentic and unique destination.",
        "level": 4,
        "website": "https://obmi.com/",
        "eventId": 437114,
        "created": "2023-03-22T14:55:14.000+0000",
        "visible": true,
        "logo": "https://res.cloudinary.com/bizzaboprod/image/upload/q_auto,f_auto,c_scale,c_crop,g_custom/v1679496891/e4d5u1yy9dipe83tl7ed",
        "name": "OBMI",
        "id": 446093,
        "type": "SPONSOR"
    },
    {
        "description": "At PwC, our purpose is to build trust in society and solve important problems. We’re a network of firms in 152 countries with nearly 328,000 people who are committed to delivering quality in assurance, advisory and tax services. Find out more and tell us what matters to you by visiting us at www.pwc.com.\n\nEstablished in the Middle East for 40 years, PwC has 24 offices across 12 countries in the region with around 8,000 people. (www.pwc.com/me).",
        "level": 4,
        "website": "https://www.pwc.com/m1",
        "eventId": 437114,
        "created": "2023-03-15T05:45:25.000+0000",
        "visible": true,
        "logo": "https://res.cloudinary.com/bizzaboprod/image/upload/q_auto,f_auto,c_scale,c_crop,g_custom/v1678859001/n9hfginl7hvlernlhwib",
        "name": "PWC Middle East ",
        "id": 444895,
        "type": "SPONSOR"
    },
    {
        "description": "Creating the global travel industry’s top brands, QUO guides clients along their branding journey. Building brand equity and revenue, we initiate, fine-tune and implement original concepts. Whether branding nations, luxury hospitality giants, high-flying airlines, funky design hotels, adventurous travel companies, or elegant boutique resorts, QUO brings ideas to life.",
        "level": 4,
        "website": "https://www.quo-global.com/",
        "eventId": 437114,
        "created": "2022-11-16T15:17:41.000+0000",
        "visible": true,
        "logo": "https://res.cloudinary.com/bizzaboprod/image/upload/q_auto,f_auto,c_scale,c_crop,g_custom/v1678950404/wjcdzzravithipy9zpch",
        "name": "QUO",
        "id": 428042,
        "type": "SPONSOR"
    },
    {
        "description": "Rove hotels is an award-winning lifestyle hotel brand, offering well designed hotels in connected locations. Designed for the traveller who likes to explore without borders, receive fuss-free service and some touches of local culture. Rove Hotels defines a new niche in the ever-evolving global hospitality sector.\n \nRove Hotels are reliable, modern and efficient. Regardless of their location, Rovers (guests) will always find locally-inspired modern interiors, relaxed service and all the essentials to enjoy their stay. \n\nBorn in Dubai, Rove Hotels is a joint venture between Meraas Holding and Emaar Properties PJSC. \nThe first Rove hotel opened at Downtown Dubai in 2016 and the brand now has over 4000 rooms open or under development across the Middle East. Rove Hotels continues to target properties in well-connected locations and further expansion announcements will follow soon.\n",
        "level": 4,
        "website": "http://www.rovehotels.com",
        "eventId": 437114,
        "created": "2023-02-10T13:19:50.000+0000",
        "visible": true,
        "logo": "https://res.cloudinary.com/bizzaboprod/image/upload/q_auto,f_auto,c_scale,c_crop,g_custom/v1676035157/dgjvopmdzziabfq1bbbx",
        "name": "Rove Hotels",
        "id": 439453,
        "type": "SPONSOR"
    },
    {
        "level": 4,
        "website": "https://seccgroup.net/",
        "eventId": 437114,
        "created": "2023-03-07T09:55:08.000+0000",
        "visible": true,
        "logo": "https://res.cloudinary.com/bizzaboprod/image/upload/q_auto,f_auto,c_scale,c_crop,g_custom/v1678182840/x9cc8nf8uo4gzm7hdxls",
        "name": "SECC Group",
        "id": 443362,
        "type": "SPONSOR"
    },
    {
        "description": "Spectrum is a fully integrated Design Build firm based in Tbilisi, Georgia, providing the following services globally: Architecture, Interior Design, Master Planning and Construction Management. \nWe design and build unique and bespoke projects for commercial and residential sectors around the world.\nWe relish the challenges inherent across a wide range of work, engaging our expertise and agility to deliver lasting, meaningful designs that bring value to our clients and contribute towards a healthier planet. Our aim is to create long-lasting standards that integrate environmental impact with social and economic platforms, as well as global reach and local context.\n\nOne of the key aspects and characteristics of our methodology is the deep understanding and consideration of the project location, its traditions, culture and surrounding context. This gives us the ability to clearly analyze the specific parameters of any given location, its function and create unique designs that can seamlessly blend within the given context. Thorough consideration of ecology, environment, local context and traditions are the core and start point for the formation of any project.\n",
        "level": 4,
        "website": "https://spectrum.ge/",
        "eventId": 437114,
        "created": "2023-03-07T09:57:57.000+0000",
        "visible": true,
        "logo": "https://res.cloudinary.com/bizzaboprod/image/upload/q_auto,f_auto,c_scale,c_crop,g_custom/v1678182923/f4pyhox3yewiv0hhau0z",
        "name": "Spectrum",
        "id": 443364,
        "type": "SPONSOR"
    },
    {
        "description": "SSH is one of the leading master planning, infrastructure, building design and construction supervision firms in the Middle East, with a reputation for design integrity and a portfolio that includes landmark projects throughout the region. The firm maintains offices in Abu Dhabi, Algeria, Bahrain, Dubai, Kuwait, London, Oman, Saudi Arabia, Egypt, Sub-Saharan Africa, and North Africa.  \n\nFounded in 1961, we employ approximately 800 high-calibre local, regional, and international experts in their individual fields, most of whom are from globally renowned international consultancy firms. SSH has been ranked in second position as architecture consultancy in the Middle East, among the top 100 architects in the world, in Building Design magazine’s World Architecture 100 Survey in 2023.\n\nWe were also ranked in 96th place among ENR’s Top 225 International Design Firms for 2022.  \n\nSSH's multifaceted practices include architecture, urban design and planning, landscape architecture, structural and civil engineering, MEP/building services, interior design, highway and bridge engineering, stormwater drainage, utility design, sanitary engineering, marine engineering, and district cooling, in addition to project management and construction supervision services. \n",
        "level": 4,
        "website": "https://www.sshic.com/",
        "eventId": 437114,
        "created": "2023-01-10T06:16:51.000+0000",
        "visible": true,
        "logo": "https://res.cloudinary.com/bizzaboprod/image/upload/q_auto,f_auto,c_scale,c_crop,g_custom/v1673331150/myzlw58mlaja2jza3nvi",
        "name": "SSH",
        "id": 433662,
        "type": "SPONSOR"
    },
    {
        "description": "The Boundary is a pioneering CGI visualisation studio whose reputation as an expert collective of creative technologists, designers, filmmakers, and storytellers has been forged over the last 15 years. They have worked on numerous iconic hotel developments such as the Waldorf Astoria in New York, and the Six Senses at The Whiteleys London, creating award-winning marketing campaign content with hyper-photorealistic CGI visualizations, animated films, and virtual reality experiences.\n\nThis expertise has been applied within KSA over recent years working across luxury hospitality assets for clients such as Red Sea Global, Neom, and DGDA and their accumulated knowledge and regional expertise is now unrivaled. The Boundary has also become a world leader in the emerging field of large-scale interactive hyper-photorealistic marketing digital twins and metaverse experiences, primarily focussed on the real estate and hospitality destination sectors. \n\nWith over 100 in-house CGI artists and creative technologists, across 3 global studios ( London, New York, Auckland) operating at the very top end of the visualization sector, The Boundary is uniquely positioned to deliver photorealistic end-to-end client services for hospitality and destination marketing needs, across both traditional channels and the emerging metaverse and digital twin sectors.\n",
        "level": 4,
        "website": "https://www.the-boundary.com/",
        "eventId": 437114,
        "created": "2023-01-26T06:44:55.000+0000",
        "visible": true,
        "logo": "https://res.cloudinary.com/bizzaboprod/image/upload/q_auto,f_auto,c_scale,c_crop,g_custom/v1674821628/uhceipge5nxflyszpvu6",
        "name": "The Boundary",
        "id": 435926,
        "type": "SPONSOR"
    },
    {
        "description": "SHAPING TOMORROW’S TOURISM !\n\nFounded in 2006 in Paris, Voltere provides expert advice supporting the durable success of tourism projects. With multiple offices in Middle East, Africa, and France, we help our public and private sector clients create value and sustainability. Our team has been involved in hundreds of tourism, culture, leisure, and hotel-related projects for a large range of clients: governments, international institutions and donors, developers, lenders, investors, industrial corporations, and individually held businesses.  Voltere became a subsidiary of Egis in 2020.\n",
        "level": 4,
        "website": "https://voltere-consulting.com/",
        "eventId": 437114,
        "created": "2022-12-15T17:09:53.000+0000",
        "visible": true,
        "logo": "https://res.cloudinary.com/bizzaboprod/image/upload/q_auto,f_auto,c_scale,c_crop,g_custom/v1671124169/xcbrdmm8j5ed5m3zd8hx",
        "name": "Voltere",
        "id": 432080,
        "type": "SPONSOR"
    },
    {
        "level": 4,
        "website": "https://www.vision-hospitality.com/",
        "eventId": 437114,
        "created": "2023-04-14T13:10:15.000+0000",
        "visible": true,
        "logo": "https://res.cloudinary.com/bizzaboprod/image/upload/q_auto,f_auto,c_scale,c_crop,g_custom/v1681477785/vfd9kczylep97na32bgz",
        "name": "Vision Hospitality",
        "id": 450270,
        "type": "SPONSOR"
    },
    {
        "description": "WhiteWater is the world’s leading designer and manufacturer of everything a water park needs. From design to the broadest product range in the industry, WhiteWater is recognized for their water slides, water rides, multi-level play structures, surf simulators, and wave systems.",
        "level": 4,
        "website": "https://www.whitewaterwest.com/en/",
        "eventId": 437114,
        "created": "2022-12-19T18:02:22.000+0000",
        "visible": true,
        "logo": "https://res.cloudinary.com/bizzaboprod/image/upload/q_auto,f_auto,c_scale,c_crop,g_custom/v1675252608/pfeh1gdc6ihxx4eehgmy",
        "name": "WhiteWater",
        "id": 432247,
        "type": "SPONSOR"
    },
    {
        "level": 4,
        "website": "https://www.wyndhamhotels.com/",
        "eventId": 437114,
        "created": "2023-01-20T07:01:54.000+0000",
        "visible": true,
        "logo": "https://res.cloudinary.com/bizzaboprod/image/upload/q_auto,f_auto,c_scale,c_crop,g_custom/v1674197972/yloirxsem14rnrl7oj0l",
        "name": "Wyndham Hotels ",
        "id": 434974,
        "type": "SPONSOR"
    },
    {
        "description": "Specialists in F&B Masterplanning, TGP International creates, develops and delivers world-class hospitality brands & food retail spaces for our clients and partners across the GCC, Europe and U.S. We deliver your vision through our 360° services, which include market studies, advisory services, concept development, award-winning restaurant interior design, project management, operational & asset management, events catering, and franchising & licensing opportunities.\n\nWorking on everything from 5-star hotel openings to operating 1,000+ capacity nightclubs, developing market-entry strategies for global brands and expanding brands internationally, the team have a wealth of experience working with globally renowned brands such as Harrod's, Ithra, Al Futtaim, Nakheel, Marriott, IHG, Selfridges, Hilton, Emaar, Alain Ducasse, Jean Georges, Dior, Cartier and more recently Expo 2020 Dubai.\n\n\n",
        "level": 12,
        "website": "https://www.tgpinternational.com/",
        "twitter": "tgpintl",
        "linkedin": "https://www.linkedin.com/company/tgpinternational",
        "eventId": 437114,
        "created": "2023-04-20T13:20:11.000+0000",
        "visible": true,
        "facebook": "https://www.facebook.com/TGPIntl/",
        "logo": "https://res.cloudinary.com/bizzaboprod/image/upload/q_auto,f_auto,c_scale,c_crop,g_custom/v1681996737/lakbfrkrvvstelgcfqum",
        "name": "TGP International",
        "id": 452147,
        "type": "SPONSOR"
    },
    {
        "description": "Vision, passion, and cosmopolitanism. Deutsche Hospitality delivers the perfect guest experience. Tradition and an eye for the future come together in an inimitable portfolio of eight brands operating across more than 160 hotels globally. “Celebrating luxurious simplicity.”: Steigenberger Icons are extraordinary luxury hotels which combine historical uniqueness and modern concepts. The Steigenberger Porsche Design Hotels brand is generating innovative impetuses in the Luxury Lifestyle Segment. Steigenberger Hotels & Resorts represent the epitome of upscale hospitality on three continents. Jaz in the City’s Lifestyle Hotels dictate the rhythm in the Upscale Sector. House of Beats unites a passion for the hotel business with the fascination of lifestyle, fashion, and music. IntercityHotel is located at the very hub of any destination and offers a true home of comfort and mobility in the Midscale Segment. MAXX by Deutsche Hospitality is a charismatic conversion brand which is also positioned in the midscale area of the market. Zleep Hotels provide a smart marriage of design and functionality in the Economy Segment. All of these brands are unified under H-Rewards, Deutsche Hospitality’s loyalty program which yields benefits from the first booking onwards. ",
        "level": 5,
        "website": "https://www.deutschehospitality.com/",
        "eventId": 437114,
        "created": "2023-02-15T11:29:28.000+0000",
        "visible": true,
        "logo": "https://res.cloudinary.com/bizzaboprod/image/upload/q_auto,f_auto,c_scale,c_crop,g_custom/v1676460538/p9od6ovyefh27p9g4hut",
        "name": "Deutsche Hospitality",
        "id": 440131,
        "type": "SPONSOR"
    },
    {
        "description": "Hospitality Management Holding (HMH) is a fully integrated hotel management company and the strongest operator in the dry sector within the region. HMH provides hotel owners and developers with five distinct yet complementary hotel brands, ranging from luxury to lifestyle, which are Bahi Hotels & Resorts, Coral Hotels & Resorts, Corp Hotels, EWA Hotel Apartments, and ECOS Hotels.",
        "level": 5,
        "website": "https://www.hmhhotelgroup.com/en",
        "twitter": "hmhhotelgroup",
        "eventId": 437114,
        "created": "2022-10-21T08:25:06.000+0000",
        "visible": true,
        "facebook": "https://www.facebook.com/HMHhotelgroup/",
        "logo": "https://res.cloudinary.com/bizzaboprod/image/upload/q_auto:best,c_crop,g_custom/v1659527688/nslrsivj8x6n1zzqwddu.png",
        "name": "Hospitality Management Holding",
        "id": 423658,
        "type": "SPONSOR"
    },
    {
        "level": 5,
        "website": "https://www.hvs.com/",
        "eventId": 437114,
        "created": "2022-11-24T02:03:43.000+0000",
        "visible": true,
        "logo": "https://res.cloudinary.com/bizzaboprod/image/upload/q_auto,f_auto,c_scale,c_crop,g_custom/v1669255396/lfkinwjargcwgjeh1gsg",
        "name": "HVS",
        "id": 429384,
        "type": "SPONSOR"
    },
    {
        "description": "KEANE is a highly experienced team of F&B strategists, conceptualisers, and designers with studios in DXB/LDN/BKK and Riyadh. \n\nWe played a key part in changing the Dubai dining scene by introducing Buddha Bar, Embassy, Hakkasan, and Pierre Gagnaire. Masterplanning and strategy projects included Yas and the large-scale PIF-owned Giga projects. \n\nKEANE have also created great concepts and design for Hilton, Marriott, Jumeirah, Hyatt, W Palm, Taj, London’s MNKY HSE, and Treehouse hotel.\n",
        "level": 5,
        "website": "http://www.thisiskeane.com",
        "eventId": 437114,
        "created": "2023-02-19T21:10:50.000+0000",
        "visible": true,
        "logo": "https://res.cloudinary.com/bizzaboprod/image/upload/q_auto,f_auto,c_scale,c_crop,g_custom/v1681412081/kb4obev9hu306fh5i6co",
        "name": "Keane",
        "id": 440753,
        "type": "SPONSOR"
    },
    {
        "level": 13,
        "website": "https://forsitecreative.com/",
        "linkedin": "https://www.linkedin.com/company/forsite-creative/about/",
        "eventId": 437114,
        "created": "2023-04-20T13:16:49.000+0000",
        "visible": true,
        "facebook": "https://www.facebook.com/Forsite-Creative-100757728571072/",
        "logo": "https://res.cloudinary.com/bizzaboprod/image/upload/q_auto,f_auto,c_scale,c_crop,g_custom/v1683008009/vgjgmqbu7zcm31d12hz0",
        "name": "Forsite Creative",
        "id": 452146,
        "type": "SPONSOR"
    },
    {
        "description": "HAMA is the pre-eminent organization for hospitality asset managers, with their mission centered on the enhancement of hospitality asset managers through education, advancement of the profession, and serving as the collective industry voice of hospitality ownership. ",
        "level": 10,
        "website": "https://www.hamamea.org/",
        "eventId": 437114,
        "created": "2023-03-29T10:16:34.000+0000",
        "visible": true,
        "logo": "https://res.cloudinary.com/bizzaboprod/image/upload/q_auto,f_auto,c_scale,c_crop,g_custom/v1680084928/semgrwqfruwygxwdnyww",
        "name": "HAMA MEA",
        "id": 447313,
        "type": "SPONSOR"
    },
    {
        "description": "Hotel Investment Conference - South Asia (HICSA 2023)",
        "level": 10,
        "website": "https://www.hicsaconference.com/",
        "eventId": 437114,
        "created": "2023-03-29T10:44:07.000+0000",
        "visible": true,
        "logo": "https://res.cloudinary.com/bizzaboprod/image/upload/q_auto,f_auto,c_scale,c_crop,g_custom/v1680086616/zzdpdpolodcbfqijwqxk",
        "name": "HICSA 2023",
        "id": 447315,
        "type": "SPONSOR"
    },
    {
        "description": "Hotelivate is hospitality consulting firm offering its services to clients across the Asia-Pacific and Middle East Regions. It was founded by the erstwhile team of HVS India; Hotelivate, offers comprehensive consulting services through a diverse team of consultants who have a combined professional experience of over 250 years across various verticals in the hospitality industry.",
        "level": 10,
        "website": "http://hotelivate.com",
        "eventId": 437114,
        "created": "2023-03-29T10:45:02.000+0000",
        "visible": true,
        "logo": "https://res.cloudinary.com/bizzaboprod/image/upload/q_auto,f_auto,c_scale,c_crop,g_custom/v1680086665/xflrojffn5ftdqasbavx",
        "name": "Hotelivate",
        "id": 447316,
        "type": "SPONSOR"
    },
    {
        "description": "We want to build a smart future. To achieve that, we’re building a unique ecosystem that connects change-makers and leading organizations.\n\nOur network consists of 50,000 startups, 500+ world-leading corporations, and hundreds of venture capital firms, universities, and government agencies across multiple industries. Together with our partners, we are creating a unique ecosystem designed to develop and implement the technologies of tomorrow.\n\nPlug and Play’s mission is to invest in 20 travel tech startups annually and bridge the gap between the innovators and industry leaders. ",
        "level": 10,
        "website": "https://www.plugandplaytechcenter.com/",
        "eventId": 437114,
        "created": "2023-02-07T18:54:53.000+0000",
        "visible": true,
        "logo": "https://res.cloudinary.com/bizzaboprod/image/upload/q_auto,f_auto,c_scale,c_crop,g_custom/v1675795812/girv0o9cjs1wabeig4gh",
        "name": "Plug and Play",
        "id": 438157,
        "type": "SPONSOR"
    },
    {
        "level": 10,
        "website": "https://sustainablehospitalityalliance.org/",
        "eventId": 437114,
        "created": "2023-01-30T11:15:42.000+0000",
        "visible": true,
        "logo": "https://res.cloudinary.com/bizzaboprod/image/upload/q_auto,f_auto,c_scale,c_crop,g_custom/v1675077290/fz65sbsc6gwhx9lyly06",
        "name": "Sustainable Hospitality Alliance",
        "id": 436519,
        "type": "SPONSOR"
    },
    {
        "description": "Arab News is Saudi Arabia's first English-language newspaper. It was founded in 1975 by Hisham and Mohammed Ali Hafiz. Today, it is one of 29 publications produced by Saudi Research & Publishing Company (SRPC), a subsidiary of Saudi Research & Media Group (SRMG). Faisal J. Abbas is the editor-in-chief.\n\nArab News is popular among many sections of Saudi society, including nationals and foreign residents, and from various socio-economic levels — guest workers to company CEOs. With such a large distribution and diverse group of readers, Arab News is the first choice among executives in local and foreign financial institutions. Because of its wide readership profile, the paper serves as a much sought-after medium for advertising and regional brand building. With the advent and growing popularity of the Internet as a source of information, the daily's website (www.arabnews.com) gets hundreds of thousands of hits every day from Web surfers worldwide.\n\nArab News was the first newspaper to provide a Saudi perspective in English on a wide range of national, regional and global issues through its diverse collection of columnists. This content keeps track of the Kingdom's policies and developments in Saudi society. Arab News is printed in color simultaneously at its state-of-the-art facilities in Jeddah, Riyadh and Dammam. It can be found on newsstands throughout the Middle East.",
        "level": 7,
        "website": "http://www.arabnews.com",
        "eventId": 437114,
        "created": "2023-04-17T08:58:14.000+0000",
        "visible": true,
        "logo": "https://res.cloudinary.com/bizzaboprod/image/upload/q_auto,f_auto,c_scale,c_crop,g_custom/v1681721811/xqtkteqtc82f1e3lnbrs",
        "name": "Arab News",
        "id": 450391,
        "type": "SPONSOR"
    },
    {
        "description": "Argaam Investment & Trading is a renowned financial news portal that has been providing real-time updates, financial information, and news related to financial markets and macroeconomics in the Kingdom of Saudi Arabia since 2007. The company's ownership is divided between Saudi Research and Media Group (“SRMG”) holding 51% and Saudi-based investors holding 49%.\n\nArgaam Investment & Trading, with its head office located in Riyadh, KSA, has expanded its operations to four additional offices situated in UAE, Egypt, Algeria, and Pakistan. The company boasts two subsidiaries - Danat Dubai and Argaam Media - situated in Dubai and Cairo, respectively.\n\nArgaam.com, the foremost financial portal in KSA, offers retail and institutional investors a broad spectrum of news, research, analytical information, expert advice, and coverage of multiple sectors. With a monthly visitor count of 2.2 million, including investors, analysts, and C-levels, the portal caters to a diverse range of users seeking up-to-date and comprehensive financial insights.",
        "level": 7,
        "website": "https://www.argaam.com/",
        "eventId": 437114,
        "created": "2023-03-20T06:00:15.000+0000",
        "visible": true,
        "logo": "https://res.cloudinary.com/bizzaboprod/image/upload/q_auto,f_auto,c_scale,c_crop,g_custom/v1679291966/sdnhe8hdinjzygmfwrgl",
        "name": "Argaam",
        "id": 445652,
        "type": "SPONSOR"
    },
    {
        "description": "Breaking Travel News is the leading online resource for travel industry executives from around the world. From market intelligence, trend analysis and breaking news, to exclusive interviews, insightful features and perceptive videos, the site provides all the information insiders need to keep their fingers on the travel pulse. www.breakingtravelnews.com",
        "level": 7,
        "website": "https://www.breakingtravelnews.com/",
        "eventId": 437114,
        "created": "2023-01-19T13:11:00.000+0000",
        "visible": true,
        "logo": "https://res.cloudinary.com/bizzaboprod/image/upload/q_auto,f_auto,c_scale,c_crop,g_custom/v1674133853/sv6cuqz7vb0maogts5c3",
        "name": "Breaking Travel News",
        "id": 434828,
        "type": "SPONSOR"
    },
    {
        "description": "Connecting Travel provides news, special reports, features, video content and creative solutions that inform, inspire, support and connect travel professionals at all levels throughout the Middle East with global markets. Connect with us for thought leadership, and for travel and hospitality news you can use, delivered via our free digital platforms, provided in English and Arabic, and at both virtual and face-to-face events, and bespoke brand training programmes.\n\nConnecting Travel is a division of the award-winning global Jacobs Media Group and as such has international reach through brands including the UK’s most influential B2B travel news resource, Travel Weekly; the UK’s longest-running hospitality title, The Caterer; luxury travel club and accompanying magazine Aspire; travel technology media leader Travolution; international events specialist Connections; the Global Travel Week trade fair; and the Global Travel & Tourism Resilience Council.",
        "level": 7,
        "website": "https://www.connectingtravel.com/",
        "eventId": 437114,
        "created": "2023-02-10T12:50:07.000+0000",
        "visible": true,
        "logo": "https://res.cloudinary.com/bizzaboprod/image/upload/q_auto,f_auto,c_scale,c_crop,g_custom/v1676033391/rqiuwlklf2ymf34f59yc",
        "name": "Connecting Travel",
        "id": 439450,
        "type": "SPONSOR"
    },
    {
        "description": "Entrepreneur Middle East is the guide for the region's entrepreneurs and business-minded readership. It is the flagship publication of BNC Publishing, officially licensed by the US-based business and growth title, Entrepreneur. Launched in February 2014 together with its subsidiary, Entrepreneur Al Arabiya, Entrepreneur Middle East is now considered an authoritative read in the MENA region for business people, government entities, technology enthusiasts, and startup founders.",
        "level": 7,
        "website": "https://www.entrepreneur.com/en-ae",
        "eventId": 437114,
        "created": "2023-02-07T07:36:46.000+0000",
        "visible": true,
        "logo": "https://res.cloudinary.com/bizzaboprod/image/upload/q_auto,f_auto,c_scale,c_crop,g_custom/v1675755373/qn56dl3ehclaaft4ph26",
        "name": "Entrepreneur Middle East",
        "id": 438023,
        "type": "SPONSOR"
    },
    {
        "description": "EYE OF RIYADH provides effective digital marketing solutions for campaigns and events targeting Saudi Arabia and other GCC. \n\nwww.eyeofriyadh.com is one of the most popular websites in the GCC among citizens, residents, tourists and investors who are seeking information and wish to explore the opportunities in the region. \nour services : \n\n•\tEmail and sms campaign\n•\tBanner advertising\n•\tSocial Media Campaign\n•\tEvents and Training Marketing\n•\tPublic Relations Services\t\n\nContact Eye of Riyadh: \nwww.eyeofriyadh.com \ninfo@eyeofriyadh.com \nTel: +966 11 2735522\n\n\nعين الرياض بوابة تسويقية لمدينة الرياض تخدم جميع شرائح المجتمع من مواطنين ومقيمين وسياح ومستثمرين، وتقدم العديد من الخدمات التفاعلية والأخبار والمعلومات المتنوعة والمحدثة يومياً باللغتين العربية والإنجليزية. وتدعم الفعاليات والأنشطة من خلال الرعاية والتنظيم والتسويق، كما تقدم خدمات تسويق إلكترونية. \nخدماتنا:\nتسويق  عبر حملات البريد الإلكتروني\nمساحات و بنرات إعلانية\nتسويق عبر وسائل الإعلام الاجتماعي\nتسويق الفعاليات والدورات التدريبية\nرسائل جوال نصية\nخدمات العلاقات العامة\nتصميم المواقع وتطوير الخدمات\nالإعلان، والتصميم الاحترافي\n\nللتواصل مع عين الرياض:\nwww.eyeofriyadh.com \ninfo@eyeofriyadh.com \nTel: +966 11 2735522\n",
        "level": 7,
        "website": "http://www.eyeofriyadh.com/",
        "eventId": 437114,
        "created": "2023-01-05T06:56:51.000+0000",
        "visible": true,
        "logo": "https://res.cloudinary.com/bizzaboprod/image/upload/q_auto,f_auto,c_scale,c_crop,g_custom/v1672901717/vdontixakeh9igiqcwy6",
        "name": "Eye of Riyadh",
        "id": 433105,
        "type": "SPONSOR"
    },
    {
        "description": "Creativity and industry involvement drives our future... Published for more than 20 years, Hospitality Net is regarded as a highly trusted source where industry leaders and experts go to learn, share and connect. Based on its proprietary publishing and syndication platform, Hospitality Net enables its members to reach and communicate with highly targeted audience groups in the global hospitality vertical.",
        "level": 7,
        "website": "https://www.hospitalitynet.org/",
        "eventId": 437114,
        "created": "2023-01-23T10:56:58.000+0000",
        "visible": true,
        "logo": "https://res.cloudinary.com/bizzaboprod/image/upload/q_auto,f_auto,c_scale,c_crop,g_custom/v1674471347/hgk5ctzpuqkhts8ba6o2",
        "name": "Hospitality Net",
        "id": 435201,
        "type": "SPONSOR"
    },
    {
        "description": "Hospitality News Middle East is the must-have regional bi-monthly trade magazine for the hospitality and foodservice industries. Discover the region’s new hotel projects, new restaurants, as well as industry solutions by the experts, in depth insight and interviews with the industry’s key players. There are country reports, expert interviews, regional news and much more. The buyers’ guide section features the latest products and services on the market, including food, beverage, equipment, technology and design, as well as the hospitality events happening across the region.",
        "level": 7,
        "website": "https://www.hospitalitynewsmag.com/",
        "eventId": 437114,
        "created": "2023-01-23T10:28:56.000+0000",
        "visible": true,
        "logo": "https://res.cloudinary.com/bizzaboprod/image/upload/q_auto,f_auto,c_scale,c_crop,g_custom/v1674469662/nfoctizh59tc5ddlypdu",
        "name": "Hospitality News Middle East",
        "id": 435199,
        "type": "SPONSOR"
    },
    {
        "description": "Hotel & Catering News Middle East is the region’s leading source for industry knowledge, bringing readers the latest in both fields. The publication, along with its digital platforms and large-scale events for professionals, offers in-depth insights into a wide variety of trends and topics that are relevant to today’s hoteliers, caterers, suppliers, experts and stakeholders.",
        "level": 7,
        "website": "https://www.hotelnewsme.com/",
        "eventId": 437114,
        "created": "2023-02-07T07:36:01.000+0000",
        "visible": true,
        "logo": "https://res.cloudinary.com/bizzaboprod/image/upload/q_auto,f_auto,c_scale,c_crop,g_custom/v1675755346/kkxw9iqbjswakmzmhcra",
        "name": "Hotel & Catering News Middle East",
        "id": 438022,
        "type": "SPONSOR"
    },
    {
        "description": "TravTalk is a B2B print and electronic travel, tourism and hospitality trade magazine in the UAE with a presence of over twelve years in the region and over 25 years in India. Their circulation figures for the print version are over 150,000 readers with 25,000 monthly printed. TravTalk’s ME version is distributed all over UAE and GCC to travel agents, tour operators, hotels, airlines, corporates etc.",
        "level": 7,
        "website": "https://travtalkmiddleeast.com/",
        "eventId": 437114,
        "created": "2023-04-04T08:18:53.000+0000",
        "visible": true,
        "logo": "https://res.cloudinary.com/bizzaboprod/image/upload/q_auto,f_auto,c_scale,c_crop,g_custom/v1680596237/unafrnjiefxy5qslmxo0",
        "name": "TravTalk Middle East",
        "id": 448386,
        "type": "SPONSOR"
    },
    {
        "description": "TTN, the oldest most established (43 years) travel trade publication covering the tourism industry in the Middle East is aimed at travel professionals and provides in-depth - extensive coverage of relevant issues in the Middle East and Internationally. Printed and online editions plus daily E-newsletters provide an extensive readership profile.",
        "level": 7,
        "website": "https://www.ttnworldwide.com/",
        "eventId": 437114,
        "created": "2023-01-13T09:06:57.000+0000",
        "visible": true,
        "logo": "https://res.cloudinary.com/bizzaboprod/image/upload/q_auto,f_auto,c_scale,c_crop,g_custom/v1673600813/pnngd3ahaxiwhaopkowr",
        "name": "Travel & Tourism News (TTN) Middle East",
        "id": 433989,
        "type": "SPONSOR"
    }
]
const LEGACY_PARTNER_CATEGORIES = [
    {
        "id": "72268",
        "sponsorshipLevel": 1,
        "sponsorshipType": "SPONSOR",
        "heading": "Host sponsors",
        "size": "lg",
        "__typename": "bizzaboSponsorCategories_BlockType"
    },
    {
        "id": "104520",
        "sponsorshipLevel": 11,
        "sponsorshipType": "SPONSOR",
        "heading": "Enablement Partner",
        "size": "lg",
        "__typename": "bizzaboSponsorCategories_BlockType"
    },
    {
        "id": "72270",
        "sponsorshipLevel": 3,
        "sponsorshipType": "SPONSOR",
        "heading": "Platinum sponsor",
        "size": "md",
        "__typename": "bizzaboSponsorCategories_BlockType"
    },
    {
        "id": "111170",
        "sponsorshipLevel": 14,
        "sponsorshipType": "SPONSOR",
        "heading": "Government Sponsor",
        "size": "md",
        "__typename": "bizzaboSponsorCategories_BlockType"
    },
    {
        "id": "85811",
        "sponsorshipLevel": 2,
        "sponsorshipType": "SPONSOR",
        "heading": "Emerald sponsors",
        "size": "md",
        "__typename": "bizzaboSponsorCategories_BlockType"
    },
    {
        "id": "72271",
        "sponsorshipLevel": 4,
        "sponsorshipType": "SPONSOR",
        "heading": "Gold sponsors",
        "size": "md",
        "__typename": "bizzaboSponsorCategories_BlockType"
    },
    {
        "id": "72272",
        "sponsorshipLevel": 5,
        "sponsorshipType": "SPONSOR",
        "heading": "Silver sponsors",
        "size": "md",
        "__typename": "bizzaboSponsorCategories_BlockType"
    },
    {
        "id": "88087",
        "sponsorshipLevel": 10,
        "sponsorshipType": "SPONSOR",
        "heading": "Supporter",
        "size": "md",
        "__typename": "bizzaboSponsorCategories_BlockType"
    },
    {
        "id": "80639",
        "sponsorshipLevel": 7,
        "sponsorshipType": "SPONSOR",
        "heading": "Media Partners",
        "size": "md",
        "__typename": "bizzaboSponsorCategories_BlockType"
    }
]

function Partners() {

	return (
		<div className='bg-white'>

			<Header 
				compact 
				shim
				path={'/partners'}
				theme={{ 
					primary: 'white', 
					secondary: 'var(--secondary)', 
					text: 'white',
					buttons: 'var(--primary)',
					buttonText: 'white',
					headerBg: 'linear-gradient(90deg, #7A4AFF 0%, var(--secondary) 73%)',
					overlayBg: 'var(--primary)',
				}}
			/>

			<section className="block bg-default">

				<div className='container center formatted'>
					<p className='fs-1 fw-600 c-primary'>2023 Sponsors & Partners</p>
				</div>
			

				<div className='container'>
					{
						LEGACY_PARTNER_CATEGORIES &&
						LEGACY_PARTNER_CATEGORIES.map( cat => {
							return (
								<div key={cat.id} className={`mb-lg`}>
									{ GetLegacyBizzaboPartners ( 
										LEGACY_PARTNERS, 
										cat.sponsorshipLevel, 
										cat.sponsorshipType, 
										cat.heading, 
										cat.size,
										'sa'
									)}
								</div>
							)
						})
					}
				</div>

			</section>

			<Footer />
		
		</div>
	)
}

Partners.theme = 'sa-2023'



export function getStaticProps() {

	return {
		props: { 
			partnerData: LEGACY_PARTNERS 
		}
	}
}

export default Partners


