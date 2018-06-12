import React, { Component } from 'react';
import logo from './assets/logo.svg';
import './App.css';
import Post from './Post';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Post title="Notion 2.0 on Android" description="Notion has finally come to Android, does Todoist have a reason to fear?" timestamp={Date()} tags="hello" />
      </div>
    );
  }
}
  export default App;