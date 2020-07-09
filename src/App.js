import React, {Component} from 'react';
import ReactDom from 'react-dom';

import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom';

import './index.scss';
import Header from './includes/Header';
import Home from './pages/Home.js';
import Listings from './pages/Listings.js';

class App extends Component {
  constructor() {
    super()
    this.state = {
      name: 'Joe'
    }
  }
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route exact path="/" component={Home} />
          <Route exact path="/tn/community/artists" component={Listings} />
        </div>
      </Router>
    )
  }
}

export default App;
