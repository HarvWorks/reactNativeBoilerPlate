import React, { SFC } from "react";

import styles from "./styles";
import i18n from "../../../../i18n";
import CheckoutCells from "../common/CheckoutCells";
import BoldText from "../../common/BoldText";

const CheckoutFirstCell: SFC = props => {
  const { checkoutTitle } = styles
  return (
    <CheckoutCells>
      <BoldText style={checkoutTitle}>{i18n.t("Checkout.checkout")}</BoldText>
    </CheckoutCells>
  );
};

export default CheckoutFirstCell;
