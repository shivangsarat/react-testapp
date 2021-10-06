import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Jsx0 from './jsx0.js';
import Jsx1 from './jsx1.js';
import Jsx2 from './jsx2.js';
// import Prop0 from './prop.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Nykaa</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        {/* <Prop0 />, */}
        <Jsx0 />,
        <Jsx1 />,
        <Jsx2 />,
      </div>
    );
  }
}

export default App;
