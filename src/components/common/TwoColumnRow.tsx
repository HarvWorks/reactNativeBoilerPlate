import React, { SFC } from "react";
import { View, ViewStyle } from "react-native";

import styles from "./styles";

interface IProps {
  left?: any;
  right?: any;
  style?: ViewStyle
}

const TwoColumnRow: SFC<IProps> = props => {
  const { left, right, style } = props
  const { rowPricing } = styles;

  return (
    <View style={[rowPricing, style]}>
      {left}
      {right}
    </View>
  );
};

export default TwoColumnRow;
