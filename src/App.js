import React, { Component } from 'react';
import Info from './components/Info';
import Resume from './components/Resume';
import './css/style.css';


class App extends Component {
  render() {
    return (
      <div className='App'>
        <Info />
        <Resume />
      </div>
    );
  }
}

export default App;
