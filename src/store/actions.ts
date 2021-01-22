import { SET_SEARCH_RESULT, SearchActionsTypes } from "./types";
// import axios from "axios";
export function setSearchResultAction(res: any): SearchActionsTypes {
  return {
    type: SET_SEARCH_RESULT,
    result: res,
  };
}

// export const fetchResultsAction = (query: string, cancelToken: any) => (
//   dispatch: any
// ) => {
//   const res = axios
//     .get(
//       `https://www.googleapis.com/customsearch/v1?key=AIzaSyCgo81zfOk8XnoZtACpN-FIEVpgGKGeNvA&cx=379d4204813f02a30&q=${query}`,
//       { cancelToken: cancelToken.token }
//     )
//     .then((res: any) => {
//       console.log(res, "axios response");
//       dispatch({
//         type: SET_SEARCH_RESULT,
//         result: res.data.items,
//       });
//     });
//   return res;
// };
