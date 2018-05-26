import React, { Component } from 'react'
import { connect } from 'react-redux'

import Zombie from './zombie.js'
import NameForm from './form.js'
import { createZombie } from './actions'

class ZombieForm extends Component {

  constructor(props) {
    super(props)
    this.state = {formValue: ""}
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({formValue: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.createZombie(this.props.user, this.props.zombieHelper, this.state.formValue)
  }

  render() {
    return (
      <div>
        <NameForm handleChange={this.handleChange} handleSubmit={this.handleSubmit} value={this.state.formValue}/>
      </div>
    )
  }
}

export default connect(null, {createZombie})(ZombieForm)
