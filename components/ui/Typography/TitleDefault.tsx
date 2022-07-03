import styled from "styled-components"
import { useContext } from "react"
import { LoginPageContext } from "../../../hooks/context/ContentPage"
import React from "react"

const Title : any = styled.h1`
    font-weight: 300;
    margin: 30px 0;
    color: ${props => props.theme.colors.default };
    ${(props:any) => props.center ? 'text-align: center;' : ''}
`
const WrapperTitle = styled.div`
    display: block;
`

export const TitlePage = (props: any) => {

    const context = useContext(LoginPageContext)
    const title = context.texts ? context.texts.section_login.title : ''
    
    return (
        <WrapperTitle>
            <Title center={props.center}>
                {props.title ? props.title : title }
            </Title>
        </WrapperTitle>
    )

}

