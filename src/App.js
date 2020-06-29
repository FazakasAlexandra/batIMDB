import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Theme from '../src/Theme/Theme';
import MyImdb from '../src/Containers/MyImdb';
import './App.css';


class App extends Component {
  render() {
    return (
      <Theme>
        <BrowserRouter>
          <div className="App">
            <MyImdb />
          </div>
        </BrowserRouter>
      </Theme>
    );
  }
}

export default App


