/**
 * This is where the actual logic for checkout lives
 */

import React, { Component } from "react";
import { SafeAreaView } from "react-native";

import { connect } from "react-redux";

import { ICheckoutReducer, IUserReducer } from "../../store/reducers";
import { getCheckoutInfo } from "../../store/selectors/getCheckout";
import { getUserInfo } from "../../store/selectors/getUser";
import {
  initalizeItems,
  initalizeUser,
  applyCouponCode,
  togglePickup,
} from "../../store/actions";

import CheckoutComponent from "../../components/Checkout/common/Checkout";
import CheckoutFirstCell from "../../components/Checkout/FirstCell/CheckoutFirstCell";
import CheckoutSecondCell from "../../components/Checkout/SecondCell/CheckoutSecondCell";
import CheckoutThirdCell from "../../components/Checkout/ThirdCell/CheckoutThirdCell";
import CheckoutFourthCell from "../../components/Checkout/ForthCell/CheckoutFourthCell";

interface IProps {
  checkoutInfo: ICheckoutReducer;
  userInfo: IUserReducer;
  initalizeItems: () => void;
  initalizeUser: () => void;
  applyCouponCode: (code: string) => void;
  togglePickup: () => void;
}

interface IState {
  decimalPlaces: number;
}

const mapStateToProps = (state: any) => ({
  checkoutInfo: getCheckoutInfo(state),
  userInfo: getUserInfo(state),
});

const mapDispatchToProps = (dispatch: any) => ({
  initalizeItems: () => initalizeItems()(dispatch),
  initalizeUser: () => initalizeUser()(dispatch),
  applyCouponCode: (code: string) => applyCouponCode(code)(dispatch),
  togglePickup: () => togglePickup()(dispatch),
});

class Checkout extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    props.initalizeItems();
    props.initalizeUser();
    this.state = {
      decimalPlaces: 2,
    };
  }

  render() {
    const { decimalPlaces } = this.state;
    const { checkoutInfo, userInfo } = this.props;
    const subTotalPrice = checkoutInfo.subTotalPrice.toFixed(decimalPlaces);
    const taxes = checkoutInfo.tax.toFixed(decimalPlaces);
    const pickupSavings = checkoutInfo.pickupSavings.toFixed(decimalPlaces);
    const totalPrice = checkoutInfo.totalPrice.toFixed(decimalPlaces);

    return (
      <SafeAreaView>
        <CheckoutComponent>
          <CheckoutFirstCell />
          <CheckoutSecondCell
            dollarSymbol={userInfo.dollarSymbol}
            subtotalPrice={subTotalPrice}
            taxes={taxes}
            pickupSavings={pickupSavings}
            zipCode={userInfo.zip}
          />
          <CheckoutThirdCell
            dollarSymbol={userInfo.dollarSymbol}
            totalPrice={totalPrice}
            listOfItems={checkoutInfo.items}
          />
          <CheckoutFourthCell />
        </CheckoutComponent>
      </SafeAreaView>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Checkout);
