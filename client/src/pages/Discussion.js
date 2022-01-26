import React from "react";
import { useParams } from "react-router-dom";
import Posts from "../components/Posts";
import { StyledContainer } from "../components/styles/Container.styled";
import discussionBoard from "../discussion.boards";

function Discussion(props){
    let {id} = useParams();
    const discussionThreads = discussionBoard[id].user
    return (
        <>
        <StyledContainer>
        <h1>This is the discussion page for thread # {id}</h1>
        <p>{discussionBoard[id].discussionBody}</p>
        <Posts id={discussionThreads}/>
        </StyledContainer>
        </>
    )
}

export default Discussion;