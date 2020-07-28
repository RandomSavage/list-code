import React, {Component} from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';

export default class Header extends Component {
  constructor() {
    super()
    this.state = {
      name: 'Joe',
      cityDropdown: false,
      selectedCity: 'NYC',
      citiesData: []
    }
  }
  componentWillMount(){
    const self = this;
    // Make a request for a user with a given ID
    axios.get(`/api/cities`)
      .then(function (response) {
        // handle success
        self.setState({
          citiesData: response.data
        }, () => {
          console.log(self.state);
        })
        console.log(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }
  clickedCityDropdown = () => {
    this.setState({
      cityDropdown: !this.state.cityDropdown
    })
  }
  loopCities = () => {
    return this.state.citiesData.map((item,i) => {
      return(
        <li key={i}>{item.title}</li>
      )
    })
  }
  render() {
    return (
      <div className={`container`}>
        <header>
          <div className={'left-menu'}>
            <div className={'logo'}>Craigslist</div>
            <div className={'city-dropdown'} onClick={this.clickedCityDropdown}>
              {this.state.selectedCity}
              <span className="lnr lnr-chevron-down"></span>
              <div className={`scroll-area ${(this.state.cityDropdown) ? 'active' : ''}`}>
                <ul>
                  {this.loopCities()}
                </ul>
              </div>
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
      </div>
    )
  }
}
