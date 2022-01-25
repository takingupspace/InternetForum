import styled from "styled-components";

export const StyledNav = styled.nav`
    display : flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 400px;

    @media(max-width: ${({theme}) => theme.mobile}){
        flex-direction: column;
    }
`