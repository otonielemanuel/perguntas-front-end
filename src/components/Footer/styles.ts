import styled from "styled-components";

export const Footer = styled.footer`
    padding: 0.5% 20%;

    p {
        color: ${props => props.theme.colors.white};
        font-weight: 300;
        font-size: 1rem;
        margin-bottom: 20px;

        a {
            color: ${props => props.theme.colors.whiteDark};
        }
    }

    @media (max-width: 616px){
        padding: 0.8% 10%;
    }
    @media (max-width: 375px) {
        padding: 0.8% 5%;
    }
    @media (max-width: 390px){
        padding: 0.8% 4%;
    }
    @media (max-width: 393px){
        padding: 0.8% 7%;
    }

`;  