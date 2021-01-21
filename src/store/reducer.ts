import { combineReducers } from "redux";
import { SearchActionsTypes, SET_SEARCH_RESULT, SearchState } from "./types";

export const initialState: SearchState = {
  loadingStatus: false,
  result: [],
};

const searchReducer = (
  initialState: SearchState,
  action: SearchActionsTypes & {}
) => {
  switch (action.type) {
    case SET_SEARCH_RESULT:
      console.log(initialState);
      return action.qqqq;
    default:
      return null;
  }
};

export default combineReducers({
  searchReducer: searchReducer,
});
