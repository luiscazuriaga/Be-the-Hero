import React  from 'react';
import {ThemeProvider} from 'styled-components';
import usePersistedState from './utils/usePersistedState'
//JSX: é quando a sintaxe XML está dentro do JavaScript(XML sitaxe do HTML)

import Header from './components/Header';
import GlobalStyle from './styles/global';

import Routes from './routes';
import dark from './styles/theme/dark'
import light from './styles/theme/light';

function App() {
const [theme, setTheme] = usePersistedState('theme', light)
  
const toggleTheme = () => { setTheme(theme.title === 'dark' ? light : dark)}
  

  return(
    
    <div className="app">
   <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header toggleTheme={toggleTheme}/>
      <Routes />
    </ThemeProvider>
    </div>
  
  ); 
}

export default App;
