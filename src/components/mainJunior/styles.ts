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
  margin-top: 5%;
`;


export const Headline = styled.p`
  margin-bottom: 25px;
  font-size: 1.05rem;
  color: ${(props) => props.theme.colors.whiteDark};
  font-weight: 400;
  letter-spacing: 0.8px;
  line-height: 1.6rem;

  input {
    border: none;
    outline: none;
    background-color: transparent;
    color: ${(props) => props.theme.colors.whiteDark};
    font-size: 1rem;
    font-weight: 400;
    border-bottom: 1px solid ${(props) => props.theme.colors.whiteDark};
    padding: 3px 10px;
    width: 120px;
  }
`;

export const Question = styled.p`
  color: ${(props) => props.theme.colors.whiteDark};
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 20px;
  cursor: pointer;
`;

export const Answer = styled.p`
  font-size: 1.05rem;
  font-weight: 400;
  margin-top: 25px;
  letter-spacing: 0.8px;
  line-height: 1.6rem;
  margin-bottom: 25px;
  transition: .9s;
`;

export const Contruindo = styled.img`
  height: 300px;
  margin: 5%;
`;