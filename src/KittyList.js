import React, { Component } from 'react'
import Kitty from './Kitty'
class KittyList extends Component {

  render() {
    const kitties = this.props.kitties.map((kitty) => {
      return(
        <Kitty key={kitty.ipfsHash} ipfsHash={kitty.ipfsHash}/>
      )
    })
    return(
      <div>
        {kitties}
      </div>
    )
  }
}

export default KittyList
