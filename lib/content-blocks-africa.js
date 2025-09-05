import React, { Fragment } from 'react'

import Image from 'next/image'

import _ from 'lodash'

import { PageHeader } from '../fuselage-africa/blocks/page-header/page-header'
import { Text } from '../fuselage-africa/blocks/text/text'
import { Cards, Card } from '../fuselage-africa/blocks/cards/cards'
import { FlipFlop } from '../fuselage-africa/blocks/flipflop/flipflop'
import { Floaters, Floater } from '../fuselage-africa/blocks/floater/floater'
import { Billboard } from '../fuselage-africa/blocks/billboard/billboard'
import { BillboardSlider } from "../fuselage-africa/blocks/billboard-slider/billboard-slider"
import { SpeakerCarousel } from '../fuselage-africa/blocks/speaker-carousel/speaker-carousel'
import { SpeakerCard } from '../fuselage-africa/components/speaker-card/speaker-card'
import { SwiperSlide } from 'swiper/react'
import { ImpactFigures, ImpactFigure } from '../fuselage-africa/blocks/impact-figures/impact-figures'
import { Video } from '../fuselage-africa/blocks/video/video'
import { Form } from '../fuselage-africa/blocks/form/form'
import { SpeakerGrid } from '../fuselage-africa/layout/speaker-grid/speaker-grid'
import { OffsetCallout } from '../fuselage-africa/blocks/offset-callout/offset-callout'
import { SectionDivider } from '../fuselage-africa/blocks/section-divider/section-divider'
import { LogoGrid } from '../fuselage-africa/layout/logo-grid/logo-grid'
import { SliderVideo } from '../fuselage-africa/components/slider-video/slider-video'
import { QuoteSlider } from '../fuselage-africa/blocks/quote-slider/quote-slider'

import { MontageGrid, MontageImage, MontageQuote } from '../fuselage-africa/layout/montage/montage'
import { Quote } from '../fuselage-africa/components/quote/quote'

import partnerCSS from '../css/app/partners.module.css'


