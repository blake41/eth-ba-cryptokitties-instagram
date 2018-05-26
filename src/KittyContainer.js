import React, { Component } from 'react'
import KittyImage from './KittyImage'
import { connect } from 'react-redux'
import {fetchKitty} from './actions'
class KittyContainer extends Component {

  componentDidMount() {
    const hardCoded = '0xc9b6628b0C44fe39170CFFCc3bd2cbECf15F7B5e'
    this.props.fetchKitty(hardCoded)
  }

  render() {
    return (
      <div className="">
        {this.props.kittySrc && <KittyImage kittySrc={this.props.kittySrc}/>}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    kittySrc: state.get('kitty').src
  }
}

export default connect(mapStateToProps, {fetchKitty})(KittyContainer)
