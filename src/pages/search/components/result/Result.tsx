import React, { Reducer, useEffect, useState } from "react";
import ResultItem from "../resultItem/ResultItem";
import { connect } from "react-redux";
import { Result, SearchState } from "../../../../store/types";

const Results = ({ state }: any) => {
  return (
    <div className="result">
      {state.result.map((res: Result) => (
        <ResultItem {...res} />
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
