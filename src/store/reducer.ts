import { combineReducers } from "redux";
import {
  SearchActionsTypes,
  SET_SEARCH_RESULT,
  SET_LOADING_STATUS,
  SearchState,
} from "./types";
import { createSelectorHook } from "react-redux";

export const initialState: SearchState = {
  loadingStatus: false,
  result: [],
};

const searchReducer = (
  state = initialState,
  action: SearchActionsTypes & {}
): SearchState => {
  switch (action.type) {
    case SET_SEARCH_RESULT:
      return {
        ...state,
        result: action.result,
        loadingStatus: action.loadingStatus,
      };
    case SET_LOADING_STATUS:
      return {
        ...state,
        loadingStatus: action.loadingStatus,
      };
    default: {
      return state;
    }
  }
};

export default combineReducers({
  searchReducer: searchReducer,
});
