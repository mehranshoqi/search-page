import React, { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { SET_SEARCH_RESULT, SET_LOADING_STATUS } from "../../../../store/types";

export default () => {
  const [query, setQuery] = useState<string>("");
  const dispatch = useDispatch();
  let cancelToken: any;
  const fetchResults = async (ev: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(ev.target.value);
    if (!!query) {
      if (typeof cancelToken != typeof undefined) {
        cancelToken.cancel("Request Canceled!!");
      }
      cancelToken = axios.CancelToken.source();
      // dispatch(fetchResultsAction(query, cancelToken));
      try {
        dispatch({ type: SET_LOADING_STATUS, loadingStatus: true });
        const res = await axios
          .get(
            `https://www.googleapis.com/customsearch/v1?key=AIzaSyDlw3xT-7QnMP9z_rW4gLnb-vn3QH0lUDY&cx=379d4204813f02a30&q=${query}`,
            { cancelToken: cancelToken.token }
          )
          .then((res: any) => {
            console.log(res, "axios response");
            dispatch({
              type: SET_SEARCH_RESULT,
              result: res.data.items,
              loadingStatus: false,
            });
          });
      } catch (err) {
        console.log(err);
      }
    }
  };
  return (
    <div className="search_bar">
      <p>Search </p>
      <input value={query} onChange={fetchResults} type="text" />
    </div>
  );
};
