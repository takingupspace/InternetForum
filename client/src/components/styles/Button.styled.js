import styled from "styled-components";

export const StyledButton = styled.button`
    border-raidus: 50px;
    border: none;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    cursor: pointer;
    font-size: 16px;
    font-weight: 700;
    padding: 15px 60px;
    background-color: ${({theme}) => theme.colors.body};
    color: ${({theme}) => theme.colors.body};

    &:hover{
        background-color: ${({theme}) => theme.colors.header};
        opacity: 0.8;
        transform: scale(0.90);
    }
`