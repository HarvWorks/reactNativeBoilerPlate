import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

/* Screens Stack */
import CheckoutScreen from "../../containers/Checkout/Checkout";

const RootStack = createStackNavigator();

const RootStackNavigator = () => (
  <RootStack.Navigator>
    <RootStack.Screen name="Checkout" component={CheckoutScreen} />
  </RootStack.Navigator>
);

export default RootStackNavigator;
