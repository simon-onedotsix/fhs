import Image from 'next/image'

import { Fade, Slide, Pop } from '../../animation/animation'

import CSS from './quotation.module.css'

export const Quotation = ({ avatarUrl, quote, fullName, title }) => {
    return (

        <Pop>
            <div className={CSS.layout}>
                <aside>
                    <Pop delay={.1}>
                        <div className={CSS.avatarContainer}>
                            <Image src={ avatarUrl } layout={'fill'} />
                        </div>
                    </Pop>
                </aside>
                <main>
                    <OpenQuote color={`var(--primary)`}/>
                    <Slide>
                        <p className='fs-4 lh-2 quote'>{ quote }&nbsp;<CloseQuote color={`var(--primary)`}/></p>
                        
                    </Slide>
                    <Pop delay={.1}>
                        <p className='fw-600 mt-xs'>{ fullName }</p>
                        <p className='fw-300'>{ title }</p>
                    </Pop>
                </main>
            </div>
        </Pop>

    )
}

const OpenQuote = ({ color, height }) => {
    return (
        <span style={{ display: 'inline-block ', aspectRatio: 110/68, height: height ? height : '2rem' }}>
            <svg width="100%" height="100%" viewBox="0 0 110 68" style={{ fillRule:`evenodd`, clipRule:`evenodd`, strokeLinejoin:`round`, strokeMiterlimit:2 }}>
                <g transform="matrix(1,0,0,1,-1903,-271)">
                    <g transform="matrix(1,0,0,1,-0.20768,0)">
                        <g id="quote-opening" transform="matrix(17.2503,0,0,17.2503,203.711,-53264.8)">
                            <g transform="matrix(16,0,0,16,97.8599,3113.78)">
                                <path d="M0.122,-0.405C0.138,-0.41 0.15,-0.419 0.159,-0.434L0.226,-0.55C0.231,-0.559 0.234,-0.57 0.234,-0.581C0.234,-0.588 0.233,-0.593 0.232,-0.597C0.227,-0.612 0.218,-0.624 0.203,-0.633C0.193,-0.639 0.182,-0.642 0.171,-0.642C0.166,-0.642 0.161,-0.641 0.157,-0.64C0.14,-0.635 0.128,-0.626 0.119,-0.611L0.052,-0.496C0.047,-0.486 0.044,-0.475 0.044,-0.464C0.044,-0.458 0.045,-0.453 0.046,-0.448C0.05,-0.432 0.06,-0.42 0.075,-0.411C0.084,-0.405 0.094,-0.402 0.105,-0.402C0.11,-0.402 0.115,-0.403 0.122,-0.405ZM0.325,-0.405C0.341,-0.409 0.353,-0.419 0.362,-0.434L0.429,-0.55C0.434,-0.559 0.437,-0.57 0.437,-0.581C0.437,-0.588 0.437,-0.593 0.436,-0.597C0.431,-0.612 0.421,-0.624 0.406,-0.633C0.397,-0.639 0.386,-0.642 0.375,-0.642C0.369,-0.642 0.364,-0.641 0.36,-0.64C0.343,-0.635 0.331,-0.626 0.322,-0.611L0.255,-0.496C0.25,-0.486 0.248,-0.475 0.248,-0.464C0.248,-0.458 0.249,-0.453 0.25,-0.448C0.253,-0.432 0.263,-0.42 0.278,-0.411C0.288,-0.405 0.298,-0.402 0.309,-0.402C0.313,-0.402 0.318,-0.403 0.325,-0.405Z" style={{ fill: color ? color : 'var(--accent)', fillRule:`nonzero` }}/>
                            </g>
                        </g>
                    </g>
                </g>
            </svg>
        </span>
    )
}

const CloseQuote = ({ color, height }) => {
    return (
        <span style={{ display: 'inline-block ', aspectRatio: 1/1.5, height: height ? height : '1.5rem' }}>
            <svg width="100%" height="100%" viewBox="0 0 109 68" style={{ fillRule:`evenodd`, clipRule:`evenodd`, strokeLinejoin:`round`, strokeMiterlimit:2 }}>
                <g transform="matrix(1,0,0,1,-2055,-271)">
                    <g transform="matrix(1,0,0,1,-0.20768,0)">
                        <g id="quote-closing" transform="matrix(-17.2503,0,0,17.2503,3864.21,-53264.8)">
                            <g transform="matrix(16,0,0,16,97.8599,3113.78)">
                                <path d="M0.122,-0.405C0.138,-0.41 0.15,-0.419 0.159,-0.434L0.226,-0.55C0.231,-0.559 0.234,-0.57 0.234,-0.581C0.234,-0.588 0.233,-0.593 0.232,-0.597C0.227,-0.612 0.218,-0.624 0.203,-0.633C0.193,-0.639 0.182,-0.642 0.171,-0.642C0.166,-0.642 0.161,-0.641 0.157,-0.64C0.14,-0.635 0.128,-0.626 0.119,-0.611L0.052,-0.496C0.047,-0.486 0.044,-0.475 0.044,-0.464C0.044,-0.458 0.045,-0.453 0.046,-0.448C0.05,-0.432 0.06,-0.42 0.075,-0.411C0.084,-0.405 0.094,-0.402 0.105,-0.402C0.11,-0.402 0.115,-0.403 0.122,-0.405ZM0.325,-0.405C0.341,-0.409 0.353,-0.419 0.362,-0.434L0.429,-0.55C0.434,-0.559 0.437,-0.57 0.437,-0.581C0.437,-0.588 0.437,-0.593 0.436,-0.597C0.431,-0.612 0.421,-0.624 0.406,-0.633C0.397,-0.639 0.386,-0.642 0.375,-0.642C0.369,-0.642 0.364,-0.641 0.36,-0.64C0.343,-0.635 0.331,-0.626 0.322,-0.611L0.255,-0.496C0.25,-0.486 0.248,-0.475 0.248,-0.464C0.248,-0.458 0.249,-0.453 0.25,-0.448C0.253,-0.432 0.263,-0.42 0.278,-0.411C0.288,-0.405 0.298,-0.402 0.309,-0.402C0.313,-0.402 0.318,-0.403 0.325,-0.405Z" style={{ fill: color ? color : 'var(--accent)', fillRule:`nonzero` }}/>
                            </g>
                        </g>
                    </g>
                </g>
            </svg>
        </span>
    )
}