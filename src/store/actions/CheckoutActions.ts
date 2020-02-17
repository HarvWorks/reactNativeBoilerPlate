import { checkoutActionTypes } from "./actionTypes";
import { IItem } from "../../../types/checkout";

const {
  APPLY_COUPON_CODE,
  TOGGLE_PICKUP,
  ADD_ITEM,
  REMOVE_ITEM,
  ITITALIZE_ITEMS,
} = checkoutActionTypes;

const applyCouponCodeAction = (couponCode: string) => ({
  type: APPLY_COUPON_CODE,
  payload: {
    couponCode
  }
})

const togglePickupAction = () => ({
  type: TOGGLE_PICKUP
})

const addItemAction = (item: IItem) => ({
  type: ADD_ITEM,
  payload: {
    item
  }
})

const removeItemAction = (index: number) => ({
  type: REMOVE_ITEM,
  payload: {
    index
  }
})

const initalizeItemsAction = () => ({
  type: ITITALIZE_ITEMS
})

export const applyCouponCode = (couponCode: string) => (dispatch: any) => {
  dispatch(applyCouponCodeAction(couponCode));
}

export const togglePickup = () => (dispatch: any) => {
  dispatch(togglePickupAction());
}

export const addItem = (item: IItem) => (dispatch: any) => {
  dispatch(addItemAction(item));
}

export const removeItem = (index: number) => (dispatch: any) => {
  dispatch(removeItemAction(index));
}

export const initalizeItems = () => (dispatch: any) => {
  console.log("Is initalizeItems workings?");
  
  dispatch(initalizeItemsAction());
}