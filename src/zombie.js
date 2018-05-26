import React, { Component } from 'react'
import './css/zombie.css'
class Zombie extends Component {
  constructor(props) {
    super(props);
  }

  headSrc(i) {
    return require("../public/images/head-" + i + "@2x.png")
  }

  eyeSrc(i) {
    return require("../public/images/eyes-" + i + "@2x.png")
  }

  shirtSrc(i) {
    return require("../public/images/shirt-" + i + "@2x.png")
  }

  headClass(i) {
    return `head head-part-${i}`;
  }

  eyeClass(i) {
    return `eye eye-part-${i}`;
  }

  shirtClass(i) {
    return `shirt shirt-part-${i}`;
  }

  currentHeadChoice(dna) {
    return parseInt(dna.substring(0, 2)) % 7 + 1
  }

  currentShirtChoice(dna) {
    return parseInt(dna.substring(4, 6)) % 6 + 1
  }

  currentEyeChoice(dna) {
    return parseInt(dna.substring(2, 4)) % 11 + 1
  }

  render() {
    const catlegs = {display: 'none'}
    return (
      <div className="zombie-preview">
        <div className="zombie-char">
          <div className="zombie-loading zombie-parts">
            <div className="zombie-parts" className="partsVisible">
              <img className="left-feet" src={require("../public/images/left-feet-1@2x.png")}></img>
              <img className="right-feet" src={require("../public/images/right-feet-1@2x.png")}></img>
              <img className="left-leg" src={require("../public/images/left-leg-1@2x.png")}></img>
              <img className="right-leg" src={require("../public/images/right-leg-1@2x.png")}></img>


              <img className="left-thigh" src={require("../public/images/left-thigh-1@2x.png")}></img>
              <img className="right-thigh" src={require("../public/images/right-thigh-1@2x.png")}></img>

              <img className="right-upper-arm" src={require("../public/images/right-upper-arm-1@2x.png")}></img>

              <img className="torso" src={require("../public/images/torso-1@2x.png")}></img>
              <img className="cat-legs" src={require('../public/images/catlegs.png')} style={catlegs}></img>

              <img className={this.shirtClass(this.currentShirtChoice(this.props.dna))} src={this.shirtSrc(this.currentShirtChoice(this.props.dna))}></img>

              <img className="left-upper-arm" src={require("../public/images/left-upper-arm-1@2x.png")}></img>
              <img className="left-forearm" src={require("../public/images/left-forearm-1@2x.png")}></img>
              <img className="right-forearm" src={require("../public/images/right-forearm-1@2x.png")}></img>


              <img className="left-hand" src={require("../public/images/hand1-1@2x.png")}></img>
              <img className="right-hand" src={require("../public/images/hand-2-1@2x.png")}></img>
              <img className={this.headClass(this.currentHeadChoice(this.props.dna))} src={this.headSrc(this.currentHeadChoice(this.props.dna))}></img>
              <img className={this.eyeClass(this.currentEyeChoice(this.props.dna))} src={this.eyeSrc(this.currentEyeChoice(this.props.dna))}></img>
              <img className="mouth" src={require("../public/images/mouth-1@2x.png")}></img>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Zombie
