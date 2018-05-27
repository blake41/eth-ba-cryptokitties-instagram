import React, { Component } from 'react'

class KittyList extends Component {

  componentDidMount() {
    console.log('hello')
  }

  render() {
    return (
      <div className="absolute top0">
        {this.props.kitties.map((kitty) => {
          return(<div>{kitty.ipfsHash}</div>)
        })}
      </div>
    );
  }
}


export default KittyList
