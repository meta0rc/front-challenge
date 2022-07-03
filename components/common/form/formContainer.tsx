import { ReactNode } from "react"
import styled from "styled-components"

const ContainerForm = styled.div`
    @media (min-width: 768px) {
        padding: 0;
        display: flex;
        justify-content: center;
        flex-direction: column; 
    }
    padding: 0 2%;
    width: 320px;
    margin: 0 auto;
`
export const FormContainer = ({children}: {children : ReactNode}) => {
    return (
        <ContainerForm>
            { children }
        </ContainerForm>
    )
}