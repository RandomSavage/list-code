import React, {Component} from 'react';
import ReactDom from 'react-dom';


export default class Header extends Component {
  constructor() {
    super()
    this.state = {
      name: 'Joe'
    }
  }
  render() {
    return (
      <header>
        <div className={'left-menu'}>
          <div className={'logo'}>Craigslist</div>
          <div className={'city'}>
            Tennessee
            <span className="lnr lnr-chevron-down"></span>
          </div>
        </div>

        <div className={'right-menu'}>
          <div className={'user-img'}>img</div>
          <div className={'user-dropdown'}>
            my account
            <span className="lnr lnr-chevron-down"></span>
          </div>
          <div className={'post-btn'}>post classifieds</div>
        </div>

      </header>
    )
  }
}
