import React from 'react';
import Header from './components/Header';
import Avatar from './components/splash/Avatar';
import Intro from './components/splash/Intro';
import Splash from './components/splash/Splash';
import Sphere from './components/geometry/Sphere';
import htmlImg from './assets/tech/html.png';
import BallCanvas from './components/geometry/BallCanvas';
import About from './components/About';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header title="Davis Nguyen" />
      <Splash />
      <About />
      <Projects />

    </div>
  );
}

export default App;
