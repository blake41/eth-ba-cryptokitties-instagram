import React, { Component } from 'react'
import Webcam from 'react-webcam'
import { connect } from 'react-redux'
import {storeImage} from './actions'
import { Link } from 'react-router-dom'
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
    this.props.storeImage(imageSrc)
  };

  render() {
    return (
      <div className="flex w-100 flex-column items-center justify-center">
        <Webcam
          audio={false}
          height={480}
          ref={this.setRef}
          screenshotFormat="image/jpeg"
          width={640}
        />
        <div className="flex flex-row w-100">
        <Link className="flex pv2 ph4 br1 ttu uppercase bg-near-white dark-gray f3 link pointer" to={'/playground'}>Save</Link>
        <button className="flex flex-grow-1 pv2 ph4 br1 ttu uppercase bg-gradient-green near-white f3 pointer" onClick={this.capture}>Capture</button>
        </div>
        <img src={this.props.imageSrc}></img>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    imageSrc: state.get('image').src
  }
}

export default connect(mapStateToProps, {storeImage})(CameraContainer)
