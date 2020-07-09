import React, {Component} from 'react';
import ReactDom from 'react-dom';


export default class Listings extends Component {
  constructor() {
    super()
    this.state = {
      name: 'Joe'
    }
  }

  render() {
    const {match, location, history} = this.props;
    return (
      <div className={`container`}>
        <div className={`container`}>
        
        </div>
      </div>
    )
  }
}
