import { useContext } from "react"
import styled from "styled-components"
import { LoginPageContext } from "../../hooks/context/ContentPage"

const Container = styled.div`
    text-align: center;
    margin-top: 50px;
    display: none;
    @media (max-width: 768px) {
         display: block;s
    }

    `
const LogoStyled = styled.img``

export const Logo = () => {
    const context = useContext(LoginPageContext)
    const LogoImage = context.images ? context.images.logo_mobile : ''
    
    return (
        <Container>
            <LogoStyled src={LogoImage} />
        </Container>

    )
}