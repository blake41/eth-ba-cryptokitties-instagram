import React, { Component } from 'react'
import Webcam from 'react-webcam'

class CameraContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {imageSrc: null}
  }
  setRef = (webcam) => {
    this.webcam = webcam;
  }

  capture = () => {
    const imageSrc = this.webcam.getScreenshot();
    this.setState({imageSrc})
  };

  render() {
    return (
      <div>
        <Webcam
          audio={false}
          height={350}
          ref={this.setRef}
          screenshotFormat="image/jpeg"
          width={350}
        />
        <button onClick={this.capture}>Capture photo</button>
        <img src={this.state.imageSrc}></img>
      </div>
    );
  }
}

export default CameraContainer
