import React, { FunctionComponent, useState } from "react";
import { View, TextInput } from "react-native";
import { connect } from "react-redux";

import i18n from "../../../../i18n";
import { getbadCouponCodeInfo } from "../../../store/selectors/getCheckout";
import { applyCouponCode } from "../../../store/actions";

import StylizedText from "../../common/StyledText";
import RoundedButton from "../common/RoundedButton";

import styles from "./styles";

interface IProps {
  badCouponCode: boolean;
  applyCouponCode: (code: string) => void;
  promoCode?: string;
}

const mapStateToProps = (state: any) => ({
  badCouponCode: getbadCouponCodeInfo(state),
});

const mapDispatchToProps = (dispatch: any) => ({
  applyCouponCode: (code: string) => applyCouponCode(code)(dispatch),
});

const PromoCode: FunctionComponent<IProps> = ({
  badCouponCode,
  applyCouponCode,
  promoCode = "",
}) => {
  const { row, colorGrey, colorRed, inputBox, inputContainer } = styles;
  const [promo, setPromo] = useState(promoCode);
  const onPromoChange = (text: string) => setPromo(text);
  const onPromoSubmit = () => applyCouponCode(promo);
  let errorText = null;

  if (badCouponCode) {
    errorText = (
      <StylizedText style={colorRed}>
        {i18n.t("Checkout.couponError")}
      </StylizedText>
    );
  }
  return (
    <>
      <StylizedText style={colorGrey}>{i18n.t("Checkout.coupon")}</StylizedText>
      <View style={row}>
        <View style={inputContainer}>
          <TextInput
            style={inputBox}
            onChangeText={onPromoChange}
            value={promo}
          />
        </View>
        <RoundedButton
          onPress={onPromoSubmit}
          text={i18n.t("Checkout.apply")}
        />
      </View>
      {errorText}
    </>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PromoCode);
