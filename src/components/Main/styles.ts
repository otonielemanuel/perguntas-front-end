import styled from "styled-components";

export const Main = styled.main`
  padding: 4.5% 20%;
`;

export const titleDiv = styled.div`
  color: ${(props) => props.theme.colors.white};
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
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
