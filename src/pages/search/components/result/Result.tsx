import React, { Reducer, useEffect, useState } from "react";
import "./style/Result.css";
import ResultItem from "../resultItem/ResultItem";
import { connect } from "react-redux";
import { useStore } from "react-redux";

const Result = ({ state }: any) => {
  const data = [
    { title: "mehran", link: "hhTTTTPPPP" },
    { title: "mehran", link: "hhTTTTPPPP" },
    { title: "mehran", link: "hhTTTTPPPP" },
    { title: "mehran", link: "hhTTTTPPPP" },
  ];
  setTimeout(() => {
    console.log(state, "4000");
  }, 4000);

  return (
    <div className="result">
      {state.result.map((res: any) => (
        <ResultItem />  
      ))}
    </div>
  );
};
const mapStateToProps = (state: any) => {
  return {
    state: state.searchReducer,
  };
};

export default connect(mapStateToProps)(Result);
