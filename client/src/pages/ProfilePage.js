import React from "react";
import { useParams } from "react-router-dom";

function Profile(){
    let {username} = useParams();
    return(
        <h1>This is the profile page for {username}</h1>
    )
}

export default Profile;