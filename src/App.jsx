import { useState } from 'react';
import Navigation from './components/Navigation';
import Heros from './components/Heros';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Body from './components/Body';
import './profile.css' ;


function App() {
  const [theme, setTheme] = useState('light'); 
  
  function changeTheme() {
    setTheme( theme=='light' ? 'dark' : 'light');
  } 
    
  return (
    <Body className={theme}>
      <Navigation toggleTheme={changeTheme}/>
      <Heros />
      <Education />
      <Skills />
      <Projects />
      <Contact />
      <Footer />     
    </Body>
  )
}

export default App
