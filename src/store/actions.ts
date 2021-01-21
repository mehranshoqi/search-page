import { SET_SEARCH_RESULT, SearchActionsTypes } from "./types";
import { Middleware } from "redux";
import axios from "axios";
export function setSearchResultAction(res: any): SearchActionsTypes {
  return {
    type: SET_SEARCH_RESULT,
    result: res,
  };
}

export const fetchResultsAction = () => (dispatch: any, getState: any) => {
  const res = axios
    .get("https://jsonplaceholder.typicode.com/posts/1")
    .then((rww: any) => {
      dispatch({
        type: SET_SEARCH_RESULT,
        qqqq: rww,
      });
    });
  return res;
};
