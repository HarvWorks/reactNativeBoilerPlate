import React, { FunctionComponent } from "react";

import i18n from "../../../../i18n";
import CheckoutCells from "../common/CheckoutCells";
import Expander from "../common/Expander";
import PromoCode from "./PromoCode";

const CheckoutFourthCell: FunctionComponent = () => (
  <CheckoutCells isBottom>
    <Expander
      openText={i18n.t("Checkout.showCoupon")}
      closeText={i18n.t("Checkout.hideCoupon")}>
      <PromoCode />
    </Expander>
  </CheckoutCells>
);

export default CheckoutFourthCell;