export const handleContentBlocks = ( blocks ) => {

    if ( !blocks ) return

    console.log("content-blocks detected: ", blocks)

    const blocksHandle = 'ahif'

    return (
        <Fragment>
            {blocks.map( block => {

                // page header
                if ( block.__typename === `${blocksHandle}ContentBlocks_pageHeader_BlockType` ) {

                    let theme
                    block.theme === 'default' ? theme = `bg-primary` : theme = `bg-${block.theme}`

                    return (
                        <PageHeader key={block.id} theme={theme}>
                            <div className="formatted">
                                <div dangerouslySetInnerHTML={{__html: block.body }} />
                            </div>
                        </PageHeader>
                    )
                }

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
                    if ( !block.images.length ) return
                    return (
                        <Fragment key={block.id}>
                            { block.anchorId && <div id={block.anchorId} className={`scrollShim`}></div> }
                            <section className={`block bg-${block.theme}`}>
                                <div className={`container columns-${block.columns} gap-${block.gap} maxw-${block.maxWidth}`} style={{ position: `relative`}}>
                                    {
                                        block.images.map( image => <Image key={image.url} src={image.url} width={image.width} height={image.height} layout={`responsive`} />)
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
                                    <FlipFlop key={flipFlop.id} theme={block.theme} hero={flipFlop.hero[0]} flipped={block.flipStartOrder}>
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
                            <Floaters theme={block.theme} maxWidth={block.maxWidth} flipped={block.flipStartOrder} anchorId={block.anchorId}>
                                {block.floaters.map( floater => {
                                    return (
                                        <Floater key={floater.id} hero={floater.hero[0]} heroSize={floater.heroSize} theme={block.theme}>
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
                                decal={'bg-default'}
                                ctaLink={block.ctaButton[0].buttonLink}
                                ctaLabel={block.ctaButton[0].buttonLabel}
                                anchorId={block.anchorId}
                            >
                                {
                                    block.profiles.map( profile => (
                                        <SpeakerCard
                                            key={profile.id}
                                            url={`/speakers/profile/${profile.slug}`}
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

                // offset callout
                if ( block.__typename === `${blocksHandle}ContentBlocks_offsetCallout_BlockType` ) {
                    
                    let theme
                    block.theme === 'default' ? theme = `bg-white` : theme = `bg-${block.theme}`

                    return (
                        <Fragment key={block.id}>
                            { block.anchorId && <div id={block.anchorId} className={`scrollShim`}></div> }
                            <OffsetCallout 
                                hero={block.hero && block.hero[0]} 
                                followsHeader={ block.followsPageHeader ? true : false } 
                                theme={theme} 
                                contentGraphic={ block.graphicOverlayText && block.graphicOverlayText[0] }
                                imageGraphic={ block.graphicOverlayImage && block.graphicOverlayImage[0] }
                            >
                                <div className="formatted">
                                    <div dangerouslySetInnerHTML={{__html: block.body }} />
                                </div>
                            </OffsetCallout>

                        </Fragment>
                    )
                }

                // divider heading
                if ( block.__typename === `${blocksHandle}ContentBlocks_dividerHeading_BlockType` ) {
                    return (
                        <Fragment key={block.id}>
                            { block.anchorId && <div id={block.anchorId} className={`scrollShim`}></div> }
                            <SectionDivider heading={block.heading} theme={`bg-${block.theme}`} />
                        </Fragment>
                    )
                }

                // partner groups
                if ( block.__typename === `${blocksHandle}ContentBlocks_partnerGroups_BlockType` ) {

                    let logoSize

                    return (
                        <Fragment key={block.id}>
                            <section className='block bg-default'>
                                <div className='container center columns-1 gap-lg'>
                                    {
                                        block.partnerGroups.length &&
                                        block.partnerGroups.map( group => (
                                            <div key={group.id}>
                                                <p className="fs-6 fw-600 caps c-primary mb-sm">{ group.title }</p>
                                                <LogoGrid>
                                                    {
                                                        group.partners.length &&
                                                        group.partners.map( partner => {

                                                            const handleLogoSize = ( size ) => {

                                                                if ( !size ) return

                                                                switch (size) {
                                                                    case 'lg':
                                                                        return partnerCSS.lg
                                                                        break
                                                                    
                                                                    case 'md':
                                                                        return partnerCSS.md
                                                                        break
                                                                    
                                                                    case 'sm':
                                                                        return partnerCSS.sm
                                                                        break
                                                                
                                                                    default:
                                                                        break
                                                                }
                                                            }

                                                            if ( !partner.partnerLogo.length ) return
                                                            return (
                                                                <a key={partner.id} href={`/partners/${partner.slug}`} rel="noreferrer" aria-label="Partner logo">
                                                                    <div className={`${partnerCSS.logo} ${ handleLogoSize(group.size) } `}>
                                                                        <Image 
                                                                            src={partner.partnerLogo[0].url} 
                                                                            layout='fill'
                                                                            alt=""
                                                                        />
                                                                    </div>
                                                                </a>
                                                            )
                                                        })
                                                    }
                                                </LogoGrid>
                                            </div>
                                        ))

                                    }
                                </div>
                            </section>
                        </Fragment>
                    )
                }

                // quote slider
                if ( block.__typename === `${blocksHandle}ContentBlocks_testimonials_BlockType` ) {

                    // console.log('quotes:', block.testimonials)

                    return (
                        <Fragment key={block.id}>
                            <QuoteSlider heading={block.heading ? block.heading : 'Testimonials'} testimonials={block.testimonials} />
                        </Fragment>
                    )
                }




                
                // CUSTOM: slider + video
                if ( block.__typename === `${blocksHandle}ContentBlocks_customSliderVideo_BlockType` ) {

                    return (
                        <Fragment key={block.id}>
                            <SliderVideo 
                                heading={block.heading} 
                                slides={block.textSlides} 
                                videoUrl={block.video} 
                            />
                        </Fragment>
                    )
                }
                
                // CUSTOM: quote + image montage
                if ( block.__typename === `${blocksHandle}ContentBlocks_customQuoteImageGrid_BlockType` ) {

                    return (
                        <Fragment key={block.id}>
                            <MontageGrid>

                                <section>
                                    <MontageImage src={'/assets/img/temp/montage-1.jpg'} width={850} height={495} />
                                    
                                    <MontageQuote background={`bg-sand`}>
                                        <Quote 
                                            avatar={null}
                                            quote={`AHIF enables all the market players to gather in one place, to network and come up with new ideas, have panels of experts who try to help each other as well."`} 
                                            name={'David Damiba'}
                                            title={'Managing Partner | Chief Investment Officer, Kasada Capital Management'}
                                            decal={`fs-3 lh-1 maxw-50 lh-2`}
                                        />
                                    </MontageQuote>


                                    <MontageImage src={'/assets/img/temp/montage-2.jpg'} width={788} height={428} />
                                    
                                    <MontageQuote>
                                        <Quote 
                                            avatar={null}
                                            quote={`The quality of the people that you interact with, the knowledge that they have, the experience, world view, regional view are extremely enriching. I'm looking forward to the next edition. For me, the quality of the panels is absolutely incredible."`}
                                            name={`Jerry Mabena`}
                                            title={'Chief Executive Officer, Motsamayi Tourism Group'}
                                            decal={`fs-3 lh-1 maxw-50 lh-2`}
                                        />
                                    </MontageQuote>
                                </section>

                                <section>
                                    <MontageQuote>
                                        <Quote 
                                            avatar={null}
                                            quote={`It's a fantastic forum that brings in so many different people from different walks of life, and just now I don't even know how many contacts I've made. Anybody out there should consider attending these meetings, for their own good and I don't think there are many meetings as good as this in the world."`} 
                                            name={'Amos Wekesa'}
                                            title={'Founder and Chief Executive Officer, Great Lakes Safari'}
                                            decal={`fs-3 lh-1 maxw-50 lh-2`}
                                        />
                                    </MontageQuote>

                                    
                                    <MontageImage src={'/assets/img/temp/montage-3.jpg'} width={1378} height={919} />

                                    <MontageQuote background={`bg-sand`}>
                                        <Quote 
                                            avatar={null}
                                            quote={`It's great to have events like this, that bring people together. For us these are important events in terms of opportunities in Africa."`} 
                                            name={'Artur Gerber'}
                                            title={'Managing Director, TUI Blue Hotels'}
                                            decal={`fs-3 lh-1 maxw-50 lh-2`}
                                        />
                                    </MontageQuote>
                                </section>

                                </MontageGrid>
                        </Fragment>
                    )
                }


                

                // SWAPCARD: speakers
                if ( block.__typename === `${blocksHandle}ContentBlocks_swapcardSpeakers_BlockType` ) {

                    // let orderedSpeakers = _.orderBy( swapcardSpeakers, [ speaker => speaker.lastName.toLowerCase()], ['asc'])
                    
                    return (
                        <Fragment key={block.id}>
                            <section className={`block ${ block.theme ? `bg-${block.theme}` : `bg-default`}`}>
                                <div className='container'>

                                    <SpeakerGrid decal="gap-sm">
                                        {
                                            swapcardSpeakers?.map( speaker => {
                                                if ( speaker.type && speaker.type === 'Speaker' || speaker.type === 'Moderator' ) return (
                                                    <SpeakerCard
                                                        key={speaker.id}
                                                        url={`/speakers/${speaker.id}`}
                                                        photoUrl={speaker.photoUrl}
                                                        fullName={`${speaker.firstName} ${speaker.lastName}`}
                                                        jobTitle={speaker.jobTitle}
                                                        company={speaker.organization}
                                                    />
                                                )
                                            })
                                        }
                                    </SpeakerGrid>
                                    
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