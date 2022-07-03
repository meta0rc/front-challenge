import { ReactNode } from "react"
import styled from "styled-components"

type ButtonType = {
    onClick?: any
    value?: string
    background?: boolean
    size?: number
    width?: string
    weight?: string
}

const ButtonStyled = styled.button`
    background: ${(props:ButtonType) => props.background ? '#fff' : '#2D3748'};
    border: ${(props:ButtonType) => props.background ? '2px solid #2D3748;' : 'none'};
    color: ${(props:ButtonType) => props.background ? '#2D3748' : '#fff'};
    width: ${(props:ButtonType) => props.width ? props.width + 'px;' : '100%'};
    height: 40px;
    font-size: ${(props:ButtonType) => props.size ? props.size + 'px;' : ''};
    font-weight: ${(props:ButtonType) => props.weight ? props.weight : '300'};
    cursor: pointer;
`

const WrapperBtn = styled.div`
    @media only screen and (min-width: 768px) {
        display: flex;
        flex-direction: row-reverse;
        width: 320px;
        * {
            width: 160px;
            height: 40px;
        }
        align-items: center;
`
export const WrapperBtnRegister = styled.div`
    display: flex;
    flex-direction: row-reverse;
    width: 100%;
    margin-top: 20px;
    * {
        width: 50%;
        height: 40px;
    }
    align-items: center;

    @media(max-width: 720px){
        margin: 150px 0 30px;
    }
`
export const Button = (props: ButtonType) => {

    return (
        <ButtonStyled 
            background={props.background} 
            size={props.size} 
            width={props.width} 
            onClick={props.onClick} 
            weight={props.weight}
            >
            { props.value }
        </ButtonStyled>
    )
}

export const WrapperButton = ({ children } : { children : ReactNode}) => {
    return (
        <WrapperBtn>
            { children }
        </WrapperBtn>
    )
}