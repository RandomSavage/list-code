import React, {Component} from 'react';
import ReactDom from 'react-dom';
import './index.scss';
import Header from './includes/Header';
import Home from './pages/Home.js';

class App extends Component {
  constructor() {
    super()
    this.state = {
      name: 'Joe'
    }
  }
  render() {
    return (
      <div>
        <Header />
        <Home />
      </div>
    )
  }
}

export default App;
