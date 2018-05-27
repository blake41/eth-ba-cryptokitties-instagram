import React, { Component } from 'react'
import { connect } from 'react-redux'
import CanvasWrapper from './CanvasWrapper'
import { selectors } from './statesauce/src/statesauce'
const Ipfs = require('ipfs-api')

class PlayGround extends Component {

  constructor(props) {
    super(props)
    this.saveToIpfs = this.saveToIpfs.bind(this)
    this.howManyMemories = this.howManyMemories.bind(this)
  }

  saveToIPFS() {
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

  async howManyMemories() {
    const num = await this.props.contract.KittyMemoryCount.call(1)
    console.log(num.toNumber())
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
        <button onClick={this.howManyMemories}>How Many Memories</button>
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
