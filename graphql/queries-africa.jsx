const blocksHandle = 'ahif'

export const QueryText = `
    ... on ${blocksHandle}ContentBlocks_text_BlockType {
        id
        theme
        columns
        maxWidth
        center
        textBlocks {
            ... on textBlocks_BlockType {
                id
                body
            }
        }
    }
`

export const QueryFlipFlops = `
    ... on ${blocksHandle}ContentBlocks_flipFlops_BlockType {
        id
        theme
        flipStartOrder
        flipFlops {
            ... on flipFlops_BlockType {
                id
                hero {
                    url
                    width
                    height
                }
                body
            }
        }
    }
`

export const QueryFloaters = `
    ... on ${blocksHandle}ContentBlocks_floaters_BlockType {
        id
        theme
        flipStartOrder
        floaters {
            ... on floaters_BlockType {
                id
                body
                hero {
                    id
                    url
                    width
                    height
                }
                heroSize
            }
        }
    }
`

export const QueryBillboards = `
    ... on ${blocksHandle}ContentBlocks_billboard_BlockType {
        id
        height
        tint
        verticalAlign
        horizontalAlign
        maxContentWidth
        hero {
            id
            url
        }
        body
    }
`

export const QueryBillboardSliders = `
    ... on ${blocksHandle}ContentBlocks_billboardSlider_BlockType {
        id
        height
        tint
        verticalAlign
        horizontalAlign
        maxContentWidth
        slides {
            ... on slides_BlockType {
                id
                hero {
                    id
                    url
                }
                body
            }
        }
    }
`

export const QueryImpactFigures = `
    ... on ${blocksHandle}ContentBlocks_impactFigures_BlockType {
        id
        theme
        impactFigures {
            ... on impactFigures_BlockType {
                id
                figure
                label
            }
        }
    }
`

export const QueryVideos = `
    ... on ${blocksHandle}ContentBlocks_video_BlockType {
        id
        theme
        maxWidth
        videoShareUrl
    }
`

export const QueryForm = `
    ... on ${blocksHandle}ContentBlocks_hubspotForm_BlockType {
        id
        theme
        body
        maxWidth
        hubspotForm {
            ... on hubspotForm_BlockType {
                id
                formId
                portalId
            }
        }
    }
`

export const QueryProfileCarousel = `
    ... on ${blocksHandle}ContentBlocks_profilesCarousel_BlockType {
        id
        theme
        heading
        text
        ctaButton {
            ... on ctaButton_BlockType {
                id
                buttonLabel
                buttonLink
            }
        }
        profiles {
            ... on profiles_profile_Entry {
                id
                title
                slug
                positions {
                    ... on positions_BlockType {
                        jobTitle
                        organisation
                    }
                }
                avatar {
                    height
                    width
                    url
                }
            }
        }
    }
`

export const QuerySEO = `
    seomatic (asArray: true) {
        metaTitleContainer
        metaTagContainer
        metaLinkContainer
        metaScriptContainer
        metaJsonLdContainer
        metaSiteVarsContainer
        frontendTemplateContainer
    }
`


export const QueryImages = `
    ... on ${blocksHandle}ContentBlocks_images_BlockType {
        id
        theme
        columns
        gap
        maxWidth
        anchorId
        images {
            id
            url
            width
            height
        }
    }
`

export const QueryPageHeader = `
    ... on ${blocksHandle}ContentBlocks_pageHeader_BlockType {
        id
        theme
        body
    }
`

export const QueryOffsetCallout = `
    ... on ${blocksHandle}ContentBlocks_offsetCallout_BlockType {
        id
        theme
        followsPageHeader
        body
        hero {
            id
            url
            height
            width
        }
        graphicOverlayText {
            id
            height
            width
            url
        }
        graphicOverlayImage {
            id
            height
            width
            url
        }
    }
`

export const QueryCards = `
    ... on ${blocksHandle}ContentBlocks_cards_BlockType {
        id
        theme
        columns
        maxWidth
        center
        anchorId
        layout
        aspectRatio
        width
        cards {
            ... on cards_card_BlockType {
                id
                body
                hero {
                    url
                    width
                    height
                }
                
            }
        }
    }
`

export const QueryDividers = `
    ... on ${blocksHandle}ContentBlocks_dividerHeading_BlockType {
        id
        theme
        anchorId
        heading
    }
`

export const QueryPartners = `
    ... on ${blocksHandle}ContentBlocks_partnerGroups_BlockType {
        id
        partnerGroups {
            id
            title
            ... on partnerGroups_default_Entry {
                id
                size
                partners {
                    ... on partners_partner_Entry {
                        id
                        slug
                        title
                        website
                        partnerProfile
                        partnerLogo {
                            id
                            url
                            width
                            height
                        }
                    }
                }
            }
        }
    }
`

export const QueryTestimonials = `
    ... on ${blocksHandle}ContentBlocks_testimonials_BlockType {
        id
        heading
        testimonials {
            ... on testimonials_testimonial_BlockType {
                id
                avatar {
                    id
                    url
                    width
                    height
                }
                quote
                fullName
                jobTitle
                organisation
            }
        }
    }
`


// CUSTOM UI units

export const QueryCustomSliderVideo = `
    ... on ${blocksHandle}ContentBlocks_customSliderVideo_BlockType {
        id
        heading
        textSlides {
            ... on textSlides_BlockType {
                id
                slide
            }
        }
        video
    }
`

export const QueryCustomQuoteImageGrid = `
    ... on ${blocksHandle}ContentBlocks_customQuoteImageGrid_BlockType {
        id
    }
`


export const Passes = `
    ... on ${blocksHandle}ContentBlocks_passes_BlockType {
        id
        theme
        currency
        passes {
            ... on passes_pass_BlockType {
                id
                passTitle
                passDescription
                passValue
                availableFrom
                expires
                hyperlink
            }
            ... on passes_sectionHeading_BlockType {
                id
                heading
            }
            ... on passes_specialPass_BlockType {
                id
                specialPassTitle
                specialPassDescription
                specialPassValue
                specialPassAvailableFrom
                specialPassExpires
                specialPassButtonLabel
                specialPassHyperlink
            }
            ... on passes_passNew_BlockType {
                id
                passTitle
                passFlash
                passCallout
                passPriceIncreases
                passDescription
                passCurrency
                passPriceBands {
                    endDate
                    startDate
                    value
                }
                passQuantityRemaining
                passButtonLabel
                passButtonUrl
                passSoldOut
            }
        }
    }
`


