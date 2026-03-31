import Link from "next/link"

export const handleMenuItem = (item) => {
        
        // console.log(item)

        switch (item.__typename) {
            case "navigation_Entry":
                return (
                    <li key={item.id}>
                        {
                            item.target
                                ? <Link href={item.navUrl} target={`_blank`} rel={`noreferrer`}>{item.title}</Link>
                                : <Link href={item.navUrl}>{item.title}</Link>
                        }
                    </li>
                )
                break
            
            case "section_Entry":
                return <li key={item.id}><span>{item.title}<Chevron/></span></li>
                break
            
            case "subsection_Entry":
                return <li key={item.id}><p>{item.title}</p></li>
                break
        
            default:
                break
        }
    }