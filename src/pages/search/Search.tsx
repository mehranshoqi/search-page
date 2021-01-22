import React from "react";
import { SearchBar, Result } from "./components";
import "./style/Search.css";  
export default () => {
  return (
    <div className="search">
      <SearchBar />
      <Result />
    </div>
  );
};
