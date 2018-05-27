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
