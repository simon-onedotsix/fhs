import { Pop } from "../../../../../animation/animation"

export const FixedBackgroundImage = ({ children, backgroundImageUrl, flex, overlay }) => {
    return (
        <div className='block' style={{
            position: `relative`,
            zIndex: 2,
            minHeight: `100vh`,
            backgroundImage: `url(${backgroundImageUrl})`,
            backgroundAttachment: `fixed`,
            backgroundRepeat: `no-repeat`,
            backgroundSize: `cover`,
            backgroundPosition: `center`,

            display: flex ? `flex` : `block`,
            justifyContent: `center`,
            alignItems: `center`
        }}>
            <div
                style={{
                    position: `absolute`,
                    inset: 0,
                    backgroundColor: overlay
                }}
            />

            <div className="container" style={{ position: `relative`, zIndex: 2}}>
                {children}
            </div>
        </div>
    )
}