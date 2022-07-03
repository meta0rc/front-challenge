import { useContext } from "react"
import styled from "styled-components"
import { LoginPageContext } from "../../../hooks/context/ContentPage"
import { Button } from "../../ui"

type FooterForm = { 
    p?: string,
    btn?: string

}
const Container = styled.div`
   margin: 150px 0 30px;
   @media only screen and (min-width: 768px) { 
    margin: 0;
    text-align: center;
    button {
        width: 180px;
        
    }
   }
`
const Paragraph = styled.p`
    text-align: center;
    margin: 25px 0;
    font-weight: 400;
`
const Link = styled.a``

export const FooterForm = (props: FooterForm) => {
    const context = useContext(LoginPageContext)
    const { register, register_call } = context.texts && context.texts.section_login ? context.texts.section_login : ''

    return (
        <Container>
            <Paragraph>
                { props.p ? props.p : register }
            </Paragraph>
            <Link href={props.btn ? '/' : '/signup'}>
                <Button value={ props.btn ? props.btn : register_call } background={true} size={20} weight={'400'}/>
            </Link>
        </Container>
    )
}