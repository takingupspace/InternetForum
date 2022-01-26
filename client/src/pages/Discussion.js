import React from "react";
import { useParams } from "react-router-dom";

function Discussion(){
    let {id} = useParams();
    return (
        <h1>This is the discussion page for thread # {id}</h1>
    )
}

export default Discussion;