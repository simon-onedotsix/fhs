import Link from "next/link"


export const renderMainMenu = (mainMenuData) => {
    return (
        mainMenuData?.map( column => (
            <section key={column.id}>
                {
                    column.columnData.map( item => {
                        switch (item.__typename) {

                            case "columnData_heading_BlockType":
                                return (
                                    <p  
                                        key={item.id}
                                        className={`
                                            fw-600
                                            ${item.headingSize === 'lg' ? 'fs-5 c-accent mb-xxs' : ''}
                                            ${item.headingSize === 'md' ? 'fs-6' : ''}
                                            ${item.headingSize === 'sm' ? 'fs-default' : ''}
                                        `} 
                                    >
                                        { item.heading }
                                    </p>
                                )
                                break
        
                            case "columnData_menuLinksGroup_BlockType":
                                return (
                                    <ul key={item.id}>
                                        {
                                            item.menuLinks?.map( (link, index) => {

                                                if (link.hyperlink) return (
                                                    <li key={index}  style={{ paddingBottom: `.125vh` }}>
                                                        <Link href={link.hyperlink}>
                                                            <a
                                                                className={` 
                                                                    ${link.size === 'sm' ? 'uLink' : 'uLink fs-6 fw-400'}
                                                                    ${link.indent && 'ml-sm'}
                                                                `} 
                                                                target={ link.newWindow ? '_blank' : '_self'}
                                                                onClick={ () => setActive(false)}
                                                            >{ link.label }</a>
                                                        </Link>    
                                                    </li> 
                                                )

                                                return (
                                                    <li 
                                                        key={index}
                                                        className={` 
                                                            ${link.size === 'sm' ? '' : 'fs-6 fw-400'}
                                                            ${link.indent && 'ml-sm'}
                                                        `}
                                                    >{index}{ link.label }</li>
                                                )
                                            })
                                        }
                                    </ul>
                                )
                                break
                        
                            default:
                                break
                        }
                    })
                }
            </section> 
        ))
    )
}