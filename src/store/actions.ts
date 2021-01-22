import { SET_SEARCH_RESULT, SearchActionsTypes } from "./types";
import axios from "axios";
export function setSearchResultAction(res: any): SearchActionsTypes {
  return {
    type: SET_SEARCH_RESULT,
    result: res,
  };
}

export const fetchResultsAction = () => (dispatch: any, getState: any) => {
  const res = axios
    .get(
      "https://www.googleapis.com/customsearch/v1?key=AIzaSyCgo81zfOk8XnoZtACpN-FIEVpgGKGeNvA&cx=379d4204813f02a30&q=farzad"
    )
    .then((res: any) => {
      console.log(res, "axios response");
      dispatch({
        type: SET_SEARCH_RESULT,
        result: res.data.items,
      });
    });
  return res;
};
//AIzaSyCgo81zfOk8XnoZtACpN-FIEVpgGKGeNvA

// <script async src="https://cse.google.com/cse.js?cx=379d4204813f02a30"></script>
// <div class="gcse-search"></div>
