import logo from './logo.svg';
import './App.css';
import TextArea from './components/TextArea';
import { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import { StyledContainer } from './components/styles/Container.styled';
import discussionBoard from './discussion.boards';
import Board from './components/Board';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
const theme = {
  colors: {
    header: '#778899',
    body: '#B0C4DE',
    footer: '#778899',
  },
  /*
    768px can be utilized to set the view-port on devices with 768px or less of screen real estate width and position elements accordingly
  */
  mobile: '768px',
}

function App() {

  return (
    <>
    <Router>
    <Routes>
      <Route path="/" element={<Home />}/>
      </Routes>
      </Router>
    </>
  );
}

export default App;
