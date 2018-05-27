import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class AlexHome extends Component {

  componentDidMount() {
    console.log('hello')
  }

  render() {
    return (
      <div className="flex flex-column justify-around items-center w-100 h-100 pa4-ns pa2">
        <div className="flex flex-column items-center justify-center w-100">
          <h1 className="f-headline-l f-subheadline-m f2 dark-blue ma0">KITTYGRAM</h1>
          <h4 className="flex f4 ma0 dark-blue font-adieu ttu uppercase">
          Capture the absurdity of life with your cryptokitty
          </h4>
        </div>
        <div className="flex w-100 items-center justify-center">
          <img className="flex mw6" src="./images/cateyes.svg" />
        </div>
        <Link className="link" to="/kittySelect">
        <div className="flex ba bw2 f1 dark-blue ph5 pv1 bg-white-50 font-adieu ttu uppercase shadow-hover">
          Start
        </div>
        </Link>
      </div>
    );
  }
}


export default AlexHome
