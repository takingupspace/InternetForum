import styled from "styled-components";

export const StyledFlex = styled.div`
    display: flex;
    align-items: center;

    /*
        align any divs or uls as columns
    */
    & > div,
    & > ul {
        flex: 1;
    }

    @media(max-width: ${({theme}) => theme.mobile}){
        flex-direction: column;
        text-align: center;
    }
`