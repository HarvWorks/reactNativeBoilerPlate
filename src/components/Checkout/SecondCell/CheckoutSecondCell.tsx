import React, { SFC } from "react";
import { View } from "react-native";

import i18n from "../../../../i18n";
import CheckoutCells from "../common/CheckoutCells";
import TwoColumnRow from "../../common/TwoColumnRow";
import StylizedText from "../../common/StyledText";
import BoldText from "../../common/BoldText";

import styles from "./styles";
import Tooltip from "../common/Tooltip";

interface IProps {
  dollarSymbol: String;
  subtotalPrice: String;
  pickupSavings: String;
  taxes: String;
  zipCode: String;
}

const CheckoutSecondCell: SFC<IProps> = props => {
  const {
    dollarSymbol = "",
    subtotalPrice = "",
    pickupSavings = "",
    taxes = "",
    zipCode = "Zip",
  } = props;
  const { red, spacedText, underlined, container } = styles;

  let savingsText;

  if (pickupSavings && pickupSavings.substring(0, 1) !== "0") {
    savingsText = (
      <BoldText style={red}>{`-${dollarSymbol} ${pickupSavings}`}</BoldText>
    );
  } else {
    savingsText = <BoldText>{`${dollarSymbol} ${pickupSavings}`}</BoldText>;
  }

  const taxesText = (
    <View>
      <StylizedText>{i18n.t("Checkout.taxes")}</StylizedText>
      <StylizedText>{`(${i18n.t(
        "Checkout.taxBased",
      )} ${zipCode})`}</StylizedText>
    </View>
  );

  const pickupSavingsText = (
    <Tooltip
      toolTipLink={
        <StylizedText style={underlined}>
          {i18n.t("Checkout.pickupSavings")}
        </StylizedText>
      }
      toolTipText={i18n.t("Checkout.pickupSavingsDesc")}
    />
  );

  return (
    <CheckoutCells style={container}>
      <TwoColumnRow
        style={spacedText}
        left={<StylizedText>{i18n.t("Checkout.subtotal")}</StylizedText>}
        right={<BoldText>{`${dollarSymbol} ${subtotalPrice}`}</BoldText>}
      />
      <TwoColumnRow
        style={spacedText}
        left={pickupSavingsText}
        right={savingsText}
      />
      <TwoColumnRow
        style={spacedText}
        left={taxesText}
        right={
          <BoldText>
            {dollarSymbol} {taxes}
          </BoldText>
        }
      />
    </CheckoutCells>
  );
};

export default CheckoutSecondCell;
