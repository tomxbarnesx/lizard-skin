import React, { Component } from 'react';
import './App.css';

import cover from './images/cover.jpg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="homeCover">
            <img src={cover} width="100%" />
        </div>
      </div>
    );
  }
}

export default App;
