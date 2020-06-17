import React from 'react';
import './App.css';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <MyImdb></MyImdb>
        </div>
      </BrowserRouter>
    );
  }
}

export default App


