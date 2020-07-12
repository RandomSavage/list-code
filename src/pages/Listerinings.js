import React, {Component} from 'react';
import ReactDom from 'react-dom';


export default class Listings extends Component {
  constructor() {
    super()
    this.state = {
      name: 'Joe'
    }
  }
  viewLoop = () => {
    let itemDirectory = [1,2,3,4,5,6,7,8];
    return itemDirectory.map((entry) => {
      console.log(itemDirectory)
      return (
        <div className={`item`}>
          <div className={`img`}>
            <div className={`price`}>
              $1
            </div>

          </div>
          <div className={`details`}>
            <h5>title</h5>
            <h6>city</h6>
          </div>
        </div>
      )
    })
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
                <select name="min-price" className={`min-price`}>
                  <option value="0">0</option>
                </select>
                <select name="max-price" className={`max-price`}>
                  <option value="1000">1000</option>
                </select>
              </div>
            </div>
            <div className="form-group make">
              <label>Make</label>
              <select name="make" className={`make`}>
                <option value="BMW">BMW</option>
              </select>
            </div>
            <div className="form-group model">
              <label>Model</label>
              <select name="model" className={`model`}>
                <option value="190E">190E</option>
              </select>
            </div>
            <div className="form-group miles">
              <label>Miles From Zip</label>
              <select name="miles" className={`miles`}>
                <option value="190E">190E</option>
              </select>
            </div>
            <div className="form-group button">
              <div className={`primary-btn`}>Update</div>
              <div className={`reset-btn`}>Reset</div>
            </div>
          </section>
          </div>
          <section id={`list-view`}>
            <div className={`container`}>
              <div className={`white-box`}>
                <section className={`change-view`}>
                <div className="form-group view-dropdown">
                  <select name="select-view" className={`select-view`}>
                    <option value="gallery">Gallery View</option>
                    <option value="list">List View</option>
                    <option value="thumb">Thumbnail View</option>
                    <option value="map">Map View</option>
                  </select>
                </div>
                <div className="form-group sort-dropdown">
                  <select name="sort-dropdown" className={`sort-dropdown`}>
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
