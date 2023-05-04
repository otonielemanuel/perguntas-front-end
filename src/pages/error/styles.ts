import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: ${(props) => props.theme.colors.white};

  h1 {
    font-size: 3rem;
  }

  p {
    font-size: 1rem;
    a {
        text-decoration: none;
        color: ${(props) => props.theme.colors.white};
    }
  }
`;
