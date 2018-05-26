import React, { Component } from 'react'
import CameraContainer from './CameraContainer'
class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="w-100 h-100 flex relative items-center justify-center">
        <CameraContainer />
      </div>
    );
  }
}

export default Home
