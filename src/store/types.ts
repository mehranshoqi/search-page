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
export const SET_LOADING_STATUS = "SET_LOADING_STATUS";

interface SetSearchResultAction {
  type: typeof SET_SEARCH_RESULT;
  result: Array<Result>;
  loadingStatus: boolean;
}
interface SetLoadingStatusAction {
  type: typeof SET_LOADING_STATUS;
  loadingStatus: boolean;
}

export type SearchActionsTypes =
  | SetSearchResultAction
  | SetLoadingStatusAction
  | any;
