import React, { FunctionComponent, useState } from "react";
import { View, TouchableOpacity } from "react-native";

import styles from "./styles";
import StylizedText from "../../common/StyledText";

interface IProps {
  openText: String;
  closeText: String;
}

const Expander: FunctionComponent<IProps> = props => {
  const { openText, closeText } = props;
  const { expanderStyles, underlined, expanderInnerContainer } = styles;
  const [expandedValue, setExpanded] = useState(false);
  const toggleExpanderHandler = () => setExpanded(!expandedValue);
  let content = (
    <TouchableOpacity onPress={toggleExpanderHandler}>
      <StylizedText>
        <StylizedText style={underlined}>{openText}</StylizedText> +
      </StylizedText>
    </TouchableOpacity>
  );

  if (expandedValue) {
    content = (
      <>
        <TouchableOpacity onPress={toggleExpanderHandler}>
          <StylizedText>
            <StylizedText style={underlined}>{closeText}</StylizedText> -
          </StylizedText>
        </TouchableOpacity>
        <View style={expanderInnerContainer}>{props.children}</View>
      </>
    );
  }

  return <View style={expanderStyles}>{content}</View>;
};

export default Expander;
