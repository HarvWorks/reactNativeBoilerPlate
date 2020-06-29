import React, { FunctionComponent } from "react";
import { Text, TextStyle } from "react-native";

import styles from "./styles";

interface IProps {
  style?: TextStyle;
}

const BoldText: FunctionComponent<IProps> = props => {
  const { children, style } = props;
  const { fontFamily, bold } = styles;
  let combinedStyles = [];

  combinedStyles.push(fontFamily);
  combinedStyles.push(bold);
  if (style) {
    combinedStyles.push(style);
  }

  return <Text style={combinedStyles}>{children}</Text>;
};

export default BoldText;
