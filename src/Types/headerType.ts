import {
  ACTION_GET_CATS_COUNT,
  ACTION_CHANGE_NAV_DISPLAY,
  ACTION_GET_INPUT_VALUE,
  ACTION_CHANGE_PAGE_STATUS,
  ACTION_CHANGE_BURGER_STATUS,
} from "../Redux//Actions/headerActions";

export interface headerStateTypes {
  headerLinks: any[];
  catsCount: number;
  isBurgerHidden: boolean;
  isBurgerOpen: boolean;
  isBodyScrolling: boolean;
  isHomePage: boolean;
  emailValue: string;
}

interface changeBurgerStatus {
  type: typeof ACTION_CHANGE_BURGER_STATUS;
  payload: boolean;
}

interface changePageStatus {
  type: typeof ACTION_CHANGE_PAGE_STATUS;
  payload: boolean;
}

interface changeNavDisplay {
  type: typeof ACTION_CHANGE_NAV_DISPLAY;
  payload: boolean;
}

interface getCatsCount {
  type: typeof ACTION_GET_CATS_COUNT;
  payload: number;
}

interface getInputValue {
  type: typeof ACTION_GET_INPUT_VALUE;
  payload: string;
}

export type headerActionTypes =
  | changeBurgerStatus
  | changePageStatus
  | changeNavDisplay
  | getCatsCount
  | getInputValue;
