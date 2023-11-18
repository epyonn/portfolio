import React from 'react';
import Header from './components/header/Header';
import Avatar from './components/splash/Avatar';
import Intro from './components/splash/Intro';
import Splash from './components/splash/Splash';
import Sphere from './components/geometry/Sphere';
import htmlImg from './assets/tech/html.png';
import BallCanvas from './components/geometry/BallCanvas';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Scene from './components/contact/Scene';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header title="Davis Nguyen" />
      <Splash />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;


