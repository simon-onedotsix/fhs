import Link from "next/link"

import { Chevron } from '../ui/chevron'

export const handleMenuItem = (item) => {
        
        // console.log(item)

        switch (item.__typename) {
            case "navigation_Entry":
                return (
                    <li key={item.id}>
                        {
                            item.target
                                ? <Link href={item.navUrl} target={`_blank`} rel={`noreferrer`}><a>{item.title}</a></Link>
                                : <Link href={item.navUrl}><a>{item.title}{item.tag && <span>{item.tag}</span>}</a></Link>
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