import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import IndexRouter from './router';
import configStore from './store/index'

import './App.css';
const store = configStore()


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <IndexRouter/>
      </Provider>
    );
  }
}

export default App;
