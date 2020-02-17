import { StyleSheet } from "react-native";

import commonColor from "../../../constants/commonColor";

const buttonHeight = 25;

const styles = StyleSheet.create({
  scrollViewContainer: {
    height: "100%",
  },
  container: {
    flexDirection: "row",
    paddingVertical: 50,
  },
  spacers: {
    flex: 0.1,
  },
  shadowContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: commonColor.white,
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 10,
    borderColor: commonColor.grey,
    elevation: 1,
    shadowColor: commonColor.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    flex: 1,
    maxWidth: 250,
  },
  cells: {
    paddingVertical: 15,
    width: "100%",
  },
  cellsDivider: {
    borderBottomColor: commonColor.grey,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  expanderStyles: {
    paddingVertical: 10,
  },
  underlined: {
    textDecorationLine: "underline",
  },
  roundedButton: {
    borderColor: commonColor.black,
    borderRadius: buttonHeight / 2,
    height: buttonHeight,
  },
  buttonText: {
    fontSize: 15,
  },
  expanderInnerContainer: {
    paddingTop: 15,
  },
  imageStyle: {
    width: 50,
    height: 50,
  },
  checkoutItemSpacing: {
    marginTop: 15,
  },
  rightStyle: {
    flex: 1,
    paddingLeft: 15,
  },
  itemPaddingTop: {
    paddingTop: 10,
  },
  tooltipStyle: {
    borderRadius: 5,
    borderColor: commonColor.grey,
    elevation: 1,
    shadowColor: commonColor.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    width: 200,
    backgroundColor: commonColor.white,
    padding: 25,
  },
  upTriangle: {
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderLeftWidth: 15,
    borderRightWidth: 15,
    borderBottomWidth: 30,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: commonColor.white,
    elevation: 1,
    shadowColor: commonColor.black,
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    zIndex: 2,
  },
  background: {
    flex: 1,
    backgroundColor: "transparent",
  },
});

export default styles;
