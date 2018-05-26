import React, { Component } from 'react'
import Webcam from 'react-webcam'
import { connect } from 'react-redux'
import {storeImage} from './actions'
import KittyContainer from './KittyContainer'

  constructor(props) {
    super(props)
    this.state = {imageSrc: null}
  }

  render() {
    return (
      <div className="relative h-100 flex flex-column items-center justify-center">
        {this.props.children}
        <div className="flex flex-row w-100">
          <Link className="flex pv2 ph4 br1 ttu uppercase bg-gradient-gray dark-gray f2 link pointer"
            to={this.props.leftRoute}>{this.props.leftButtonText}</Link>
          <button className="flex flex-grow-1 pv2 ph4 br--left ttu uppercase bg-gradient-green near-white f2 outline bn pointer"
            onClick={this.props.rightAction}>{this.props.rightButtonText}</button>
        </div>
        <KittyContainer />
      </div>
    );
  }
}
export default CameraContainer
