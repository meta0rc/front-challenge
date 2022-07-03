import styled from "styled-components"
import { FormContainer, FormSide, FooterForm } from "./common/form"
import { Input, ContainerInput, Button, WrapperButton, TitlePage, WrapperBtnRegister } from "./ui"
import { HiOutlineMail, HiOutlineLockClosed, HiOutlineUser } from 'react-icons/hi'
import { useEffect, useState } from "react"
import { validate } from 'email-validator'

const Have = styled.p`
    @media (min-width: 768px) {
        text-align: left;
    }
    text-align: center;
    text-decoration: none;
    font-weight: 400;
    color: #000;
    margin-top: 20px;
    cursor: pointer;
`
const Link = styled.a`
    button{ width: 100% !important; } 
    `
const WrapperForm = styled.div`
    display: flex;
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
export const RegisterForm = () => {

    const [values, setValues] = useState<any>()
    const [mailError, setMailError] = useState(false)
    const [passError, setPassError] = useState(false)
    
    const onChange = (ev: any) => {
        const { value, name } = ev.target
        if(value){
            setValues({...values, [name] : value})
        }
    }

    const submitSign = () => {
        if(!values) {
            console.log('error')
        }
        const { user, email, pass, confirmPass } = values

        if(confirmPass != pass) { 
            setPassError(true)
        }
        else {
            setPassError(false)
        }
        console.log(values)
    }

    useEffect(() => {
        if(values){
            if(!validate(values.email)){
                    setMailError(true)
                } else {
                    setMailError(false)
                }  
                const { user, email, pass, confirmPass } = values

                if(confirmPass != pass) { 
                    setPassError(true)
                }
                else {
                    setPassError(false)
                }
            }
    }, [values])

    return (
        <WrapperForm>
            <FormSide />
                <FormContainer>
                    <TitlePage title={'Criar nova conta'}/>
                    <Form>
                        <ContainerInput>
                            <Input 
                                type={'text'} 
                                place={'Usuário'} 
                                name={'user'} 
                                onChange={(ev: any) => onChange(ev)}
                            />
                            <HiOutlineUser size={20}/>
                        </ContainerInput>
                        <ContainerInput>
                            <Input 
                                type={'text'} 
                                place={'Email'} 
                                name={'email'}
                                onChange={(ev: any) => onChange(ev)} />
                            <HiOutlineMail size={20}/>
                            { mailError === true ? (
                                <ErrorParagraph>
                                    Insira um email válido
                                </ErrorParagraph>
                            ) : ''}
                        </ContainerInput>
                        <ContainerInput>
                            <Input
                                type={'password'} 
                                place={'Senha'} 
                                name={'pass'}
                                color={passError ? 'true' : 'false' }
                                onChange={(ev: any) => onChange(ev)
                            }/>
                            <HiOutlineLockClosed size={20} color={passError ? '#f44336' : '#000'} />
                            <Paragraph>
                                Sua senha de ter entre 6 e 20 caracteres.
                            </Paragraph>
                        </ContainerInput>
                        <ContainerInput>
                            <Input 
                                type={'password'} 
                                place={'Confirme sua Senha'} 
                                color={passError ? 'true' : 'false' }
                                name={'confirmPass'} 
                                onChange={(ev: any) => onChange(ev)
                            }/>
                            <HiOutlineLockClosed size={20} color={passError ? '#f44336' : '#000'} />
                            { passError == true && (
                                <ErrorParagraph>
                                As senhas não conferem
                                </ErrorParagraph>
                            )}


                        </ContainerInput>
                        <Button value="Cadastrar-se" size={16} onClick={() => submitSign()} weight={'500'} />
                    </Form>
                    <WrapperBtnRegister>
                        <Link href='/'>
                            <Button value="Acessar" background={true} size={16} weight={'400'} />
                        </Link>
                        <Have>
                            Já tem uma conta?
                        </Have>
                    </WrapperBtnRegister>
                </FormContainer>
            </WrapperForm>
    )

}