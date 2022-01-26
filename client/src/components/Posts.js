import React from 'react';
import { StyledPost } from './styles/Post.styled';
import discussionBoard from '../discussion.boards';
import { StyledContainer } from './styles/Container.styled';
import UserPosts from './UserPosts';
import ErrorPage from '../pages/ErrorPage';

function Posts(props){
    if(!props.id){
        return (
            <ErrorPage/>
        )
    }else{
    return (
        <StyledContainer>
            {props.id.map((item, index) => (
                <UserPosts key={index} item={item}/>
            ))}
        </StyledContainer>
    )
    }
}

export default Posts