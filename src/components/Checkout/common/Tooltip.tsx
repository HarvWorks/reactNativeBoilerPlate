/* eslint-disable react-native/no-inline-styles */
import React, { createRef, FunctionComponent, useState } from "react";
import { View, TouchableOpacity, Modal } from "react-native";

import styles from "./styles";
import StylizedText from "../../common/StyledText";

interface IProps {
  toolTipLink: any;
  toolTipText: String;
  state?: IState;
}

interface IState {
  tooltipExtended: boolean;
  yValue: number;
  xValue: number;
}

const Tooltip: FunctionComponent<IProps> = ({
  toolTipLink,
  toolTipText,
  state = {
    tooltipExtended: false,
    yValue: 0,
    xValue: 0,
  },
}) => {
  const { tooltipStyle, upTriangle, background } = styles;
  const btnRef = createRef<TouchableOpacity>();
  const [stateValue, setState] = useState(state);
  const { tooltipExtended, yValue, xValue } = stateValue;
  let toolTip = null;

  const toggleTooltipHandler = () => {
    if (!tooltipExtended && btnRef.current) {
      btnRef.current.measureInWindow((x, y, containerWidth) => {
        setState({
          tooltipExtended: !tooltipExtended,
          xValue: x + containerWidth / 2,
          yValue: y,
        });
      });
    } else {
      setState({
        ...stateValue,
        tooltipExtended: !tooltipExtended,
      });
    }
  };

  if (tooltipExtended) {
    console.info("tooltip");
    toolTip = (
      <TouchableOpacity onPress={toggleTooltipHandler} style={background}>
        <View
          style={{
            top: yValue + 20,
            left: xValue - 200,
            alignContent: "center",
            alignItems: "center",
          }}>
          <View style={upTriangle} />
          <View style={tooltipStyle}>
            <StylizedText>{toolTipText}</StylizedText>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <View>
      <TouchableOpacity onPress={toggleTooltipHandler} ref={btnRef}>
        {toolTipLink}
      </TouchableOpacity>
      <Modal
        visible={tooltipExtended}
        transparent={true}
        onRequestClose={toggleTooltipHandler}>
        {toolTip}
      </Modal>
    </View>
  );
};

export default Tooltip;
