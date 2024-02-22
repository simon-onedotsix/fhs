import PropTypes from 'prop-types'

import { Brand } from '../../components/brand/brand'

import CSS from './hero-header.module.css'

export const HeroHeader = ({ fixed, inverse, dark, href }) => {
    return (
        <header className={`${CSS.header} ${ dark ? CSS.dark : '' } ${fixed ? CSS.fixed : ''} block`}>
            <div className='container center'>
                <div className={CSS.layout} >
                    <Brand href={ href } inverse={inverse} />
                </div>
            </div>
        </header>
    )
}

HeroHeader.propTypes = {
    fixed: PropTypes.bool,
    inverse: PropTypes.bool,
    dark: PropTypes.bool,
    href: PropTypes.string
}

HeroHeader.defaultProps = {
    fixed: false,
    inverse: false,
    dark: false,
    href: '/'
}