import React, {Component} from 'react';
import ReactDom from 'react-dom';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import './index.scss';
import Header from './includes/Header';
import Home from './pages/Home.js';
import Listings from './pages/Listings.js';
import Details from './pages/Details.js';
import Category from './pages/Category.js';


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
          <Route path="/:city" component={Header} />
          <Route exact path="/" component={Home} />
          <Route exact path="/:city" component={Home} />
          <Route exact path="/:city/:category/" component={Category} />
          <Route exact path="/:city/:category/:listings" component={Listings} />
          <Route exact path="/:city/:category/:listings/:Details" component={Details} />
        </div>
      </Router>
    )
  }
}

export default App;
