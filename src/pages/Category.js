import React, {Component} from 'react';
import ReactDom from 'react-dom';


export default class Category extends Component {
  constructor() {
    super()
    this.state = {
      name: 'Joe'
    }
  }
  viewLoop = () => {
    let itemDirectory = [{price: '8920', img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.oRsEFTzY9tftKsDjpQmapwHaFj%26pid%3DApi&f=1', title: 'BMW', city: 'ten-mile'}, {price: '4420', img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs-media-cache-ak0.pinimg.com%2F736x%2Fdc%2Fab%2F4d%2Fdcab4de9c8c61d24878751663bd49141--ital-food-recipes-ital-food-rasta.jpg&f=1&nofb=1', title: 'BMW', city: 'Nyc'},{price: '8920', img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.hA0NT8xm9Rfbc1f1GlnbAwHaE8%26pid%3DApi&f=1', title: 'BMW', city: 'Amsterdam'},{price: '8920', img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.gzCISLGnF136A2xit-KHDQHaE7%26pid%3DApi&f=1', title: 'BMW', city: 'Morant Bay'}];
    return itemDirectory.map((entry, index) => {
      console.log(itemDirectory)
      return (
        <div className={`item`}>
          <div className={`img`}>
            <div className={`price`}>
              {entry.price}
            </div>
            <img src={entry.img} alt={"ital food"} />
          </div>
          <div className={`details`}>
            <h5>{entry.title} <span class="lnr lnr-diamond"></span></h5>
            <h6>{entry.city}</h6>
          </div>
        </div>
      )
    })
  }
  showMakeModelDropdown = () => {
    const {match, location, history} = this.props;
    if(match.params.listings == 'cars-and-trucks') {
      return(
        <div className={`make-model-comp`}>
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
        </div>
      )
    }

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
            {this.showMakeModelDropdown()}
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
