import React from 'react';
import Header from './components/Header';
import Avatar from './components/splash/Avatar';
import Intro from './components/splash/Intro';
import Splash from './components/splash/Splash';
import Sphere from './components/geometry/Sphere';
import htmlImg from './assets/tech/html.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header title="Davis Nguyen" />
      {/*
      <div className="intro">
        <div className="Intro">
          <Intro />
        </div>

        <Avatar />
      </div>
      */}
      <Splash />

    </div>
  );
}

export default App;
