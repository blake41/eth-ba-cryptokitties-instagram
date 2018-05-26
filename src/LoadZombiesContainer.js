import React, { Component } from 'react'
import Zombies from './Zombies'

class LoadZombiesContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {zombies: []}
    this.loadZombies = this.loadZombies.bind(this)
    this.getZombiesByOwner = this.getZombiesByOwner.bind(this)
    this.getZombieDetail = this.getZombieDetail.bind(this)
    this.getZombieDetails = this.getZombieDetails.bind(this)
    this.persistZombie = this.persistZombie.bind(this)
  }

  componentDidMount() {
    this.loadZombies(this.props.user)
  }

  loadZombies(account) {
    this.getZombiesByOwner(account).then((ids) => {
      this.getZombieDetails(ids.map((id)=>{
        return id.toNumber()
      }));
    })
  }

  getZombiesByOwner(address){
    return this.props.zombieHelper.getZombiesByOwner.call(address);
  }

  getZombieDetails(ids) {
    ids.forEach((id) => {
      this.getZombieDetail(id);
    })
  }

  getZombieDetail(id) {
    this.props.zombieHelper.zombies(id).then((result) => {
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

  render() {
    return (
      <div>
        {this.state.zombies.length > 0 ? <Zombies zombies={this.state.zombies}/> : null}
      </div>
    )
  }
}

export default LoadZombiesContainer
