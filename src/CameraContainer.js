import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import KittyContainer from './KittyContainer'
class CameraContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {imageSrc: null}
  }

  render() {
    return (
      <div className="relative flex flex-column items-center justify-center">
        <div className="flex w-100 mw6 flex-row items-center justify-between shadow-2 bg-white-80 br3 mb3 ph4 font-adieu">
        <h4 className="f4 dark-gray">{this.props.onboardingText}</h4>
        </div>
      <KittyContainer />
      <div className="">

      </div>
        {this.props.children}
        <div className="relative-ns absolute left0 mt3 bottom0 flex flex-row w-100">
          <Link className="flex pv2 ph4 br1 ttu uppercase bg-gradient-gray dark-gray f2 link pointer font-adieu"
            to={this.props.leftRoute}>{this.props.leftButtonText}</Link>
          <button className="flex w-100-ns w-auto pv2 ph4 br--left ttu uppercase bg-gradient-green near-white f2  bn pointer font-adieu pl4"
            onClick={this.props.rightAction}>
            {this.props.rightButtonText}
          </button>
        </div>
      </div>
    );
  }
}
export default CameraContainer
