import { Pop } from "../../../../../animation/animation"

export const FixedBackgroundImage = ({ children, backgroundImageUrl, flex }) => {
    return (
        <div className='block' style={{
            position: `relative`,
            zIndex: 20,
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
            <div className="container">
                {children}
            </div>
        </div>
    )
}