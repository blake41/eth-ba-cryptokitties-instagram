import React, { Component } from 'react'
import Kitty from './Kitty'
class KittyList extends Component {

  render() {
    var myKitties = [{ipfsHash: 'http://i.imgur.com/xmmgPKO.jpg'}]
    const kitties = myKitties.map((kitty) => {
      return(
        <Kitty key={kitty.ipfsHash} ipfsHash={kitty.ipfsHash}/>
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
