import React, { Component } from 'react'

class KittyRetriever extends Component {

  componentDidMount() {
    this.props.getKitties(this.props.contract, this.props.userAccount)
  }

  render() {
    return (
      null
    );
  }
}


export default KittyRetriever
