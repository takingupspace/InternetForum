import styled from "styled-components";

export const StyledHeader = styled.header`
    background-color: ${({theme}) => theme.colors.header};
    padding: 0 40px;

    h1 {
        color : #333;
    }

    &:hover{
        background-color : ${({theme}) => theme.colors.body};
    }
`