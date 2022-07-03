import styled from "styled-components"
import { ToastContainer } from 'react-toastify';
import { useContext, useState } from "react"
import { HiOutlineLockClosed, HiOutlineUser } from 'react-icons/hi'
import { Button, WrapperButton } from "./ui"
import { LoginPageContext } from "../hooks/context/ContentPage"
import { customUseToast } from "../hooks/custom/useToast"
import { FooterForm, FormSide, FormContainer } from "./common/form"
import { TitlePage, ContainerInput, Input} from "./ui/"
import Router from "next/router";

const Form = styled.form``
const Forgot = styled.a`
    @media (min-width: 768px) {
        text-align: left;
    }

    @media (max-width: 768px) {
        margin-top: 25px !important;
        width: 100%;
        text-align: center;
        display: block;
    }
    text-align: center;
    margin-top: 20px;
    color: #000;
    text-decoration: underline;
    cursor: pointer;
    font-weight: 400;
`
const WrapperForm = styled.div`
    display: flex;
`


export const LoginForm = () => {
    
    const [values, setValues] = useState({})

    const onChange = (e: any) => {
        const { name, value } = e.target
        setValues({...values, [name]: value })
    }
    const submitForm = async (e: any) => {
        e.preventDefault()

        if(values){ 
            const response = await login.signin(values)
            if(response.Error) {
                return notify.error()
            }
            if(response.Ok){
                notify.success()
                setTimeout(() => Router.push('/authenticate'), 500)
                localStorage.setItem('token', 'as5d423asd314231213ad564asd5686173')
            }
        }
    }
    const login = useContext(LoginPageContext)
    const notify = customUseToast()
    const context = useContext(LoginPageContext)
    const forgot = context.texts && context.texts.section_login.forgot ? context.texts.section_login.forgot : ''

    return (
        
        <WrapperForm>
            <FormSide />
            <FormContainer>
                <Form onSubmit={(e) => submitForm(e)}>
                    <TitlePage />
                    <ContainerInput>
                        <Input type={'text'} place={'email'} name={'email'} onChange={(e: any) => onChange(e)}/>
                        <HiOutlineUser size={20}/>
                    </ContainerInput>
                    <ContainerInput>
                        <Input type={'password'} place={'senha'} name={'password'} onChange={(e: any) => onChange(e)}/>
                        <HiOutlineLockClosed size={20} />
                    </ContainerInput>
                    <WrapperButton>
                        <Button value={'Entrar'} size={18} weight={'500'}/>
                            <Forgot href={'/forgot'}>
                                { forgot }
                            </Forgot>
                    </WrapperButton>
                </Form>
            <FooterForm />
            </FormContainer>
            <ToastContainer />
        </WrapperForm>
        
    )

}