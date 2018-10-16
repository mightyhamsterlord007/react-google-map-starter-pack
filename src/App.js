import React, { Component } from 'react';
import Home from './components/layout/Home';
import { Provider } from 'react-redux';
import store from './stores';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    );
  }
}

export default App;
