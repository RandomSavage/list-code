import React, {Component} from 'react';
import ReactDom from 'react-dom';


export default class Details extends Component {
  constructor() {
    super()
    this.state = {
      name: 'Joe'
    }
  }

  render() {
    const {match, location, history} = this.props;
    const magen = '{x>';
    return (
      <div className={`container`}>
        <div className={`likkle-magen`}>
          This item is {match.params.item}
          <h1>
            {magen}{magen}{magen}
          </h1>
          <h1>
            {magen}{magen}{magen}
          </h1>
          <h1>
            {magen}{magen}{magen}
          </h1>
        </div>
      </div>
    )
  }
}
