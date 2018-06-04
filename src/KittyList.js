import React, { Component } from 'react'
import Kitty from './Kitty'
class KittyList extends Component {

  render() {
    const kitties = this.props.kitties.map((kitty) => {
      return(
        <Kitty key={kitty.ipfsHash} imageData={kitty.imageData}/>
      )
    })
    return(
      <div className="w-100">
        {kitties}
      </div>
    )
  }
}

export default KittyList
