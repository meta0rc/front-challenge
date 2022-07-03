import styled from "styled-components"
import { HeadComponent } from "../components/common/head/head"
import { FormContainer } from "../components/common/form/formContainer"
import { FormSide } from "../components/common/form/formSide"
import { Input, ContainerInput } from "../components/ui/inputs"
import { HiOutlineMail } from 'react-icons/hi'
import { Button, WrapperButton } from "../components/ui"
import { TitlePage } from "../components/ui"
import { useEffect, useState } from "react"
import { validate } from 'email-validator'
import { ForgotForm } from "../components/ForgotForm"
import { Logo } from "../components/common/Logo"

const Forgot = () => {

    const [values, setValues] = useState<any>()

    return ( 
        <>
            <HeadComponent>
            </HeadComponent> 
            <Logo />    
            <ForgotForm />   
        </>
    )
}
export default Forgot
