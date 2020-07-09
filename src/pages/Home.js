import React, {Component} from 'react';
import ReactDom from 'react-dom';


export default class Home extends Component {
  constructor() {
    super()
    this.state = {
      name: 'Joe'
    }
  }
  loopCategories = () => {
    let testArray = [1,2,3,4,5,6,7];
    return testArray.map((item) => {
      return(
        <div key={item} className={`categories`}>
          <div className={'title'}>Community</div>
          <div className={`group-links`}>
            <a href="#" className={`link`}>Community</a>
            <a href="#" className={`link`}>General</a>
            <a href="#" className={`link`}>Activities</a>
            <a href="#" className={`link`}>Groups</a>
            <a href="#" className={`link`}>Artists</a>
            <a href="#" className={`link`}>Local News</a>
            <a href="#" className={`link`}>Child Care</a>
            <a href="#" className={`link`}>Lost and Found</a>
            <a href="#" className={`link`}>Classes</a>
            <a href="#" className={`link`}>Musicians</a>
            <a href="#" className={`link`}>Events</a>
          </div>
        </div>
      )
    })
  }
  loopTags = () => {
    let testTags = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
    return testTags.map((item) => <div key={item} className={`tag`}>Yehoud I <br /> likkle zion</div>);
  }
  render() {
    return (
      <div className={`container`}>
        <div className={`home`}>
          <h1>Connecting the Healing of the Nation</h1>
          <section className={'links'}>
            {this.loopCategories()}
          </section>
          <section className={'trending'}>
            <input type={`text`} name={`search`} className={`search`} />
            <div className={`title`}>
              <span class="lnr lnr-clock"></span>
              Trending Now
            </div>
            <div className={`trending-tags`}>
              {this.loopTags()}
            </div>
          </section>
        </div>
      </div>
    )
  }
}
