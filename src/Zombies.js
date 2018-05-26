import React, { Component } from 'react'
import Zombie from './zombie.js'

class Zombies extends Component {

  constructor(props) {
    super(props)
    this.displayZombies = this.displayZombies.bind(this)
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
    return (
      <div>
        {this.displayZombies(this.props.zombies)}
      </div>
    )
  }
}

export default Zombies
