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
          {this.props.kittySrc && <CanvasWrapper kittySrc={this.props.kittySrc}/>}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    kittySrc: state.get('kitty').src
  }
}

export default connect(mapStateToProps, null)(PlayGround)
