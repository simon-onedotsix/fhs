import React, { Fragment } from 'react'

import Image from 'next/image'
import { useRouter } from 'next/router'

import { Text } from '../fuselage/blocks/text/text'
import { Cards, Card } from '../fuselage/blocks/cards/cards'
import { FlipFlop } from '../fuselage/blocks/flipflop/flipflop'
import { Floaters, Floater } from '../fuselage/blocks/floater/floater'
import { Billboard } from '../fuselage/blocks/billboard/billboard'
import { BillboardSlider } from "../fuselage/blocks/billboard-slider/billboard-slider"
import { SpeakerCarousel } from '../fuselage/blocks/speaker-carousel/speaker-carousel'
import { SpeakerCard } from '../fuselage/components/speaker-card/speaker-card'
import { SwiperSlide } from 'swiper/react'
import { ImpactFigures, ImpactFigure } from '../fuselage/blocks/impact-figures/impact-figures'
import { Video } from '../fuselage/blocks/video/video'
import { Form } from '../fuselage/blocks/form/form'
import { PartnerLogoGrid, PartnerLogo } from '../fuselage/components/partner-logo/partner-logo'

import { GetBizzaboPartners } from './bizzabo-partners'

export const handleContentBlocks = ( blocks, bizzaboSpeakers, bizzaboPartners, siteLocaleSlug ) => {

    if ( !blocks ) return

    // console.log("content-blocks detected: ", blocks)

    // const router = useRouter()
    // console.log('ROUTER:', router)

    const blocksHandle = process.env.NEXT_PUBLIC_CONTENT_BLOCKS_HANDLE

    return (
        <Fragment>
            {blocks.map( block => {

                // text blocks
                if ( block.__typename === `${blocksHandle}ContentBlocks_text_BlockType` ) {
                    return (
                        <Fragment key={block.id}>
                            { block.anchorId && <div id={block.anchorId} className={`scrollShim`}></div> }
                            <Text
                                theme={block.theme} 
                                gap={'md'} 
                                columns={block.columns} 
                                maxWidth={block.maxWidth}
                                center={block.center}
                            >
                                {block.textBlocks.map( (textBlock, index) => {
                                    return <div key={index} dangerouslySetInnerHTML={{__html: textBlock.body }} />
                                })}
                            </Text>
                        </Fragment>
                    )
                }

                // cards
                if ( block.__typename === `${blocksHandle}ContentBlocks_cards_BlockType` ) {

                    if ( !block.cards ) return 

                    return (
                        <Fragment key={block.id}>
                            { block.anchorId && <div id={block.anchorId} className={`scrollShim`}></div> }
                            <Cards
                                theme={block.theme} 
                                gap={'md'} 
                                columns={block.columns} 
                                maxWidth={block.maxWidth}
                                center={block.center}
                            >

                                {
                                    block.cards.map( card => {
                                        return (
                                            <Card 
                                                key={card.id}
                                                hero={card.hero} 
                                                heroRatio={block.aspectRatio} 
                                                heroLayout={block.layout} 
                                                heroWidth={block.width}
                                                body={card.body} 
                                            />
                                        )
                                    })    
                                }

                            </Cards>
                        </Fragment>
                    )
                }

                // images
                if ( block.__typename === `${blocksHandle}ContentBlocks_images_BlockType` ) {
                    if ( !block.images ) return
                    return (
                        <Fragment key={block.id}>
                            { block.anchorId && <div id={block.anchorId} className={`scrollShim`}></div> }
                            <section className={`block bg-${block.theme}`}>
                                <div className={`container columns-${block.columns} gap-${block.gap} maxw-${block.maxWidth}`} style={{ position: `relative`, alignItems:`center`}}>
                                    {
                                        block.images.map( image => (
                                            <div key={image.url} >
                                                <Image 
                                                    src={image.url} 
                                                    width={image.width} 
                                                    height={image.height} 
                                                    layout={`responsive`}
                                                    alt=''
                                                />
                                            </div>
                                        ))
                                    }
                                </div>
                            </section>
                        </Fragment>
                    )
                }

                // flip-flops
                if ( block.__typename === `${blocksHandle}ContentBlocks_flipFlops_BlockType` ) {
                    return (
                        <Fragment key={block.id}>
                            { block.anchorId && <div id={block.anchorId} className={`scrollShim`}></div> }
                            {block.flipFlops.map( flipFlop => {
                                return (
                                    <FlipFlop key={flipFlop.id} theme={block.theme} hero={flipFlop.hero[0].url} caption={flipFlop.caption} flipped={block.flipStartOrder}>
                                        <div key={flipFlop.id} dangerouslySetInnerHTML={{__html: flipFlop.body }} />
                                    </FlipFlop>
                                )
                            })}
                        </Fragment>
                    )
                }

                // floaters
                if ( block.__typename === `${blocksHandle}ContentBlocks_floaters_BlockType` ) {
                    return (
                        <Fragment key={block.id}>
                            { block.anchorId && <div id={block.anchorId} className={`scrollShim`}></div> }
                            <Floaters theme={block.theme} flipped={block.flipStartOrder} anchorId={block.anchorId}>
                                {block.floaters.map( floater => {
                                    return (
                                        <Floater key={floater.id} hero={floater.hero[0]}>
                                            <div dangerouslySetInnerHTML={{__html: floater.body }} />
                                        </Floater>
                                    )
                                })}
                            </Floaters>
                        </Fragment>
                    )
                }

                // billboard
                if ( block.__typename === `${blocksHandle}ContentBlocks_billboard_BlockType` ) {
                    return (
                        <Fragment key={block.id}>
                            { block.anchorId && <div id={block.anchorId} className={`scrollShim`}></div> }
                            <Billboard 
                                hero={block.hero[0]}
                                height={block.height}
                                tint={block.tint}
                                horizontalAlign={block.horizontalAlign}
                                verticalAlign={block.verticalAlign}
                                maxContentWidth={block.maxContentWidth}
                                anchorId={block.anchorId}
                            >
                                <div dangerouslySetInnerHTML={{__html: block.body }} />
                            </Billboard>
                        </Fragment>
                    )
                }

                // billboard slider
                if ( block.__typename === `${blocksHandle}ContentBlocks_billboardSlider_BlockType` ) {
                    return (
                        <Fragment key={block.id}>
                            { block.anchorId && <div id={block.anchorId} className={`scrollShim`}></div> }
                            <BillboardSlider anchorId={block.anchorId}>
                                {block.slides.map( slide => {
                                    return (
                                        <SwiperSlide key={slide.id} >
                                            <Billboard 
                                                hero={slide.hero[0]}
                                                height={block.height}
                                                tint={block.tint}
                                                horizontalAlign={block.horizontalAlign}
                                                verticalAlign={block.verticalAlign}
                                                maxContentWidth={block.maxContentWidth}
                                            >
                                                <div dangerouslySetInnerHTML={{__html: slide.body }} />
                                            </Billboard>
                                        </SwiperSlide>
                                    )
                                })}
                            </BillboardSlider>
                        </Fragment>
                    )
                }

                // impact figures
                if ( block.__typename === `${blocksHandle}ContentBlocks_impactFigures_BlockType` ) {
                    return (
                        <Fragment key={block.id}>
                            { block.anchorId && <div id={block.anchorId} className={`scrollShim`}></div> }
                            <ImpactFigures theme={block.theme} anchorId={block.anchorId}>
                                {block.impactFigures.map( impact => {
                                    return (
                                        <ImpactFigure key={impact.id} value={impact.figure} label={impact.label} theme={block.theme} />
                                    )
                                })}
                            </ImpactFigures>
                        </Fragment>
                    )
                }
                
                // video
                if ( block.__typename === `${blocksHandle}ContentBlocks_video_BlockType` ) {
                    return (
                        <Fragment key={block.id}>
                            { block.anchorId && <div id={block.anchorId} className={`scrollShim`}></div> }
                            <Video theme={block.theme} maxWidth={block.maxWidth} videoUrl={block.videoShareUrl} />
                        </Fragment>
                    )
                }
                
                // form
                if ( block.__typename === `${blocksHandle}ContentBlocks_hubspotForm_BlockType` ) {
                    return (
                        <Fragment key={block.id}>
                            { block.anchorId && <div id={block.anchorId} className={`scrollShim`}></div> }
                            <Form 
                                theme={block.theme} 
                                maxWidth={block.maxWidth}
                                portalId={block.hubspotForm[0].portalId}
                                formId={block.hubspotForm[0].formId}
                                anchorId={block.anchorId}
                            >
                                {block.body}
                            </Form>
                        </Fragment>
                    )
                }

                // profile carousel
                if ( block.__typename === `${blocksHandle}ContentBlocks_profilesCarousel_BlockType` ) {
                    return (
                        <Fragment key={block.id}>
                            { block.anchorId && <div id={block.anchorId} className={`scrollShim`}></div> }
                            <SpeakerCarousel 
                                heading={block.heading} 
                                text={block.text}
                                decal={'bg-theme'}
                                ctaLink={block.ctaButton[0].buttonLink}
                                ctaLabel={block.ctaButton[0].buttonLabel}
                                anchorId={block.anchorId}
                            >
                                {
                                    block.profiles.map( profile => (
                                        <SpeakerCard
                                            key={profile.id}
                                            url={`${siteLocaleSlug && `/${siteLocaleSlug}`}/speakers/profile/${profile.slug}`}
                                            photoUrl={profile.avatar[0] ? profile.avatar[0].url : null }
                                            fullName={profile.title}
                                            jobTitle={profile.positions[0].jobTitle}
                                            company={profile.positions[0].organisation}
                                        />
                                    ))
                                }
                            </SpeakerCarousel>
                        </Fragment>
                    )
                }

                // partners
                if ( block.__typename === `${blocksHandle}ContentBlocks_partners_BlockType` ) {
                    return (
                        <Fragment key={block.id}>
                            { block.anchorId && <div id={block.anchorId} className={`scrollShim`}></div> }
                            <section className='block bg-default'>

                                {
                                    block.heading &&
                                    <div className='container center formatted'>
                                        <p className='fs-2 fw-600 c-primary'>{ block.heading }</p>
                                    </div>
                                }
                               
                                {
                                    block.body &&
                                    <div className='container center formatted'>
                                        <div dangerouslySetInnerHTML={{__html: block.body }} />
                                    </div>
                                }

                                <div className='container'>
                                    <PartnerLogoGrid>
                                        {
                                            block.partners &&
                                            block.partners.map( partner => {
                                                if ( !partner.partnerLogo[0] ) return

                                                return (
                                                    <a key={partner.id} href={partner.website} target={`_blank`}>
                                                        <PartnerLogo 
                                                            hero={{ 
                                                                url: partner.partnerLogo[0].url,
                                                                width: partner.partnerLogo[0].width,
                                                                height: partner.partnerLogo[0].height
                                                            }} 
                                                        />
                                                    </a>
                                                )
                                            })
                                        }
                                    </PartnerLogoGrid>
                                </div>

                            </section>
                        </Fragment>
                    )
                }



                // bizzabo passes 
                if ( block.__typename === `${blocksHandle}ContentBlocks_bizzaboPasses_BlockType` ) {
                    return (
                        <section key={block.id} className='block bg-theme'>
                            <div className='container'>
                                <p className='fs-4 fw-600'>Bizzabo Passes</p>
                            </div>
                            <div>
                                {block.bizzaboPasses.map(pass => <p key={pass.id}>{pass.passName}</p>)}
                            </div>
                        </section>
                    )
                }

                // bizzabo partners
                if ( block.__typename === `${blocksHandle}ContentBlocks_bizzaboPartners_BlockType` ) {

                    console.log('BZ partner content-block:', block.bizzaboSponsorCategories)

                    return (
                        <Fragment key={block.id}>
                            <section className="block bg-default">

                                {
                                    block.heading &&
                                    <div className='container center formatted'>
                                        <p className='fs-2 fw-600 c-primary'>{ block.heading }</p>
                                        <div dangerouslySetInnerHTML={{__html: block.body }} />
                                    </div>
                                }

                                <div className='container'>
                                    {
                                        block.bizzaboSponsorCategories &&
                                        block.bizzaboSponsorCategories.map( cat => {
                                            return (
                                                <div key={cat.id} className={`mb-lg`}>
                                                    {GetBizzaboPartners ( 
                                                        bizzaboPartners, 
                                                        cat.sponsorshipLevel, 
                                                        cat.sponsorshipType, 
                                                        cat.heading, 
                                                        cat.size,
                                                        siteLocaleSlug
                                                    )}
                                                </div>
                                            )
                                        })
                                    }
                                </div>

                            </section>
                        </Fragment>
                    )
                }
                


            })}
        </Fragment>
    )


}

export default handleContentBlocks