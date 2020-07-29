import React, {Component} from 'react';
import ReactDom from 'react-dom';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default class Header extends Component {
  constructor() {
    super()
    this.state = {
      name: 'Joe',
      cityDropdown: false,
      selectedCity: 'New York City',
      citiesData: []
    }
  }
  componentWillMount(){
    const self = this;
    // Make a request for a user with a given ID
    axios.get(`/api/cities`)
      .then(function (response) {
        const {match, history} = self.props;
        let city = response.data.filter((item) => {
          return item.slug == match.params.city
        })
        // handle success
        self.setState({
          citiesData: response.data,
          selectedCity: city[0].title
        }, () => {
          // console.log(self.state);
        })
        // console.log(response.data);
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
  selectCity = (city) => {
    this.setState({
      selectedCity: city
    }, () => {
    let city = this.state.citiesData.filter((item) => {
        return item.title == this.state.selectedCity
      })
      const {match, history} = this.props
      history.push(`/${city[0].slug}`)
    })
  }
  loopCities = () => {
    const self = this;
    return this.state.citiesData.map((item,i) => {
      return(
        <li key={i} onClick={this.selectCity.bind(null, item.title)}>{item.title}</li>
      )
    })
  }
  render() {
    const {match, history} = this.props
    return (
      <div className={`container`}>
        <header>
          <div className={'left-menu'}>
            <Link to={`/${match.params.city}`} className={'logo'}>Craigslist</Link>
            <div className={'city-dropdown'} onClick={this.clickedCityDropdown}>
              {this.state.selectedCity}
              <span className={`lnr ${(this.state.cityDropdown) ? 'lnr lnr-chevron-up' : 'lnr lnr-chevron-down'}`}></span>
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
