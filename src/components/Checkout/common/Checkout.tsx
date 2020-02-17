import React, { SFC } from "react";
import { View, ScrollView } from "react-native";

import styles from "./styles";

const CheckoutComponent: SFC = props => {
  const { children } = props;
  const { container, shadowContainer, spacers, scrollViewContainer } = styles;
  return (
    <ScrollView style={scrollViewContainer}>
      <View style={container}>
        <View style={spacers} />
        <View style={shadowContainer}>{children}</View>
        <View style={spacers} />
      </View>
    </ScrollView>
  );
};

export default CheckoutComponent;
