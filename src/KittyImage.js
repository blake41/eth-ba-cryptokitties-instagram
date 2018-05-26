import React, { Component } from 'react'

class KittyImage extends Component {

  componentDidMount() {
  }

  render() {
    return (
      <div className="">
        <img src={this.props.kittySrc}></img>
      </div>
    );
  }
}


export default KittyImage
