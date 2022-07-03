import { ReactNode } from "react"
import Head  from 'next/head'

export const HeadComponent = ({children} : { children : ReactNode}) => {
    return (
        <Head>
            { children }
            
            <link href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700&display=swap" rel="stylesheet" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />

        </Head>
    )
}
