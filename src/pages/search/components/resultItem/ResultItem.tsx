import { Result } from "../../../../store/types";

const SearchItem = (result: Result) => {
  return (
    <div className="result_item">
      <a target="_blank" href={result.link}>
        {result.title}
      </a>
      <p>{result.link}</p>
    </div>
  );
};

export default SearchItem;
