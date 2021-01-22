import React from "react";
import { Result } from "../../../../store/types";

const SearchItem = (result: Result) => {
  return (
    <div className="result_item">
      {result.htmlTitle}
      <a href="">link</a>
    </div>
  );
};

export default SearchItem;
