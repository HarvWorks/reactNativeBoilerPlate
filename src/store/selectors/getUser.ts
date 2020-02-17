import { createSelector } from "reselect";

import { IUserReducer } from "../reducers";
import IState from "../../../types/common/IState";

const reducerName = "UserReducer";

const getUserReducerSelector = (state: IState) => state[reducerName];

export const getUserInfo = createSelector(
  [getUserReducerSelector],
  (UserReducer: IUserReducer) => UserReducer
);
