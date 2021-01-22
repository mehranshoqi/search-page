import React, { useState } from "react";
import "./style/Search.css";
import { SearchBar, Result } from "./components";

export default () => {
  return (
    <div className="search">
      <SearchBar />
      <Result />
    </div>
  );
};
