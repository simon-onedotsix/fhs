import { Pop } from "../../../../../animation/animation"

export const FixedBackgroundImage = ({ children, backgroundImageUrl }) => {
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

            display: `flex`,
            justifyContent: `center`,
            alignItems: `center`
        }}>
            <div className="container">
            
                <Pop inline>
                    <div className='maxw-40 bg-primary p-sm rad-sm center formatted' style={{ backgroundColor: `rgba(60, 26, 82, 0.75)`}}>
                        { children }
                    </div>
                </Pop>
                
            </div>
        </div>
    )
}