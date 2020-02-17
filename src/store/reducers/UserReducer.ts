import { userActionTypes } from "../actions";

import { IAction } from "../../../types/common";


const { 
  ITITALIZE_USER,
} = userActionTypes;

export interface IUserReducer {
  dollarSymbol: String;
  zip: String;
}

export const initialState = {
  dollarSymbol: "",  
  zip: "",
} as IUserReducer;


const initalizeUser = (state: IUserReducer, action: IAction) => {
  const dollarSymbols = ["$", "£", "€"];
  const index = Math.floor(Math.random() * dollarSymbols.length)
  const newDollarSymbol = dollarSymbols[index];
  let newZip = "9";

  for (let i = 0; i < 4; i++) {
    newZip += Math.floor(Math.random() * 10)
  }

  const nextState: IUserReducer = {
    ...state,
    dollarSymbol: newDollarSymbol,
    zip: newZip
  }

  return nextState
}

const getReducer = (
  type: string
): ((state: IUserReducer, action: IAction) => any) => {
  const reducers = {
    [ITITALIZE_USER]: initalizeUser
  };
  return reducers[type];
};

const UserReducer = (
  state: IUserReducer = initialState,
  action: { type: string; payload: any }
) => {
  const reducer = getReducer(action.type);

  return reducer ? reducer(state, action) : state;
};

export default UserReducer;
