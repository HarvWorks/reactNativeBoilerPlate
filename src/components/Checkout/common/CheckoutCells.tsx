import React, { FunctionComponent } from "react";
import { View } from "react-native";

import styles from "./styles";

interface IProps {
  isBottom?: Boolean;
  style?: object;
}

const CheckoutCells: FunctionComponent<IProps> = props => {
  const { children, isBottom, style } = props;
  const { cells, cellsDivider } = styles;
  let cellStyles = [];

  cellStyles.push(cells);

  if (!isBottom) {
    cellStyles.push(cellsDivider);
  }
  if (style) {
    cellStyles.push(style);
  }

  return <View style={cellStyles}>{children}</View>;
};

export default CheckoutCells;
