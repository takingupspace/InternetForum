import React from "react";
import { useParams } from "react-router-dom";
import Threads from "../components/Threads";
import { StyledContainer } from "../components/styles/Container.styled";
import discussionBoard from "../discussion.boards";

function UserThreadPage(){
    let{id, userThreadId} = useParams();
    console.log('id = ' + JSON.stringify(id));
    console.log('userThreadId = ' + userThreadId)
    const userThread = discussionBoard[id].user[userThreadId].post
    return(
        <>
            <StyledContainer>
                <h1>This is thread # {id} and user # {userThreadId}</h1>
                <Threads id={userThread}/>
            </StyledContainer>
        </>
    )
}

export default UserThreadPage;