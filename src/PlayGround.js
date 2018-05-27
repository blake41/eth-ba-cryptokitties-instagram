import React, { Component } from 'react'
import { connect } from 'react-redux'
import CanvasWrapper from './CanvasWrapper'
import { selectors } from './statesauce/src/statesauce'
const Ipfs = require('ipfs-api')

class PlayGround extends Component {

  constructor(props) {
    super(props)
    this.saveToIpfs = this.saveToIpfs.bind(this)
  }

  saveToIpfs() {
    const buffer = Buffer.from(this.props.playGroundSrc);
    const ipfs = Ipfs({host: 'localhost', port: '5001', protocol: 'http'});
    ipfs.add(buffer)
    .then((response) => {
     const hash = response[0].hash
     this.props.contract.pushMemory(1, hash, "this is a comment on the pic", {gas: 540000, from: this.props.userAccount})
    }).catch((err) => {
     console.error(err)
     // reject(err);
    })
  }

  render() {
    return (
      <div>
        {this.props.userSrc &&
          <CanvasWrapper
          kittySrc={this.props.kittySrc}
          userSrc={this.props.userSrc}
          savePlayground={this.props.savePlayground}
          />
        }
        <button onClick={this.saveToIpfs}>Save to Eth</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    userAccount: selectors.fromStore.getDefaultAccount(state),
    contract: selectors.fromStore.getContract(state)
  }
}

export default connect(mapStateToProps)(PlayGround)
