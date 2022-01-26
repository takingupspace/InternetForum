import React from "react";
import { ThemeProvider } from 'styled-components';
import Header from "../components/Header";
import { StyledContainer } from "../components/styles/Container.styled";
import discussionBoard from "../discussion.boards";
import Board from "../components/Board";
import { BrowserRouter as Router, Routes, Route, useParams} from 'react-router-dom';
import Discussion from "./Discussion";

function Home(){
    return (
        <StyledContainer>
        {discussionBoard.map((item, index) => (
          <Board key={index} item={item}/>
        ))}
        </StyledContainer>
    )
}

export default Home;