import { combineReducers } from "redux";
import { SearchActionsTypes, SET_SEARCH_RESULT, SearchState } from "./types";
import { createSelectorHook } from "react-redux";

export const initialState: SearchState = {
  loadingStatus: false,
  result: [1, 1, 44, 4, 4, 4, 3, 3, 4, 5, 6, 7, 3, 3, 4],
};

const searchReducer = (
  state = initialState,
  action: SearchActionsTypes & {}
): SearchState => {
  switch (action.type) {
    case SET_SEARCH_RESULT:
      console.log(state);
      return {
        ...state,
        result: action.result,
      };
    default: {
      return state;
    }
  }
};

export default combineReducers({
  searchReducer: searchReducer,
});

type YourRootState = {
  initial: SearchState;
};

export const useSelectorrr = createSelectorHook<YourRootState>();
