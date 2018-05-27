import React, { Component } from 'react'

class KittyImage extends Component {

  componentDidMount() {
  }

  render() {
    return (
      <div className="flex w5">
        <img className="flex w-100" src={this.props.kittySrc}></img>
      </div>
    );
  }
}


export default KittyImage
