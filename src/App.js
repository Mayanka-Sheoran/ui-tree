import React, { Component } from 'react';
import './App.css';
import TreeComponent from './Containers/uiTree';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TreeComponent/>
      </div>
    );
  }
}

export default App;
