import React, { Component } from 'react';
import Form from './components/Form/Form';
import SnackList from './components/SnackList/SnackList'


class App extends Component {
  render() {
    return (
      <div>
        <Form />
        <SnackList />
      </div>
    );
  }
}

export default App;
