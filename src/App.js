import React, { Component } from 'react';
import './App.css';
import Facebook from './components/Lifeinvader';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">         
          <h1>Login to LifeInvader</h1>          
        </header>
        <h3>Socialize and be Super Social</h3>
        <Facebook />
      </div>
    );
  }
}

export default App;
