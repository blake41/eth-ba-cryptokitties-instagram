import React, { Component } from 'react'
import { connect } from 'react-redux'
import CanvasWrapper from './CanvasWrapper'
import KittyContainer from './KittyContainer'
class PlayGround extends Component {

  render() {
    return (
      <div>
        <KittyContainer />
        <div className="">
          {this.props.userSrc &&
            <CanvasWrapper
            kittySrc={this.props.kittySrc}
            userSrc={this.props.userSrc}
            />
          }
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    kittySrc: state.get('kitty').src,
    userSrc: state.get('image').src
  }
}

export default connect(mapStateToProps, null)(PlayGround)
