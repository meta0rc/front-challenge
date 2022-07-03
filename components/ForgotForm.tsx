import { ToastContainer } from 'react-toastify';
import { validate } from "email-validator"
import { useEffect, useState } from "react"
import { HiOutlineMail } from "react-icons/hi"
import styled from "styled-components"
import { customUseToast } from "../hooks/custom/useToast"
import { FormContainer, FormSide } from "./common/form"
import { Button, ContainerInput, Input, TitlePage, WrapperButton } from "./ui"
import Router from 'next/router';

const Call = styled.a`
    @media (min-width: 768px) {
        text-align: left;
    }
    text-align: center;
    text-decoration: underline;
    color: #000;
    margin-top: 20px;
    cursor: pointer;
    @media(max-width: 768px) {
        display: block;
        margin: 25px auto;
    }
    `
    const WrapperForm = styled.div`
        display: flex;
        @media(max-width: 768px) {
           padding : 2%;
           button { 
            width: 100%;
           }
        }
        `
    const Form = styled.div``
    const Paragraph = styled.p`
    position: absolute;
    top: 31px;
    font-size: 12px;
    `
    const ErrorParagraph = styled(Paragraph)`
        color: tomato;
`
export const ForgotForm = () => {
    const [mail, setMail] = useState()
    const [mailError, setMailError] = useState(false)
    const notify = customUseToast()

    const submitForgot = () => {
        notify.success('Em breve enviaremos um link para o seu email', 5000)
        setTimeout(() => Router.push('/'), 5000)
    }

    useEffect(() => {
        if(mail){
            if(!validate(mail)){
                setMailError(true)
            }else {
                setMailError(false)
            }
        }
    }, [mail])

    return (
        <WrapperForm>
            <FormContainer>
                <Form>
                    <TitlePage title={'Esqueceu sua senha?'} />
                    <ContainerInput>
                        <Input type={'text'} place={'Digite o seu email'} onChange={(e:any) => setMail(e.target.value)}/>
                        <HiOutlineMail size={20}/>
                        { mailError === true ? (
                                <ErrorParagraph>
                                    Insira um email válido
                                </ErrorParagraph>
                            ) : ''}
                    </ContainerInput>
                    <WrapperButton>
                        <Button value={'Enviar'} size={16} width={'320'} onClick={submitForgot}/>
                        <Call href="/">
                            Lembrou da senha?
                        </Call>
                    </WrapperButton>
                </Form>
            </FormContainer>
            <FormSide img={'./artist2.jpg'}/>
            <ToastContainer />
        </WrapperForm>
    )
}