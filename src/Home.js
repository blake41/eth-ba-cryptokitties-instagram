import React, { Component } from 'react'
import CameraContainer from './CameraContainer'
import KittyContainer from './KittyContainer'
import PlayGround from './PlayGround'
class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="relative w-100 h-100 flex flex-column relative items-center justify-center">
        <div className="flex flex-row items-center justify-between">
          <div className="flex br-100 w1 h1 mh1 bg-near-white shadow-1"></div>
          <div className="flex br-100 w1 h1 mh1 bg-near-white shadow-1"></div>
          <div className="flex br-100 w1 h1 mh1 bg-near-white shadow-1"></div>
          <div className="flex br-100 w1 h1 mh1 bg-near-white shadow-1"></div>
        </div>
        <CameraContainer />
        <KittyContainer />
      </div>
    );
  }
}

export default Home
