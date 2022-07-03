import { useEffect, useState } from "react"
import { useApi } from "../custom/useApi"
import { LoginPageContext } from "./ContentPage"
import cookie from "js-cookie"
export const ContentPageProvider = ({ children } : { children: JSX.Element}) => {
    const [user, setUser] = useState<any | null>(null)
    const [texts, setTexts] = useState<any | null>(null)
    const [images, setImages] = useState(null)

    const api = useApi()

    const getContentFromEndPoint = async () => {
        const response = await api.getContentFromLoginPage()
        if(response) { 
            setTexts(response.texts)
            setImages(response.images)
            return true
        }        
        return false
    }

    useEffect(() => {
        getContentFromEndPoint()
    }, [useApi])

    const signin = async (values : any) => {
        if(values){
            const { email, password } = values
            const form = new FormData()
            form.append('email', email)
            form.append('password', password)
            const res = await api.login(form)
            if(res){
                if(res.data) {
                    if(res.data.Ok) {
                        setUser(true)
                    }
                    cookie.set('cookie', 'da5s4d6as4d65415623231a23sd1as7', { expires: 1, path: '/authenticate' })
                    return res.data
                }
            }
        }
       
    }
    const signup = async () => {
        return false
    }

    return (
        <LoginPageContext.Provider 
            value={{
                texts,
                images,
                getContentFromEndPoint, 
                signin, 
                signup,
                user
                }}>
            { children }
        </LoginPageContext.Provider>
    )
}