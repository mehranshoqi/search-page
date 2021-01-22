import { SET_SEARCH_RESULT, SearchActionsTypes } from "./types";
import axios from "axios";
export function setSearchResultAction(res: any): SearchActionsTypes {
  return {
    type: SET_SEARCH_RESULT,
    result: res,
  };
}

export const fetchResultsAction = (query: string) => (
  dispatch: any,
  getState: any
) => {
  const CancelToken = axios.CancelToken;
  const source = CancelToken.source();
  const res = axios
    .get(
      `https://www.googleapis.com/customsearch/v1?key=AIzaSyCgo81zfOk8XnoZtACpN-FIEVpgGKGeNvA&cx=379d4204813f02a30&q=${query}`,
      { cancelToken: source.token }
    )
    .then((res: any) => {
      console.log(res, "axios response");
      dispatch({
        type: SET_SEARCH_RESULT,
        result: res.data.items,
      });
    })
    .catch(function (err) {
      if (axios.isCancel(err)) {
        console.log("Request canceled", err.message);
      } else {
        // handle error
      }
    });
  return res;
};
//AIzaSyCgo81zfOk8XnoZtACpN-FIEVpgGKGeNvA

// <script async src="https://cse.google.com/cse.js?cx=379d4204813f02a30"></script>
// <div class="gcse-search"></div>
