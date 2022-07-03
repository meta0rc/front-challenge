import { createGlobalStyle } from "styled-components";

export const Theme = {
    colors: { 
        default: '#2D3748',
        error: '#f44336',
    },
    fonts : {
        headding: ''
    }
}

export const GlobalStyles = createGlobalStyle`
 
    * {
        padding: 0;
        margin: 0;
        outline: none;
        font-family: 'Lato', sans-serif;
        font-weight: 300;
        font-style: normal;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        input:-webkit-autofill {
            -webkit-box-shadow: 0 0 0px 1000px white inset;
        }
        @media(max-width: 768px){h1, h2, h3, h4, h5, h6 { text-align: center; }}
    }
        
`