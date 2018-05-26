import React, { Component } from 'react'
import CameraContainer from './CameraContainer'
import KittyContainer from './KittyContainer'
import Home from './Home'
import Webcam from 'react-webcam'
import { connect } from 'react-redux'
import {storeImage} from './actions'
import PlayGround from './PlayGround'

class Switcher extends Component {

  componentDidMount() {
  }

  setRef = (webcam) => {
    this.webcam = webcam;
  }

  capture = () => {
    const imageSrc = this.webcam.getScreenshot();
    this.props.storeImage(imageSrc)
  };

  render() {
    var children
    if (this.props.match.path === "/capture") {
      children = (
        <div>
          <CameraContainer capture={this.capture}
            next={'/check'}
            >
            <Webcam
              audio={false}
              height={480}
              ref={this.setRef}
              screenshotFormat="image/jpeg"
              width={640}
            />
          </CameraContainer>
          <KittyContainer />
        </div>
      )
    } else if (this.props.match.path === "/check") {
      children = (
        <div>
          <CameraContainer next={'/playground'}>
            <div className="absolute flex top0 left0">
              <img src={this.props.imageSrc}></img>
            </div>
          </CameraContainer>
        </div>
      )
    } else if (this.props.match.patch === "/playground") {
      children = (
        <PlayGround />
      )
    }
    return(
      <Home>
        {children}
      </Home>
    )
  }
}


function mapStateToProps(state) {
  return {
    imageSrc: state.get('image').src
  }
}

export default connect(mapStateToProps, {storeImage})(Switcher)
