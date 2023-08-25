import { useState } from 'react';
 import About from './components/About';
 import Projects from './components/projects';
 import Contact from './components/contact';


import './App.css'

function App() {
 

  return (
    <div className='container'>
    <About/>
    <Projects/>
    <Contact/>
    </div>
  )
}

export default App
