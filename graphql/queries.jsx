const blocksHandle = process.env.NEXT_PUBLIC_CONTENT_BLOCKS_HANDLE

export const QueryText = `
    ... on ${blocksHandle}ContentBlocks_text_BlockType {
        id
        theme
        columns
        maxWidth
        center
        anchorId
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
        anchorId
        flipFlops {
            ... on flipFlops_BlockType {
                id
                hero {
                    url
                    width
                    height
                }
                caption
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
        anchorId
        floaters {
            ... on floaters_BlockType {
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

export const QueryBillboards = `
    ... on ${blocksHandle}ContentBlocks_billboard_BlockType {
        id
        height
        tint
        verticalAlign
        horizontalAlign
        maxContentWidth
        anchorId
        hero {
            id
            url
            width
            height
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
        anchorId
        slides {
            ... on slides_BlockType {
                id
                hero {
                    id
                    url
                    width
                    height
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
        anchorId
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
        anchorId
        videoShareUrl
    }
`

export const QueryForm = `
    ... on ${blocksHandle}ContentBlocks_hubspotForm_BlockType {
        id
        theme
        body
        anchorId
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
        anchorId
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


export const QueryPartners = `
    ... on ${blocksHandle}ContentBlocks_partners_BlockType {
        id
        heading
        body
        anchorId
        partners {
            ... on partners_partner_Entry {
                id
                title
                partnerLogo {
                    id
                    url
                    width
                    height
                }
                website
                partnerProfile
            }
        }
    }
`


export const QueryPartnerGroups = `
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
        }
    }
`


export const QueryTestimonials = `
    ... on ${blocksHandle}ContentBlocks_testimonials_BlockType {
        id
        testimonials {
            ... on testimonials_testimonial_BlockType {
                id
                quote
                fullName
                jobTitle
                organisation
            }
        }
    }
`






// bizzabo related

export const BizzaboPasses = `
    ... on ${blocksHandle}ContentBlocks_bizzaboPasses_BlockType {
        id
        bizzaboPasses {
            ... on bizzaboPasses_BlockType {
                id
                passName
            }
        }
    }
`
export const BizzaboSpeakers = `
    ... on ${blocksHandle}ContentBlocks_bizzaboSpeakers_BlockType {
        id
        theme
    }
`
export const BizzaboPartners = `
    ... on ${blocksHandle}ContentBlocks_bizzaboPartners_BlockType {
        id
        theme
        heading
        body
        bizzaboSponsorCategories {
            ... on bizzaboSponsorCategories_BlockType {
                id
                sponsorshipLevel
                sponsorshipType
                heading
                size
            }
        }
    }
`