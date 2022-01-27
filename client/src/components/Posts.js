import React from 'react';
import { StyledPost } from './styles/Post.styled';
import discussionBoard from '../discussion.boards';
import { StyledContainer } from './styles/Container.styled';
import UserPosts from './UserPosts';
import ErrorPage from '../pages/ErrorPage';

function Posts(props){
    //console.log('id in Posts is ' + props.discussionNumber)
    if(!props.id){
        return (
            <ErrorPage/>
        )
    }else{
    return (
        <StyledContainer>
            {props.id.map((item, index) => (
                <UserPosts key={index} item={item} id={props.discussionNumber}/>
            ))}
        </StyledContainer>
    )
    }
}

export default Posts