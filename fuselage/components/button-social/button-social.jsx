import React from 'react'
import PropTypes from 'prop-types'

import CSS from './button-social.module.css'

import EmailIcon from './img/social-email.svg'
import TwitterIcon from './img/social-twitter.svg'
import FacebookIcon from './img/social-facebook.svg'
import LinkedinIcon from './img/social-linkedin.svg'
import YoutubeIcon from './img/social-youtube.svg'
import FlickrIcon from './img/social-flickr.svg'
import InstagramIcon from './img/social-instagram.svg'

export const ButtonSocial = ({ icon, url, alt, decal }) => {

    const handleIcon = () => {
        switch ( icon ) {
            case 'twitter' : return <TwitterIcon className={CSS.icon} alt={alt}/>
            break

            case 'linkedin' : return <LinkedinIcon className={CSS.icon} alt={alt}/>
            break
            
            case 'facebook' : return <FacebookIcon className={CSS.icon} alt={alt}/>
            break
            
            case 'youtube' : return <YoutubeIcon className={CSS.icon} alt={alt}/>
            break
            
            case 'flickr' : return <FlickrIcon className={CSS.icon} alt={alt}/>
            break
            
            case 'instagram' : return <InstagramIcon className={CSS.icon} alt={alt}/>
            break
            
            case 'email' : return <EmailIcon className={CSS.icon} alt={alt}/>
            break

            default: return <EmailIcon className={CSS.icon} alt={alt}/>
        }
    }

    return <a href={url} className={`${CSS.button} ${decal}`} target="_blank" rel="noreferrer" aria-label="Social platform">{handleIcon()}</a>
    
}

ButtonSocial.propTypes = {
    url: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    decal: PropTypes.string,
    alt: PropTypes.string
}
  
ButtonSocial.defaultProps = {
    url: '#',
    icon: 'email',
    decal: 'bg-primary',
    alt: 'social button'
}