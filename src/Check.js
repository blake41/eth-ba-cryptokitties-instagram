import React, { Component } from 'react'

class Check extends Component {

  componentDidMount() {
  }

  render() {
    return (
      <div className="flex">
        <img className="flex w-100 mw6" src={this.props.kittySrc}></img>
      </div>
    );
  }
}


export default Check
