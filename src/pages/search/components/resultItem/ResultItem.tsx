import { Result } from "../../../../store/types";

const SearchItem = (result: Result) => {
  return (
    <div className="result_item">
      <div>
        <a target="_blank" href={result.link}>
          {result.title}
        </a>
        <p>{result.link.split("/")[2]}</p>
      </div>
      <p>{result.snippet.slice(0, 40)} desc</p>
    </div>
  );
};

export default SearchItem;
