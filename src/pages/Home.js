import React, {Component} from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';


export default class Home extends Component {
  constructor() {
    super()
    this.state = {
      categoriesData: ''
    }
  }
  componentWillMount(){

  }
  componentDidMount(){
    const{match, history} = this.props
    if(match.params.city == undefined){
      history.push('/nyc')
    }
    const self = this;
    // Make a request for a user with a given ID
    axios.get(`/api/${match.params.city}`)
      .then(function (response) {
        // handle success
        self.setState({
          categoriesData: response.data
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
  loopCategories = () => {
    if(this.state.categoriesData != '') {
      return this.state.categoriesData.map((category, i) => {
        const loopListings = () => {
          return category.listings.map((listing, index) => {
            return (
              <a href={`${category.title}/${listing.slug}`} className={`link`} key={index}>
                {listing.name}
              </a>
            )
          })
        }
        return(
          <div key={i} className={`categories`}>
            <div className={`title  ${category.title == 'resumes' ? 'point' : ''}`}>{category.title}</div>
            <div className={`group-links ${(category.title == 'jobs' || category.title == 'housing' || category.title == 'services' || category.title == 'for sale') ? 'single-col' : ''}`}>
              {loopListings()}
            </div>
          </div>
        )
      })
    } else {
      alert('Loading');
    }

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
              <span className="lnr lnr-clock"></span>
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
