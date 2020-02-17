import ICouponDiscount from "../../types/checkout/ICouponDiscount";

export const couponDiscounts: ICouponDiscount = {
  promo10: {
    percentage: 0.1,
  },
  promo20: {
    percentage: 0.2,
  },
  promobestday: {
    dollar: 5,
  },
};

export const couponCodes = ["promo10", "promo20", "promobestday"];
