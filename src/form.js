import React, { Component } from 'react'

class NameForm extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.props.value} onChange={this.props.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default NameForm
