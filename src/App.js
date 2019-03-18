import React, { Component } from 'react';
import './App.css';
import LifeInvader from './components/Lifeinvader';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">         
          <h1>Login to LifeInvader</h1>          
        </header>
        <h2>Socialize and be Super Social</h2>
        <LifeInvader />
      </div>
    );
  }
}

export default App;
