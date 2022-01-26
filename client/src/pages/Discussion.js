import React from "react";
import { useParams } from "react-router-dom";
import discussionBoard from "../discussion.boards";

function Discussion(props){
    let {id} = useParams();
    return (
        <>
        <h1>This is the discussion page for thread # {id}</h1>
        <p>{discussionBoard[id].discussionBody}</p>
        </>
    )
}

export default Discussion;