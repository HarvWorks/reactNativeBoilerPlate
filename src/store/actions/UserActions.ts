import { userActionTypes } from "./actionTypes";

const { ITITALIZE_USER } = userActionTypes;

const initalizeUserAction = () => ({
  type: ITITALIZE_USER,
});

export const initalizeUser = () => (dispatch: any) => {
  console.log("Is initalizeUser workings?");
  dispatch(initalizeUserAction());
};
