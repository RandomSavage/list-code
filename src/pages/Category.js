import React, {Component} from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';
import qs from 'query-string';

export default class Category extends Component {
  constructor() {
    super()
    this.state = {
      min_price: 0,
      max_price: 100000,
      sort: 'newest',
      select_view: 'gallery',
      miles: 5,
      make: 'Lexus',
      model: '190E'
    }
  }
  componentWillMount() {
    const {match, history} = this.props;
    const self = this;
    // Make a request for a user with a given ID
      const queryParams = qs.parse(this.props.location.search);
      const {min_price, max_price, sort, select_view, miles, make, model} = queryParams;
      if(queryParams.min_price != undefined) {
        axios.get(`/api/${match.params.city}/${match.params.category}?min_price=${min_price}&max_price=${max_price}&sort=${sort}&select_view=${select_view}&miles=${miles}&make=${make}&model=${model}`)
          .then(function (response) {
            // handle success
            self.setState({
              itemsData: response.data
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
      } else {
        axios.get(`/api/${match.params.city}/${match.params.category}`)
          .then(function (response) {
            // handle success
            self.setState({
              itemsData: response.data
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
  }
  viewLoop = () => {
    if(this.state.itemsData != undefined) {
      return this.state.itemsData.map((item, i) => {
        return (
          <div className={`item`} key={i}>
            <div className={`img`}>
              <div className={`price`}>
                {item.price}
              </div>
              <img src={this.state.itemsData != undefined ? item.image: 'picture'}  />
            </div>
            <div className={`details`}>
              <h5>{item.title} <span class="lnr lnr-diamond"></span></h5>
              <h6>{item.city}</h6>
            </div>
          </div>
        )
      })
    }

  }
  showMakeModelDropdown = () => {
    const {match, location, history} = this.props;
    if(match.params.listings == 'cars-and-trucks') {
      return(
        <div className={`make-model-comp`}>
          <div className="form-group make">
            <label>Make</label>
            <select name="make" className={`make`} onChange={this.handleChange} value={this.state.make}>
              <option value="BMW">BMW</option>
              <option value="Honda">Honda</option>
              <option value="Lexus">Lexus</option>
            </select>
          </div>
          <div className="form-group model">
            <label>Model</label>
            <select name="model" className={`model`} onChange={this.handleChange} value={this.state.model}>
              <option value="190E">190E</option>
              <option value="Accord">Accord</option>
              <option value="RX300">Rx300</option>
            </select>
          </div>
        </div>
      )
    }
  }
  handleChange = (event) => {
    const name = event.target.name
    const value = (event.target.type == 'checkbox') ? event.target.checked : event.target.value

    this.setState({
      [name]: value
    }, () => {
      console.log(this.state)
    })
  }
  submitFilters = () => {
    const self = this;
    const {match, location, history} = this.props;
    const {min_price, max_price, sort, select_view, miles, make, model} = this.state;
    document.location.href = `/${match.params.city}/${match.params.category}?min_price=${min_price}&max_price=${max_price}`
    const queryParams = qs.parse(this.props.location.search);

  }
  render() {
    const {match, location, history} = this.props;
    return (
      <div className={`listings-page`}>
        <div className={`container`}>
        <div className={`white-box`}>
          <section id="filter">
            <div className="form-group price">
              <label>Price</label>
              <div className={`min-max`}>
                <select name="min_price" className={`min-price`} onChange={this.handleChange} value={this.state.min_price}>
                  <option value="0">0</option>
                  <option value="5000">5000</option>
                  <option value="10000">10000</option>
                  <option value="20000">20000</option>
                  <option value="30000">30000</option>
                  <option value="40000">40000</option>
                  <option value="50000">50000</option>
                  <option value="60000">60000</option>
                  <option value="70000">70000</option>
                  <option value="80000">80000</option>
                  <option value="90000">90000</option>
                </select>
                <select name="max_price" className={`max-price`} onChange={this.handleChange} value={this.state.max_price}>
                  <option value="5000">5000</option>
                  <option value="10000">10000</option>
                  <option value="20000">20000</option>
                  <option value="30000">30000</option>
                  <option value="40000">40000</option>
                  <option value="50000">50000</option>
                  <option value="60000">60000</option>
                  <option value="70000">70000</option>
                  <option value="80000">80000</option>
                  <option value="90000">90000</option>
                  <option value="100000">100000</option>
                </select>
              </div>
            </div>
            {this.showMakeModelDropdown()}
            <div className="form-group miles">
              <label>Miles From Zip</label>
              <select name="miles" className={`miles`} onChange={this.handleChange} value={this.state.miles}>
                <option value="5">5</option>
                <option value="25">25</option>
                <option value="50">50</option>
              </select>
            </div>
            <div className="form-group button">
              <div className={`primary-btn`} onClick={this.submitFilters}>Update</div>
              <div className={`reset-btn`}>Reset</div>
            </div>
          </section>
          </div>
          <section id={`list-view`}>
            <div className={`container`}>
              <div className={`white-box`}>
                <section className={`change-view`}>
                <div className="form-group view-dropdown">
                  <select name="select_view" className={`select-view`} onChange={this.handleChange} value={this.state.select_view}>
                    <option value="gallery">Gallery View</option>
                    <option value="list">List View</option>
                    <option value="thumb">Thumbnail View</option>
                    <option value="map">Map View</option>
                  </select>
                </div>
                <div className="form-group sort-dropdown">
                  <select name="sort" className={`sort-dropdown`} onChange={this.handleChange} value={this.state.sort}>
                    <option value="newest">Newest</option>
                    <option value="Oldest">Oldest</option>
                  </select>
                </div>
                </section>
                <section className={`all-items`}>
                  {this.viewLoop()}
                </section>
              </div>
            </div>
          </section>
        </div>
      </div>
    )
  }
}
