import React, {Component} from 'react';
import ReactDom from 'react-dom';


export default class Gallery extends Component {
  constructor() {
    super()
    this.state = {
      allImgs: '',
      currentImg: '',
      currentIndex: 0

    }
  }
  componentWillMount(){
    const allImgs = ['https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.kHmx136bszkXJS1m5oXDSQHaEo%26pid%3DApi&f=1',
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.EAh6bnKmzD1x3VDh49SxqQHaE7%26pid%3DApi&f=1',
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.099jx6Oa8whiKjgeohghpwAAAA%26pid%3DApi&f=1',
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.R-GwyEdfRP-HYoHRZ4xIfwHaEo%26pid%3DApi&f=1',
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.EAh6bnKmzD1x3VDh49SxqQHaE7%26pid%3DApi&f=1',
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.XsiR4DAkBC3t_Qc2TVAeKwHaF5%26pid%3DApi&f=1']
    this.setState({
      allImgs,
      currentImg: allImgs[this.state.currentIndex]
    })
  }
  allImgsLoop = () => {
    return this.state.allImgs.map((item, i) => {
      return(
        <div key={i} onClick={this.clickedThumb.bind(null, i)} className={`thumb-img`} style={{"backgroundImage" : `url('${item}')`}}>
        </div>
      )
    })
  }
  nextBtn = () => {
    if(this.state.currentIndex != (this.state.allImgs.length - 1)) {
      this.setState({
        currentIndex: this.state.currentIndex + 1
      })
    }
  }
  prevBtn = () => {
    if(this.state.currentIndex != 0) {
      this.setState({
        currentIndex: this.state.currentIndex - 1
      })
    }
  }
  clickedThumb = (index) => {
    this.setState({
      currentIndex: index
    })
  }
  render() {
    const {match, location, history} = this.props;

    return (

            <div className={`gallery`}>
              <div className={`slider`}>
                <div className={`main-image`} style ={{"backgroundImage": `url('${this.state.allImgs[this.state.currentIndex]}')`}}>
                  <div className={`left-arrow`} onClick={this.prevBtn}>
                    <span className="lnr lnr-chevron-left"></span>
                  </div>
                  <div className={`right-arrow`} onClick={this.nextBtn}>
                    <span className="lnr lnr-chevron-right"></span>
                  </div>
                </div>
              </div>
              <div className={`thumb-nails`}>
                {this.allImgsLoop()}
              </div>
            </div>
    )
  }
}
