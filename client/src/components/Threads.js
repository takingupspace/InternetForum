import React from "react";
import ErrorPage from "../pages/ErrorPage";
import { StyledContainer } from "./styles/Container.styled";
import UserThreads from "./UserThreads";

function Threads(props){
    console.log('discussion number = ' + props.discussionNumber)
    if(!props.id){
        return(
            <ErrorPage/>
        )
    }else{
        return(
            <StyledContainer>
                {props.id.map((item, index) => (
                    <UserThreads key={index} item={item}/>
                ))}
            </StyledContainer>
        )
    }
}

export default Threads