import { combineReducers } from "redux";
import {
  SearchActionsTypes,
  SET_SEARCH_RESULT,
  SET_LOADING_STATUS,
  SearchState,
  SET_MESSAGE,
  LodingStatus,
} from "./types";

export const initialState: SearchState = {
  loadingStatus: LodingStatus.freeze,
  result: [],
  message: "",
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
    case SET_MESSAGE:
      return {
        ...state,
        message: action.message,
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
