import React, { Component } from 'react';

import MyViewWithReduxConnect from './myCode/MyViewWithRedux'
import { Provider } from 'react-redux'

import { createStore } from 'redux'
import numberReducer from './myCode/MyReducer'

const initStore = {number: 5}
let store = createStore(numberReducer, initStore)

class AppRedux extends Component {
  render() {
    return (
        <Provider store={store}>
      <div className="App">
        <MyViewWithReduxConnect />
      </div>
      </Provider>
    );
  }
}

export default AppRedux;
