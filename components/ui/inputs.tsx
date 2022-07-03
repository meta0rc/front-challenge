import { ReactNode } from "react"
import styled from "styled-components"

const Container = styled.label`
    position: relative;
    
    svg {
        position: absolute;
        right: 0px;
        bottom: -1px;
    }
`
const InputSyle = styled.input`
    border: none;   
    border-bottom: 2px solid ${(props : any) => props.color === 'true' ? props.theme.colors.error : ''};
    color: ${(props : any) => props.color === 'true' ? props.theme.colors.error : ''};
    box-sizing: border-box;
    width: 100%;
    outline: none;
    margin-bottom: 30px;
    padding: 5px 0;
    background-color: none;
    font-size: 16px;
    font-weight: 400;
    `
type Input = {
    name?: string
    type?: string 
    place?: string
    onChange?: any
    color?: any
}
export const ContainerInput = ({ children } : { children: ReactNode}) => {
    return (
        <Container>
             { children }
        </Container>
    )
}

export const Input = (props: Input) => {
    return <InputSyle 
        required={true}
        type={props.type} 
        placeholder={props.place} 
        name={props.name} 
        color={props.color}
        onChange={props.onChange}
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck={false}
        />
}