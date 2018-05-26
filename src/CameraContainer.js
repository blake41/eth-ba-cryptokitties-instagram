import React, { Component } from 'react'
import Webcam from 'react-webcam'

class CameraContainer extends Component {

  constructor() {
    this.state = {imageData: null}
  }
  setRef = (webcam) => {
      this.webcam = webcam;
    }

  capture = () => {
    const imageSrc = this.webcam.getScreenshot();
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
      </div>
    );
  }
}

export default CameraContainer
