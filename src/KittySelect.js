import React, { Component } from 'react'

class KittySelect extends Component {

  componentDidMount() {
  }

  render() {
    return (
      <div className="flex flex-column w-100 items-center justify-around">

        <div className="flex w-100 justify-center">
          <h1 className="f1 tc fw4 ttu uppercase ma0 z-999">Select your Kitty</h1>
        </div>

        <div className="flex w-100 flex-row-ns flex-column justify-around">
          <div className="flex flex-column items-center w-100 mw6 bg-washed-red br1 shadow-hover shadow-3-ns shadow-0 pointer">
            <img className="dn w-100 mw6" src={this.props.kittySrc}></img>
            <img className="flex w-100 mw7" src="./images/ck01.svg"></img>
            <div className="w-100 justify-center">
              <h3 className="f3 dark-blue tc ttu uppercase mt0">
                Use Our Kitty
              </h3>
              <h3 className="f4 green tc ttu uppercase">
                (Fastest & Easiest)
              </h3>
            </div>
          </div>
          <div className="flex relative flex-column items-center w-100 mw6 bg-washed-blue br1 shadow-hover shadow-3-ns shadow-0 pointer">
            <h3 className="absolute f1-ns f3 hot-pink o-80 z-999 rotate45 left0 center-align ttu uppercase">
              Coming Soon
            </h3>
            <img className="dn w-100 mw6" src={this.props.kittySrc}></img>
            <img className="flex w-100 mw7 o-50" src="./images/ck03.svg"></img>
            <div className="w-100 justify-center">

              <h3 className="f3 dark-blue tc ttu uppercase mt0">
                Use Your Kitty
              </h3>
              <h3 className="f4 dark-blue tc ttu uppercase">
                (Import via MetaMask)
              </h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default KittySelect
