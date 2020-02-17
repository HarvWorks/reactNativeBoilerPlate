import React, { PureComponent } from "react";

import styles from "./styles";
import i18n from "../../../../i18n";
import CheckoutCells from "../common/CheckoutCells";
import TwoColumnRow from "../../common/TwoColumnRow";
import BoldText from "../../common/BoldText";
import Expander from "../common/Expander";
import { IItem } from "../../../../types/checkout";
import StylizedText from "../../common/StyledText";
import CheckoutItem from "../common/CheckoutItem";

interface IProps {
  dollarSymbol: String;
  totalPrice: String;
  listOfItems: IItem[];
}

class CheckoutThirdCell extends PureComponent<IProps> {
  getRenderItems = () => {
    const { listOfItems, dollarSymbol } = this.props;
    const { grey } = styles;
    let renderItems;

    if (listOfItems && listOfItems.length > 0) {
      renderItems = listOfItems.map((item, index) => {
        return (
          <CheckoutItem
            key={index}
            first={index === 0}
            dollarSymbol={dollarSymbol}
            item={item}
          />
        );
      });
    } else {
      renderItems = (
        <StylizedText style={grey}>{i18n.t("Checkout.noItems")}</StylizedText>
      );
    }

    return renderItems;
  };

  render() {
    const { dollarSymbol = "", totalPrice = "" } = this.props;
    const { checkoutPrice, checkoutPriceDesc } = styles;

    const renderItems = this.getRenderItems();
    return (
      <CheckoutCells>
        <TwoColumnRow
          left={
            <BoldText style={checkoutPriceDesc}>
              {i18n.t("Checkout.total")}
            </BoldText>
          }
          right={
            <BoldText style={checkoutPrice}>
              {`${dollarSymbol} ${totalPrice}`}
            </BoldText>
          }
        />
        <Expander
          openText={i18n.t("Checkout.seeDetails")}
          closeText={i18n.t("Checkout.hideDetails")}>
          {renderItems}
        </Expander>
      </CheckoutCells>
    );
  }
}

export default CheckoutThirdCell;
