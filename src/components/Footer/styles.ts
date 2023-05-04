import styled from "styled-components";

export const Footer = styled.footer`
    padding: 0.8% 20%;

    p {
        color: ${props => props.theme.colors.white};
        font-weight: 300;
        font-size: 1rem;
        margin-bottom: 20px;
    }
`;  