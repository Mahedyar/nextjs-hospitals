import { ExternalLink } from "./ExternalLink"
import NextLink from "next/link"

export const Link = ({children , ...props}) => {
    if(props.href.toString().startsWith("/")){
        return <NextLink {...props}>{children}</NextLink>
    } else {
        return <ExternalLink child={children} href={props.href.toString()}/>
    }
}