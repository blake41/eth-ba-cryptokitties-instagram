import React, { Component } from 'react'
class Kitty extends Component {

  render() {
    return (
      <div>
        <img src={`http://localhost:5001/ipfs/${this.props.ipfsHash}`}></img>
      </div>
    );
  }
}

export default Kitty
