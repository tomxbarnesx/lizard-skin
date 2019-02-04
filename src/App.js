import React, { Component } from 'react';
import './App.css';

import cover from './images/cover.jpg';
import head from './images/head.png';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="homeCover">
            <img className="landscape" src={cover} width="100%" alt="The cover turned landscape"/>
            <img className="head" src={head} width="100%" alt="A faceless lizard head" />
        </div>
        <div></div>
      </div>
    );
  }
}

export default App;
