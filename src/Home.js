import React, { Component } from 'react'
import { connect } from 'react-redux'
import CameraContainer from './CameraContainer'
import PlayGround from './PlayGround'
import { Link } from 'react-router-dom'
import kittyGram_artifacts from '../build/contracts/KittyGram.json'
import { creators } from './statesauce/src/statesauce'

class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.sauceIt('http://127.0.0.1:7545')
    this.props.initializeContract(kittyGram_artifacts)
  }

  render() {
    return (
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
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  sauceIt (rpcAddr) {
    dispatch(creators.initWeb3Request(rpcAddr))
  },
  initializeContract (artifact) {
    dispatch(creators.initContractRequest(artifact))
  }
})

export default connect(null, mapDispatchToProps)(Home)
