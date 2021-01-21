import React, { useState } from "react";
import "./style/Search.css";
import { SearchBar } from "./components";
import {store} from '../../index';

export default () => {
  console.log(store.getState())
  return (
    <div className="search">
      <SearchBar />
      <div>results</div>
    </div>
  );
};
