import React, { Component } from 'react'
class Kitty extends Component {

  render() {
    return (
      <div>
        <img src={`https://ipfs.io/ipfs/${this.props.ipfsHash}`}></img>
      </div>
    );
  }
}

export default Kitty
