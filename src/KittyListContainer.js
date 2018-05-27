import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getKitties } from './actions'
import KittyList from './KittyList'
import { selectors } from './statesauce/src/statesauce'
import KittyRetriever from './KittyRetriever'
class KittyListContainer extends Component {

  render() {
    return (
      <div>
        { this.props.contract && this.props.userAccount && 
          <KittyRetriever
          getKitties={this.props.getKitties}
          contract={this.props.contract}
          userAccount={this.props.userAccount}
          />
        }
        { this.props.kitties && <KittyList kitties={this.props.kitties}/>}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    kitties: state.get('kitties'),
    userAccount: selectors.fromStore.getDefaultAccount(state),
    contract: selectors.fromStore.getContract(state)
  }
}

export default connect(mapStateToProps, {getKitties})(KittyListContainer)
