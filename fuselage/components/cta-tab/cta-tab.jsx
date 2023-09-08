import { WhatsappIcon } from '../../icons/whatsapp'

import CSS from './cta-tab.module.css'

export const CtaTab = ({ iconColor, buttonColor }) => {
    return (
        <div className={CSS.layout}>

            <a href="https://chat.whatsapp.com/KdBXNsCbO6gH5s3w2wkZ55" target='_blank' className={CSS.button} style={{ backgroundColor: buttonColor ? buttonColor : `var(--accent)`}}>
                <WhatsappIcon color={ iconColor ? iconColor : `var(--primary)`} />
                <span className={CSS.label}>
                    <span className={`${CSS.labelContentWrapper} fw-600`}>
                        FHS WhatsApp Community
                    </span>
                </span>
            </a>

        </div>
    )
}