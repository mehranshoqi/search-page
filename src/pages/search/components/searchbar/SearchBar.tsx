import React, { useState } from "react";
import { fetchResultsAction } from "../../../../store/actions";
import { useDispatch } from "react-redux";

export default () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const fetchResults = (ev: any) => {
    setQuery(ev.target.value);
    if (!!query) {
      dispatch(fetchResultsAction());
    }
  };
  return (
    <div className="search_bar">
      <p>LOGO</p>
      <input onChange={fetchResults} type="text" />
      {/* <button onClick={fetchResults}>click</button> */}
    </div>
  );
};
