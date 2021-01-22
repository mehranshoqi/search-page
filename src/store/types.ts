export interface SearchState {
  loadingStatus: boolean;
  result: Array<Result>;
}
export interface Result {
  title: string;
  link: string;
}
//Action Types
export const SET_SEARCH_RESULT = "SET_SEARCH_RESULT";
export const FETCH_SEARCH_RESULT = "FETCH_SEARCH_RESULT";

interface SetSearchResultAction {
  type: typeof SET_SEARCH_RESULT;
  result: Array<Result>;
}
interface FetchSearchResult {
  type: typeof FETCH_SEARCH_RESULT;
}

export type SearchActionsTypes =
  | SetSearchResultAction
  | FetchSearchResult
  | any;
