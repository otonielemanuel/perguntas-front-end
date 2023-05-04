import styled from "styled-components";

export const Main = styled.main`
  padding: 4.5% 20%;

  @media (max-width: 616px){
    padding: 4.5% 10%;
  }
  @media (max-width: 375px) {
    padding: 3% 5%;
  }
  @media (max-width: 390px){
    padding: 2% 4%;
  }
  @media (max-width: 393px){
    padding: 2% 7%;
  }
`;

export const titleDiv = styled.div`
  color: ${(props) => props.theme.colors.white};
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;

  @media (max-width: 396px) {
    font-size: 1.5rem;
  }
`;

export const Texts = styled.div`
    
`;

export const Paragraph = styled.p`
  font-size: 1.05rem;
  color: ${props => props.theme.colors.whiteDark};
  font-weight: 400;
  margin-top: 25px;
  letter-spacing: 0.8px;
  line-height: 1.6rem;

  a {
    text-decoration: none;
    color: ${props => props.theme.colors.whiteDark};
}

  &.italic {
    font-style: italic;
    font-weight: 400;
    font-size: 1rem;
  }
`;