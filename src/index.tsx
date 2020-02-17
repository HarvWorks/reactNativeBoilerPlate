/**
 * This is the main index page for the app
 */

import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";

import RootNavigator from "./components/navigation/rootNavigator";
import configureStore from "./store/configureStore";

const store = configureStore();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </Provider>
    );
  }
}
