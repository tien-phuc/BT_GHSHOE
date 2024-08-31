import { combineReducers } from "redux";
import { shoeStoreReducer } from "./ShoeStore/reducer";

export const rootReducer = combineReducers({
  shoeStoreReducer: shoeStoreReducer,
});
