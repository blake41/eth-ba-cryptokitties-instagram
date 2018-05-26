import React, { Component } from 'react'
import { connect } from 'react-redux'
import CanvasWrapper from './CanvasWrapper'
class PlayGround extends Component {

  render() {
    return (
      <div>
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
