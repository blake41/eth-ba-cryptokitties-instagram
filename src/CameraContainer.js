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
      <div className="relative w-100 h-100  flex flex-column items-center justify-center">
        <div className="absolute left0 top0 h-100 w-50 bg-white-80 z-9"></div>
        <div className="absolute right0 top0 h-100 w-50 bg-green z-9"></div>

        <div className="flex w-100 mw6 flex-row items-center justify-between  bg-white-90 shadow-1 br4 mb3 ph2 font-adieu z-999">
          <KittyContainer />

        <h4 className="f4 dark-gray">{this.props.onboardingText}</h4>
        </div>

        {this.props.children}
        <div className="relative-ns right mt3 bottom0 flex flex-row justify-around w-100 z-999">
          <Link className="flex self-start pv2 ph4 br1 ttu uppercase  dark-gray f2 link pointer font-adieu transit-left-hover"
            to={this.props.leftRoute}>{this.props.leftButtonText}
          </Link>

          <button className="flex self-end pv2 ph4 br--left ttu uppercase bg-green near-white f2  bn pointer font-adieu pl4 z-999 transit-right-hover"
            onClick={this.props.rightAction}>
            {this.props.rightButtonText}
          </button>
        </div>
      </div>
    );
  }
}
export default CameraContainer
