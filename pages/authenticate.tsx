import Router from "next/router"
import { useContext, useEffect } from "react"
import styled from "styled-components"
import { LoginPageContext } from "../hooks/context/ContentPage"
import { FormSide } from "../components/common/form"
import { HeadComponent } from "../components/common/head/head"
import { Artists } from "../components/ArtistsList"

const WrapperForm = styled.div`
    display: flex;
`
const Authenticated = () => {
    
    return (
        <>
            <HeadComponent>
            </HeadComponent>
            <WrapperForm>
                
                <Artists />
                <FormSide img={'artist2.jpg'} call={'Bem Vindo!'} subtitle={'Você acessou o lugar certo'} position={'fixed'} />
            </WrapperForm>
        </>
    )

}

export async function getServerSideProps(ctx: any) {
    const isAuthenticated = (req: any) => {
      if (!req?.headers?.cookie) {
        return undefined;
      }
  
      const match = req.headers.cookie
        .split(';')
        .find((item: any) => item.trim().startsWith('cookie=da5s4d6as4d65415623231a23sd1as7'));
  
      if (!match) {
        return undefined;
      }
  
      return match.split('=')[1];
    };
  
    if (!isAuthenticated(ctx.req)) {
      ctx.res.writeHead(303, { Location: '/' });
      ctx.res.end();
    }
  
    return { props: {} };
  }
export default Authenticated