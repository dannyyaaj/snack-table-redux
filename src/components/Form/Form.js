import React, { Component } from 'react';
import { connect } from 'react-redux';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newSnack: ''
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.dispatch({type: 'ADD_SNACK', payload: this.state.newSnack});
  }

  handleSnackInput = (event) => {
    this.setState({
      newSnack: event.target.value
    })
  }

  render() {
    console.log(this.state.newSnack)
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleSnackInput} placeholder="Enter Snack"/>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default connect()(Form);