import './App.css';
import { ThemeProvider } from 'styled-components';
import Header from './components/Header';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';
import Profile from './pages/ProfilePage';
import Discussion from './pages/Discussion';
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
    <Router>
      <ThemeProvider theme = {theme}>
      <Header />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="*" element={<ErrorPage />}/>
      <Route path="/profile/:username" element={<Profile />}/>
      <Route path="/discussion/:id" element={<Discussion/>}/>
      </Routes>
      </ThemeProvider>
      </Router>
  );
}

export default App;
