import React, {Component} from 'react';
import ReactDom from 'react-dom';


export default class Category extends Component {
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
          This category is {match.params.category}
        </div>
      </div>
    )
  }
}
