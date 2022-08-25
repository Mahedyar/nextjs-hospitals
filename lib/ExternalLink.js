import { cloneElement, isValidElement } from "react"

export const ExternalLink = ({child,href}) => {
    if(!isValidElement(child)){
        throw new Error("child must be a valid React element")
    }
    if(child.type !== "a"){
        throw new Error("child must be an <a> element")
    }
    return cloneElement(child , {
        href,
        target : "_blank",
        rel :"noopener noreferrer"
    })
}