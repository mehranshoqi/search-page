export interface SearchState {
  loadingStatus: LodingStatus;
  result: Array<Result>;
  message: string;
}
export interface Result {
  title: string;
  snippet: string;
  link: string;
}
export enum LodingStatus {
  loading,
  freeze,
}
//Action Types
export const SET_SEARCH_RESULT = "SET_SEARCH_RESULT";
export const SET_LOADING_STATUS = "SET_LOADING_STATUS";
export const SET_MESSAGE = "SET_MESSAGE";

interface SetSearchResultAction {
  type: typeof SET_SEARCH_RESULT;
  result: Array<Result>;
  loadingStatus: boolean;
}
interface SetLoadingStatusAction {
  type: typeof SET_LOADING_STATUS;
  loadingStatus: boolean;
}
interface SetMessgeAction {
  type: typeof SET_MESSAGE;
  message: string;
}
export type SearchActionsTypes =
  | SetSearchResultAction
  | SetLoadingStatusAction
  | SetMessgeAction
  | any;
