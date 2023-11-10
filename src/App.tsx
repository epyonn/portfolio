import React from 'react';
import Header from './components/Header';
import Avatar from './components/Avatar';
import Intro from './components/Intro';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header title="Davis Nguyen" />
      <div className="intro">
        <div className="Intro">
          <Intro />
        </div>

        <Avatar />
      </div>

    </div>
  );
}

export default App;
