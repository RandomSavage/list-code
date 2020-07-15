import React, {Component} from 'react';
import ReactDom from 'react-dom';
import Gallery from './components/Gallery';

export default class Details extends Component {
  constructor() {
    super()
    this.state = {
      name: 'Joe'
    }
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
              <a href="#">Contact Seller <span className="lnr lnr-chevron-down"></span></a>
            </nav>
          </section>
          <section>
            <div className={`content`}>
              <div className={`media-column`}>
                <Gallery />
              </div>
              <div className={`details-column`}>
                <div className={`date`}>
                  Posted: February 28
                </div>
                <h3 className={`title`}>Black 2020 BMW 535i, 4DR Leather Audio</h3>
                <h4 className={`price`}>$46,298</h4>
                <div className={`more-details`}>
                    <div className={`info`}>
                      <label>vin</label>
                      <h5>hjkkjjjb</h5>
                    </div>
                    <div className={`info`}>
                      <label>vin</label>
                      <h5>hjkkjjjb</h5>
                    </div>
                    <div className={`info`}>
                      <label>vin</label>
                      <h5>hjkkjjjb</h5>
                    </div>
                    <div className={`info`}>
                      <label>vin</label>
                      <h5>hjkkjjjb</h5>
                    </div>
                    <div className={`info`}>
                      <label>vin</label>
                      <h5>hjkkjjjb</h5>
                    </div>
                    <div className={`info`}>
                      <label>vin</label>
                      <h5>hjkkjjjb</h5>
                    </div>
                </div>
                  <div className={`description`}>
                    <label>Description</label>
                    <p>Elit pinterest voluptate air plant seitan sartorial. Flannel +1 vice blog hell of, sustainable reprehenderit subway tile banh mi drinking vinegar migas taiyaki ut stumptown knausgaard. Meh plaid ut ut, pitchfork forage sriracha. Selvage brooklyn sriracha vape williamsburg chia viral. Gluten-free chia ut iceland ullamco. Vinyl farm-to-table cardigan trust fund VHS.</p>
                    <p>Aliquip dolor vape forage mixtape consequat, viral migas kinfolk roof party humblebrag consectetur ethical. Laboris vegan non, selfies thundercats dolore food truck kogi lorem shabby chic elit. Cillum trust fund four loko quinoa try-hard air plant. Af meditation palo santo, est disrupt pariatur cillum chicharrones art party esse kinfolk authentic pickled aliquip.</p>
                    <p>Vegan trust fund tattooed, +1 ea forage vice hammock kickstarter air plant YOLO. Ennui in coloring book raclette cred cray waistcoat XOXO. Cliche subway tile vinyl, normcore hammock nostrud yr irony butcher synth air plant 3 wolf moon keytar ut. Asymmetrical hot chicken pok pok labore occupy. Enamel pin hot chicken adipisicing sint, keytar raclette glossier YOLO disrupt mollit.</p>
                  </div>
                </div>
              </div>
          </section>
        </div>
      </div>
    )
  }
}
