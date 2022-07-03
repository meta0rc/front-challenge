import type { AppProps } from 'next/app'
import { ContentPageProvider } from '../hooks/context/ContentPageProvider'
import { ThemeProvider } from 'styled-components'
import { Theme } from '../Theme/Theme'
import { GlobalStyles } from '../Theme/Theme'

function MyApp({ Component, pageProps }: AppProps) {



  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={Theme}>
        <ContentPageProvider>
            <Component {...pageProps} />
        </ContentPageProvider>
      </ThemeProvider>

    </>
  )
}

export default MyApp
