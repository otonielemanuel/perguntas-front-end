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
