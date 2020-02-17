import React, { PureComponent } from "react";
import { View, TouchableOpacity } from "react-native";

import styles from "./styles";
import StylizedText from "../../common/StyledText";
import i18n from "../../../../i18n";

interface IProps {
  openText: String;
  closeText: String;
}

interface IState {
  expanded: Boolean;
}

class Expander extends PureComponent<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      expanded: false
    }
  }

  toggleExpanderHandler = () => {
    const { expanded } = this.state
    this.setState({ expanded: !expanded })
  }

  render() {
    const { children, openText, closeText } = this.props
    const { expanded } = this.state
    const { expanderStyles, underlined, expanderInnerContainer } = styles;

    let content = (
      <TouchableOpacity onPress={this.toggleExpanderHandler}>
        <StylizedText><StylizedText style={underlined}>{openText}</StylizedText> +</StylizedText>
      </TouchableOpacity>
    )

    if (expanded) {
      content = (
        <>
          <TouchableOpacity onPress={this.toggleExpanderHandler}>
            <StylizedText><StylizedText style={underlined}>{closeText}</StylizedText> -</StylizedText>
          </TouchableOpacity>
          <View style={expanderInnerContainer}>
            {children}
          </View>
        </>
      )
    }

    return (
      <View style={expanderStyles}>
        {content}
      </View>
      
    );
  }
};

export default Expander;
