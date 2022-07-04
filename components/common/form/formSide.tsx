import { useContext } from "react"
import styled from "styled-components"
import { LoginPageContext } from "../../../hooks/context/ContentPage"

const Container : any = styled.div`
    @media only screen and (max-width: 768px) { 
        display: none !important;
    }
    width: 50%;
    height: 100vh;
    position: ${(props:any) => props.position ? props.position : 'relative'};
    right: ${(props:any) => props.position ? '0' : ''};
    * {
        color: #F7FAFC;
    }
`
const Image = styled.img`
    width: 100%;
    height: 100vh;
    object-fit: cover;
`
const Retangle = styled.div`
    background: rgba(26, 32, 44, 0.9);
    position: absolute;
    width: 100%;
    height: 100vh;

`
const WrapperContent = styled.div`
    position: absolute;
    z-index: 5;
    top: 0;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;

`
const WrapperText = styled.article`
    width: 320px;
    * {
        margin-bottom: 25px;
    }
`
const Subtitle = styled.h1`
    font-weight: 400;
`
const Slogan = styled.h2``
const Call = styled.h3`
    font-size: 1.5em;
    font-weight: 400;
`
const Logo = styled.img``

export const FormSide = (props: any) => {
    
    const context = useContext(LoginPageContext)
    const logo = context.images && context.images.logo ? context.images.logo : ''
    const { subtitle, slogan, call_action  } = context.texts ? context.texts : ''

    return (
        <Container position={props.position}>
            <Retangle />
            <Image src={props.img ? props.img : "./artist.png"} />
            <WrapperContent>
                <WrapperText>
                <Logo src={logo}/>
                    <Subtitle>
                        {props.subtitle ? props.subtitle : subtitle }
                    </Subtitle>
                    <Slogan>
                        {props.slogan ? props.slogan : slogan }
                    </Slogan>
                    <Call>
                        {props.call ? props.call : call_action }
                    </Call>
                </WrapperText>
            </WrapperContent>
            
        </Container>
    )

    
}