import { Pop } from "../../fuselage/animation/animation"

export const FixedBackgroundImage = ({ children, backgroundImageUrl, minHeight = '100vh',  flex, overlay }) => {
    return (
        <div className='block' style={{
            position: `relative`,
            zIndex: 2,
            minHeight,
            backgroundImage: `url(${backgroundImageUrl})`,
            backgroundAttachment: `fixed`,
            backgroundRepeat: `no-repeat`,
            backgroundSize: `cover`,
            backgroundPosition: `center`,

            display: flex ? `flex` : `block`,
            justifyContent: `center`,
            alignItems: `center`,

            // margin: `var(--space-sm)`,
            // borderRadius: `var(--default-radius)`,
            // overflow: `hidden`
        }}>
            <div
                style={{
                    position: `absolute`,
                    inset: 0,
                    backgroundColor: overlay
                }}
            />

            <div className="container" style={{ zIndex: 2}}>
                {children}
            </div>
        </div>
    )
}