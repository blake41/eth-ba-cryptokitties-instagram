import React, { Component } from 'react'
import CameraContainer from './CameraContainer'
class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <CameraContainer />
      </div>
    );
  }
}

export default Home
