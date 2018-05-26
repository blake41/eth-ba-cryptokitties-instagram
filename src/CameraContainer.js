import React, { Component } from 'react'
import Webcam from 'react-webcam'
import { connect } from 'react-redux'
import {storeImage} from './actions'
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
    this.props.storeImage({imageSrc})
  };

  render() {
    return (
      <div className="flex flex-column items-center justify-center">
        <Webcam
          audio={false}
          height={350}
          ref={this.setRef}
          screenshotFormat="image/jpeg"
          width={350}
        />
        <button onClick={this.capture}>Capture photo</button>
        <img src={this.props.imageSrc}></img>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    // imageSrc: state.image.src 
  }
}

export default connect(mapStateToProps, {storeImage})(CameraContainer)
