import React, { Component } from 'react';
import classes from './App.css';
import Frame from '../src/containers/Frame/Frame';

class App extends Component {
  
  render() {
    return (
      <div className={classes.App}>
        <Frame />    
      </div>
    );
  }
}

export default App;
