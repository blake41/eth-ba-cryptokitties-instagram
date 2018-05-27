import React, { Component } from 'react'
import CanvasWrapper from './CanvasWrapper'

class PlayGround extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="relative w-100">
        {this.props.userSrc &&
          <CanvasWrapper
          kittySrc={this.props.kittySrc}
          userSrc={this.props.userSrc}
          />
        }
      </div>
    );
  }
}

export default PlayGround
