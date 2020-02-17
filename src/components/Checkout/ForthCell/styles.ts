import { StyleSheet } from "react-native";

import commonColor from "../../../constants/commonColor";

const styles = StyleSheet.create({
  colorGrey: {
    color: commonColor.darkGrey
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10
  },
  colorRed: {
    color: commonColor.red
  },
  inputBox: {
    padding: 2,
    height: 30,
    backgroundColor: commonColor.white,
  },
  inputContainer: {
    borderColor: commonColor.lightGrey,
    borderWidth: 1,
    flex: 1,
    marginRight: 10,
    borderRadius: 4
  }
});

export default styles;
