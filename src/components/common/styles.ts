import { StyleSheet, Platform } from "react-native";

import commonColor from "../../constants/commonColor";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingTop: 50,
  },
  bold: {
    fontWeight: "600"
  },
  fontFamily: {
    // TODO: Add font family packs
    // fontFamily: Platform.OS === "ios" ? "San Francisco" : "sans-serif", 
    color: commonColor.black,
    fontSize: 14
  },
  rowPricing: {
    justifyContent: "space-between",
    flexDirection: "row",
  }
});

export default styles;
