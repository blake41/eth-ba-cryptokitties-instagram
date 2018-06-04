import React, { Component } from 'react'
class Kitty extends Component {

  render() {
    return (
      <div>
        <img src={`${this.props.imageData}`}></img>
      </div>
    );
  }
}

export default Kitty
