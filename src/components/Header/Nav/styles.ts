import styled from "styled-components";

export const Nav = styled.nav`

`;

export const List = styled.ul`
    display: flex;
        align-items: center;
        column-gap: 20px;
        list-style: none;
`;

export const itemList = styled.li`
    a {
        text-decoration: none;
        color: ${props => props.theme.colors.whiteDark};
        font-size: 1rem;
        font-weight: 500;
        transition: color .5s;

        &.active {
            color: ${props => props.theme.colors.white};
        }

        &.icon-git {
            font-size: 1.2rem;
        }

        &.icon-insta {
            font-size: 1.5rem;
        }

        &.icon-link {
            font-size: 1.6rem;
        }
    }
`;