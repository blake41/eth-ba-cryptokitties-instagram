import React, { Component } from 'react'
import CameraContainer from './CameraContainer'
import KittyContainer from './KittyContainer'
import Home from './Home'
import Webcam from 'react-webcam'
import { connect } from 'react-redux'
import { storeImage, savePlayground } from './actions'
import PlayGround from './PlayGround'

class Switcher extends Component {

  setRef = (webcam) => {
    this.webcam = webcam;
  }

  capture = () => {
    const imageSrc = this.webcam.getScreenshot();
    this.props.storeImage(imageSrc)
    this.props.history.push('/check')
  };

  savePlayground = () => {
    var canvas = document.getElementById("canvas")
    var dataURL = canvas.toDataURL()
    this.props.savePlayground(dataURL)
    this.props.history.push('/checkPlayground')
  }

  render() {
    var children
    if (this.props.match.path === "/capture") {
      children = (
        <div>
          <CameraContainer rightAction={this.capture}
            leftRoute={'/kittySelect'}
            rightButtonText={"Capture"}
            leftButtonText={"Back"}
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
          <CameraContainer leftRoute={'/capture'}
            leftButtonText={"Retake"}
            rightButtonText={"Confirm"}
            rightAction={()=> {this.props.history.push('/playground')}}
            >
            <div className="flex top0 left0">
              <img src={this.props.userSrc}></img>
            </div>
          </CameraContainer>
        </div>
      )
    } else if (this.props.match.path === "/playground") {
      children = (
        <CameraContainer leftRoute={"/check"}
          leftButtonText={"Back"}
          rightButtonText={"Save"}
          rightAction={this.savePlayground}
          >
          <PlayGround userSrc={this.props.userSrc}
            kittySrc={this.props.kittySrc}
            />
        </CameraContainer>
      )
    } else if (this.props.match.path === "/checkPlayground") {
      children = (
        <CameraContainer leftRoute={"/playground"}
          leftButtonText={"Re-Arrange"}
          rightButtonText={"Share"}
          >
          <div className="flex top0 left0">
            <img src={this.props.playGroundSrc}></img>
          </div>
        </CameraContainer>
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
    kittySrc: state.get('kitty').src,
    userSrc: state.get('image').src,
    playGroundSrc: state.get('playGround').src
  }
}

export default connect(mapStateToProps, {storeImage, savePlayground})(Switcher)
