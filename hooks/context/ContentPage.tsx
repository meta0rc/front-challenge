import { createContext } from "react"

export type PageContext = {

    texts: any | null
    images: { 
        logo: string, logo_mobile: string
    } | null
    
    getContentFromEndPoint: () => Promise<Boolean>
    signin: (values: {} ) => Promise<Response>
    signup: (values: {}) => Promise<Boolean>
    user: any | null
}

export type TypeContentLogin = {

    texts: Object
    images: { logo: string, logo_mobile: string }
}

type Response = {
    Ok: string,
    Error: string
}
export const LoginPageContext = createContext<PageContext>(null!)