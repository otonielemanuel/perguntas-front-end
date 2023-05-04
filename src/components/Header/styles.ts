import styled from "styled-components";

export const Header = styled.header`
    padding: 25px 3%;
    color: #f2f2f2;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 616px){
        padding: 40px 3%;
    }
    @media (max-width: 375px){
        display: flex;
        flex-direction: column;
        justify-content: center;
        row-gap: 40px;
        padding: 40px 1%;
    }

    @media (max-width: 393px){
        display: flex;
        flex-direction: column;
        justify-content: center;
        row-gap: 40px;
        padding: 40px 1%;
    }
    @media (max-width: 414px){
        display: flex;
        flex-direction: column;
        justify-content: center;
        row-gap: 40px;
        padding: 40px 1%;
    }
`;

export const Image = styled.img`
    height: 20px;

    @media (max-width: 375px){
        height: 30px;
    }
    @media (max-width: 393px){
        height: 30px;
    }
    @media (max-width: 414px){
        height: 30px;
    }
`;