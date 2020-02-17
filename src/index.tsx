/**
 * This is the main index page for the app
 */

import React, { Component } from 'react';
import { createAppContainer } from "react-navigation";
import { Provider } from 'react-redux';

import rootNavigator from "./components/navigation/rootNavigator"
import configureStore from './store/configureStore';

const AppContainer = createAppContainer(rootNavigator);
const store = configureStore();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer/>
      </Provider>
    );
  }
}
