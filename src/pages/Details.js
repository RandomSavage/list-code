import React, {Component} from 'react';
import ReactDom from 'react-dom';


export default class Details extends Component {
  constructor() {
    super()
    this.state = {
      name: 'Joe'
    }
  }
  viewDetails = () => {
    let detailsDirectory = [{spin: '12xc12cd2', mileage: '74,322' , Transmission: 'manual'},{win: '1762eh64j27x', mileage: '19,205' , Transmission: 'auto'},{fin: '354g964372l', mileage: '45,499' , Transmission: 'auto'}];
    return detailsDirectory.map((entry, detail) => {
      for(const detail in entry) {
        return detail;
      }


      return (
        <div className={`info`}>
          <label>{detail}</label>
          <h5>{entry[detail]}</h5>
        </div>
      )
    })
  }
  render() {
    const {match, location, history} = this.props;

    return (
      <div className={`details-page`}>
        <div className={`container`}>
          <section className={`submenu`}>
            <div className={`direction`}>
              <div className={`prev`}>Prev</div>
              <div className={`next`}>Next</div>
            </div>
            <nav className={`sub-links`}>
              <a href="#">More Ads By User</a>
              <a href="#">Print</a>
              <a href="#">Share</a>
              <a href="#">Contact Sellerr</a>
            </nav>
          </section>
          <section>
            <div className={`media-column`}>
              <div className={`gallery`}>
                <div className={`slider`}>
                  <div className={`main-image`}>
                    <div className={`left-arrow`}>
                      <span class="lnr lnr-chevron-left"></span>
                    </div>
                    <div className={`right-arrow`}>
                      <span class="lnr lnr-chevron-right"></span>
                    </div>
                  </div>
                </div>
                <div className={`thumb-nails`}>
                  <div className={`thumb-img`}>
                    <img href={`#`} alt={`picture`} />
                  </div>
                </div>
              </div>
            </div>
            <div className={`details-column`}>
              <div className={`date`}>
                Posted: February 28
              </div>
              <h3>Black 2020 BMW 535i, 4DR Leather Audio</h3>
              <h4 className={`price`}>$46,298</h4>
              <div className={`more-details`}>
                {this.viewDetails()}
                <div className={`description`}>
                  <label>Description</label>
                  <p>This is where the Description goes</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    )
  }
}
