import React, { Component } from 'react'
import { Link } from 'react-router'
import { HiddenOnlyAuth, VisibleOnlyAuth } from './util/wrappers.js'

// UI Components
// import LoginButtonContainer from './user/ui/loginbutton/LoginButtonContainer'
// import LogoutButtonContainer from './user/ui/logoutbutton/LogoutButtonContainer'

// Styles
import './css/oswald.css'
import './css/open-sans.css'
import './css/pure-min.css'
import './App.css'

import addresses from "./addresses.json";
const { zombieHelperAddress, zombieFactoryAddress } = addresses;
import { default as contract } from 'truffle-contract'
import zombiefactory_artifacts from '../build/contracts/ZombieFactory.json'
import zombiehelper_artifacts from '../build/contracts/ZombieHelper.json'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {zombies: []}
    this.instantiateContract = this.instantiateContract.bind(this);
    this.createZombie = this.createZombie.bind(this);
    this.createBlakeZombie = this.createBlakeZombie.bind(this);
    this.getAccounts = this.getAccounts.bind(this);
    this.getFirstAccount = this.getFirstAccount.bind(this);
    this.getZombieDetails = this.getZombieDetails.bind(this);
    this.getZombiesByOwner = this.getZombiesByOwner.bind(this);
    this.displayZombies = this.displayZombies.bind(this);
    this.getZombieDetail = this.getZombieDetail.bind(this);
    this.persistZombie = this.persistZombie.bind(this);
    this.loadZombies = this.loadZombies.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  componentWillMount() {
    // Get network provider and web3 instance.
    // See utils/getWeb3 for more info.

    // getWeb3
    // .then(results => {
    //   this.setState({
    //     newWeb3: results.newWeb3,
    //     oldWeb3: results.oldWeb3
    //   })
    //
    //   // Instantiate contract once web3 provided.
    //   this.instantiateContract()
    // })
    // .catch((error) => {
    //   console.log('Error finding web3.')
    // })
  }

  async instantiateContract() {
    var zombieHelperTwo = new this.state.newWeb3.eth.Contract(zombiehelper_artifacts.abi, zombieFactoryAddress)
    var zombiefactory = contract(zombiefactory_artifacts);
    zombiefactory.setProvider(this.state.oldWeb3.currentProvider);
    var zombieFactoryInstance = zombiefactory.at(zombieFactoryAddress);
    var zombiehelper = contract(zombiehelper_artifacts);
    zombiehelper.setProvider(this.state.oldWeb3.currentProvider);
    var zombieHelperInstance = zombiehelper.at(zombieHelperAddress);
    this.setState({
      zombieHelper: zombieHelperInstance,
      zombieFactory: zombieFactoryInstance,
      zombieHelperTwo: zombieHelperTwo
    })
    var account = await this.getFirstAccount()
    this.loadZombies(account)
    this.state.zombieHelper.NewZombie((err, event) => {
      var id = event.args.zombieId.toNumber()
      delete event.args.zombieId
      event.args.dna = event.args.dna.toNumber()
      this.setState(prevState => {
        zombies: prevState.zombies[id] = event.args
      })
    })
  }

  loadZombies(account) {
    this.getZombiesByOwner(account).then((ids) => {
      this.getZombieDetails(ids.map((id)=>{
        return id.toNumber()
      }));
    })
  }

  async createBlakeZombie() {
    var userAccount = await this.getFirstAccount();
    this.createZombie("blake")
  }
  async createZombie(name) {
    var userAccount = await this.getFirstAccount();
    this.state.zombieHelper.createRandomZombie(name, {gas: 540000, from: userAccount})
  }
  async getAccounts() {
    return await this.state.newWeb3.eth.getAccounts();
  }
  async getFirstAccount() {
    var accounts = await this.getAccounts();
    return accounts[0];
  }
  getZombieDetails(ids) {
    ids.forEach((id) => {
      this.getZombieDetail(id);
    })
  }

  getZombieDetail(id) {
    this.state.zombieHelper.zombies(id).then((result) => {
      this.persistZombie(result, id)
    });
  }

  persistZombie(result, id) {
    var formatted = result.map((zombie) => {
      if (zombie.toNumber) {
        return zombie.toNumber()
      } else {
        return zombie
      }
    })
    var named = {
      name: formatted[0],
      dna: formatted[1],
      level: formatted[2],
      wins: formatted[3],
      losses: formatted[4],
      readyTime: formatted[5]
    }
    this.setState(prevState => {
      zombies: prevState.zombies[id] = named
    })
  }

  getZombiesByOwner(address){
    return this.state.zombieHelper.getZombiesByOwner.call(address);
  }
  displayZombies(zombies) {
    var ids = Object.keys(zombies)
    return ids.map((zombieId, index) => {
      var zombie = zombies[zombieId]
      return(
        <div className="zombie-container" key={index}>
          <div className="zombie-info">
            <ul>
              <li>Name: {zombie.name}</li>
              <li>DNA: {zombie.dna}</li>
              <li>Level: {zombie.level}</li>
              <li>Wins: {zombie.wins}</li>
              <li>Losses: {zombie.losses}</li>
              <li>Ready Time: {zombie.readyTime}</li>
            </ul>
          </div>
          <Zombie dna={`${zombie.dna}`}/>
        </div>
      )
    })
  }

  render() {
    // const OnlyAuthLinks = VisibleOnlyAuth(() =>
    //   <span>
    //     <li className="pure-menu-item">
    //       <Link to="/dashboard" className="pure-menu-link">Dashboard</Link>
    //     </li>
    //     <li className="pure-menu-item">
    //       <Link to="/profile" className="pure-menu-link">Profile</Link>
    //     </li>
    //     <LogoutButtonContainer />
    //   </span>
    // )
    //
    // const OnlyGuestLinks = HiddenOnlyAuth(() =>
    //   <span>
    //     <li className="pure-menu-item">
    //       <Link to="/signup" className="pure-menu-link">Sign Up</Link>
    //     </li>
    //     <LoginButtonContainer />
    //   </span>
    // )
    // {this.displayZombies(this.state.zombies)}

    return (
      <div className="App">

        <main className="container">
          <div className="pure-g">
            <div className="pure-u-1-1">
            </div>
          </div>
        </main>
        {this.props.children}
      </div>
    );
  }
}

export default App
