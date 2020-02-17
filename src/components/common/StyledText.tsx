import React, { SFC } from "react";
import { Text, TextStyle } from "react-native";

import styles from "./styles";

interface IProps {
  style?: TextStyle;
}

const StylizedText: SFC<IProps> = props => {
  const { children, style } = props
  const { fontFamily } = styles
  let combinedStyles = [];

  combinedStyles.push(fontFamily);
  if (style) combinedStyles.push(style);

  return (
    <Text style={combinedStyles}>{children}</Text>
  )
};

export default StylizedText;
