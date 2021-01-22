import React, { Reducer, useEffect, useState } from "react";
import ResultItem from "../resultItem/ResultItem";
import { connect } from "react-redux";
import { Result, SearchState } from "../../../../store/types";

const Results = ({ state }: any) => {
  const res = state.result ?? [];
  return (
    <div className="result">
      {res.map((config: Result) => (
        <ResultItem {...config} />
      ))}
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    state: state.searchReducer,
  };
};

export default connect(mapStateToProps)(Results);
