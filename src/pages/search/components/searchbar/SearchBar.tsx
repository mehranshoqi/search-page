import React, { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import {
  SET_SEARCH_RESULT,
  SET_LOADING_STATUS,
  SET_MESSAGE,
  LodingStatus
} from "../../../../store/types";

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
        dispatch({ type: SET_LOADING_STATUS, loadingStatus: LodingStatus.loading });
        const res = await axios
          .get(
            `https://www.googleapis.com/customsearch/v1?key=AIzaSyB7bkxluZMSAZ7b93AaHXn2IV5Ev35ekeo&cx=379d4204813f02a30&q=${query}`,
            { cancelToken: cancelToken.token }
          )
          .then((res: any) => {
            dispatch({
              type: SET_SEARCH_RESULT,
              result: res.data.items,
              loadingStatus: LodingStatus.freeze,
            });
          });
      } catch (err) {
        console.log(err);
        dispatch({
          type: SET_MESSAGE,
          message: err.message,
          loadingStatus: LodingStatus.freeze,
        });
      }
    }
  };
  return (
    <div className="search_bar">
      <h2>Google</h2>
      <input
        value={query}
        onChange={fetchResults}
        type="text"
        placeholder="search in google.com"
      />
    </div>
  );
};
