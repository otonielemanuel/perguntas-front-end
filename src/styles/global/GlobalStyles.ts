import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    ::-webkit-scrollbar {
    width: 5px;
    height: 100px;
    border-radius: 50px;
    background-color: #000;
    }


    ::-webkit-scrollbar-thumb {
    background-color: #121212;
    border-radius: 100px;
    }

    html, body, #root {
        height: 100%;
    }

    body {
        background-color: #050505;
        font-family: 'Inter', sans-serif;
    }

    a:hover {
        color: #f2f2f2;
    }
`;

export default GlobalStyles;