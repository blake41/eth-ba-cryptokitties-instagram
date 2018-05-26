import React, { Component } from 'react'
import { connect } from 'react-redux'
// import logo from './logo.svg'
import './App.css'
import ZombieForm from "./ZombieForm"
import SomeComponent from './SomeComponent'
import LoadZombiesContainer from './LoadZombiesContainer'
import { creators, selectors } from './statesauce/src/statesauce'
import zombiefactory_artifacts from '../build/contracts/ZombieFactory.json'
import zombiehelper_artifacts from '../build/contracts/ZombieHelper.json'
class App extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount () {
    this.props.sauceIt('http://127.0.0.1:7545')
    this.props.initializeContract(zombiefactory_artifacts)
    this.props.initializeSecondContract(zombiehelper_artifacts)
  }

  render () {
    return (
      <div className='App'>
        {this.props.secondContract ? (
          <div>
            <div>
              <ZombieForm zombieHelper={this.props.secondContract} user={this.props.defaultAccount}/>
            </div>
            <div>
              <SomeComponent zombieHelper={this.props.secondContract} user={this.props.defaultAccount}/>
            </div>
            <div>
              <LoadZombiesContainer zombieHelper={this.props.secondContract} user={this.props.defaultAccount}/>
            </div>
          </div>
        ) : (
          <div></div>
        )

        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  defaultAccount: selectors.fromStore.getDefaultAccount(state),
  contract: selectors.fromStore.getContract(state),
  secondContract: selectors.fromStore.getSecondContract(state)
})

const mapDispatchToProps = dispatch => ({
  sauceIt (rpcAddr) {
    dispatch(creators.initWeb3Request(rpcAddr))
  },
  initializeContract (artifact) {
    dispatch(creators.initContractRequest(artifact))
  },
  initializeSecondContract (artifact) {
    dispatch(creators.initSecondContractRequest(artifact))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
