import React, { SFC } from "react";

import styles from "./styles";
import BoldText from "../../common/BoldText";
import { TouchableOpacity, View } from "react-native";

interface IProps {
  onPress: () => void;
  text: String;
}

const RoundedButton: SFC<IProps> = props => {
  const { onPress, text } = props;
  const { roundedButton, buttonText } = styles;
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={roundedButton}>
        <BoldText style={buttonText}>{text}</BoldText>
      </View>
    </TouchableOpacity>
  );
};

export default RoundedButton;
