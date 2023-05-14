import styled from "styled-components";

export const Main = styled.main`
  padding: 4.5% 20%;
  color: ${props => props.theme.colors.white};

  @media (max-width: 616px) {
    padding: 4.5% 10%;
  }
  @media (max-width: 375px) {
    padding: 3% 5%;
  }
  @media (max-width: 390px) {
    padding: 2% 4%;
  }
  @media (max-width: 393px) {
    padding: 2% 7%;
  }
`;

export const ContainerCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 7%;
`;

export const Question = styled.p`
  color: ${(props) => props.theme.colors.whiteDark};
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 30px;
  cursor: pointer;
`;


export const Contruindo = styled.img`
  height: 300px;
  margin: 5%;
`;