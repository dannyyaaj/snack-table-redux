import React, { Component } from 'react';
import { connect } from 'react-redux';

class SnackList extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    let newSnacks = []
    newSnacks = this.props.snackList.map((snack, index) => {
      return (<li key={index}>{snack}</li>)
    })
    return (
      <div>
        <ul>
          {newSnacks}
        </ul>
      </div>
    )
  }
}

const mapReduxStateToProps = (reduxState) => {
  console.log(reduxState, 'snackList');
  return {
    snackList: reduxState
  }
}

export default connect(mapReduxStateToProps)(SnackList);
