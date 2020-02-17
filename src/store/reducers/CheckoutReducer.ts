import { checkoutActionTypes } from "../actions";

import { IAction } from "../../../types/common";
import { IItem } from "../../../types/checkout";

import { couponDiscounts } from "../../constants/couponCodes";
import { pickupSavingsValue } from "../../constants/checkout";
import listOfItems from "../../constants/listOfItems";

const {
  APPLY_COUPON_CODE,
  TOGGLE_PICKUP,
  ADD_ITEM,
  REMOVE_ITEM,
  ITITALIZE_ITEMS,
} = checkoutActionTypes;

export interface ICheckoutPricing {
  taxRate: number;
  tax: number;
  subTotalPrice: number;
  pickupSavings: number;
  couponPercentage: number;
  couponDollar: number;
  totalPrice: number;
}

export interface ICheckoutReducer extends ICheckoutPricing {
  items: IItem[];
  couponCode: string;
  badCouponCode: boolean;
}

export const initialState = {
  items: [],
  couponCode: "",
  taxRate: 0.0975,
  tax: 0,
  subTotalPrice: 0,
  pickupSavings: 0,
  couponPercentage: 0,
  couponDollar: 0,
  totalPrice: 0,
  badCouponCode: false,
} as ICheckoutReducer;

/**
 * Function for applying the coupon code in the reducer.  Looks up the code
 * @param state
 * @param action
 */
const applyCouponCode = (state: ICheckoutReducer, action: IAction) => {
  const couponCode = action.payload.couponCode.toLowerCase();

  const discount = couponDiscounts[couponCode];
  let couponPercentage = 0;
  let couponDollar = 0;
  let error = false;

  if (discount) {
    couponPercentage = discount[couponPercentage]
      ? discount[couponPercentage]
      : 0;
    couponDollar = discount[couponDollar] ? discount[couponDollar] : 0;
  } else {
    error = true;
  }

  const nextState: ICheckoutReducer = {
    ...state,
    subTotalPrice: calculateSubTotal(state.items),
    couponCode: couponCode,
    couponPercentage: couponPercentage,
    couponDollar: couponDollar,
    totalPrice: state.totalPrice,
    badCouponCode: error,
  };

  nextState.totalPrice = calculateTotal(nextState);

  return nextState;
};

/**
 * Function for toggling between picking up or not.
 * @param state
 * @param action
 */
const togglePickup = (state: ICheckoutReducer, action: IAction) => {
  const nextState: ICheckoutReducer = {
    ...state,
    pickupSavings:
      state.pickupSavings === 0
        ? calculatePickupSavings(state.subTotalPrice)
        : 0,
  };

  nextState.tax = calculateTax(nextState);
  nextState.totalPrice = calculateTotal(nextState);

  return nextState;
};

/**
 * Function for adding an item to the cart
 * @param state
 * @param action
 */
const addItem = (state: ICheckoutReducer, action: IAction) => {
  const { items } = state;
  const { item } = action.payload;

  const newItems = [...items, item];

  const nextState: ICheckoutReducer = {
    ...state,
    items: newItems,
  };

  nextState.subTotalPrice = calculateSubTotal(newItems);
  nextState.tax = calculateTax(nextState);
  nextState.totalPrice = calculateTotal(nextState);

  return nextState;
};

/**
 * Function for removing an item from the cart
 * @param state
 * @param action
 */
const removeItem = (state: ICheckoutReducer, action: IAction) => {
  const { items } = state;
  const { index } = action.payload;

  const newItems = items.slice(0, index).concat(items.slice(index));

  const nextState: ICheckoutReducer = {
    ...state,
    items: newItems,
  };

  nextState.subTotalPrice = calculateSubTotal(newItems);
  nextState.tax = calculateTax(nextState);
  nextState.totalPrice = calculateTotal(nextState);

  return nextState;
};

const initalizeItems = (state: ICheckoutReducer, action: IAction) => {
  const newItems = [];
  const randomNumberItems = Math.ceil(Math.random() * 4);
  const newListOfItems = [...listOfItems];

  let newPickupSavings = 0;
  const randomSavings = Math.random() * 5;

  if (randomSavings > 2.5) {
    newPickupSavings = randomSavings;
  }

  for (let i = 0; i < randomNumberItems; i++) {
    const tempIndex = Math.floor(Math.random() * newListOfItems.length);
    const tempRandomItem: IItem = newListOfItems.splice(tempIndex, 1)[0];
    tempRandomItem.quantity = Math.ceil(Math.random() * 5);
    newItems.push(tempRandomItem);
  }

  const nextState: ICheckoutReducer = {
    ...state,
    items: newItems,
    pickupSavings: newPickupSavings,
  };

  nextState.subTotalPrice = calculateSubTotal(newItems);
  nextState.tax = calculateTax(nextState);
  nextState.totalPrice = calculateTotal(nextState);

  return nextState;
};

/**
 * Helper function for calculating the subTotal
 * @param items of type IItem
 */
const calculateSubTotal = (items: IItem[]) => {
  let result = 0;
  items.map(item => {
    if (item) {
      result += item.unitPrice * item.quantity;
    }
  });
  return result;
};

/**
 * Helper function for calculating the tax
 * @param state
 */
const calculateTax = (state: ICheckoutPricing) => {
  const {
    taxRate,
    subTotalPrice,
    pickupSavings,
    couponDollar,
    couponPercentage,
  } = state;

  const tax =
    (subTotalPrice - pickupSavings - couponDollar) *
    (1 - couponPercentage) *
    taxRate;

  return tax;
};

/**
 * Helper function for calculating the total price
 * @param state
 */
const calculateTotal = (state: ICheckoutPricing) => {
  const {
    taxRate,
    subTotalPrice,
    pickupSavings,
    couponDollar,
    couponPercentage,
  } = state;

  const totalPrice =
    (subTotalPrice - pickupSavings - couponDollar) *
    (1 - couponPercentage) *
    (1 + taxRate);

  return totalPrice;
};

/**
 * Helper function to calculate the savings from picking up from the store
 * @param subTotal
 */
const calculatePickupSavings = (subTotal: number) => {
  const savings = subTotal - pickupSavingsValue;
  return savings;
};

const getReducer = (
  type: string,
): ((state: ICheckoutReducer, action: IAction) => any) => {
  const reducers = {
    [APPLY_COUPON_CODE]: applyCouponCode,
    [TOGGLE_PICKUP]: togglePickup,
    [ADD_ITEM]: addItem,
    [REMOVE_ITEM]: removeItem,
    [ITITALIZE_ITEMS]: initalizeItems,
  };
  return reducers[type];
};

const CheckoutReducer = (
  state: ICheckoutReducer = initialState,
  action: { type: string; payload: any },
) => {
  const reducer = getReducer(action.type);

  return reducer ? reducer(state, action) : state;
};

export default CheckoutReducer;
