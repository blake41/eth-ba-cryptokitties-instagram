import React, { Component } from 'react'
import CameraContainer from './CameraContainer'
import PlayGround from './PlayGround'
import { Link } from 'react-router-dom'
class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
<<<<<<< Updated upstream
      <div className="relative w-100 h-100 flex flex-column relative items-center justify-center">
        <div className="flex flex-row items-center justify-between">
          <div className="flex br-100 w1 h1 mh1 bg-near-white shadow-1">
            <Link to={'/kittySelect'}></Link>
          </div>
          <div className="flex br-100 w1 h1 mh1 bg-near-white shadow-1">
            <Link to={'/capture'}></Link>
          </div>
          <div className="flex br-100 w1 h1 mh1 bg-near-white shadow-1">
            <Link to={'/check'}></Link>
          </div>
          <div className="flex br-100 w1 h1 mh1 bg-near-white shadow-1">
            <Link to={'/playground'}></Link>
          </div>
        </div>
        {this.props.children}
=======
      <div className="relative w-100 min-vh-100 flex flex-column relative items-center justify-center flex-auto">
        <div className="flex flex-row items-center justify-between pv4-ns pv3">
          <div className="flex br-100 w1 h1 mh1 bg-near-white shadow-1"></div>
          <div className="flex br-100 w1 h1 mh1 bg-near-white shadow-1"></div>
          <div className="flex br-100 w1 h1 mh1 bg-near-white shadow-1"></div>
          <div className="flex br-100 w1 h1 mh1 bg-near-white shadow-1"></div>
        </div>
        <CameraContainer />
>>>>>>> Stashed changes
      </div>
    );
  }
}

export default Home
