import SideBar from './Components/SideBar'
import styled from 'styled-components'
import HomePage from './Pages/HomePage'
import About from './Pages/About'
import Resume from './Pages/Resume'
import Projects from './Pages/Projects'
import Contact from './Pages/Contact'
import { Switch as Switching, Route } from 'react-router-dom'
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Switch from '@material-ui/core/Switch'
import { useState, useEffect } from 'react'
import { IconButton } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';

function App() {
  const [theme, setTheme] = useState('dark-theme');
  const [checked, setChecked] = useState(false);
  const [navToggle, setNavToggle] = useState(false);

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme])

  const themeToggler = () => {
    if (theme === 'light-theme') {
      setTheme('dark-theme');
      setChecked(false);
    } else {
      setTheme('light-theme');
      setChecked(true);
    }
  }

  return (
    <div className="App">
      <SideBar navToggle={navToggle} />

      <div className="theme">
        <div className="light-dark-mode">
          <div className="left-content">
            <Brightness4Icon />
          </div>
          <div className="right-content">
            <Switch
              value=""
              checked={checked}
              inputProps={{ 'aria-label': '' }}
              size='small'
              onClick={themeToggler}
            />
          </div>
        </div>
      </div>

      <div className="menu">
        <IconButton onClick={() => setNavToggle(!navToggle)}>
          <MenuIcon />
        </IconButton>
      </div>

      <MainContent>
        <Switching>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/about" exact>
            <About />
          </Route>
          <Route path="/resume" exact>
            <Resume />
          </Route>
          <Route path="/projects" exact>
            <Projects />
          </Route>
          <Route path="/contact" exact>
            <Contact />
          </Route>
        </Switching>
      </MainContent>
    </div>
  );
}

const MainContent = styled.main`
  position: relative;
  margin-left: 12.3rem;
  min-height: 100vh;
  @media screen and (max-width:1200px){
        margin-left: 0;
  }
`;

export default App;

