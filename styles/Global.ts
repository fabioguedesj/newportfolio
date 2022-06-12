import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html{
        font-size: 62.50%;
    }
    
    body {
        font-size: 1.8rem;
        background-color: ${({ theme }) => theme.colors.blueWhite};
        font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    }


    @media only screen and (max-width: 650px) {
        html {
            font-size: 60%;
        }
    }

    @media only screen and (max-width: 440px) {
        html {
            font-size: 58%;
        }
    }
`;

export default GlobalStyle;
