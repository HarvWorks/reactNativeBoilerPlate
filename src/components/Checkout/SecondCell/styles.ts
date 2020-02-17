import { StyleSheet } from "react-native";

import commonColor from "../../../constants/commonColor";

const styles = StyleSheet.create({
  container: {
    zIndex: 1,
  },
  red: {
    color: commonColor.red,
  },
  spacedText: {
    paddingVertical: 12,
  },
  underlined: {
    textDecorationLine: "underline",
  },
});

export default styles;
