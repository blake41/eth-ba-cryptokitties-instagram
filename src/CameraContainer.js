import React, { Component } from 'react'
import KittyContainer from './KittyContainer'
import { Link } from 'react-router-dom'
class CameraContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {imageSrc: null}
  }

  render() {
    return (
      <div className="relative  flex flex-column items-center justify-center">
        {this.props.children}
        <div className="relative-ns absolute left0 mt3 bottom0 flex flex-row w-100">
          <Link className="flex pv2 ph4 br1 ttu uppercase bg-gradient-gray dark-gray f2 link pointer font-adieu"
            to={this.props.leftRoute}>{this.props.leftButtonText}</Link>
          <button className="button-right flex w-100-ns w-auto pv2 ph4 br--left ttu uppercase bg-gradient-green near-white f2  bn pointer font-adieu pl4"
            onClick={this.props.rightAction}>{this.props.rightButtonText}</button>
        </div>
      </div>
    );
  }
}
export default CameraContainer
