import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class KittySelect extends Component {

  componentDidMount() {
  }

  render() {
    return (
      <div className="flex flex-column w-100 items-center justify-around">

        <div className="flex w-100 justify-center mb3">
          <h1 className="f1 tc fw4 ttu uppercase ma0 z-999 dark-blue">Select your Kitty</h1>
        </div>

        <div className="flex w-100 mw8 flex-row-ns flex-column justify-center">
          <Link className="link w-100" to="/capture">
            <div className="flex flex-column items-center w-100 mw6 br1 pointer br--left shadow-hover shadow-0  ">
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
              <div className="flex w-100 tc justify-content-center ba bw2 f1 dark-blue ph5 pv1 bg-white-50 font-adieu ttu uppercase ">
                Select
              </div>
            </div>
          </Link>
          <Link className="link w-100" to='/kittySelect'>
            <div className="flex flex-column items-center w-100 mw6 br1 br--left">
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
              <div className="flex w-100 tc justify-content-center ba bw2 f1 dark-blue ph5 pv1 bg-white-50 font-adieu ttu uppercase ">
                Soon
              </div>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}


export default KittySelect
