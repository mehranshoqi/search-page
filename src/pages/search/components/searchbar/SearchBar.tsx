import React, { useState } from "react";
import "./style/SearchBar.css";
import { store } from "../../../../index";
import { fetchResultsAction } from "../../../../store/actions";

export default () => {
  const [query, setQuery] = useState("");
  const fetchResults = (ev: any) => {
    setQuery(ev.target.value);
    if (!!query) {
      store.dispatch(fetchResultsAction());
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
